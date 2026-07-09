# 🎓 ISTQB® CTFL Quiz-Trainer

[![Live-Demo](https://img.shields.io/badge/Live--Demo-online-2456c7?style=flat-square)](https://ati993.github.io/istqb-quiz/)
![Fragen](https://img.shields.io/badge/Fragen-200_offizielle-1e8a4c?style=flat-square)
![Lehrplan](https://img.shields.io/badge/Lehrplan-CTFL_v4.0-orange?style=flat-square)
![Stack](https://img.shields.io/badge/Stack-Vanilla_JS_·_ohne_Build-lightgrey?style=flat-square)

Eine Lern-App zur Vorbereitung auf die **ISTQB® Certified Tester Foundation Level (CTFL) v4.0**-Prüfung – mit allen 200 Fragen der offiziellen deutschen GTB/ISTQB®-Probeprüfungen (Sets A–E), den offiziellen Begründungen und eigenen Merksätzen zu allen 64 Lernzielen des Lehrplans.

**▶️ Direkt loslegen: [ati993.github.io/istqb-quiz](https://ati993.github.io/istqb-quiz/)**

Läuft im Browser auf jedem Gerät (Mac, Windows, iPhone/iPad, Android) – ohne Installation, ohne Anmeldung, ohne Server.

---

## ✨ Features

| Feature | Beschreibung |
|---|---|
| 📚 **200 offizielle Fragen** | Alle Fragen der GTB-Probeprüfungen Sets A–E, kategorisiert nach den 6 Lehrplan-Kapiteln |
| 🎯 **Prüfungssimulation** | 40 zufällige Fragen, Bestehensgrenze 65 % – wie im echten Examen |
| 🧠 **Merksätze** | Zu jeder Frage ein karteikartentauglicher Merksatz zum jeweiligen Lernziel (FL-x.y.z) |
| ✅ **Offizielle Begründungen** | Nach jeder Antwort: warum jede Option richtig oder falsch ist, mit Lehrplan-Verweis |
| 🖼 **Original-Prüfungsblätter** | Fragen mit Entscheidungstabellen und Zustandsdiagrammen werden als Original-Seite angezeigt |
| 🔀 **Mehrfachauswahl** | Fragen im Format „Wählen Sie ZWEI Optionen" werden korrekt unterstützt |
| 🔁 **Wiederholungsmodus** | Falsch beantwortete Fragen werden gemerkt und lassen sich gezielt üben |
| 📊 **Statistik** | Trefferquote pro Kapitel über alle Durchläufe, Verlauf, Export als JSON/CSV |
| 💾 **Fortsetzen** | Ein laufendes Quiz übersteht das Neuladen der Seite |
| 📋 **Spickzettel** | Alle 64 Merksätze auf einer Seite – druckbar oder als PDF sicherbar |

## 🗂 Kategorien (Lehrplan-Kapitel)

| Kapitel | Kategorie | Fragen |
|---|---|---|
| 1 | Testgrundlagen | 40 |
| 2 | Testen im SDLC | 30 |
| 3 | Statisches Testen | 20 |
| 4 | Testanalyse und -entwurf | 55 |
| 5 | Testmanagement | 45 |
| 6 | Testwerkzeuge | 10 |

## 🚀 Lokale Nutzung

Kein Build-Prozess, keine Abhängigkeiten:

```bash
git clone https://github.com/Ati993/istqb-quiz.git
cd istqb-quiz
open index.html        # macOS – oder die Datei einfach im Browser öffnen
```

## 🏗 Technik

- **Vanilla JavaScript, HTML, CSS** – bewusst ohne Framework und Build-Tools, damit die App per Doppelklick überall läuft
- **`questions.js`** – der komplette Fragenpool als strukturierte Daten (Frage, Optionen, richtige Antwort(en), Lernziel, K-Stufe, Merksatz, offizielle Begründung)
- **`localStorage`** – Statistik, Merkliste falscher Fragen und laufender Quiz-Stand werden lokal im Browser gespeichert; Export als JSON/CSV möglich
- **Datenpipeline** – die Fragen wurden per Python (`pypdf`/`pypdfium2`) aus den offiziellen Probeprüfungs-PDFs extrahiert, seitenbasiert geparst, validiert und mit Merksätzen pro Lernziel angereichert; Fragen mit Tabellen/Diagrammen werden als gerenderte Original-Seite eingebunden

## 🗺 Roadmap

- [ ] 60-Minuten-Timer für die Prüfungssimulation
- [ ] Probeprüfung Set F ergänzen
- [ ] Dark Mode
- [ ] Lernkarten-Modus (Merksatz vorne, Erklärung hinten)

## ⚖️ Quellen und Rechtliches

Die Prüfungsfragen stammen aus den **offiziellen Probeprüfungen zum Certified Tester Foundation Level v4.0**.
Quelle und Copyright: **ISTQB® – International Software Testing Qualifications Board** / **German Testing Board e.V. (GTB)**.
Die Probeprüfungen dürfen gemäß ihren Nutzungsbedingungen zu Übungszwecken verwendet werden, wenn ISTQB® als Quelle und Copyright-Inhaber genannt wird.

Dieses Projekt ist ein privates Lernprojekt und steht in **keiner Verbindung** zum ISTQB® oder GTB. Es ist **nicht** für den Einsatz in echten Prüfungen bestimmt.
