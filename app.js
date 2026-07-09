// ISTQB Quiz-Trainer – App-Logik
// Läuft komplett lokal im Browser, Speicherung über localStorage.
// Fragen: offizielle ISTQB/GTB-Probeprüfungen (questions.js).

(function () {
  "use strict";

  const PASS_THRESHOLD = 65; // Prozent, wie im echten ISTQB-Examen
  const LS_SESSIONS = "istqb-sessions";
  const LS_WRONG = "istqb-wrong-ids";

  const CATEGORIES = [...new Set(QUESTIONS.map((q) => q.category))];
  const LETTERS = ["a", "b", "c", "d", "e", "f"];

  const app = document.getElementById("app");

  // ---------- Persistenz ----------
  function loadSessions() {
    try {
      return JSON.parse(localStorage.getItem(LS_SESSIONS)) || [];
    } catch {
      return [];
    }
  }
  function saveSessions(sessions) {
    localStorage.setItem(LS_SESSIONS, JSON.stringify(sessions));
  }
  function loadWrongIds() {
    try {
      return new Set(JSON.parse(localStorage.getItem(LS_WRONG)) || []);
    } catch {
      return new Set();
    }
  }
  function saveWrongIds(set) {
    localStorage.setItem(LS_WRONG, JSON.stringify([...set]));
  }

  // ---------- Hilfsfunktionen ----------
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function sameSet(a, b) {
    if (a.length !== b.length) return false;
    const s = new Set(b);
    return a.every((x) => s.has(x));
  }

  // ---------- Quiz-Zustand ----------
  let quiz = null; // { questions, index, results, mode, selected }

  function startQuiz(pool, count, mode) {
    quiz = {
      questions: shuffle(pool).slice(0, count),
      index: 0,
      results: [],
      mode,
      selected: new Set(),
    };
    renderQuestion();
  }

  // ---------- Ansichten ----------
  function renderHome() {
    quiz = null;
    const wrongIds = loadWrongIds();
    const wrongCount = QUESTIONS.filter((q) => wrongIds.has(q.id)).length;

    app.innerHTML = "";
    const card = el("div", "card");
    card.appendChild(el("h1", null, "ISTQB Quiz-Trainer"));
    card.appendChild(
      el(
        "p",
        "subtitle",
        `${QUESTIONS.length} offizielle Fragen aus den ISTQB®/GTB-Probeprüfungen ` +
          `CTFL v4.0 (Sets A–E). Bestehensgrenze: ${PASS_THRESHOLD} %.`
      )
    );

    // Kategorien
    card.appendChild(el("h2", null, "Kategorien (Lehrplan-Kapitel)"));
    const catBox = el("div", "cat-grid");
    CATEGORIES.forEach((cat) => {
      const n = QUESTIONS.filter((q) => q.category === cat).length;
      const label = el("label", "cat-check");
      label.innerHTML = `<input type="checkbox" value="${cat}" checked> <span>${cat} <em>(${n})</em></span>`;
      catBox.appendChild(label);
    });
    card.appendChild(catBox);

    // Anzahl Fragen
    card.appendChild(el("h2", null, "Anzahl Fragen"));
    const countBox = el("div", "count-row");
    countBox.innerHTML = `
      <label class="count-opt"><input type="radio" name="count" value="10" checked> 10</label>
      <label class="count-opt"><input type="radio" name="count" value="20"> 20</label>
      <label class="count-opt"><input type="radio" name="count" value="40"> 40 (Prüfungssimulation)</label>
      <label class="count-opt"><input type="radio" name="count" value="all"> Alle</label>`;
    card.appendChild(countBox);

    // Start-Buttons
    const btnRow = el("div", "btn-row");
    const startBtn = el("button", "btn primary", "Quiz starten");
    startBtn.onclick = () => {
      const cats = [...catBox.querySelectorAll("input:checked")].map((c) => c.value);
      if (cats.length === 0) {
        alert("Bitte mindestens eine Kategorie auswählen.");
        return;
      }
      const pool = QUESTIONS.filter((q) => cats.includes(q.category));
      const val = countBox.querySelector("input[name=count]:checked").value;
      const count = val === "all" ? pool.length : Math.min(parseInt(val, 10), pool.length);
      startQuiz(pool, count, val === "40" ? "Prüfungssimulation" : "Übung");
    };
    btnRow.appendChild(startBtn);

    const repeatBtn = el(
      "button",
      "btn secondary",
      `Falsche Fragen wiederholen (${wrongCount})`
    );
    repeatBtn.disabled = wrongCount === 0;
    repeatBtn.onclick = () => {
      const pool = QUESTIONS.filter((q) => wrongIds.has(q.id));
      startQuiz(pool, pool.length, "Wiederholung");
    };
    btnRow.appendChild(repeatBtn);

    const statsBtn = el("button", "btn secondary", "Statistik");
    statsBtn.onclick = renderStats;
    btnRow.appendChild(statsBtn);

    card.appendChild(btnRow);
    card.appendChild(
      el(
        "p",
        "attribution",
        "Fragen: Offizielle Probeprüfungen (Sets A–E) zum Certified Tester Foundation Level v4.0. " +
          "Quelle und Copyright: ISTQB® / German Testing Board e.V. – " +
          "Diese Lern-App ist ein privates Übungsprojekt und steht in keiner Verbindung zum ISTQB®."
      )
    );
    app.appendChild(card);
  }

  function renderQuestion() {
    const q = quiz.questions[quiz.index];
    quiz.selected = new Set();
    app.innerHTML = "";
    const card = el("div", "card");

    // Fortschritt
    const done = quiz.index;
    const total = quiz.questions.length;
    const head = el("div", "quiz-head");
    head.innerHTML = `<span class="badge">${q.category}</span>
      <span class="progress-text">Frage ${done + 1} / ${total}</span>`;
    card.appendChild(head);
    const bar = el("div", "progress-bar");
    bar.innerHTML = `<div class="progress-fill" style="width:${(done / total) * 100}%"></div>`;
    card.appendChild(bar);

    // Bei Bildfragen zeigt das Original-PDF-Blatt Frage samt Tabelle/Diagramm
    if (q.images.length > 0) {
      q.images.forEach((src) => {
        const img = el("img", "question-img");
        img.src = src;
        img.alt = "Offizielle Prüfungsfrage " + q.id;
        card.appendChild(img);
      });
    } else {
      card.appendChild(el("h2", "question-text", q.question));
    }

    if (q.nSelect > 1) {
      card.appendChild(
        el("p", "multi-hint", `⚠️ Wählen Sie ${q.nSelect} Optionen! Beide müssen richtig sein, um den Punkt zu erhalten.`)
      );
    }

    const optBox = el("div", "options");
    q.options.forEach((opt, i) => {
      const btn = el("button", "option", `<span class="letter">${LETTERS[i]})</span> ${opt}`);
      btn.onclick = () => {
        if (q.nSelect === 1) {
          finishAnswer([i], optBox, card);
        } else {
          // Mehrfachauswahl: an-/abwählen
          if (quiz.selected.has(i)) {
            quiz.selected.delete(i);
            btn.classList.remove("selected");
          } else {
            quiz.selected.add(i);
            btn.classList.add("selected");
          }
          confirmBtn.disabled = quiz.selected.size !== q.nSelect;
        }
      };
      optBox.appendChild(btn);
    });
    card.appendChild(optBox);

    let confirmBtn = null;
    if (q.nSelect > 1) {
      confirmBtn = el("button", "btn primary", "Antwort bestätigen");
      confirmBtn.disabled = true;
      confirmBtn.style.marginTop = "16px";
      confirmBtn.onclick = () => {
        confirmBtn.remove();
        finishAnswer([...quiz.selected], optBox, card);
      };
      card.appendChild(confirmBtn);
    }

    app.appendChild(card);
    window.scrollTo(0, 0);
  }

  function finishAnswer(chosen, optBox, card) {
    const q = quiz.questions[quiz.index];
    const isCorrect = sameSet(chosen, q.correct);

    // Buttons einfrieren und einfärben
    [...optBox.children].forEach((btn, i) => {
      btn.disabled = true;
      btn.classList.remove("selected");
      if (q.correct.includes(i)) btn.classList.add("correct");
      else if (chosen.includes(i)) btn.classList.add("wrong");
      else btn.classList.add("muted");
    });

    // Merkliste falscher Fragen pflegen
    const wrongIds = loadWrongIds();
    if (isCorrect) wrongIds.delete(q.id);
    else wrongIds.add(q.id);
    saveWrongIds(wrongIds);

    quiz.results.push({ id: q.id, category: q.category, correct: isCorrect });

    // Feedback-Box
    const fb = el("div", `feedback ${isCorrect ? "fb-correct" : "fb-wrong"}`);
    const ref = `<p class="q-ref">Offizielle Probeprüfung SET ${q.set}, Frage ${q.num} · Lernziel ${q.lo} (${q.k})</p>`;
    if (isCorrect) {
      fb.innerHTML = `<strong>✓ Richtig!</strong>
        <p class="merksatz">💡 Merksatz: ${q.merksatz}</p>
        <div class="explanation">${q.explanation}</div>${ref}`;
    } else {
      fb.innerHTML = `<strong>✗ Leider falsch.</strong>
        <p class="merksatz">💡 Merksatz: ${q.merksatz}</p>
        <div class="explanation">${q.explanation}</div>${ref}`;
    }
    card.appendChild(fb);

    const nextBtn = el(
      "button",
      "btn primary",
      quiz.index + 1 < quiz.questions.length ? "Weiter →" : "Zur Auswertung →"
    );
    nextBtn.onclick = () => {
      quiz.index++;
      if (quiz.index < quiz.questions.length) renderQuestion();
      else renderResult();
    };
    card.appendChild(nextBtn);
    nextBtn.focus();
  }

  function renderResult() {
    const total = quiz.results.length;
    const correct = quiz.results.filter((r) => r.correct).length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= PASS_THRESHOLD;

    // Aufschlüsselung nach Kategorie
    const byCat = {};
    quiz.results.forEach((r) => {
      byCat[r.category] = byCat[r.category] || { total: 0, correct: 0 };
      byCat[r.category].total++;
      if (r.correct) byCat[r.category].correct++;
    });

    // Sitzung speichern
    const sessions = loadSessions();
    sessions.push({
      date: new Date().toISOString(),
      mode: quiz.mode,
      total,
      correct,
      percent: pct,
      passed,
      byCategory: byCat,
    });
    saveSessions(sessions);

    app.innerHTML = "";
    const card = el("div", "card");
    card.appendChild(el("h1", null, "Auswertung"));

    const verdict = el("div", `verdict ${passed ? "pass" : "fail"}`);
    verdict.innerHTML = `<div class="big-pct">${pct} %</div>
      <div class="verdict-text">${passed ? "🎉 Bestanden!" : "Nicht bestanden"}</div>
      <div class="verdict-sub">${correct} von ${total} Fragen richtig · Bestehensgrenze: ${PASS_THRESHOLD} %</div>`;
    card.appendChild(verdict);

    card.appendChild(el("h2", null, "Nach Kategorie"));
    const table = el("table", "cat-table");
    table.innerHTML =
      "<tr><th>Kategorie</th><th>Richtig</th><th>Quote</th></tr>" +
      Object.entries(byCat)
        .map(([cat, s]) => {
          const p = Math.round((s.correct / s.total) * 100);
          return `<tr><td>${cat}</td><td>${s.correct}/${s.total}</td>
            <td><div class="mini-bar"><div class="mini-fill ${p >= PASS_THRESHOLD ? "ok" : "bad"}" style="width:${p}%"></div></div> ${p} %</td></tr>`;
        })
        .join("");
    card.appendChild(table);

    const btnRow = el("div", "btn-row");
    const wrongNow = quiz.results.filter((r) => !r.correct);
    if (wrongNow.length > 0) {
      const retryBtn = el("button", "btn primary", `Falsche Fragen üben (${wrongNow.length})`);
      retryBtn.onclick = () => {
        const ids = new Set(wrongNow.map((r) => r.id));
        const pool = QUESTIONS.filter((q) => ids.has(q.id));
        startQuiz(pool, pool.length, "Wiederholung");
      };
      btnRow.appendChild(retryBtn);
    }
    const homeBtn = el("button", "btn secondary", "Zur Startseite");
    homeBtn.onclick = renderHome;
    btnRow.appendChild(homeBtn);
    const statsBtn = el("button", "btn secondary", "Statistik");
    statsBtn.onclick = renderStats;
    btnRow.appendChild(statsBtn);
    card.appendChild(btnRow);

    app.appendChild(card);
    window.scrollTo(0, 0);
  }

  function renderStats() {
    const sessions = loadSessions();
    app.innerHTML = "";
    const card = el("div", "card");
    card.appendChild(el("h1", null, "Statistik"));

    if (sessions.length === 0) {
      card.appendChild(el("p", "subtitle", "Noch keine abgeschlossenen Quiz-Durchläufe."));
    } else {
      // Aggregation über alle Sitzungen pro Kategorie
      const agg = {};
      sessions.forEach((s) => {
        Object.entries(s.byCategory).forEach(([cat, v]) => {
          agg[cat] = agg[cat] || { total: 0, correct: 0 };
          agg[cat].total += v.total;
          agg[cat].correct += v.correct;
        });
      });

      card.appendChild(el("h2", null, "Trefferquote pro Kategorie (alle Durchläufe)"));
      const catList = Object.entries(agg)
        .map(([cat, v]) => ({ cat, pct: Math.round((v.correct / v.total) * 100), ...v }))
        .sort((a, b) => a.pct - b.pct);

      const weakest = catList[0];
      card.appendChild(
        el(
          "p",
          "subtitle",
          `Schwächste Kategorie: <strong>${weakest.cat}</strong> (${weakest.pct} %) – hier lohnt sich gezieltes Üben.`
        )
      );

      const statBox = el("div", "stat-list");
      catList.forEach(({ cat, pct, correct, total }) => {
        const row = el("div", "stat-row");
        row.innerHTML = `<span class="stat-label">${cat}</span>
          <div class="mini-bar big"><div class="mini-fill ${pct >= PASS_THRESHOLD ? "ok" : "bad"}" style="width:${pct}%"></div></div>
          <span class="stat-val">${pct} % (${correct}/${total})</span>`;
        statBox.appendChild(row);
      });
      card.appendChild(statBox);

      // Verlauf
      card.appendChild(el("h2", null, "Verlauf"));
      const table = el("table", "cat-table");
      table.innerHTML =
        "<tr><th>Datum</th><th>Modus</th><th>Ergebnis</th><th>Status</th></tr>" +
        [...sessions]
          .reverse()
          .slice(0, 20)
          .map((s) => {
            const d = new Date(s.date);
            const dateStr = d.toLocaleDateString("de-DE") + " " +
              d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
            return `<tr><td>${dateStr}</td><td>${s.mode}</td>
              <td>${s.correct}/${s.total} (${s.percent} %)</td>
              <td>${s.passed ? '<span class="tag pass">bestanden</span>' : '<span class="tag fail">nicht bestanden</span>'}</td></tr>`;
          })
          .join("");
      card.appendChild(table);
    }

    const btnRow = el("div", "btn-row");
    const homeBtn = el("button", "btn primary", "Zur Startseite");
    homeBtn.onclick = renderHome;
    btnRow.appendChild(homeBtn);

    if (sessions.length > 0) {
      const jsonBtn = el("button", "btn secondary", "Export JSON");
      jsonBtn.onclick = () =>
        download("istqb-ergebnisse.json", JSON.stringify(sessions, null, 2), "application/json");
      btnRow.appendChild(jsonBtn);

      const csvBtn = el("button", "btn secondary", "Export CSV");
      csvBtn.onclick = () => {
        const rows = [["Datum", "Modus", "Fragen", "Richtig", "Prozent", "Bestanden"]];
        sessions.forEach((s) =>
          rows.push([s.date, s.mode, s.total, s.correct, s.percent, s.passed ? "ja" : "nein"])
        );
        download(
          "istqb-ergebnisse.csv",
          rows.map((r) => r.join(";")).join("\n"),
          "text/csv"
        );
      };
      btnRow.appendChild(csvBtn);

      const resetBtn = el("button", "btn danger", "Statistik zurücksetzen");
      resetBtn.onclick = () => {
        if (confirm("Wirklich alle gespeicherten Ergebnisse und die Merkliste löschen?")) {
          localStorage.removeItem(LS_SESSIONS);
          localStorage.removeItem(LS_WRONG);
          renderStats();
        }
      };
      btnRow.appendChild(resetBtn);
    }
    card.appendChild(btnRow);
    app.appendChild(card);
  }

  function download(filename, content, mime) {
    const blob = new Blob([content], { type: mime + ";charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  renderHome();

  // Debug-Schnittstelle, z. B. _istqb.start(["B-23"]) für eine bestimmte Frage
  window._istqb = {
    start: (ids) => startQuiz(QUESTIONS.filter((q) => ids.includes(q.id)), ids.length, "Übung"),
  };
})();
