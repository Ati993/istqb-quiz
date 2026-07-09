// Offizielle ISTQB/GTB CTFL v4.0 Probepruefungsfragen, Sets A-E (je 40 Fragen).
// Quelle: ISTQB(R)/German Testing Board Sample Exams (Copyright ISTQB(R)).
// Nur fuer die persoenliche Pruefungsvorbereitung.
// Automatisch extrahiert; Merksaetze pro Lernziel ergaenzt.

const QUESTIONS = [
 {
  "id": "A-1",
  "set": "A",
  "num": 1,
  "lo": "FL-1.1.1",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt ein erreichbares Testziel?",
  "images": [],
  "options": [
   "Es lässt sich nachweisen, dass das zu prüfende System keine Fehlerzustände mehr hat.",
   "Es lässt sich nachweisen, dass es nach der produktiven Inbetriebnahme des Systems keine Fehlerwirkungen geben wird.",
   "Die Risikostufe des Testobjekts ist verringert und Vertrauen in das Qualitätsniveau ist aufgebaut.",
   "Durch eine Überprüfung lässt sich feststellen, dass alle Kombinationen von Eingabewerten getestet wurden."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Testziele: Fehler finden · Risiko senken · Vertrauen aufbauen · informieren. NIE: Fehlerfreiheit beweisen.",
  "explanation": "a) FALSCH – Es ist unmöglich zu beweisen, dass das zu prüfende System keine Fehlerzustände mehr hat (vgl. Grundsatz 1 des Testens in CTFL-Lehrplan V4.0.2, Abschnitt 1.3).\n\nb) FALSCH – Testen kann nicht beweisen, dass im produktiven Betrieb keine Fehlerwirkungen auftreten werden. Es kann das Risiko von Fehlerwirkungen verringern, aber deren vollständige Abwesenheit nicht nachweisen (vgl. Grundsatz 1 des Testens in CTFL-Lehrplan V4.0.2, Abschnitt 1.3).\n\nc) KORREKT – Testen kann dazu beitragen, Fehlerzustände zu finden, das Risiko einer unzureichenden Softwarequalität zu verringern und Vertrauen in die Qualität des Testobjekts aufzubauen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.1.1, 4. + 8. Aufzählungspunkt).\n\nd) FALSCH – Vollständiges Testen aller Kombinationen von Eingabewerten ist außer in trivialen Fällen nicht möglich (vgl. Grundsatz 2 des Testens in CTFL- Lehrplan V4.0.2, Abschnitt 1.3)."
 },
 {
  "id": "A-2",
  "set": "A",
  "num": 2,
  "lo": "FL-1.1.2",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Was ist der Hauptunterschied zwischen Testen und Debugging?",
  "images": [],
  "options": [
   "Testen kann Fehlerwirkungen auslösen oder Fehlerzustände finden, während Debugging die Ursachen einer Fehlerwirkung analysiert und Fehlerzustände beseitigt.",
   "Beim Testen werden Anforderungen überprüft, während beim Debugging der Entwurf überprüft wird.",
   "Testen ist der Prozess des Ausführens von Software, während das Debugging der Prozess der Analyse der Software ist.",
   "Testen ist der Prozess der Fehlervermeidung, während das Debugging der Prozess der Fehlerbeseitigung ist."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testen findet die Fehlerwirkung – Debugging findet und beseitigt die Ursache. (Tester finden, Entwickler flicken.)",
  "explanation": "a) KORREKT – Testen und Debugging sind getrennte Aktivitäten. Testen kann Fehlerwirkungen auslösen oder Fehlerzustände finden. Debugging umfasst insbesondere das Reproduzieren einer Fehlerwirkung, das Auffinden und Analysieren der verursachenden Fehlerzustände sowie deren Beseitigung (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.1.2).\n\nb) FALSCH – Testen und Debugging sind nicht auf die Überprüfung der Anforderungen und des Entwurfs beschränkt.\n\nc) FALSCH – Testen besteht nicht nur aus dem Ausführen von Software, sondern umfasst auch statische Tests und weitere Testaktivitäten. Debugging umfasst nicht nur Analyse, sondern auch das Auffinden und Beseitigen von Fehlerzuständen.\n\nd) FALSCH – Testen dient nicht der Beseitigung von Fehlerzuständen. Testen kann Fehlerwirkungen auslösen oder Fehlerzustände finden; die Analyse und Beseitigung der Fehlerzustände erfolgen durch Debugging."
 },
 {
  "id": "A-3",
  "set": "A",
  "num": 3,
  "lo": "FL-1.3.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Sie sind Mitglied eines Teams, das ein neues System testet. Ihnen ist aufgefallen, dass seit mehreren Iterationen keine Änderungen an den bestehenden Regressionstestfällen vorgenommen und keine neuen Fehler durch einen Regressionstest aufgedeckt wurden. Ihr Vorgesetzter ist zufrieden, aber Sie sind es nicht. Welcher Grundsatz des Testens erklärt Ihre Skepsis in dieser Situation AM BESTEN?",
  "images": [],
  "options": [
   "Alte Tests verlieren an Wirksamkeit.",
   "Trugschluss: “Keine Fehler” bedeuten ein brauchbares System.",
   "Häufung von Fehlerzuständen.",
   "Vollständiges Testen ist nicht möglich."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar.",
  "explanation": "a) KORREKT – Dieser Grundsatz besagt, dass, wenn dieselben Tests immer und immer wieder wiederholt werden, diese Tests irgendwann keine neuen Fehler mehr finden. Dies kann erklären, warum durch die unveränderten Regressionstests keine neuen Fehlerzustände aufgedeckt wurden (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.3, Punkt 5).\n\nb) FALSCH – Dieser Grundsatz beschreibt den Trugschluss, dass das Verifizieren der Software bzw. das gründliche Testen aller spezifizierten Anforderungen und das Beheben aller gefundenen Fehlerzustände den Erfolg bzw. die Brauchbarkeit des Systems sicherstellt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.3, Punkt 7).\n\nc) FALSCH – Dieser Grundsatz besagt, dass eine kleine Anzahl von Komponenten in der Regel die meisten Fehler enthalten (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.3, Punkt 4).\n\nd) FALSCH – Dieser Grundsatz besagt, dass es nicht möglich ist, alle Kombinationen von Eingaben und Vorbedingungen zu testen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.3, Punkt 2)."
 },
 {
  "id": "A-4",
  "set": "A",
  "num": 4,
  "lo": "FL-1.4.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Sie arbeiten in einem Team, das eine mobile Anwendung für Essensbestellungen entwickelt. In der aktuellen Iteration hat das Team beschlossen, die Zahlungsfunktionalität zu implementieren. Welche der folgenden Aktivitäten gehört zur Testanalyse?",
  "images": [],
  "options": [
   "Die Aufwandsschätzung für den Test der Integration der mobilen Anwendung mit dem Zahlungsdienst durchführen.",
   "Die Entscheidung, ob getestet wird, inwieweit Zahlungen zwischen mehreren Nutzern aufgeteilt werden können.",
   "Mittels Grenzwertanalyse werden die Testdaten für die Testfälle abgeleitet, die die korrekte Zahlungsabwicklung für den zulässigen minimalen Betrag überprüfen.",
   "Die Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls analysieren."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testprozess: Planung → Überwachung/Steuerung → Analyse (WAS testen?) → Entwurf (WIE testen?) → Realisierung → Durchführung → Abschluss.",
  "explanation": "a) FALSCH – Die Schätzung des Testaufwands ist Teil der Testplanung (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.1.4).\n\nb) KORREKT – Dies ist ein Beispiel für die Bestimmung von Testbedingungen, die ein Teil der Testanalyse sind (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, Abschnitt Testanalyse).\n\nc) FALSCH – Die Anwendung der Grenzwertanalyse zur Ableitung konkreter Testwerte für Testfälle gehört zum Testentwurf. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, Abschnitt Testentwurf) Die Erstellung oder Beschaffung der benötigten Testdaten gehört zur Testrealisierung. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, Abschnitt Testrealisierung).\n\nd) FALSCH – Die Analyse der Abweichung zwischen dem tatsächlichen und dem erwarteten Ergebnis nach der Ausführung eines Testfalls ist Teil der Testdurchführung (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 1.4.1, Abschnitt Testdurchführung)."
 },
 {
  "id": "A-5",
  "set": "A",
  "num": 5,
  "lo": "FL-1.4.4",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN, wie ein Mehrwert durch Etablierung und Aufrechterhaltung der Verfolgbarkeit zwischen Testbasis und den Testmitteln erzielt wird?",
  "images": [],
  "options": [
   "Wartungstests können basierend auf Änderungen der ursprünglichen Anforderungen vollständig automatisiert werden.",
   "Es kann effizienter bestimmt werden, ob die angestrebte Ü berdeckung auch tatsächlich erreicht wurde.",
   "Die Testmanagementrolle kann feststellen, welche Tester die Fehler mit dem höchsten Schweregrad gefunden haben.",
   "Codebereiche, die möglicherweise durch Seiteneffekte einer Änderung beeinflusst werden, können durch Regressionstests gezielt überprüft werden."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Verfolgbarkeit = Anforderung ↔ Testfall ↔ Fehler verknüpft: Überdeckung messbar, Änderungsauswirkungen sichtbar, Berichte aussagekräftig.",
  "explanation": "a) FALSCH – Die Verfolgbarkeit ermöglicht die Verknüpfung von Anforderungen mit den Testfällen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.4, 3. Absatz), sie hilft jedoch nicht bei der Automatisierung von Testfällen.\n\nb) KORREKT – Wenn die Testfälle mit den Anforderungen verknüpft sind, kann bei Hinzufügen eines neuen Testfalls (mit Verfolgbarkeit) festgestellt werden, ob zuvor nicht überdeckte Anforderungen bzw. Anforderungsteile durch den neuen Testfall überdeckt werden (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.4, 1. Aufzählungspunkt).\n\nc) FALSCH – Die Verfolgbarkeit zwischen Testbasis und Testmitteln liefert keine Informationen darüber, welche Tester die Fehler mit hohem Schweregrad festgestellt haben. Man könnte dies ggf. durch Auswertungen im Fehlermanagement-Werkzeug ermitteln, im Lehrplan geht es aber nie um Bewertungen von Personen.\n\nd) FALSCH – Gute Verfolgbarkeit kann zwar die Ermittlung der Auswirkungen von Änderungen unterstützen. Die Aussage bezieht sich jedoch auf betroffene Codebereiche und mögliche Seiteneffekte einer Änderung. Dies ist nicht der direkte Mehrwert der Verfolgbarkeit zwischen Testbasis und Testmitteln im Sinne von Abschnitt 1.4.4."
 },
 {
  "id": "A-6",
  "set": "A",
  "num": 6,
  "lo": "FL-1.4.5",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen vergleicht AM BESTEN die verschiedenen Rollen beim Testen?",
  "images": [],
  "options": [
   "Die Rolle des Testens führt Testfälle aus, die Testmanagementrolle plant und überwacht die Testaktivitäten und meldet die Abweichungen an alle Tester.",
   "Die Rolle des Testens führt die Aktivitäten der Testanalyse sowie des Testentwurfs aus und erstellt und führt Testfälle aus, die Testmanagementrolle koordiniert die Testressourcen und berichtet an die Stakeholder.",
   "Die Rolle des Testens entscheidet über die zu automatisierenden Tests und priorisiert Testfälle, die Testmanagementrolle analysiert Risiken und setzt Prioritäten für die Tests.",
   "Die Rolle des Testens führt statische und dynamische Komponententests durch, die Testmanagementrolle führt Systemtests und Abnahmetests durch."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Rolle des Testens: analysiert, entwirft, führt aus, meldet. Testmanagementrolle: plant, steuert, koordiniert, berichtet.",
  "explanation": "a) FALSCH – Das Melden von Abweichungen ist der Rolle des Testens zugeordnet und nicht der Testmanagementrolle (vgl. auch CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5, 3. Absatz, letzter Satz: “Die Rolle des Testens konzentriert sich hauptsächlich auf die Aktivitäten der Testanalyse, des Testentwurfs, der Testrealisierung und der Testdurchführung.“ Und Abschnitt 1.4.1, 7. Absatz: „(…) Berichterstattung über die Abweichung auf der Grundlage der beobachteten Fehlerwirkungen“).\n\nb) KORREKT – Diese Option beschreibt sinngemäß die Hauptaufgaben der einzelnen Rollen beim Testen. Die Rolle des Testens entwirft, erstellt und führt Testfälle aus und sie führt die Aktivitäten der Testanalyse und des Testentwurfs aus und meldet Fehler; die Rolle des Testmanagements koordiniert die Testressourcen und erstattet den Beteiligten Bericht (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5, 2. + 3. Absatz).\n\nc) FALSCH – Diese Option bringt die Rollen des Testens durcheinander. Die Rolle des Testens priorisiert nicht allein die Testfälle und entscheidet nicht allein über die Tests, die automatisiert werden sollen.\n\nd) FALSCH – Diese Option vereinfacht zu stark die Arten von Tests, die jede Rolle durchführen kann. Die Rolle des Testens ist nicht auf den Komponententest beschränkt. Die Testmanagementrolle überwacht den Test, sie führt den Test nicht durch. Weiterhin gibt es keine Beschränkung auf bestimmte Teststufen."
 },
 {
  "id": "A-7",
  "set": "A",
  "num": 7,
  "lo": "FL-1.5.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen erklärt AM BESTEN einen Vorteil der Unabhängigkeit des Testens?",
  "images": [],
  "options": [
   "Der Einsatz eines unabhängigen Testteams ermöglicht es der Projektleitung, dem Testteam die Verantwortung für die Qualität des Endprodukts zu übertragen.",
   "Wenn man sich ein externes Testteam leisten kann, dann hat das den Vorteil, dass dieses externe Team nicht so leicht von den Bedenken des Projektmanagements und der Notwendigkeit, strikte Liefertermine einzuhalten, beeinflusst werden kann.",
   "Ein unabhängiges Testteam kann getrennt von den Entwicklern arbeiten, muss nicht durch Änderungen der Projektanforderungen abgelenkt werden und kann die Kommunikation mit den Entwicklern auf die Fehlerberichterstattung über das Fehlermanagementsystem beschränken.",
   "Wenn Spezifikationen Mehrdeutigkeiten und Ungereimtheiten enthalten, treffen Entwickler Annahmen über ihre Interpretation, und ein unabhängiges Testteam kann nützlich sein, um diese Annahmen und die Interpretation der Entwickler zu hinterfragen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Unabhängiges Testen: + eigene Sicht, findet andere Fehler · − Isolation, Kommunikationshürden, Entwickler schieben Verantwortung ab.",
  "explanation": "a) FALSCH – Qualität sollte in der Verantwortung aller am Projekt Beteiligten liegen und nicht allein in der Verantwortung des Testteams.\n\nb) FALSCH – Erstens ist es kein Vorteil, wenn ein externes Testteam die Lieferfristen nicht einhält, und zweitens gibt es keinen Grund zu der Annahme, dass externe Testteams das Gefühl haben, sie müssten keine strengen Lieferfristen einhalten.\n\nc) FALSCH – Es ist eine schlechte Praxis, wenn das Testteam völlig isoliert arbeitet, und wir würden von einem externen Testteam erwarten, dass es sich mit wechselnden Projektanforderungen befasst und gut mit den Entwicklern kommuniziert.\n\nd) KORREKT – Wenn Spezifikationen Mehrdeutigkeiten oder Ungereimtheiten enthalten, können unabhängige Tester die während Spezifikation und Implementierung getroffenen Annahmen überprüfen, infrage stellen oder widerlegen. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.5.3, 3. Absatz, letzter Satz)."
 },
 {
  "id": "A-8",
  "set": "A",
  "num": 8,
  "lo": "FL-1.5.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Wie zeigt sich der Whole-Team-Ansatz in der Interaktion zwischen Testern und Fachbereichsvertretern?",
  "images": [],
  "options": [
   "Fachbereichsvertreter entscheiden gemeinsam mit der Projektleitung über die Ansätze zur Testautomatisierung.",
   "Tester helfen Fachbereichsvertretern bei der Festlegung der Teststrategie.",
   "Die Beteiligung von Fachbereichsvertretern ist nicht Teil des Whole-Team- Ansatzes.",
   "Tester helfen Fachbereichsvertretern bei der Erstellung geeigneter Abnahmetests."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen.",
  "explanation": "a) FALSCH – Die Entscheidung über Ansätze der Testautomatisierung wird im Lehrplan im Zusammenhang mit der Zusammenarbeit zwischen Testern und Entwicklern genannt, nicht als Entscheidung von Fachbereichsvertretern gemeinsam mit der Projektleitung. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2, 3. Absatz).\n\nb) FALSCH – Die Teststrategie wird in Zusammenarbeit mit den Entwicklern festgelegt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2, 3. Absatz).\n\nc) FALSCH – Tester, Entwickler und Fachbereichsvertreter sind Teil des Whole-Team- Ansatzes (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2, 3. Absatz).\n\nd) KORREKT – Die Tester arbeiten eng mit Fachbereichsvertretern zusammen, um sicherzustellen, dass die gewünschten Qualitätsniveaus erreicht werden. Dazu gehört auch die Unterstützung und Zusammenarbeit mit ihnen, um ihnen bei der Erstellung geeigneter Abnahmetests zu helfen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2, 3. Absatz)."
 },
 {
  "id": "A-9",
  "set": "A",
  "num": 9,
  "lo": "FL-2.1.2",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN eine gute Praktik für das Testen, die für alle Softwareentwicklungslebenszyklen gilt?",
  "images": [],
  "options": [
   "Testen sollte erst nach Abschluss der Entwicklung durchgeführt werden.",
   "Testen sollte unter Federführung der Entwicklung durchgeführt werden.",
   "Testen sollte frühzeitig im Entwicklungsprozess beginnen.",
   "Testen sollte in einer Entwicklungstestumgebung durchgeführt werden."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen.",
  "explanation": "a) FALSCH – Testen sollte NICHT erst nach Abschluss der Entwicklung durchgeführt werden, da dies zu späten Entdeckungen von Fehlern führen kann und die Kosten für die Fehlerbehebung erhöht (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2, 3. Aufzählungspunkt).\n\nb) FALSCH – Eine unabhängige Testperspektive sollte berücksichtigt werden; Testen ist nicht ausschließlich Aufgabe der Entwicklung. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2, Abschnitt 1.4.5, 2. Absatz, letzter Satz).\n\nc) KORREKT – Testen sollte frühzeitig im Entwicklungsprozess beginnen, um Fehler so früh wie möglich zu erkennen und die Kosten für die Fehlerbehebung zu minimieren (vgl. auch: CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2, 3. Aufzählungspunkt und Abschnitt 1.3).\n\nd) FALSCH – Testen sollte nicht in einer Entwicklungstestumgebung durchgeführt werden, da dies möglicherweise nicht alle Probleme identifiziert, die auf anderen Umgebungen auftreten können. Testen sollte in einer repräsentativen Testumgebung durchgeführt werden (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5, letzter Aufzählungspunkt)."
 },
 {
  "id": "A-10",
  "set": "A",
  "num": 10,
  "lo": "FL-2.1.3",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD)?",
  "images": [],
  "options": [
   "In der ATDD werden Akzeptanzkriterien typischerweise basierend auf dem Format GIVEN/WHEN/THEN erstellt.",
   "Bei ATDD werden zuerst entwicklernahe Tests geschrieben, danach wird Code geschrieben, um diese Tests zu erfüllen, und anschließend werden Tests und Code überarbeitet.",
   "Bei ATDD werden Tests aus Akzeptanzkriterien als Teil des Systementwurfs abgeleitet.",
   "Bei ATDD werden Abnahmetests erst nach Abschluss der Implementierung aus den realisierten Systemfunktionen abgeleitet, um das implementierte Verhalten zu bestätigen."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien).",
  "explanation": "a) FALSCH – Das Format wird häufiger in der verhaltensgetriebenen Entwicklung (BDD) verwendet (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.3, 3. aufgeführter Ansatz).\n\nb) FALSCH – Das ist die Beschreibung der testgetriebenen Entwicklung (TDD) (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 2.1.3, 1. aufgeführter Ansatz).\n\nc) KORREKT – Bei der abnahmetestgetriebenen Entwicklung (ATDD) werden Tests anhand von Akzeptanzkriterien als Teil des Systementwurfs abgeleitet und erstellt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.3, 2. aufgeführter Ansatz, 1. Aufzählungspunkt).\n\nd) FALSCH – ATDD ist ein Test-First-Ansatz. Testfälle werden vor der Implementierung der User-Story erstellt und basieren auf den Akzeptanzkriterien. Der Distraktor beschreibt dagegen eine nachgelagerte Ableitung von Abnahmetests aus bereits realisierten Systemfunktionen und trifft daher nicht auf ATDD zu (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.5.3, 1. Absatz; ergänzend Abschnitt 2.1.3)."
 },
 {
  "id": "A-11",
  "set": "A",
  "num": 11,
  "lo": "FL-2.1.5",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen ist kein Beispiel für den Shift-Left- Ansatz?",
  "images": [],
  "options": [
   "Benutzeranforderungen werden überprüft, bevor sie von den Stakeholdern formell akzeptiert werden.",
   "Komponententestfälle werden erstellt, bevor der zugehörige Code programmiert wird.",
   "Der Performanztest einer Komponente wird während des Komponententests ausgeführt.",
   "Nicht-funktionale Tests werden, wenn möglich, beginnend auf der Ebene der Systemtests ausgeführt."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Shift-Left = Testen nach vorn verlagern: Anforderungs-Reviews, frühe Testanalyse, Unit-Tests beim Coden, CI. Früher = billiger.",
  "explanation": "a) FALSCH – Die frühe Überprüfung ist ein Beispiel für den Shift-Left-Ansatz (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 2.1.5, 1. Aufzählungspunkt, sinngemäß).\n\nb) FALSCH – Testgetriebene Entwicklung (TDD) ist ein Beispiel für den Shift-Left-Ansatz (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5, 2. Aufzählungspunkt).\n\nc) FALSCH – Frühe nicht-funktionale Tests sind ein Beispiel für den Shift-Left-Ansatz (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5, 5. Aufzählungspunkt).\n\nd) KORREKT – Frühe nicht-funktionale Tests sind zwar ein Beispiel für den Shift-Left- Ansatz, aber NICHT erst auf der Ebene der Systemtests. Erfolgen sie so spät, ist dies KEIN Beispiel für den Shift-Left-Ansatz (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5, 5. Aufzählungspunkt)."
 },
 {
  "id": "A-12",
  "set": "A",
  "num": 12,
  "lo": "FL-2.1.6",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welches der folgenden Argumente ist AM BESTEN geeignet, um Ihren Vorgesetzten davon zu überzeugen, am Ende eines jeden Release zyklus eine Retrospektive durchzuführen?",
  "images": [],
  "options": [
   "Retrospektiven sind heutzutage sehr beliebt und unsere Kunden würden es zu schätzen wissen, wenn wir sie in unsere Prozesse aufnehmen würden.",
   "Die regelmäßige Durchführung von Retrospektiven spart dem Unternehmen Geld, da die Vertreter der Endnutzer kein unmittelbares Feedback über das Produkt geben.",
   "Die bei der Retrospektive festgestellten Prozessschwächen können während der Retrospektive analysiert und in Verbesserungsmaßnahmen für das Programm zur kontinuierlichen Prozessverbesserung des Unternehmens überführt werden.",
   "Retrospektiven ermöglichen es dem Team, sich gegenseitig zu loben und zu motivieren, was die Arbeitsmoral und die Produktivität erhöhen können."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Retrospektive: nach der Iteration – Was lief gut? Was nicht? Was ändern wir? → kontinuierliche Prozessverbesserung.",
  "explanation": "a) FALSCH – Retrospektiven sind eher dazu geeignet, Verbesserungsmöglichkeiten zu identifizieren, und haben eine geringe Bedeutung für Kunden.\n\nb) FALSCH – Retrospektiven dienen nicht dazu, unmittelbares Produktfeedback von Endnutzern zu ersetzen. Sie dienen der Reflexion über Zusammenarbeit, Prozesse und Verbesserungsmöglichkeiten. Aus dem Verzicht auf unmittelbares Endnutzerfeedback ergibt sich kein lehrplannaher Nutzen.\n\nc) KORREKT – Regelmäßig durchgeführte Retrospektiven mit entsprechenden Folgeaktivitäten sind entscheidend für die kontinuierliche Verbesserung von Entwicklung und Test (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.1.6, 2. Absatz, 2. Satz).\n\nd) FALSCH – Die Option fokussiert sich auf die sozialen Aspekte einer Retrospektive, die zwar wichtig sind, aber nicht die Hauptziele der Retrospektive widerspiegeln."
 },
 {
  "id": "A-13",
  "set": "A",
  "num": 13,
  "lo": "FL-2.2.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche Arten von Fehler zuständen (1-4) werden in welchen Teststufen (A-D) AM EHESTEN gefunden? 1. Fehlerzustände, wenn das Systemverhalten von den geschäftlichen Anforderungen abweicht 2. Fehlerzustände in der Kommunikation zwischen Komponenten 3. Fehlerzustände in einer isolierten Komponente 4. Fehlerzustände im Gesamtverhalten des Systems bei der Umsetzung einer User-Story A. Komponententest B. Komponentenintegrationstest C. Systemtest D. Abnahmetests",
  "images": [],
  "options": [
   "1D, 2B, 3A, 4C",
   "1D, 2B, 3C, 4A",
   "1B, 2A, 3D, 4C",
   "1C, 2A, 3B, 4D"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Teststufen: Komponente → Komponentenintegration → System → Systemintegration → Abnahme. Jede Stufe: eigene Testbasis, eigene Ziele.",
  "explanation": "Die Testgrundlage für Abnahmetests sind die Geschäftsanforderungen des Benutzers (1D) (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1, Aufzählungspunkt Abnahmetest, 1. Satz). Die Kommunikation zwischen Komponenten wird im Komponentenintegrationstest der Komponenten getestet (2B) (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1, Aufzählungspunkt Komponentenintegrationstest, 1. Satz). Fehlerzustände in einer isolierten Komponente können beim Komponententest (3A) festgestellt werden, da dieser Test die interne Struktur und Funktionalität einer einzelnen Komponente überprüft (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1, Aufzählungspunkt Komponententest, 1. Satz). User-Storys bzw. daraus abgeleitete Systemanforderungen können als Testbasis für Systemtests dienen, wenn das Gesamtverhalten des Systems oder Produkts überprüft wird. Daher passt (4C) am besten. Folglich ist a) KORREKT."
 },
 {
  "id": "A-14",
  "set": "A",
  "num": 14,
  "lo": "FL-2.3.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Die Teststrategie Ihres Unternehmens sieht vor, dass die Datenmigration zum Nachfolgesystem getestet werden muss, sobald ein System zur Außerbetriebnahme vorgesehen ist. Mit welcher Testaktivität wird diese Anforderung AM EHESTEN erfüllt?",
  "images": [],
  "options": [
   "Wartungstest",
   "Regressionstest",
   "Komponententest",
   "Komponentenintegrationstest"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Wartungstest-Auslöser: Modifikation (Fix, Update) · Migration (Plattform-/Datenumzug) · Außerbetriebnahme (Archivierung, Datenmigration).",
  "explanation": "a) KORREKT – Die Ablösung bzw. Außerbetriebnahme eines Systems sowie die Migration von Daten zum Nachfolgesystem sind typische Auslöser für Wartungstest. Dabei kann es erforderlich sein, die Datenmigration, Datenkonvertierung, Datenarchivierung oder Wiederherstellung zu testen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 2.3, 3. Absatz, 2. + 3. Aufzählungspunkt).\n\nb) FALSCH – Regressionstests überprüfen, ob eine Korrektur versehentlich das Verhalten anderer Teile des Codes beeinflusst hat, aber hier geht es um die Datenmigration in das Nachfolgesystem.\n\nc) FALSCH – Komponententests konzentrieren sich auf einzelne Hardware- oder Softwarekomponenten, nicht auf die Datenmigration.\n\nd) FALSCH – Komponentenintegrationstests konzentrieren sich auf die Interaktionen zwischen Komponenten, nicht auf die Datenmigration."
 },
 {
  "id": "A-15",
  "set": "A",
  "num": 15,
  "lo": "FL-3.1.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Optionen ist kein Vorteil des statischen Testens?",
  "images": [],
  "options": [
   "Die Bewertung und Behebung der durch eine statische Analyse aufgedeckten Anomalien kann erheblichen Zeit- und Ressourcenaufwand erfordern.",
   "Die Behebung von Fehlerzuständen, die bei statischen Tests gefunden werden, ist in der Regel wesentlich kostengünstiger als die Behebung von Fehlerzuständen, die bei dynamischen Tests gefunden werden.",
   "Das Finden von Programmierfehlern, die bei dynamischen Tests möglicherweise nicht gefunden werden.",
   "Das Aufdecken von Lücken und Unstimmigkeiten in den Anforderungen."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Statisches Testen: findet Fehler FRÜH und BILLIG, direkt an der Ursache – bevor Code überhaupt läuft.",
  "explanation": "a) KORREKT – Diese Aussage beschreibt keinen Vorteil des statischen Testens, sondern einen möglichen Aufwand bei der Bewertung und Behandlung gefundener Anomalien. Vorteile statischer Tests sind dagegen z. B. das frühe Aufdecken von Fehlerzuständen, die Verbesserung der Qualität von Arbeitsergebnissen und geringere spätere Fehlerbehebungskosten (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.1.2).\n\nb) FALSCH – Dies ist ein Vorteil des statischen Testens, da durch frühes Finden und Beheben von Fehlerzuständen im späteren Projektverlauf weniger Zeit und Aufwand für die Behebung erforderlich sind (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.1.2, 1. Absatz).\n\nc) FALSCH – Dies ist ein Vorteil des statischen Testens. Statische Tests können Fehlerzustände im Code aufdecken, die durch dynamische Tests möglicherweise nicht erkannt werden, z. B. nicht erreichbaren Code (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.1.2, 1. Absatz).\n\nd) FALSCH – Dies ist ein Vorteil des statischen Testens, da Reviews und statische Prüfungen dazu beitragen können, Anforderungen auf Vollständigkeit, Verständlichkeit, Konsistenz und Testbarkeit zu prüfen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.1.2, 2. Absatz und Abschnitt 3.1.3, 1. Absatz)."
 },
 {
  "id": "A-16",
  "set": "A",
  "num": 16,
  "lo": "FL-3.2.1",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welcher der folgenden Punkte ist ein Vorteil von frühem und häufigem Feedback durch Stakeholder?",
  "images": [],
  "options": [
   "Es verbessert den Testprozess für zukünftige Projekte.",
   "Es zwingt die Kunden dazu, ihre Anforderungen basierend auf den abgestimmten Risiken zu priorisieren.",
   "Nur so lässt sich die Qualität der Änderungen im Prozess messen.",
   "Es hilft, Missverständnisse bei den Anforderungen zu vermeiden."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Frühes, häufiges Stakeholder-Feedback: Missverständnisse früh erkannt = nicht am Bedarf vorbei entwickelt.",
  "explanation": "a) FALSCH – Feedback kann den Testprozess verbessern, aber wenn man nur zukünftige Projekte verbessern will, muss das Feedback nicht früh oder häufig kommen.\n\nb) FALSCH – Frühzeitiges und häufiges Stakeholder-Feedback kann helfen, Anforderungen und Änderungen besser zu verstehen und sich auf wertvolle Features zu konzentrieren. Es dient aber nicht dazu, Kunden zur risikobasierten Priorisierung ihrer Anforderungen zu zwingen.\n\nc) FALSCH – Die Qualität von Änderungen des Prozesses kann auf verschiedene Weise gemessen werden.\n\nd) KORREKT – Frühes und häufiges Feedback ermöglicht die frühzeitige Aufdeckung potenzieller Qualitätsprobleme wie missverstandener Anforderungen (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 3.2.1, 1. Absatz)."
 },
 {
  "id": "A-17",
  "set": "A",
  "num": 17,
  "lo": "FL-3.2.4",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Die in Ihrem Unternehmen durchgeführten Reviews weisen die folgenden Eigenschaften auf: • Der Hauptzweck ist die Kommunikation oder die Schulung der Gutachter. • Die Sitzung wird vom Autor des Arbeitsergebnisses geleitet. • Es gibt eine individuelle Vorbereitung der Reviewer (Gutachter). • Ein Reviewbericht kann erstellt werden. Welche der folgenden Arten eines Reviews wird AM EHESTEN verwendet?",
  "images": [],
  "options": [
   "Informelles Review",
   "Walkthrough",
   "Technisches Review",
   "Inspektion"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Formalitäts-Treppe: informelles Review < Walkthrough (AUTOR führt) < technisches Review (Experten) < Inspektion (formalste, mit Metriken).",
  "explanation": "Unter Berücksichtigung der Attribute: • Der Hauptzweck passt zu einem Walkthrough, da dieser u. a. der Schulung von Gutachtern, der Erzielung eines Konsenses und der Kommunikation über das Arbeitsergebnis dienen kann (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.4). • Das Review-Meeting wird vom Autor des Arbeitsergebnisses geleitet. Dies ist ein typisches Merkmal eines Walkthroughs. Technische Reviews werden dagegen von einem Moderator geleitet; bei Inspektionen kann der Autor nicht als Reviewleiter oder Protokollant agieren (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.4). • Einzelne Reviewer (Gutachter) finden mögliche Anomalien während der Vorbereitung – alle Arten von Reviews können eine individuelle Vorbereitung der Reviewer einbeziehen (auch informelle Reviews) (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.4). • Es wird ein Reviewbericht erstellt – alle Arten von Reviews können einen Reviewbericht erstellen, obwohl informelle Reviews keine Dokumentation erfordern (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.4). Folglich ist b) KORREKT."
 },
 {
  "id": "A-18",
  "set": "A",
  "num": 18,
  "lo": "FL-3.2.5",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen ist kein Faktor, der zu einem erfolgreichen Review beiträgt?",
  "images": [],
  "options": [
   "Die Teilnehmer sollten sich ausreichend Zeit für das Review nehmen.",
   "Eine Aufteilung großer Arbeitsprodukte in kleine Teile wird empfohlen, damit die Reviewer (Gutachter) nicht die Konzentration verlieren.",
   "Klare Ziele und messbare Endekriterien werden für das Review festgelegt.",
   "Das Management wirkt persönlich mit bei der Kommunikation der Befunde."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Review-Erfolg: klare Ziele · richtige Teilnehmer · genug Vorbereitungszeit · Fehler feiern statt Autor anklagen.",
  "explanation": "a) FALSCH – Angemessene Zeit für den Einzelnen ist ein Erfolgsfaktor (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5, 5. Aufzählungspunkt).\n\nb) FALSCH – Die Aufteilung von Arbeitsprodukten in kleine angemessene Teile ist ein Erfolgsfaktor (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5, 3. Aufzählungspunkt).\n\nc) FALSCH – Die Festlegung klarer Ziele und messbarer Endekriterien für das Review ist nach Lehrplan und in der Praxis ein Erfolgsfaktor (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5, 1. Aufzählungspunkt).\n\nd) KORREKT – Die Unterstützung des Reviewprozesses durch das Management ist ein Erfolgsfaktor. Der Lehrplan nennt jedoch nicht die persönliche Mitwirkung des Managements bei der Kommunikation der Befunde als Erfolgsfaktor. Für das Management werden insbesondere die Entscheidung, was geprüft werden soll, sowie die Bereitstellung von Ressourcen wie Personal und Zeit genannt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5, 6. Aufzählungspunkt und Abschnitt 3.2.3, 1. Aufzählungspunkt)."
 },
 {
  "id": "A-19",
  "set": "A",
  "num": 19,
  "lo": "FL-4.1.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welcher der folgenden Punkte ist ein Merkmal erfahrungsbasierter Testverfahren?",
  "images": [],
  "options": [
   "Testfälle werden auf der Grundlage detaillierter Entwurfsinformationen erstellt.",
   "Zur Messung des Überdeckungsgrads wird die Anzahl der im Test geprüften Schnittstellen verwendet.",
   "Die Verfahren beruhen in hohem Maße auf den Kenntnissen des Testers über die Software und die Geschäftsdomäne.",
   "Die Testfälle werden verwendet, um Abweichungen von den Anforderungen zu identifizieren."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers.",
  "explanation": "a) FALSCH – Dies ist ein gemeinsames Merkmal von White-Box-Testverfahren. Testbedingungen, Testfälle und Testdaten werden von einer Testbasis abgeleitet, die Code, Softwarearchitektur, detailliertes Design oder jede andere Informationsquelle bezüglich der Struktur der Software enthalten kann.\n\nb) FALSCH – Dies ist kein Merkmal erfahrungsbasierter Testverfahren. Erfahrungsbasierte Testverfahren beruhen auf Wissen und Erfahrung der Tester; Überdeckungsmaße stehen eher im Zusammenhang mit systematisch abgeleiteten Black-Box- oder White- Box-Testverfahren.\n\nc) KORREKT – Dies ist ein gemeinsames Merkmal der erfahrungsbasierten Testverfahren. Dieses Wissen und diese Erfahrung, einschließlich der erwarteten Nutzung der Software, ihrer Umgebung, der wahrscheinlichen Fehler und der Verteilung dieser Fehler, wird zur Definition von Tests verwendet (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.1).\n\nd) FALSCH – Dies ist ein typisches Merkmal von Black-Box-Testverfahren. Testfälle können verwendet werden, um Lücken in den Anforderungen und in der Umsetzung der Anforderungen sowie Abweichungen von den Anforderungen aufzudecken."
 },
 {
  "id": "A-20",
  "set": "A",
  "num": 20,
  "lo": "FL-4.2.1",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie testen die Software für eine unbeaufsichtigte amerikanische Zapfsäule. Nachdem die Zapfpistole abgehoben und die gewünschte Kraftstoffsorte ausgewählt wurde, gibt der Kunde die gewünschte Kraftstoffmenge in Gallonen über ein Tastenfeld ein. Das Eingabefeld erlaubt numerische Werte mit einer Dezimalstelle. Pro Zapfvorgang kann zwischen 0,1 und 50,0 Gallonen getankt werden. Welche der folgenden Antworten repräsentiert eine minimale Menge von Eingabewerten, die alle gültigen und ungültigen Äquivalenzklassen für die Kraftstoffmenge überdeckt?",
  "images": [],
  "options": [
   "0,0; 20,0; 60,0",
   "0,0; 0,1; 50,0",
   "0,0; 0,1; 50,0; 70,0",
   "-0,1; 0,0; 0,1; 49,9; 50,0; 50,1"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!",
  "explanation": "Es gibt für den numerischen Eingabewertebereich drei relevante Äquivalenzklassen: • eine ungültige Klasse für Mengen unterhalb der Mindestmenge: < 0,1 Gallonen, z. B. 0,0 • eine gültige Klasse für erlaubte Mengen: 0,1 bis 50,0 Gallonen, z. B. 20,0 • eine ungültige Klasse für Mengen oberhalb der Höchstmenge: > 50,0 Gallonen, z. B. 60,0 Daher überdeckt Antwort a) mit genau einem Wert pro Äquivalenzklasse die minimale erforderliche Menge. Deshalb\n\na) KORREKT – Diese Liste von Eingabewerten definiert genau einen Testfall pro Äquivalenzklasse (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.1, 5. Absatz).\n\nb) FALSCH – Diese Liste von Eingabewerten deckt die ungültige Überschreitung der höchstens erlaubten 50,0 Gallonen nicht ab (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.1, 5. Absatz).\n\nc) FALSCH – Dieser Satz von Eingabewerten repräsentiert zwei Tests für die gültige Äquivalenzklasse, was nicht das Minimum von einem Test ist (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.1, 5. Absatz).\n\nd) FALSCH – Diese Liste enthält mehrere Werte aus denselben Äquivalenzklassen und orientiert sich eher an Grenzwerten. Sie ist daher keine minimale Menge zur Überdeckung der Äquivalenzklassen."
 },
 {
  "id": "A-21",
  "set": "A",
  "num": 21,
  "lo": "FL-4.2.2",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie testen ein E-Commerce-System, das Lebensmittel wie Gewürze, Mehl und andere Artikel in großen Mengen verkauft. Die Einheiten, in denen die Artikel verkauft werden, sind entweder Gramm oder Kilogramm. Unabhängig von den Einheiten ist die kleinste gültig e Bestellmenge 0,5 Einheiten (z. B. ein halbes Gramm Kardamomkapseln) und die größte gültige Bestellmenge 25,0 Einheiten (z. B. 25 Kilogramm Zucker). Die Genauigkeit der Bestellmenge beträgt 0,1 Einheiten. Welche der folgenden Antworten enthält genau die minimale Menge von Eingabewerten, die die Überdeckungselemente der 2 -Wert- Grenzwertanalyse für die Bestellmenge vollständig abdeckt?",
  "images": [],
  "options": [
   "0,3; 24,9; 25,2",
   "0,4; 0,5; 0,6; 24,9; 25,0; 25,1",
   "0,4; 0,5; 25,0; 25,1",
   "0,5; 0,6; 24,9; 25,0"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn.",
  "explanation": "Es gibt drei Äquivalenzklassen, deren Grenzen wie folgt dargestellt sind: - Ungültig und zu niedrig (0,4 und darunter) - Gültig (0,5 bis 25,0) - Ungültig und zu hoch (25,1 und höher) Die 2-Wert-Grenzwertanalyse (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2, 4. Absatz) definiert je Grenzwert einer geordneten Klasse zwei Überdeckungselemente, den Grenzwert und seinen engsten Nachbarn, der zur angrenzenden Klasse gehört. Hier also 0,5 (Grenzwert) und 0,4 (Nachbarklasse) sowie 25,0 und 25,1. Deshalb\n\na) FALSCH – Diese Werte decken die einzelnen Äquivalenzklassen ab, aber nicht deren Grenzwerte (vgl. CTFL-Lehrplan V4.0.2, Abschnitte 4.2.1 und 4.2.2).\n\nb) FALSCH – Diese Eingabewerte wären bei der Anwendung der 3-Wert-Methode korrekt. Die vier Grenzwerte der 2-Wert-Methode (siehe Antwort c) sind zwar in dieser Menge von Eingabewerten enthalten, aber es wurde explizit nach der 2-Wert-Methode gefragt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2, 5. Absatz).\n\nc) KORREKT – Diese Menge an Eingabewerten deckt die vier Grenzwerte ab, die durch Anwendung der 2-Wert-Methode selektiert werden (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2, 4. Absatz).\n\nd) FALSCH – Diese vier Werte liegen alle in der gültigen Äquivalenzklasse. Es fehlen die angrenzenden Werte aus den ungültigen Äquivalenzklassen, nämlich 0,4 und 25,1. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2, 4. Absatz)."
 },
 {
  "id": "A-22",
  "set": "A",
  "num": 22,
  "lo": "FL-4.2.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Neu eingestellte Mitarbeitende einer Firma können individuelle Ziele mit ihren Vorgesetzten vereinbaren, an deren Erreichung die Auszahlung einer Prämie gekoppelt ist. Diese Prämie wird ihnen aber erst ausgezahlt, wenn sie länger als ein Jahr im Unternehmen beschäftigt sind. Die folgende Entscheidungstabelle enthält ausgewählte Testfälle zu diesem Sachverhalt: Testfall-ID T1 T2 T3 T4 T5 Bedingung1 Beschäftigung länger als ein Jahr? „J“ „N“ „N“ „J“ „N“ Bedingung2 Ziel vereinbart? „N“ „N“ „J“ „J“ „J“ Bedingung3 Ziel erreicht? „N“ „N“ „J“ „J“ „N“ Aktion Auszahlung der Prämie? „N“ „N“ „N“ „J“ „N“ Welcher der folgenden Testfälle beschreibt eine in der Praxis gültige, durchführbare Bedingungskombination mit fachlich korrekter erwarteter Aktion und fehlt in der oben aufgeführten Entscheidungstabelle?",
  "images": [
   "images/A-22.png"
  ],
  "options": [
   "Bedingung1 = „J“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“",
   "Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „J“",
   "Bedingung1 = „N“, Bedingung2 = „N“, Bedingung3 = „J“, Aktion = „N“",
   "Bedingung1 = „J“, Bedingung2 = „J“, Bedingung3 = „N“, Aktion = „N“"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?",
  "explanation": "a) FALSCH – Die Bedingungskombination stellt eine undurchführbare Kombination dar, denn wenn kein Ziel vereinbart wurde, kann das nicht vereinbarte Ziel auch nicht erreicht werden. Daher handelt es sich nicht um ein in der Praxis vorkommendes gültiges Szenario (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3, 4. Absatz).\n\nb) FALSCH – Die Bedingungskombination ist eine gültige, vorkommende Situation, die Aktion ist aber fachlich falsch. Da das Ziel nicht erreicht wurde, sollte keine Prämie gezahlt werden (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3, 2. Absatz).\n\nc) FALSCH – Die Bedingungskombination stellt eine undurchführbare Kombination dar, denn wenn kein Ziel vereinbart wurde, kann das nicht vereinbarte Ziel auch nicht erreicht werden. Daher handelt es sich nicht um ein in der Praxis vorkommendes gültiges Szenario (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3, 4. Absatz).\n\nd) KORREKT – Der Testfall beschreibt die fachlich korrekte Situation, dass das Nichterreichen des vereinbarten Ziels zur Nichtauszahlung der Prämie führt, wenn eine mitarbeitende Person länger als ein Jahr beschäftigt ist. Diese Situation kann in der Praxis vorkommen, fehlt aber in der Entscheidungstabelle (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 4.2.3, 2. Absatz)."
 },
 {
  "id": "A-23",
  "set": "A",
  "num": 23,
  "lo": "FL-4.2.4",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen zum Zustandsübergangsdiagramm und der dargestellten Tabelle von Testfällen ist wahr? TV Off (S1) TV Play (S3) TV Stand- by (S2) Testfall 1 2 3 4 5 Startzustand S1 S2 S2 S3 S3 Eingabe Power On Power Off RC On RC Off Power Off Endzustand S2 S1 S3 S2 S1 RC On RC Off Power Off Power Off Power On",
  "images": [
   "images/A-23.png",
   "images/A-23_2.png"
  ],
  "options": [
   "Die Testfälle versuchen alle gültigen und ungültigen Übergänge auszuführen; damit wird 100 % Überdeckung aller Übergänge erreicht.",
   "Die Testfälle führen alle gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit wird 100 % 0-Switch-Überdeckung erreicht.",
   "Die Testfälle führen nur einige der gültigen Übergänge im Zustandsübergangsdiagramm aus. Damit liegt die 0-Switch-Überdeckung unter 100 %.",
   "Testfall 2 ist für 100 % 0-Switch-Überdeckung nicht erforderlich, da Zustand S1 bereits durch Testfall 5 überdeckt wurde."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen.",
  "explanation": "Die vorgeschlagenen Testfälle überdecken genau alle fünf möglichen gültigen Übergänge im gegebenen Zustandsübergangsdiagramm (S1->S2, S2->S1, S2->S3, S3->S2, S3->S1). Daher gilt\n\na) FALSCH – Für 100 % Überdeckung aller Übergänge müssten neben den gültigen Übergängen auch ungültige Übergänge, z. B. S1 → S3, auszuführen versucht werden. Dies geschieht durch die angegebenen Testfälle nicht.\n\nb) KORREKT – da alle 5 gültigen Übergänge ausgeführt werden.\n\nc) FALSCH – da alle gültigen Übergänge ausgeführt werden (siehe b).\n\nd) FALSCH – da es bei der 0-Switch-Überdeckung nicht auf die Überdeckung der Zustände, sondern der Übergänge ankommt."
 },
 {
  "id": "A-24",
  "set": "A",
  "num": 24,
  "lo": "FL-4.3.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen beschreibt die Anweisungsüberdeckung?",
  "images": [],
  "options": [
   "Es handelt sich um eine Metrik zur Berechnung und Messung des prozentualen Anteils der ausgeführten Testfälle.",
   "Es handelt sich um eine Metrik, die den prozentualen Anteil der durch Testfälle ausgeführten Anweisungen an der Gesamtzahl der ausführbaren Anweisungen im Code angibt.",
   "Es handelt sich um eine Metrik zur Messung der Anzahl der durch Testfälle ausgeführten Anweisungen im Code, die keine Fehlerwirkung aufgedeckt haben.",
   "Es handelt sich um eine Metrik, die eine Wahr/Falsch-Bestätigung gibt, ob alle Anweisungen durch ausgeführte Testfälle abgedeckt sind."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Anweisungsüberdeckung = ausgeführte / alle Anweisungen. 100 % Anweisungen heißt NICHT alle Entscheidungen getestet.",
  "explanation": "a) FALSCH – Anweisungsüberdeckung misst den prozentualen Anteil der durch Testfälle ausgeführten (überdeckten) Anweisungen und hat keinen Bezug zur Zahl der ausgeführten Testfälle (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.1, 1. Absatz).\n\nb) KORREKT – Der Anweisungstest hat zum Ziel, Testfälle so zu entwerfen, dass Anweisungen im Code ausgeführt werden, bis eine akzeptable Anweisungsüberdeckung erreicht ist. Die Anweisungsüberdeckung wird als Anzahl der durch Testfälle ausgeführten Anweisungen geteilt durch die Gesamtzahl der ausführbaren Anweisungen im Testobjekt gemessen und in Prozent ausgedrückt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.1, 1. Absatz).\n\nc) FALSCH – Die Anweisungsüberdeckung misst nur ausgeführte Anweisungen, ohne Berücksichtigung, ob damit Fehlerwirkungen bzw. Fehlerzustände ermittelt wurden oder nicht (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.1, 1. und 2. Absatz).\n\nd) FALSCH – Die Anweisungsüberdeckung ist eine Metrik, die Prozentwerte liefert und keine Wahr/Falsch-Aussage macht (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.1, 1. Absatz). Eine Wahr/Falsch-Aussage könnte für das Testziel einer prozentualen Anweisungsüberdeckung ermittelt werden, z. B. 100 % Anweisungsüberdeckung, aber nicht für die Anweisungsüberdeckung selbst."
 },
 {
  "id": "A-25",
  "set": "A",
  "num": 25,
  "lo": "FL-4.3.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen trifft nicht auf White-Box-Tests zu?",
  "images": [],
  "options": [
   "White-Box-Test ist ein Test, der auf der Analyse der internen Struktur einer Komponente oder eines Systems basiert.",
   "White-Box-Überdeckungsmetriken können helfen, zusätzliche Tests zu identifizieren, um die Codeüberdeckung zu erhöhen.",
   "White-Box-Testverfahren können ergänzend zu den Black-Box-Testverfahren eingesetzt werden, um das Vertrauen in den Code zu stärken.",
   "White-Box-Tests sind besonders geeignet, vollständig fehlende Implementierungen von Anforderungen zu erkennen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "White-Box-Wert: testet, was WIRKLICH gebaut wurde – auch Code, den die Spezifikation vergisst. Schwäche: findet keine fehlenden Anforderungen.",
  "explanation": "a) FALSCH – als Antwortoption – Die Aussage trifft auf White-Box-Tests zu. White- Box-Testverfahren basieren auf der Analyse der internen Struktur und Verarbeitung des Testobjekts (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.1; ergänzend Glossar).\n\nb) FALSCH – als Antwortoption – White-Box-Überdeckungsmetriken bieten ein objektives Maß für die Überdeckung und liefern die notwendigen Informationen, um zusätzliche Tests zur Erhöhung der Überdeckung zu erstellen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.3, 1. Absatz, 1. Satz).\n\nc) FALSCH – als Antwortoption – White-Box-Testverfahren können komplementär zu den Black-Box-Testverfahren eingesetzt werden. Dies wird sogar empfohlen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.3, 3. Absatz).\n\nd) KORREKT – Dies trifft nicht auf White-Box-Tests zu. White-Box-Testverfahren beruhen auf der vorhandenen internen Struktur bzw. Implementierung des Testobjekts. Wenn eine Anforderung gar nicht oder nicht vollständig implementiert wurde, erkennen White-Box-Tests die daraus resultierenden Fehlerzustände möglicherweise nicht (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.3.3, 1. Absatz, letzter Satz)."
 },
 {
  "id": "A-26",
  "set": "A",
  "num": 26,
  "lo": "FL-4.4.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN das Konzept der intuitiven Testfallermittlung?",
  "images": [],
  "options": [
   "Bei der intuitiven Testfallermittlung nutzen Sie Ihr Wissen über und Ihre Erfahrung mit in der Vergangenheit gefundenen Fehlerzuständen und Fehlerwirkungen und typischen Fehlhandlungen von Entwicklern.",
   "Bei der intuitiven Testfallermittlung werden Ihre persönlichen Erfahrungen mit der Entwicklung und den Fehlhandlungen, die Sie als Entwickler gemacht haben, genutzt.",
   "Bei der intuitiven Testfallermittlung müssen Sie sich vorstellen, dass Sie der Benutzer des Testobjekts sind und Fehlerwirkungen erraten, die der Benutzer bei der Interaktion mit dem Testobjekt machen könnte.",
   "Bei der intuitiven Testfallermittlung müssen Sie die Entwicklungsaufgabe schnell selbst durchführen, um die Fehlerzustände und Fehlerwirkungen zu erkennen, die ein Entwickler machen könnte."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Intuitive Testfallermittlung (Error Guessing): Erfahrung zielt auf typische Fehler – Eingaben, Randfälle, bekannte Schwächen. Fehlerattacken!",
  "explanation": "a) KORREKT – Das Grundkonzept der intuitiven Testfallermittlung (engl. Error Guessing) besteht darin, dass der Tester versucht zu erraten, welche Fehlhandlungen ein Entwickler gemacht haben könnte, und welche Fehlerzustände im Testobjekt vorhanden sein könnten, basierend auf früheren Erfahrungen. Diese Methode beruht auf der Annahme, dass Fehlhandlungen, Fehlerzustände und Fehlerwirkungen sich wiederholen oder ähnlich sind. Sie können Ihre Testfälle so gestalten, dass sie diese potenziellen Fehlhandlungen, Fehlerzustände und Fehlerwirkungen aufdecken (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.4.1, 1. Absatz).\n\nb) FALSCH – Persönliche Entwicklungserfahrung kann bei der intuitiven Testfallermittlung hilfreich sein, ist aber nicht das definierende Merkmal. Das Verfahren beruht allgemeiner auf dem Wissen und der Erfahrung des Testers über typische Fehlhandlungen, Fehlerzustände und Fehlerwirkungen.\n\nc) FALSCH – Die intuitive Testfallermittlung ist kein reines Gebrauchstauglichkeitstestverfahren (Usability-Verfahren), um zu erraten, wie Benutzer möglicherweise fehlerhaft mit dem Testobjekt interagieren, sondern geht deutlich darüber hinaus (siehe Option a).\n\nd) FALSCH – Das eigene Durchführen der Entwicklungsaufgabe hat mehrere Schwachpunkte, die es unpraktisch macht, wie z. B. die Tatsache, dass der Tester über die gleichen Fähigkeiten wie der Entwickler verfügen müsste und der Zeitaufwand für die eigene Durchführung der Entwicklung hoch ist. Es ist keine intuitive Testfallermittlung (engl. Error Guessing)."
 },
 {
  "id": "A-27",
  "set": "A",
  "num": 27,
  "lo": "FL-4.4.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "In Ihrem Projekt hat sich die Freigabe einer brandneuen Anwendung verzögert und die Testdurchführung hat spät begonnen, aber Sie verfügen über sehr detailliertes Fachwissen und gute analytische Fähigkeiten. Die vollständige Anforderungsspezifikation wurde noch nicht an Sie weitergegeben und die Geschäftsleitung bittet um die Vorlage erster Testergebnisse. Welches Testverfahren ist in dieser Situation AM BESTEN geeignet?",
  "images": [],
  "options": [
   "Checklistenbasiertes Testen",
   "Intuitive Testfallermittlung",
   "Exploratives Testen",
   "Anweisungstest"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Explorativ: gleichzeitig LERNEN + ENTWERFEN + TESTEN, oft in Sessions mit Charter. Stark bei wenig Zeit oder dünner Spezifikation.",
  "explanation": "a) FALSCH – Es handelt sich um ein neues Produkt. Sie haben wahrscheinlich noch keine zum Produkt passende Checkliste.\n\nb) FALSCH – Intuitive Testfallermittlung kann zwar Erfahrungswissen nutzen, adressiert aber nicht so direkt die Kombination aus wenigen Spezifikationen, hohem Zeitdruck und gleichzeitigem Lernen über das Testobjekt wie exploratives Testen.\n\nc) KORREKT – Exploratives Testen ist vor allem dann sinnvoll, wenn nur wenige Spezifikationen bekannt sind und/oder der Zeitplan für die Tests eng gesteckt ist (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.4.2, 3. Absatz, 1. Satz).\n\nd) FALSCH – Der Anweisungstest ist ein White-Box-Testverfahren, bei dem Testfälle so entworfen werden, dass Anweisungen im Code ausgeführt werden. In der beschriebenen Situation stehen wenige Spezifikationen und schnelle erste Testergebnisse im Vordergrund; daher passt exploratives Testen besser."
 },
 {
  "id": "A-28",
  "set": "A",
  "num": 28,
  "lo": "FL-4.5.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aktivitäten beschreibt AM BESTEN die Art und Weise, wie A kzeptanzkriterien für eine User -Story formuliert werden können?",
  "images": [],
  "options": [
   "Durchführung von Retrospektiven zur Ermittlung der tatsächlichen Bedürfnisse der Stakeholder in Bezug auf eine bestimmte User-Story.",
   "Verwendung des Formats GIVEN/WHEN/THEN zur Beschreibung einer beispielhaften Testbedingung im Zusammenhang mit einer bestimmten User- Story.",
   "Mündliche Kommunikation, um das Risiko zu verringern, dass die Akzeptanzkriterien von anderen missverstanden werden.",
   "Dokumentieren von Risiken im Zusammenhang mit einer bestimmten User- Story in einem Testkonzept, um das risikobasierte Testen dieser User-Story zu erleichtern."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Akzeptanzkriterien schreiben: szenariobasiert (Given/When/Then) oder regelorientiert (Checkliste, Tabelle). Immer prüfbar!",
  "explanation": "a) FALSCH – Retrospektiven dienen dazu, Erkenntnisse zu gewinnen und den Entwicklungs- und Testprozess zu verbessern, nicht dazu, die Akzeptanzkriterien für eine User-Story zu dokumentieren.\n\nb) KORREKT – Dies ist eine Standardmethode zur Dokumentation von Akzeptanzkriterien für eine User-Story (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.5.2, 3. Absatz, 1. Aufzählungspunkt).\n\nc) FALSCH – Mündliche Kommunikation kann Teil der Konversation im 3C-Modell sein. Akzeptanzkriterien entsprechen jedoch der Bestätigung und sollten klar definiert und eindeutig formuliert sein (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.5.1, 1. Absatz, 1. Aufzählungspunkt).\n\nd) FALSCH – Akzeptanzkriterien beziehen sich auf eine User-Story, nicht auf ein Testkonzept. Außerdem sind Akzeptanzkriterien die Bedingungen, die erfüllt sein müssen, um zu entscheiden, ob die User-Story vollständig ist. Risiken sind keine solchen Bedingungen."
 },
 {
  "id": "A-29",
  "set": "A",
  "num": 29,
  "lo": "FL-4.5.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ihr Team verfolgt den Ansatz der abnahmetestgetriebenen Entwicklung (ATDD) und analysiert die folgende User-Story, um Testfälle zu erstellen. Als registrierter Kunde möchte ich meine bisherigen Bestellungen auf der Website des Unternehmens einsehen können, um einen Überblick über meine Einkäufe zu behalten. Ihr Team ermittelt die folgende Liste von Testfällen. Welcher der Testfälle ist für diese User-Story nicht relevant?",
  "images": [],
  "options": [
   "Eingabe: Der Kunde loggt sich in sein Konto auf der Website ein und klickt auf die Schaltfläche \"Bestellhistorie anzeigen\". Erwartete Ausgabe: Das System zeigt eine Liste aller früheren Bestellungen des Kunden an, einschließlich Datum, Bestellnummer und Gesamtkosten.",
   "Eingabe: Der eingeloggte Kunde klickt in der Liste seiner Bestellungen auf eine Bestellung. Erwartete Ausgabe: Das System zeigt die einzelnen gekauften Artikel mit Preis und Menge an.",
   "Eingabe: Der eingeloggte Kunde öffnet die Bestellhistorie. Erwartete Ausgabe: Das System zeigt die Bestellungen in einer nachvollziehbaren Reihenfolge mit Datum, Bestellnummer und Gesamtkosten an.",
   "Eingabe: Ein neu registrierter Kunde loggt sich ein und gibt eine erste Bestellung ein. Erwartete Ausgabe: Das System akzeptiert die Bestellung und legt die zugehörigen Daten ab."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung.",
  "explanation": "a) FALSCH – Der Testfall passt zur User-Story, da er prüft, ob ein registrierter Kunde seine Bestellhistorie mit Datum, Bestellnummer und Gesamtkosten einsehen kann (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.5.3, 4. und 5. Absatz).\n\nb) FALSCH – Der Testfall passt zur User-Story, da er einen potenziellen Aspekt (Kunde soll einen Überblick über seine Einkäufe bekommen) der User-Story prüft (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 4.5.3, 4. und 5. Absatz).\n\nc) FALSCH – Der Testfall passt zur User-Story, da er einen potenziellen Aspekt (Kunde soll einen Überblick über seine Einkäufe bekommen) der User-Story prüft (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 4.5.3, 4. und 5. Absatz).\n\nd) KORREKT – Der Testfall hat keine Relevanz für diese User-Story, da er das Aufgeben und Speichern einer ersten Bestellung prüft. Die User-Story bezieht sich jedoch auf das Einsehen bisheriger Bestellungen bzw. der Bestellhistorie. Der Testfall kann für ein Online-Bestellsystem grundsätzlich relevant sein, geht aber über diese User-Story hinaus (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 4.5.3)."
 },
 {
  "id": "A-30",
  "set": "A",
  "num": 30,
  "lo": "FL-5.1.2",
  "k": "K1",
  "category": "Testmanagement",
  "question": "Wie schaffen Tester einen Mehrwert für die Iterationsplanung?",
  "images": [],
  "options": [
   "Die Tester bestimmen die Priorität der zu entwickelnden User-Storys.",
   "Die Tester konzentrieren sich nur auf die Verfeinerung der funktionalen Aspekte des zu prüfenden Systems.",
   "Die Tester beteiligen sich an der Risikoanalyse und bestimmen die Testbarkeit von User-Storys.",
   "Die Tester ermöglichen die Freigabe qualitativ hochwertiger Software durch frühzeitigen Testentwurf während der Releaseplanung."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Tester in der Planung: machen Storys testbar, schätzen Testaufwand mit, denken Risiken und Abhängigkeiten voraus.",
  "explanation": "a) FALSCH – Die Prioritäten für die User-Storys werden vom Vertreter der unternehmensinternen Fachabteilung zusammen mit dem Entwicklungsteam festgelegt.\n\nb) FALSCH – Die Tester konzentrieren sich sowohl auf funktionale als auch auf nicht- funktionale Aspekte des zu prüfenden Systems (vgl. CTFL-Lehrplan V4.0.2: Es ist ein Teil des Mehrwerts, vgl. Abschnitt 5.1.2, 3. Absatz, aber das 'nur' macht es falsch).\n\nc) KORREKT – Laut dem Lehrplan ist dies eine der Möglichkeiten, wie Tester einen Mehrwert für die Iterationsplanung schaffen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.1.2, 3. Absatz, 2. Satz).\n\nd) FALSCH – Die Aussage bezieht sich auf Releaseplanung und Freigabe, nicht auf den in der Frage geforderten Mehrwert für die Iterationsplanung. In der Releaseplanung wirken Tester u. a. an testbaren User-Storys, Akzeptanzkriterien, Risikoanalysen, Aufwandsschätzungen, Testansatz und Testplanung mit; der in c) genannte Beitrag beschreibt die Iterationsplanung jedoch genauer (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 5.1.2, 2. Absatz)."
 },
 {
  "id": "A-31",
  "set": "A",
  "num": 31,
  "lo": "FL-5.1.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Optionen nennt Endekriterien für den Test eines Systems?",
  "images": [],
  "options": [
   "Testumgebung ist einsatzbereit.",
   "Anmeldung am Testobjekt durch den Tester ist möglich.",
   "Der vereinbarte Zielwert für die Fehlerdichte ist erfüllt.",
   "Anforderungen sind in das Format GIVEN/WHEN/THEN übersetzt worden."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Eingangskriterien = Startbedingung (Definition of Ready). Endekriterien = Fertig-Bedingung (Definition of Done).",
  "explanation": "a) FALSCH – Die Einsatzbereitschaft der Testumgebung ist ein Kriterium für die Verfügbarkeit von Ressourcen; daher gehört es zu den Eingangskriterien (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 5.1.3, 2. Absatz).\n\nb) FALSCH – Es handelt sich um ein Kriterium der Verfügbarkeit von Ressourcen; daher gehört es zu den Eingangskriterien (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.1.3, 2. Absatz).\n\nc) KORREKT – Die Fehlerdichte ist eine Messung der Gründlichkeit und kann daher als Endekriterium verwendet werden (vgl. CTFL-Lehrplan V4.0.2; Abschnitt 5.1.3, 3. Absatz).\n\nd) FALSCH – In ein bestimmtes Format übersetzte Anforderungen führen idealerweise zu testbaren Anforderungen, daher gehört das zu den Eingangskriterien (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.1.3, 2. Absatz)."
 },
 {
  "id": "A-32",
  "set": "A",
  "num": 32,
  "lo": "FL-5.1.4",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Ihr Team verwendet das Drei -Punkt-Schätzungsverfahren, um den Testaufwand für eine neue, risikoreiche Funktion zu schätzen. Es wurden die folgenden Schätzungen vorgenommen: • optimistischste Schätzung: 2 Personenstunden • wahrscheinlichste Schätzung: 11 Personenstunden • pessimistischste Schätzung: 14 Personenstunden Wie lautet die endgültige Schätzung?",
  "images": [],
  "options": [
   "9 Personenstunden",
   "10 Personenstunden",
   "11 Personenstunden",
   "14 Personenstunden"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6.",
  "explanation": "Für die Drei-Punkt-Schätzung gilt: E = (optimistischste + 4*wahrscheinlichste + pessimistischste) / 6 E = (2+(4*11) +14) / 6 = 10 Folglich ist b) KORREKT und a), c) und d) sind FALSCH."
 },
 {
  "id": "A-33",
  "set": "A",
  "num": 33,
  "lo": "FL-5.1.5",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie testen eine mobile Applikation, die es Benutzern ermöglicht, ein nahegelegenes Restaurant zu finden, das die gewünschte Art des Essens anbietet. Gegeben ist die folgende Liste von Testfällen, Prioritäten (eine kleinere Zahl bedeutet eine höhere Priorität) und Abhängigkeiten: Testfall-ID Abgedeckte Testbedingung Priorität logisch abhängig von TF 001 Art des Essens auswählen 3 Keinem Testfall TF 002 Restaurant auswählen 2 TF 001 TF 003 Wegbeschreibung bekommen 1 TF 002 TF 004 Restaurant anrufen 2 TF 002 TF 005 Reservierung vornehmen 3 TF 002 Welcher der folgenden Testfälle soll als dritter ausgeführt werden?",
  "images": [
   "images/A-33.png"
  ],
  "options": [
   "TF 003",
   "TF 005",
   "TF 002",
   "TF 001"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall.",
  "explanation": "Der Test TF 001 muss zuerst durchgeführt werden, gefolgt von TF 002, um die Abhängigkeiten zu berücksichtigen. Danach folgt TF 003, da nach Erfüllung der Abhängigkeiten dieser Testfall die höchste Priorität, d. h. die niedrigste Prioritätszahl, besitzt.\n\na) KORREKT\n\nb) FALSCH – TF 005 ist nach TF 002 ausführbar, hat aber eine niedrigere Priorität als TF 003 und TF 004.\n\nc) FALSCH – TF 002 muss bereits als zweiter Testfall ausgeführt werden, damit die abhängigen Testfälle ausführbar werden.\n\nd) FALSCH – TF 001 muss bereits als erster Testfall ausgeführt werden, da TF 002 davon abhängt."
 },
 {
  "id": "A-34",
  "set": "A",
  "num": 34,
  "lo": "FL-5.1.7",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Betrachten Sie die folgenden Tests (1-4) und Testquadranten (A-D): 1. Gebrauchstauglichkeitstest 2. Komponententest 3. Funktionaler Test 4. Zuverlässigkeitstest A. Testquadrant Q1: Technologieorientierung, Unterstützung des Teams B. Testquadrant Q2: Geschäftlich orientiert, Unterstützung des Teams C. Testquadrant Q3: Geschäftlich orientiert, kritische Betrachtung des Produkts D. Testquadrant Q4: Technologieorientierung, kritische Betrachtung des Produkts Wie lassen sich die obigen Test arten/Teststufen den Testquadranten zuordnen?",
  "images": [],
  "options": [
   "1C, 2A, 3B, 4D",
   "1D, 2A, 3C, 4B",
   "1C, 2B, 3D, 4A",
   "1D, 2B, 3C, 4A"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit).",
  "explanation": "Der Gebrauchstauglichkeitstest ist Q3 (1C) zugeordnet, der Komponententest Q1 (2A), der funktionale Test Q2 (3B) und der Zuverlässigkeitstest in Q4 (4D). Folglich ist a) KORREKT."
 },
 {
  "id": "A-35",
  "set": "A",
  "num": 35,
  "lo": "FL-5.2.4",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Im Rahmen einer Risikoanalyse wurde das folgende Risiko ermittelt und bewertet: • Risiko: Zu lange Antwortzeit bei der Bereitstellung eines Suchergebnisses • Eintrittswahrscheinlichkeit: mittel; Schadensausmaß: hoch • Reaktion auf das Risiko: o Ein unabhängiges Testteam führt während der Systemtests einen Performanztest durch. o Eine ausgewählte Stichprobe von Endnutzern führt vor der Freigabe Alpha- und Beta-Tests durch. Welche Art von Maßnahmen wurde oben vorgeschlagen, um auf das ermittelte Risiko zu reagieren?",
  "images": [],
  "options": [
   "Risikoakzeptanz",
   "Notfallplan",
   "Risikominderung",
   "Risikotransfer"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Reaktion auf Produktrisiken: Testumfang/-tiefe anpassen, priorisieren, zusätzliche Maßnahmen (Reviews, Schulung, andere Teststufen).",
  "explanation": "a) FALSCH – Das Risiko wird nicht akzeptiert; es werden konkrete Maßnahmen vorgeschlagen.\n\nb) FALSCH – Es werden keine Notfallpläne vorgeschlagen.\n\nc) KORREKT – Die vorgeschlagenen Maßnahmen sind testbezogene Maßnahmen zur Verringerung der Risikostufe, z. B. durch ein geeignetes Maß an Unabhängigkeit beim Testen und durch geeignete Testarten für das betroffene Qualitätsmerkmal Performanz (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.2.4, letzter Absatz, Punkteliste).\n\nd) FALSCH – Das Risiko wird nicht übertragen, sondern gemindert."
 },
 {
  "id": "A-36",
  "set": "A",
  "num": 36,
  "lo": "FL-5.3.2",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen zum Zweck und Inhalt von Testberichten ist zutreffend?",
  "images": [],
  "options": [
   "Testabschlussberichte werden in regelmäßigen Abständen erstellt und verteilt, um die Stakeholder hinsichtlich des Fortschrittes zu informieren.",
   "Ein Testfortschrittsbericht enthält die abschließende Bewertung der Tests und der Qualität des Produkts auf Grundlage der Endekriterien.",
   "Ein Testabschlussbericht wird erstellt, wenn eine Teststufe abgeschlossen wurde, und baut auf Testfortschrittsberichten und zusätzlichen Daten auf.",
   "Testfortschrittsberichte werden während des Testabschlusses erstellt, um die Erfüllung der Endekriterien belegen zu können."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Testfortschrittsbericht: LAUFEND, ans Team, steuert. Testabschlussbericht: am ENDE, an Stakeholder, bilanziert. Sprache an Zielgruppe anpassen!",
  "explanation": "a) FALSCH – In regelmäßigen Abständen werden typischerweise Testfortschrittsberichte erstellt und verteilt, um Stakeholder über den Fortschritt zu informieren. Testabschlussberichte werden dagegen beim Abschluss einer Testaktivität erstellt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2, Absatz 2).\n\nb) FALSCH – Dies sind typische Informationen des Testabschlussberichtes (vgl. CTFL- Lehrplan V4.0.2, Abschnitt 5.3.2, Absatz 3, Aufzählungspunkte 2 und 3).\n\nc) KORREKT – Testabschlussberichte werden an Zeitpunkten erstellt und verteilt, an denen inhaltlich ähnliche Aufgaben abgeschlossen wurden, beispielsweise ein Projekt, eine Teststufe, eine Testart, eine Iteration etc. (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2, Absatz 1, letzter Satz und Absatz 3).\n\nd) FALSCH – Testfortschrittsberichte werden kontinuierlich während der Testüberwachung und Teststeuerung erstellt, Testabschlussberichte hingegen während des Testabschlusses. Zudem wird die Erfüllung der Endekriterien mit dem Testabschlussbericht belegt (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2, Absatz 3)."
 },
 {
  "id": "A-37",
  "set": "A",
  "num": 37,
  "lo": "FL-5.4.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Sie müssen eines der automatisierten Testskripte aktualisieren, um es an eine neue Anforderung anzupassen. Welcher Prozess schreibt vor, dass Sie eine neue Version des Testskripts in der Versionsverwaltung erstellen?",
  "images": [],
  "options": [
   "Management der Verfolgbarkeit",
   "Wartungstest",
   "Konfigurationsmanagement",
   "Anforderungsmanagement"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde.",
  "explanation": "a) FALSCH – Verfolgbarkeit (engl. Traceability) ist die Beziehung zwischen zwei oder mehr Arbeitsprodukten, nicht zwischen verschiedenen Versionen desselben Arbeitsprodukts.\n\nb) FALSCH – Wartungstest kann durch Änderungen ausgelöst werden und prüft deren Auswirkungen. Die Versionsverwaltung eines Testskripts ist jedoch Aufgabe des Konfigurationsmanagements.\n\nc) KORREKT – Um das Testen zu unterstützen, kann das Konfigurationsmanagement die Versionsverwaltung aller Testelemente beinhalten (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.4, 4. Absatz, 1. Satz).\n\nd) FALSCH – Anforderungsmanagement ist das Erheben, Dokumentieren und Verwalten von Anforderungen; es ist nicht eng mit der Versionierung von Testskripten verbunden."
 },
 {
  "id": "A-38",
  "set": "A",
  "num": 38,
  "lo": "FL-5.5.1",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie haben in Ihrer Rolle als Projektleiter den folgenden Fehlerbericht von den Entwicklern weitergeleitet bekommen, weil die Entwickler die beschriebene Anomalie nicht reproduzieren können. Anwendung hängt sich auf ID 713-20230401 2022-Mai-03 – John Doe – Abgelehnt Schweregrad: hoch; Priorität: hoch Die Anwendung hängt sich nach der Eingabe von \"Testeingabe: $ä\" im Feld Name auf dem Bildschirm zur Erstellung eines neuen Benutzers auf. Ich habe versucht, mich abzumelden und mit dem Konto test_admin01 anzumelden, das gleiche Problem. Mit anderen Testadm inistratorkonten versucht, dasselbe Problem. Keine Fehlermeldung erhalten; das Protokoll (siehe Anhang) enthält eine fatale Fehlermeldung. Basierend auf dem Testfall TC -1305 sollte die Anwendung die bereitgestellten Eingaben akzeptieren und den Benutzer erstellen. Bitte beheben Sie dieses Problem mit hoher Priorität, da diese Funktion mit REQ-0012 zusammenhängt, die eine wichtige neue fachliche Anforderung ist. Welche wichtigen Informationen, die für die Entwickler nützlich gewesen wären, fehlen in diesem Fehlerbericht?",
  "images": [
   "images/A-38.png"
  ],
  "options": [
   "Erwartetes Ergebnis und tatsächliches Ergebnis.",
   "Referenzen und Fehlerstatus.",
   "Testumgebung und Testobjekt (inkl. Version).",
   "Priorität und Schweregrad."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung.",
  "explanation": "a) FALSCH – Das erwartete Ergebnis ist \"Die Anwendung sollte die Eingaben akzeptieren und den Benutzer erstellen\". Das tatsächliche Ergebnis ist \"Die Anwendung hängt sich nach der Eingabe von ‘Testeingabe: $ä‘\" auf. Somit ist beides vorhanden.\n\nb) FALSCH – Es gibt einen Verweis auf den Testfall und die zugehörige Anforderung (Referenz), und der Fehler wird zurückgewiesen (Fehlerstatus). Beides ist also vorhanden.\n\nc) KORREKT – Wir wissen nicht, in welcher Testumgebung die Anomalie entdeckt wurde, und wir wissen auch nicht, welches Testobjekt bzw. welche Anwendung (und welche Version) davon betroffen ist (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 5.5, 3. Absatz, 4. Aufzählungspunkt).\n\nd) FALSCH – Priorität und Schweregrad sind im Fehlerbericht ausdrücklich angegeben („Schweregrad: hoch; Priorität: hoch“)."
 },
 {
  "id": "A-39",
  "set": "A",
  "num": 39,
  "lo": "FL-6.1.1",
  "k": "K2",
  "category": "Testwerkzeuge",
  "question": "Welche Testaktivitäten unterstützt ein Werkzeug zur Erstellung von Testdaten?",
  "images": [],
  "options": [
   "Testüberwachung und Teststeuerung",
   "Testanalyse und Testentwurf",
   "Testentwurf und Testrealisierung",
   "Testabschluss"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline).",
  "explanation": "a) FALSCH – Werkzeuge zur Erstellung von Testdaten unterstützen nicht primär Testüberwachung und Teststeuerung, sondern Testentwurf und Testrealisierung.\n\nb) FALSCH – In der Testanalyse werden Testbedingungen identifiziert. Im Testentwurf können Anforderungen an Testdaten definiert werden; die Erstellung bzw. Bereitstellung der Testdaten gehört zur Testrealisierung.\n\nc) KORREKT – Werkzeuge für Testentwurf und Testrealisierung erleichtern die Erstellung von Testfällen, Testdaten und Testabläufen (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 6.1, 3. Aufzählungspunkt).\n\nd) FALSCH – Testabschlussaktivitäten finden typischerweise zu Projektmeilensteinen statt, z. B. bei Freigabe, Ende der Iteration oder Abschluss einer Teststufe. Die Erstellung von Testdaten gehört nicht zum Testabschluss."
 },
 {
  "id": "A-40",
  "set": "A",
  "num": 40,
  "lo": "FL-6.2.1",
  "k": "K1",
  "category": "Testwerkzeuge",
  "question": "Welcher Punkt ist ein mögliches Risiko bei der Testautomatisierung?",
  "images": [],
  "options": [
   "Es kann zu unbekannten Nebenwirkungen im operativen Betrieb kommen.",
   "Es bestehen unrealistische Erwartungen hinsichtlich der Funktionalität eines Werkzeugs.",
   "Testwerkzeuge sind grundsätzlich nicht zuverlässig genug.",
   "Es kann die verfügbare Zeit für manuelle Tests auf Dauer reduziert sein."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit.",
  "explanation": "a) FALSCH – Unbekannte Seiteneffekte im operativen Betrieb sind kein im Lehrplan genannter typischer Risikoaspekt der Testautomatisierung.\n\nb) KORREKT – Die unrealistische Erwartung besteht darin, dass in einigen Fällen das Management der Meinung ist, dass mit der Einführung eines Testwerkzeugs alle Probleme gelöst sind (vgl. CTFL-Lehrplan V4.0.2, Abschnitt 6.2, 3. Absatz, 1. Aufzählungspunkt).\n\nc) FALSCH – Die Aussage ist zu pauschal. Der Lehrplan nennt nicht, dass Testwerkzeuge grundsätzlich unzuverlässig sind; Risiken entstehen eher durch unrealistische Erwartungen, ungeeignete Auswahl, falsche Nutzung oder Wartungsaufwand.\n\nd) FALSCH – Die Einführung einer Testautomatisierung kann zwischenzeitlich die Ressourcen für den manuellen Test verringern. Auf Dauer ist es ein Vorteil der Testautomatisierung, Zeit zu sparen. Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet) Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet)"
 },
 {
  "id": "B-1",
  "set": "B",
  "num": 1,
  "lo": "FL-1.2.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN, warum Testen im Softwareentwicklungslebenszyklus notwendig ist?",
  "images": [],
  "options": [
   "Dynamisches Testen ist die einzige Möglichkeit, die Qualität eines Testobjekts zu bewerten.",
   "Das Testen stellt sicher, dass die Benutzer die Bedürfnisse der Entwickler verstehen und nachvollziehen können.",
   "Testen wird ausschließlich durchgeführt, um regulatorische Standards zu erfüllen.",
   "Testen hilft, Fehlerzustände aufzudecken und damit die Qualität des Testobjekts zu verbessern."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Testen ist nötig: Fehler kosten Geld, Zeit, Ruf – je später gefunden, desto teurer die Korrektur.",
  "explanation": "a) FALSCH – Dynamisches Testen ist zwar ein wichtiges Mittel zur Qualitätsbewertung, aber nicht das einzige Mittel. Es gibt auch andere Mittel wie z. B. Code-Reviews und Inspektionen.\n\nb) FALSCH – Diese Aussage ergibt keinen Sinn. Die Benutzer müssen nicht die Bedürfnisse der Entwickler nachvollziehen können. Vielmehr wird durch Testen sichergestellt, dass die Bedürfnisse der Benutzer während des Entwicklungszyklus berücksichtigt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 1.2.1, 3. Absatz).\n\nc) FALSCH – Obwohl Testen dazu beitragen kann, regulatorischen Anforderungen zu entsprechen, hebt der CTFL-Lehrplan V4.0 hervor, dass Testen auch andere wichtige Funktionen erfüllt, wie die Bewertung der Qualität und die Unterstützung von Freigabeentscheidungen im SDLC.\n\nd) KORREKT – Der CTFL-Lehrplan V4.0 erklärt, dass Testen Fehlerzustände identifiziert, die durch Debugging behoben werden können, was implizit zu einer höheren Qualität des Testobjekts beiträgt."
 },
 {
  "id": "B-2",
  "set": "B",
  "num": 2,
  "lo": "FL-1.2.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Was ist der Unterschied zwischen Testen und Qualitätssicherung?",
  "images": [],
  "options": [
   "Testen ist ein prozessorientierter, präventiver Ansatz, während Qualitätssicherung ein produktorientierter, korrigierender Ansatz ist.",
   "Qualitätssicherung ist prozessorientiert und zielt auf deren Verbesserung, während Testen durch produktorientierte Maßnahmen auf angemessene Qualität zielt.",
   "Testen und Qualitätssicherung sind identisch und können synonym verwendet werden.",
   "Qualitätssicherung bezieht sich nur auf den Testprozess, während Testen den gesamten Entwicklungsprozess umfasst."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testen = produktorientiert + korrigierend (Qualitätssteuerung). QS = prozessorientiert + präventiv. Nicht dasselbe!",
  "explanation": "a) FALSCH – Diese Aussage ist falsch, da laut Lehrplantext Testen als produktorientierter, korrigierender Ansatz beschrieben wird, der sich auf Aktivitäten konzentriert, die das Erreichen eines angemessenen Qualitätsniveaus unterstützen. Im Gegensatz dazu ist Qualitätssicherung ein prozessorientierter, präventiver Ansatz, der die Implementierung und Verbesserung von Prozessen zum Ziel hat (siehe CTFL Lehrplan V4.0, Abschnitt 1.2.2, 2. Absatz, 1. Satz).\n\nb) KORREKT – Diese Aussage ist korrekt und stimmt mit dem Lehrplantext überein, der angibt, dass Testen sich auf die Unterstützung des Erreichens eines angemessenen Qualitätsniveaus durch produktorientierte Aktivitäten konzentriert, während Qualitätssicherung prozessorientiert ist und die Implementierung und Verbesserung von Prozessen fokussiert (siehe CTFL Lehrplan V4.0, Abschnitt 1.2.2, 2. Absatz).\n\nc) FALSCH – Diese Aussage ist falsch, da im Lehrplantext ausdrücklich darauf hingewiesen wird, dass Testen und Qualitätssicherung nicht dasselbe sind, auch wenn die Begriffe häufig synonym verwendet werden. Testen ist produkt- und fehlerkorrekturorientiert, während Qualitätssicherung prozessorientiert und präventiv ist (siehe CTFL Lehrplan V4.0, Abschnitt 1.2.2, 1. Absatz).\n\nd) FALSCH – Diese Aussage ist falsch, da laut Lehrplantext Qualitätssicherung sich sowohl auf den Entwicklungs- als auch auf den Testprozess bezieht und von allen Projektbeteiligten verantwortet wird, während Testen eine Form der Qualitätssteuerung ist, die produktorientiert und korrigierend wirkt (siehe CTFL Lehrplan V4.0, Abschnitt 1.2.2, 3. Absatz, letzter Satz)."
 },
 {
  "id": "B-3",
  "set": "B",
  "num": 3,
  "lo": "FL-1.3.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Ein Tester hat über einen Zeitraum von 5 Jahren Softwareanwendungen auf mobilen Geräten getestet. Über einen langen Zeitraum hat der Tester die bestehenden Testfälle nicht verändert und auch keine neuen Testfälle erstellt. Bei neueren Versionen der mobilen Plattform sind mehr Fehlerwirkungen von den Nutzern gemeldet worden. Welchen Grundsatz des Testens hat der Tester nicht beachtet?",
  "images": [],
  "options": [
   "Testen ist abhängig vom Umfeld.",
   "Vollständiges Testen ist nicht möglich.",
   "Tests nutzen sich ab.",
   "Fehlerzustände treten gehäuft auf."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar.",
  "explanation": "a) FALSCH – Das Testen ist abhängig vom Umfeld bzw. dem Kontext, egal, ob manuell oder automatisiert (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 6. Grundsatz). Das ändert jedoch nichts an der Tatsache, dass – wie oben beschrieben – immer weniger Fehler aufgedeckt werden.\n\nb) FALSCH – Vollständiges Testen ist, außer in trivialen Fällen, unmöglich, egal wie viel Aufwand in das Testen investiert wird (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 2. Grundsatz). Dies führt aber nicht dazu, dass – wie oben beschrieben – immer weniger Fehler aufgedeckt werden.\n\nc) KORREKT – Der Grundsatz “Tests nutzen sich ab” (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 5. Grundsatz) besagt, dass die Wiederholung unveränderter Tests beim Auffinden von Fehlerzuständen zunehmend ineffektiv wird („Wiederholungen haben keine Wirksamkeit“). Um neue Fehlerzustände zu finden, müssen bestehende Tests und Testdaten modifiziert und neue Tests erstellt werden.\n\nd) FALSCH – Grundsätzlich gilt, dass Fehlerzustände oft gehäuft in wenigen Komponenten auftreten (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 4. Grundsatz). Dies steht jedoch in keinem Zusammenhang damit, dass – wie oben beschrieben – immer weniger Fehler aufgedeckt werden."
 },
 {
  "id": "B-4",
  "set": "B",
  "num": 4,
  "lo": "FL-1.4.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Betrachten Sie das folgende Testmittel: Test-Charta #04.018 Sitzungsdauer: 1h Erforsche die Registrierungsseite Mit verschiedenen fehlerhaften Eingabesätzen Zu entdecken Fehler beim Registrierungsvorgang bei fehlerhaften Eingaben In welcher Testaktivität wird dieses Testmittel erstellt?",
  "images": [],
  "options": [
   "Testplanung",
   "Testüberwachung und Teststeuerung",
   "Testanalyse",
   "Testentwurf"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Testmittel = Ergebnisse der Testaktivitäten: Testkonzept (Planung) · Testfälle (Entwurf) · Skripte/Daten (Realisierung) · Protokolle/Berichte (Durchführung/Abschluss).",
  "explanation": "a. FALSCH – Unter Testplanung versteht man die Erstellung oder Aktualisierung eines Testkonzepts. Ein Testkonzept ist ein Dokument, das den Umfang, die Vorgehensweise, die Ressourcen und den Zeitplan der geplanten Testaktivitäten beschreibt. Eine Test- Charta ist kein Testkonzept, sondern ein flexibleres und informelleres Dokument, das eine Testsitzung beim explorativen Testen anleitet (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3). b. FALSCH – Die Testüberwachung und Teststeuerung besteht darin, den Status der Testaktivitäten zu überprüfen, Abweichungen von den geplanten oder erwarteten Ergebnissen festzustellen und über den Testfortschritt und die Qualität zu berichten. Eine Test-Charta ist kein Bericht oder eine Statusaktualisierung, sondern ein Dokument, das festlegt, was zu untersuchen ist, wie es zu untersuchen ist und wonach bei explorativen Tests zu suchen ist (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3). c. FALSCH – Unter Testanalyse versteht man die Analyse der Testbasis (z. B. Anforderungen, Design, Architektur usw.) und die Definition dessen, was getestet werden soll, in Form von Testbedingungen. Eine Testbedingung ist ein Element oder Ereignis einer Komponente oder eines Systems, das durch einen oder mehrere Testfälle verifiziert werden kann. Eine Test-Charta ist keine Liste von Testbedingungen, sondern ein Dokument, das den Umfang, die Ziele und die Herangehensweise einer Testsitzung für exploratives Testen definiert (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3). d. KORREKT – Der Testentwurf ist die Ableitung und Spezifikation von Testfällen aus Testbedingungen. Ein Testfall ist ein Satz von Eingaben, Vorbedingungen, Aktionen (falls anwendbar), erwarteten Ergebnissen und Nachbedingungen, der für ein bestimmtes Testziel oder eine bestimmte Testbedingung entwickelt wird. Eine Test-Charta ist eine Form des Testentwurfs, die festlegt, was getestet werden soll, wie getestet werden soll und wonach beim explorativen Testen gesucht werden soll. Bei dem obigen Testmittel handelt es sich um eine Test-Charta. Test-Chartas sind das Ergebnis der Testentwicklung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3). Folglich ist d) KORREKT."
 },
 {
  "id": "B-5",
  "set": "B",
  "num": 5,
  "lo": "FL-1.4.2",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welcher der folgenden Aspekte beeinflusst AM EHESTEN die Durchführung von Tests für ein bestimmtes Testobjekts?",
  "images": [],
  "options": [
   "Die durchschnittliche Erfahrung des Marketingteams des Unternehmens.",
   "Das Wissen der Benutzer, dass ein neues System für sie entwickelt wird.",
   "Die Anzahl der Jahre an Testerfahrung der Mitglieder des Testteams.",
   "Die Organisationsstruktur der Benutzer der zu entwickelnden Anwendung."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Kein Einheitstest: Kontext (Risiko, Branche, Vorgehen, Regularien) bestimmt Umfang und Formalität des Testprozesses.",
  "explanation": "a) FALSCH – Es ist sehr unwahrscheinlich, dass das durchschnittliche Erfahrungsniveau des Marketingteams (von dem die meisten im Marketing tätig sind) einen Einfluss darauf hat, wie die Tests für ein bestimmtes Testobjekts durchgeführt werden. Ebenso ist es unwahrscheinlich, dass das Team an der Testdurchführung beteiligt ist, wenn es sich um einen Abnahmetest handelt. Eine Einflussnahme des Marketings kann durch spezielle Anforderungen aus den Marktbedürfnissen erfolgen und somit ggf. Tests priorisieren, jedoch ohne konkreten Einfluss auf eine Testdurchführung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 3. Aufzählungspunkt).\n\nb) FALSCH – Es ist nicht ableitbar, dass das Wissen der Benutzer darüber, dass ein neues System für sie entwickelt wird, einen Einfluss auf die Testdurchführung hat. Benutzer können durch spezielle Bedürfnisse oder Erwartungen Einfluss auf Anforderungen haben und somit ggf. Tests priorisieren, aber ohne konkrete Auswirkung auf eine Testdurchführung (siehe CTFL -Lehrplan V4.0, Abschnitt 1.4.2, 1. Aufzählungspunkt).\n\nc) KORREKT – Die Anzahl der Jahre an Testerfahrung der Mitglieder des Testteams trägt dazu bei, die Fähigkeiten und das Wissen (z. B. über verschiedene Tools und Fehlertypen) zu bestimmen, die die Teammitglieder beim Testen anwenden und somit nutzen werden (siehe CTFL -Lehrplan V4.0, Abschnitt 1.4.2, 2. Aufzählungspunkt).\n\nd) FALSCH – Die Organisationsstruktur der Benutzer des zu entwickelnden Systems ist eher unbekannt und wird sich normalerweise nicht auf die Testdurchführung auswirken. Falls eine Zielorganisation bekannt ist, kann das Auswirkungen auf ein Rollenmodell und somit auf d ie Anforderungen haben, aber nicht direkt auf die Testdurchführung. Eine Organisation, die Einfluss hat, ist die Organisation des Entwicklungs- und Testteams. Das ist aber nicht Inhalt der Option (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 6. Aufzählungspunkt)."
 },
 {
  "id": "B-6",
  "set": "B",
  "num": 6,
  "lo": "FL-1.4.4",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Beachten Sie die folgenden Testaktivitäten: 1. Auswählen von Regressionstests 2. Bewertung der Vollständigkeit der Testdurchführung 3. Identifizieren, welche User-Storys offene Fehlerberichte haben 4. Bewertung, ob die Qualität und Anzahl der Tests für jede Anforderung mit dem Grad des Produktrisikos vereinbar sind Betrachten Sie die folgenden Möglichkeiten, wie die Verfolgbarkeit beim Testen helfen kann: A. Verbessern der Verständlichkeit von Teststatusberichten, um den Status der Elemente der Testbasis einzubeziehen B. Testaktivitäten nachvollziehbarer/prüfbarer machen C. Bereitstellung von Informationen zur Beurteilung der Prozessqualität D. Analysieren der Auswirkungen von Änderungen Welche der folgenden Zuordnungen passt AM BESTEN zu den aufgeführten Testaktivität en und den Möglichkeiten, wie \"die Verfolgbarkeit\" diese Aktivitäten jeweils unterstützen kann?",
  "images": [],
  "options": [
   "1D, 2B, 3C, 4A",
   "1B, 2D, 3A, 4C",
   "1D, 2C, 3A, 4B",
   "1D, 2B, 3A, 4C"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Verfolgbarkeit = Anforderung ↔ Testfall ↔ Fehler verknüpft: Überdeckung messbar, Änderungsauswirkungen sichtbar, Berichte aussagekräftig.",
  "explanation": "Verfolgbarkeit (engl. traceability) hilft bei: • Auswahl von Regressionstests bezogen auf das Ergebnis der Analyse der Auswirkungen von Änderungen (1D). • Bewertung der Überdeckung der Testdurchführung, um das Testen nachvollziehbarer zu machen (2B). • Identifizieren, welche User-Storys offene Fehlerberichte haben, was die Verständlichkeit von Teststatusberichten verbessert, um den Status von Testbasis- Elementen (3A) einzubeziehen. • Bewertung, ob die Qualität und Anzahl der Tests für jede Anforderung mit dem Grad des Produktrisikos übereinstimmen, was Informationen zur Bewertung der Testprozessqualität liefert, d. h. Ausrichtung des Testaufwands am Risiko (4C). Daher ist die Option d) KORREKT."
 },
 {
  "id": "B-7",
  "set": "B",
  "num": 7,
  "lo": "FL-1.5.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Sie sind Teil eines Testteams, das an der Entwicklung eines Steuerungssystems eines Hubschraubers beteiligt ist. Kürzlich wurde ein erfahrener Hubschrauberpilot als Tester für das Testteam eingestellt. Welche positiven Auswirkungen werden die allgemeinen Kompetenzen des neuen Testers vermutlich AM EHESTEN auf das Testteam haben?",
  "images": [],
  "options": [
   "Die Anwendung der 3-Wert-Grenzwertanalyse für einen gründlicheren Testentwurf im Systemtest.",
   "Inkonsistenzen und Ungenauigkeiten in den fachlichen Anforderungen werden effektiv aufgedeckt.",
   "Einsatz eines Werkzeugs zur Automatisierung von Zustandsübergangstests.",
   "Testergebnisse werden konstruktiver und defensiver an die Entwickler kommuniziert."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Tester-Kompetenzen: Kommunikation, kritisches Denken, Neugier, Genauigkeit, Fach- und Technikwissen.",
  "explanation": "a) FALSCH – Die Fähigkeit zur Anwendung von Testverfahren wie die 3-Wert-Grenzwertanalyse zählt zur Kategorie „Testwissen“ (siehe CTFL-Lehrplan, Abschnitt 1.5.1, 1. Aufzählungspunkt). Es geht aus der Frage nicht hervor, dass der neue Tester auch Testwissen mitbringt.\n\nb) KORREKT – Das Wissen in der Anwendungsdomäne das der neue Tester gemäß der Frage auf jeden Fall mitbringt, ist sicherlich hilfreich, wenn es um die effektive Aufdeckung von Inkonsistenzen und Ungenauigkeiten geht. Dieses Wissen fällt in die Kategorie „Wissen in der Anwendungsdomäne“ (siehe CTFL-Lehrplan, Abschnitt 1.5.1, 6. Aufzählungspunkt). Ein Tester mit Erfahrung als Pilot ist effektiver im Review der fachlichen Anforderungen.\n\nc) FALSCH – Die Fähigkeit, ein Werkzeug für den automatisierten, zustandsbasierten Test einzusetzen, zählt zur Kategorie „Testwissen“ (siehe CTFL-Lehrplan, Abschnitt 1.5.1, 1. Aufzählungspunkt). Es geht aus der Frage nicht hervor, dass der neue Tester auch Testwissen mitbringt.\n\nd) FALSCH – Eine konstruktivere und defensivere Kommunikation von Testergebnissen zählt zur Kategorie „Gute Kommunikationsfähigkeit“ (siehe CTFL-Lehrplan, Abschnitt 1.5.1, 3. Aufzählungspunkt). Es geht aus der Frage nicht hervor, dass der neue Tester über gute Kommunikationsfähigkeiten verfügt."
 },
 {
  "id": "B-8",
  "set": "B",
  "num": 8,
  "lo": "FL-1.5.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt einen Vorteil des Whole - Team-Ansatzes (Whole Team Approach)?",
  "images": [],
  "options": [
   "Er ermöglicht es den Teammitgliedern, jederzeit jede Rolle zu übernehmen.",
   "Es wird nur ein Team benötigt, um das gesamte Entwicklungsprojekt zu unterstützen.",
   "Tester können isoliert arbeiten, ohne die Entwickler oder die Fachbereichsvertreter mit testspezifischen Informationen abzulenken.",
   "Oft ergeben sich Synergien, von denen das gesamte Team und das Projekt profitieren."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen.",
  "explanation": "a) FALSCH – Der Whole-Team-Ansatz basiert auf der Idee der interdisziplinären Teams (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz), d. h., ist ein Teammitglied befähigt für eine Aufgabe, kann er diese übernehmen. Dies bedeutet jedoch nicht, dass ein Teammitglied zu jeder Zeit jede Rolle übernehmen kann. In der Regel übernimmt eine Person nur die Rolle bzw. die Aufgaben der Rolle, für die sie kompetent ist. Eine Aufgabe auszuführen, für die man nicht geeignet ist, hilft nicht dem Team und dem Projekt.\n\nb) FALSCH – Der Whole-Team-Ansatz bezieht sich auf die Arbeitsweise eines einzelnen Teams (typischerweise in der agilen Softwareentwicklung) (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 1. und 2. Absatz). Der Ansatz impliziert nicht, dass nur ein Whole-Team für ein komplettes Projekt benötigt wird.\n\nc) FALSCH – Der Whole-Team-Ansatz basiert auf der Idee, Synergien zwischen den Teammitgliedern zu schaffen, indem wichtige Informationen zwischen den Mitgliedern geteilt werden. Dies fördert die Zusammenarbeit und schafft ein gemeinsames Verständnis. Tester sollten daher unbedingt testspezifische Informationen mit den Teammitgliedern teilen (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 3. Absatz, letzter Satz).\n\nd) KORREKT – Durch die optimale Nutzung der unterschiedlichen Fähigkeiten der einzelnen Teammitglieder fördert der Whole-Team-Ansatz die Teamdynamik, eine gute Kommunikation und Zusammenarbeit und erzeugt eine Teamsynergie, von der das gesamte Projekt profitiert (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz)."
 },
 {
  "id": "B-9",
  "set": "B",
  "num": 9,
  "lo": "FL-2.1.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen über d ie Wahl des Softwareentwicklungslebenszyklus und dessen Beziehung zum Testen ist KORREKT?",
  "images": [],
  "options": [
   "In der agilen Softwareentwicklung ersetzt die Automatisierung von Systemtests die Notwendigkeit von Regressionstests.",
   "Wenn ein sequenzielles Entwicklungsmodell verwendet wird, wird das dynamische Testen typischerweise in einer späteren Phase des Lebenszyklus durchgeführt.",
   "Wenn ein iteratives Entwicklungsmodell verwendet wird, werden Komponententests typischerweise manuell von Entwicklern durchgeführt.",
   "Wenn ein inkrementelles Entwicklungsmodell verwendet wird, werden statische Tests in frühen Inkrementen und dynamische Tests in späteren Inkrementen durchgeführt."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "SDLC bestimmt Testen: sequenziell = Teststufen spät und nacheinander · iterativ/agil = jede Iteration testen + automatisierte Regressionstests.",
  "explanation": "a) FALSCH – Bei der agilen (iterativ-inkrementellen) Softwareentwicklung werden in jeder Iteration lauffähige Ergebnisse erzeugt, die ausgeliefert werden können. Die häufige Bereitstellung von Inkrementen erfordert somit auch ausreichende Regressionstests, möglichst auf allen eingesetzten Teststufen. Eine umfassende Testautomatisierung der Regressionstests erleichtert das Vorgehen. Der System- und Abnahmetest von neuen Features erfolgt eher erfahrungsbasiert und manuell (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 3. und 4. Absatz). Daher ist allein ein automatisierter Systemtest nicht die korrekte Umsetzung des agilen Softwareentwicklungsmodells in Bezug auf das Testen.\n\nb) KORREKT – Wenn ein sequenzielles Entwicklungsmodell verwendet wird, steht in den frühen Phasen des Lebenszyklus kein ausführbarer Code zur Verfügung, so dass in dieser Phase statische Tests (z. B. Verifikationen) durchgeführt werden. Später im Lebenszyklus, wenn Code zur Ausführung verfügbar ist, sind die Durchführungen dynamischer Tests möglich (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 2. Absatz). Es ist jedoch zu beachten, dass die Vorbereitung für dynamische Tests früh im Lebenszyklus der Softwareentwicklung Sinn macht (3. Grundsatz des Testens).\n\nc) FALSCH – Wenn ein iteratives Entwicklungsmodell verwendet wird, können Komponententests durchaus in jeder Iteration verwendet werden (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 3. Absatz). Ob die Komponententests dann eher manuell oder automatisiert oder gemischt (neue plus Regressionstests) sind und von Entwicklern oder Testern durchgeführt werden, ist eine projektspezifische Entscheidung (Kosten-Nutzen- Analyse, Effizienz). Das Softwareentwicklungsmodell hat keinen Einfluss darauf.\n\nd) FALSCH – In den meisten inkrementellen Entwicklungsmodellen werden lauffähige und auslieferfähige Ergebnisse in jedem Inkrement erstellt, so dass sowohl statische als auch dynamische Tests auf allen Teststufen für ein erstelltes Inkrement sinnvoll sind (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 3. Absatz). Die Verteilung von statischen Tests auf frühe Inkremente und dynamische Tests auf späte Inkremente ist somit nicht korrekt."
 },
 {
  "id": "B-10",
  "set": "B",
  "num": 10,
  "lo": "FL-2.1.2",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Optionen ist eine gute Testpraktik, unabhängig vom gewählten Modell des Softwareentwicklungslebenszyklus ist?",
  "images": [],
  "options": [
   "Tester sollten die Arbeitsergebnisse einer Entwicklungsphase in der nächsten Entwicklungsphase überprüfen.",
   "Tester sollten mit der Überprüfung der Arbeitsergebnisse einer Softwareentwicklungsaktivität beginnen, sobald Entwürfe verfügbar sind.",
   "Tester sollten Arbeitsergebnisse einer Softwareentwicklungsaktivität nur im Rahmen der Testanalyse und des Testentwurfs überprüfen.",
   "Tester sollten Arbeitsergebnisse prüfen, sobald sie zur Nutzung freigegeben sind."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen.",
  "explanation": "a) FALSCH – Tester sollten damit beginnen, Arbeitsergebnisse zu überprüfen, sobald Entwürfe verfügbar sind, um frühzeitiges Testen im Rahmen eines Shift-Left-Ansatzes bzw. des 3. Grundsatzes des Testens unabhängig vom gewählten SDLC zu ermöglichen (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 4. Aufzählungspunkt sowie Abschnitte 2.1.5 und 1.3). Würde bis zu einer nächsten Entwicklungsphase gewartet werden, könnte das zu unnötigen Fehlerzuständen in abgeleiteten Ergebnissen führen und somit zu unnötiger Entwicklungs- (und Test-)Arbeit (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3).\n\nb) KORREKT – Tester sollten damit beginnen, Arbeitsergebnisse zu überprüfen, sobald Entwürfe verfügbar sind, um frühzeitiges Testen im Rahmen eines Shift-Left-Ansatzes unabhängig vom gewählten SDLC zu ermöglichen und unnötige Folgefehler zu vermeiden (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 4. Aufzählungspunkt sowie Abschnitte 2.1.5 und 1.3).\n\nc) FALSCH – Die Testanalyse analysiert die Testbasis, um testbare Merkmale zu identifizieren und die zugehörigen Testbedingungen zu bestimmen. Der Testentwurf umfasst dann die Ausarbeitung der Testbedingungen zu Testfällen (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.1, 4. und 5. Absatz). Die Überprüfung eines Entwicklungsergebnisses, unabhängig vom SDLC, dient der Qualitätssteuerung und sorgt für die Vermeidung von Folgefehlern (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 1. Aufzählungspunkt) und sollte somit VOR der Testaktivität der Testanalyse durchgeführt sein. Das gilt unabhängig davon, dass Testanalyse und -entwurf in der gleichen Entwicklungsphase beginnen sollten (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 3. Aufzählungspunkt).\n\nd) FALSCH – Tester sollten Arbeitsergebnisse prüfen, sobald Entwürfe verfügbar sind, um frühzeitiges Testen im Rahmen eines Shift-Left-Ansatzes unabhängig vom gewählten SDLC zu ermöglichen (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 4. Aufzählungspunkt sowie Abschnitt 2.1.5). Das Warten bis zur Freigabe zur Verwendung bedeutet, dass die Mängel, die während der Überprüfung durch den Tester festgestellt werden, im freigegebenen Arbeitsergebnis noch enthalten sind und zu Folgefehlern in darauf basierenden und parallel begonnenen Entwicklungsaktivitäten führen können."
 },
 {
  "id": "B-11",
  "set": "B",
  "num": 11,
  "lo": "FL-2.1.3",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welches der folgenden Beispiele ist ein Test -First-Ansatz für die Entwicklung?",
  "images": [],
  "options": [
   "Testgetriebene Entwicklung",
   "Überdeckungsgetriebene Entwicklung",
   "Qualitätsgetriebene Entwicklung",
   "Feature-getriebene Entwicklung"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien).",
  "explanation": "a) KORREKT – Testgetriebene Entwicklung (TDD – Test-Driven Development) ist ein bekanntes Beispiel für einen Test-First-Ansatz in der Entwicklung (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.3, 2. Absatz).\n\nb) FALSCH – Überdeckungsgetriebene Entwicklung ist kein Beispiel für einen Test-First- Entwicklungsansatz. Das Testen kennt die Überdeckung (Glossar: Der Grad, zu dem bestimmte Überdeckungselemente von einer Testsuite ausgeführt wurden, ausgedrückt in Prozent) als Ansatz, um einen Status zu ermitteln. Dies hat aber keinen Bezug zu dem Zeitpunkt, wann getestet wird.\n\nc) FALSCH – Qualitätsgetriebene Entwicklung ist kein Beispiel für einen Test-First-Ansatz bei der Entwicklung. Jede Entwicklung sollte ein klares Bild haben, welche Eigenschaften (Qualitätsmerkmale) das Zielsystem erfüllen soll. Dies hat aber keinen Bezug zu dem Zeitpunkt, wann getestet wird.\n\nd) FALSCH – Feature-getriebene Entwicklung (FDD – Feature-Driven Development) ist kein Beispiel für einen Test-First-Entwicklungsansatz, sondern eine agile, inkrementelle Softwareentwicklungsmethodik, die auf der Bereitstellung von Features basiert (siehe Glossar)."
 },
 {
  "id": "B-12",
  "set": "B",
  "num": 12,
  "lo": "FL-2.1.4",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen trifft auf DevOps zu?",
  "images": [],
  "options": [
   "Um Releases zu beschleunigen, wird kontinuierliche Integration eingesetzt, die es den Entwicklern ermöglicht, Code schnell und ohne Komponententests auszuliefern.",
   "Um Systeme schneller zu aktualisieren und freigeben zu können, nutzt die DevOps-Lieferkette Automatisierung, um zeitaufwendige manuelle Regressionstests zu reduzieren.",
   "Um die Kluft zwischen Entwicklung und Betrieb zu verringern, priorisiert das Testen mit einem Shift-Right-Ansatz den Abnahmetest parallel zur kontinuierlichen Auslieferung.",
   "Um eine größere Synergie zwischen Testern, Entwicklern und Betrieb zu schaffen, werden die Tests vollständig automatisiert, so dass keine manuellen Tests mehr erforderlich sind."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "DevOps: CI/CD-Pipeline mit automatisierten Tests = schnelles Feedback. Aber: manuelle, nutzernahe Tests bleiben nötig; Pipeline braucht Pflege.",
  "explanation": "a) FALSCH – DevOps ermöglicht es den Teams, qualitativ hochwertigen Code über eine DevOps-Auslieferungskette (Delivery Pipeline) schneller zu erstellen, zu testen und freizugeben. Doch es gehört weiterhin dazu, dass Entwickler auch die zugehörigen Komponententests liefern: Kontinuierliche Integration (CI) fördert einen Shift-Left-Ansatz beim Testen, indem Entwickler dazu angehalten werden, qualitativ hochwertigen Code zusammen mit Komponententests und statischer Analyse bereitzustellen (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.4, 1. Absatz und 2. Aufzählungspunkt).\n\nb) KORREKT – DevOps verbessert das Testen auf verschiedene Weise durch Automatisierung in der Auslieferungskette, die den Bedarf an sich wiederholenden manuellen Tests reduziert; durch Erhöhung des Umfangs und der Bandbreite der automatisierten Regressionstests wird das Risiko einer Regression minimiert (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4, 5. und 6. Aufzählungspunkt).\n\nc) FALSCH – DevOps fördert einen Kulturwandel innerhalb eines Unternehmens, um die Kluft zwischen Entwicklung (einschließlich Testen) und Betrieb zu überbrücken und gleichzeitig ihre jeweilige Aufgabe gleichwertig zu behandeln (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4, 1. Absatz). Dazu zählt aber nicht ein Shift-Right-Ansatz, sondern eher ein Shift-Left-Ansatz (frühes Testen), und auch nicht der Abnahmetest parallel zu einer produktiven Auslieferung. Der Abnahmetest bleibt Voraussetzung für eine produktive Freigabe und Auslieferung.\n\nd) FALSCH – Automatisierte Prozesse wie Continuous Integration/Continuous Delivery (CI/CD) in DevOps ermöglichen stabile Testumgebungen und reduzieren den Bedarf an sich wiederholenden manuellen Tests durch die Automatisierung (z. B. automatisierte Regressionstests) (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4, 3., 5. und 6. Aufzählungspunkt). Obwohl DevOps ein hohes Maß an automatisierten Tests mit sich bringt, sind manuelle Tests – insbesondere aus Benutzerperspektive – weiterhin erforderlich (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4, letzter Absatz)."
 },
 {
  "id": "B-13",
  "set": "B",
  "num": 13,
  "lo": "FL-2.2.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Maßnahmen werden im Rahmen von Systemtests AM EHESTEN durchgeführt?",
  "images": [],
  "options": [
   "End-to-End-Tests der IT-Sicherheit eines Kreditmanagementsystems durch ein unabhängiges Testteam",
   "Test des Zusammenwirkens eines Geldwechselsystems mit einer externen Bank oder mit dem System einer externen Bank",
   "Beta-Test einer Lernplattform durch die Trainer eines Schulungsanbieters",
   "Test der Interaktion zwischen der Benutzeroberfläche und der Datenbank eines Personalverwaltungssystems"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Teststufen: Komponente → Komponentenintegration → System → Systemintegration → Abnahme. Jede Stufe: eigene Testbasis, eigene Ziele.",
  "explanation": "a) KORREKT – Systemtests untersuchen das Verhalten und die Fähigkeiten des gesamten Systems und umfassen nicht-funktionale Tests von Qualitätsmerkmalen, einschließlich Testen der IT-Sicherheit. Der Systemtest wird häufig von einem unabhängigen Testteam auf der Grundlage von Systemspezifikationen durchgeführt (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 3. Aufzählungspunkt).\n\nb) FALSCH – Diese Option beschreibt eine Maßnahme des Systemintegrationstests. Dieser untersucht die Schnittstellen zu anderen Systemen und externen Diensten (siehe CTFL- Lehrplan V4.0, Abschnitt 2.2.1, 4. Aufzählungspunkt).\n\nc) FALSCH – Beta-Tests können im Rahmen eines Abnahmetests durchgeführt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 5. Aufzählungspunkt). Der Beta-Test ist eine Art Abnahmetest, der an einem zur Testumgebung des Entwicklers externen Standort durch Akteure außerhalb der Herstellerorganisation durchgeführt wird (siehe Glossar).\n\nd) FALSCH – Diese Option beschreibt eine Maßnahme des Komponentenintegrationstests. Beim Testen der Komponentenintegration werden die Schnittstellen und Interaktionen zwischen den Komponenten eines Systems getestet, z. B. zwischen der Benutzeroberfläche und der Datenbank (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 2. Aufzählungspunkt)."
 },
 {
  "id": "B-14",
  "set": "B",
  "num": 14,
  "lo": "FL-2.3.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Entscheidungen sollte KEIN Auslöser für Wartungstests sein?",
  "images": [],
  "options": [
   "Die Entscheidung, die Wartbarkeit der Software zu testen.",
   "Die Entscheidung, das System nach der Migration auf eine neue Betriebsplattform zu testen.",
   "Die Entscheidung, die Wiederherstellbarkeit archivierter Daten nach Außerbetriebnahme zu testen.",
   "Die Entscheidung zu testen, nachdem ein \"Hotfix\" auf die Produktivversion aufgespielt wurde."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Wartungstest-Auslöser: Modifikation (Fix, Update) · Migration (Plattform-/Datenumzug) · Außerbetriebnahme (Archivierung, Datenmigration).",
  "explanation": "a) KORREKT – Die Wartbarkeit ist ein Qualitätsmerkmal, das nicht von der Ausführung des Codes abhängt (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.3, 1. Absatz, 5. Aufzählungspunkt). Sie ist daher KEIN Auslöser für Wartungstests, die auf Änderungen im Code oder in der Umgebung als dynamische Tests durchgeführt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz inkl. Aufzählungspunkte).\n\nb) FALSCH – Dies ist ein Auslöser für Wartungstests (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz, 2. Aufzählungspunkt). Nach einer Plattformmigration ist es wichtig, die Funktionalität und Interoperabilität der Software zu überprüfen.\n\nc) FALSCH – Dies ist ein Auslöser für Wartungstests (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz, 3. Aufzählungspunkt). Dies ist relevant, um sicherzustellen, dass archivierte Daten ordnungsgemäß wiederhergestellt werden können.\n\nd) FALSCH – Dies ist ein Auslöser für Wartungstests (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz, 1. Aufzählungspunkt). Nach einem Hotfix ist es wichtig, die Auswirkungen auf die bestehende Funktionalität zu überprüfen."
 },
 {
  "id": "B-15",
  "set": "B",
  "num": 15,
  "lo": "FL-3.1.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN den Einsatz von statischen Tests?",
  "images": [],
  "options": [
   "Statisches Testen kann Fehlerzustände aufdecken, die durch dynamisches Testen nicht gefunden werden können.",
   "Fehlerzustände im Code können durch dynamische Tests effizienter gefunden werden als durch statische Tests.",
   "Der statische Test kann erst in einer späten Phase des SDLC durchgeführt werden.",
   "Um den statischen Test so effizient wie möglich zu gestalten, sollten so wenig Stakeholder wie möglich involviert sein."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Statisches Testen: findet Fehler FRÜH und BILLIG, direkt an der Ursache – bevor Code überhaupt läuft.",
  "explanation": "a) KORREKT – Es gibt Fehlerzustände, die nur durch statische Tests erkannt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2, 1. Absatz, letzter Satz).\n\nb) FALSCH – Statische Tests können Fehlerzustände effizienter, d. h. früher und i. d. R. mit weniger Ressourcen aufdecken als dynamische Tests (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2, 4. Absatz, 1. Satz).\n\nc) FALSCH – Statische Tests können bereits in den frühen Phasen des SDLC eingesetzt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2, 2. Absatz, 3. Satz).\n\nd) FALSCH – Ein Vorteil statischer Tests, insbesondere von Reviews, ist die Verbesserung der Kommunikation und des gegenseitigen Verständnisses zwischen den Stakeholdern. Daher sollte eine große Anzahl von Stakeholdern in statische Tests einbezogen werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2, 2. Absatz, letzter Satz)."
 },
 {
  "id": "B-16",
  "set": "B",
  "num": 16,
  "lo": "FL-3.2.1",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen beschreibt einen Vorteil von frühem und häufigem Stakeholder-Feedback?",
  "images": [],
  "options": [
   "Es hilft dem Projektmanagement, weniger produktive Entwickler frühzeitig zu erkennen.",
   "Es reduziert die Notwendigkeit häufiger Interaktionen zwischen Projektmanagern und Stakeholdern.",
   "Es erleichtert die frühzeitige Identifikation und Kommunikation möglicher Qualitätsprobleme.",
   "Es verbessert das Verständnis der Endbenutzer hinsichtlich möglicher Verzögerungen bei der Anwendungsbereitstellung."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Frühes, häufiges Stakeholder-Feedback: Missverständnisse früh erkannt = nicht am Bedarf vorbei entwickelt.",
  "explanation": "Ein frühzeitiges und häufiges Feedback der Stakeholder dient der Kommunikation, um Missverständnissen über Anforderungen vorzubeugen und um potenzielle Probleme aus dem Weg zu räumen (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 1. und 2. Absatz). Daher\n\na) FALSCH – Es geht nicht um die Bewertung von Personen und ihren Leistungen.\n\nb) FALSCH – Eine Reduzierung der Interaktionen durch den Projektmanager wird kein Vorteil sein, da dadurch ggf. wichtiges Feedback verloren geht oder zu spät kommt (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 1. und 2. Absatz).\n\nc) KORREKT – Die frühzeitige und häufige Einholung von Feedback von den am Softwareentwicklungsprozess Beteiligten kann sehr vorteilhaft sein, da sie die frühzeitige Kommunikation potenzieller Qualitätsprobleme erleichtert, Missverständnisse bezüglich der Anforderungen vermeiden hilft und sicherstellt, dass Änderungen der Anforderungen der Beteiligten schneller verstanden und umgesetzt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 1. und 2. Absatz).\n\nd) FALSCH – Es ist ein möglicher Vorteil des Feedbacks und der Kommunikation, Terminprobleme zu vermeiden, nicht aber sie zu begründen, z. B. durch die Klärung von Anforderungen oder Priorisierung von Wünschen (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 1. Absatz)."
 },
 {
  "id": "B-17",
  "set": "B",
  "num": 17,
  "lo": "FL-3.2.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Die folgenden Aufgaben des Reviewprozesses werden beschrieben: 1. Die zu bewertenden Qualitätsmerkmale und die Endekriterien werden festgelegt. 2. Das Arbeitsergebnis wird allen Beteiligten zugänglich gemacht. 3. Anomalien im Arbeitsergebnis werden identifiziert. 4. Anomalien werden analysiert und diskutiert. Ordnen Sie diese Aufgabenbeschreibungen den folgenden Review - Aktivitäten zu: A. Individuelles Review B. Reviewbeginn C. Planung D. Kommunikation und Analyse Welche der folgenden Zuordnungen von Aufgabe n zu Aktivität en ist KORREKT?",
  "images": [],
  "options": [
   "1B, 2C, 3D, 4A",
   "1B, 2D, 3C, 4A",
   "1C, 2A, 3B, 4D",
   "1C, 2B, 3A, 4D"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Reviewprozess: Planung → Review-Initiierung → INDIVIDUELLES Review (meiste Funde!) → Kommunikation & Analyse → Fehlerbehebung & Berichterstattung.",
  "explanation": "Unter Berücksichtigung jeder der aufgeführten Aufgabenbeschreibungen: 1. Die zu bewertenden Qualitätsmerkmale und die Endekriterien werden festgelegt = Planung (C): Festlegen des Reviewumfangs, des Zwecks, des zu überprüfenden Arbeitsergebnisses, der zu bewertenden Qualitätsmerkmale, der zu berücksichtigenden Bereiche, der Endekriterien, der unterstützenden Informationen sowie der Standards, des Aufwands und Zeitrahmens (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.2, 1. Aufzählungspunkt). 2. Alle Teilnehmer haben Zugang zum Arbeitsergebnis = Reviewbeginn (Reviewinitiierung) (B): Sicherstellen, dass alle Teilnehmer vorbereitet sind, um mit dem Review zu starten. Dazu gehört auch, dass jeder Teilnehmer Zugang zu dem zu prüfenden Arbeitsergebnis hat, seine Rolle und Verantwortlichkeiten versteht und alles erhält, was er für die Durchführung des Reviews benötigt (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.2, 2. Aufzählungspunkt). 3. Anomalien werden im Arbeitsprodukt identifiziert = individuelles Review (A): Bewertung der Qualität des Arbeitsprodukts, Identifizierung und Protokollierung von Anomalien, Empfehlungen und Fragen mit Hilfe von Reviewverfahren wie checklistenbasiertem oder szenariobasiertem Review (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.2, 3. Aufzählungspunkt). 4. Anomalien werden analysiert und diskutiert = Kommunikation und Analyse (D): Da es sich bei einer festgestellten Anomalie nicht unbedingt um einen Fehlerzustand handelt, wird jede Anomalie analysiert und besprochen, ihr Status, ihr Eigentum und die erforderlichen Maßnahmen werden festgelegt und Reviewentscheidungen getroffen, normalerweise geschieht dies in einer Reviewsitzung (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.2, 4. Aufzählungspunkt). Daher\n\na) FALSCH\n\nb) FALSCH\n\nc) FALSCH\n\nd) KORREKT – Die korrekte Kombination ist: 1C, 2B, 3A, 4D."
 },
 {
  "id": "B-18",
  "set": "B",
  "num": 18,
  "lo": "FL-3.2.3",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Der generische Review prozess kennt u nter anderem die folgenden Rollen: 1. Protokollant 2. Reviewleiter 3. Moderator 4. Manager Im Rahmen von Reviews können diese Rollen folgende Verantwortlichkeiten übernehmen: A. Sorgt für die effektive Durchführung von Review sitzungen, einschließlich einer geschützten Reviewumgebung B. Zeichnet Reviewinformationen auf, z. B. Entscheidungen und neue Anomalien, die während der Reviewsitzung gefunden wurden C. Entscheidet, was geprüft werden soll , und stellt Ressourcen wie Personal und Zeit für das Review zur Verfügung D. Übernimmt die Gesamtverantwortung für das Review, z. B. die Organisation, wann und wo das Review stattfindet Welche der folgenden Zuordnungen von Rollen zu Verantwortlichkeiten ist KORREKT?",
  "images": [],
  "options": [
   "1A, 2B, 3D, 4C",
   "1A, 2C, 3B, 4D",
   "1B, 2D, 3A, 4C",
   "1B, 2D, 3C, 4A"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Review-Rollen: Moderator leitet · Autor erstellt & korrigiert · Gutachter finden · Protokollant notiert · Management gibt Ressourcen.",
  "explanation": "Die aufgeführten Rollen übernehmen folgende Verantwortungen: 1. Protokollant – verantwortlich für das Sammeln von Anomalien der Gutachter und die Aufzeichnung von Reviewinformationen, wie z. B. getroffene Entscheidungen und neue Anomalien, die während des Reviews gefunden werden (B) (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.3, 4. Aufzählungspunkt). 2. Reviewleiter – übernimmt die Gesamtverantwortung für das Review, z. B. die Entscheidung, wer daran teilnimmt, und die Organisation, wann und wo das Review stattfindet (D) (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.3, 6. Aufzählungspunkt). 3. Moderator – verantwortlich dafür, dass die Reviewsitzungen effektiv ablaufen, einschließlich Mediation, Zeitmanagement und einer geschützten Reviewumgebung, in der jeder freisprechen kann (A) (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.3, 3. Aufzählungspunkt). 4. Manager – verantwortlich für die Entscheidung, was überprüft werden soll, und für die Bereitstellung von Ressourcen wie Personal und Zeit für das Review (C) (siehe CTFL- Lehrplan V4.0, Abschnitt 3.2.3, 1. Aufzählungspunkt). Daher\n\na) FALSCH\n\nb) FALSCH\n\nc) KORREKT – Die korrekte Kombination ist: 1B, 2D, 3A, 4C.\n\nd) FALSCH"
 },
 {
  "id": "B-19",
  "set": "B",
  "num": 19,
  "lo": "FL-4.1.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen beschreibt KORREKT die Zuordnung von Verfahrensgrundlagen zu Entscheidungstabellen- und Zweigtests?",
  "images": [
   "images/B-19.png"
  ],
  "options": [
   "Beim Entscheidungstabellentest werden die Testfälle aus den Entscheidungsergebnissen im Code abgeleitet. Beim Zweigtest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet.",
   "Beim Entscheidungstabellentest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt. Beim Zweigtest basieren die Testfälle auf der Antizipation potenzieller Fehler im Quellcode.",
   "Beim Entscheidungstabellentest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet. Beim Zweigtest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt.",
   "Beim Entscheidungstabellentest werden die Testfälle unabhängig vom Zustand der Software abgeleitet. Beim Zweigtest können die Testfälle erst nach dem Entwurf und der Implementierung des Codes erstellt werden."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers.",
  "explanation": "Grundlagen: • Black-Box-Testverfahren (auch spezifikationsbasierte Verfahren genannt) basieren auf einer Analyse des spezifizierten Verhaltens des Testelements ohne Kenntnis der internen Struktur. Daher werden die Testfälle unabhängig von der Implementierung der Software erstellt. • White-Box-Testverfahren (auch als strukturbasierte Verfahren bekannt) basieren auf einer Analyse der internen Struktur und Verarbeitung des Testelements. Da die Testfälle vom Entwurf der Software abhängig sind, können sie erst nach dem Entwurf oder der Implementierung des Testelements erstellt werden. • Erfahrungsbasierte Testverfahren nutzen das Wissen und die Erfahrung von Testern effektiv für den Entwurf und die Implementierung von Testfällen. • Der Entscheidungstabellentest gehört zu den Black-Box-Testverfahren (siehe CTFL- Lehrplan V4.0, Abschnitt 4.2.3). • Der Zweigtest gehört zu den White-Box-Testverfahren (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.2).\n\na) FALSCH – Der Entscheidungstabellentest ist ein Black-Box-Testverfahren, d. h. spezifikationsbasiert und nicht strukturbasiert – die Testfälle basieren NICHT auf den Entscheidungen im Code. Diese Aussage ist somit nicht korrekt. Beim Zweigtest werden die Testfälle aus der Kenntnis des Kontrollflusses des Testelements abgeleitet. Diese Aussage ist grundsätzlich korrekt.\n\nb) FALSCH – Beim Entscheidungstabellentest werden die Testfälle aus der Spezifikation abgeleitet, die die Geschäftslogik beschreibt. Diese Aussage ist grundsätzlich korrekt. Die Antizipation potenzieller Fehler wird bei der intuitiven Testfallermittlung (ein erfahrungsbasierter Testansatz) und nicht beim Zweigtest (ein strukturbasiertes Testverfahren) verwendet. Diese Aussage ist somit nicht korrekt.\n\nc) FALSCH – Basiert ein Testfall auf der Kenntnis des Kontrollflusses des Testelements, handelt es sich um ein White-Box-Testverfahren. Das Testen von Entscheidungstabellen basiert in der Regel auf einer Analyse der Geschäftslogik und ist ein Black-Box- Testverfahren. Diese Aussage ist somit nicht korrekt. Beim Zweigtest werden Testfälle nicht aus der Spezifikation abgeleitet – dies würde zu einem Black-Box-Testverfahren gehören. Diese Aussage ist somit nicht korrekt.\n\nd) KORREKT – Entscheidungstabellentests gehören zu den Black-Box-Testverfahren und basieren auf einer Analyse des spezifizierten Verhaltens des Testelements ohne Bezug auf seine interne Struktur. Die Testfälle sind daher unabhängig von der Implementierung der Software. Der Zweigtest ist ein White-Box-Testverfahren, d. h., die Testfälle basieren auf einer Analyse der internen Struktur und Verarbeitung des Testelements. Da die Testfälle davon abhängen, wie die Software entworfen und codiert wird, können sie erst nach dem Entwurf oder der Implementierung des Testelements erstellt werden."
 },
 {
  "id": "B-20",
  "set": "B",
  "num": 20,
  "lo": "FL-4.2.1",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Die Kunden der Autowaschanlage TestWash haben Karten, auf denen die Anzahl der bisher gekauften Wäschen gespeichert ist. Der Anfangswert des Zählers ist 0. Bei der Einfahrt in die Waschanlage erhöht das System den Zähler auf der Karte um eins. Dieser Wert stellt die Anzahl der aktuellen Wäschen dar. Anhand der Anzahl der Wäschen entscheidet das System, welchen Rabatt der Kunde erhält. Für jede zehnte Wäsche gewährt das System einen Rabatt von 10 % und für jede zwanzigste W äsche gewährt das System einen weiteren Rabatt von 40 % (d. h. insgesamt 50 % Rabatt). Welche der folgenden Eingaben ( bezogen auf die Anzahl der Wäschen) erreicht die höchste Überdeckung der Äquivalenzklassen?",
  "images": [],
  "options": [
   "19, 20, 30",
   "11, 12, 20",
   "1, 10, 50",
   "10, 29, 30, 31"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!",
  "explanation": "a) KORREKT – 19 deckt die Äquivalenzklasse „Kein Rabatt“, 20 die Äquivalenzklasse „50 % Rabatt“ und 30 die Äquivalenzklasse „10 % Rabatt“ ab. Diese drei Werte decken alle drei gültigen Äquivalenzklassen ab.\n\nb) FALSCH – 11 und 12 decken die Äquivalenzklasse „kein Rabatt“ ab, während 20 die Äquivalenzklasse „50 % Rabatt“ abdeckt. Die Äquivalenzklasse „10 % Rabatt“ ist nicht abgedeckt. Es werden somit nur zwei Äquivalenzklassen abgedeckt.\n\nc) FALSCH – 1 deckt die Äquivalenzklasse „kein Rabatt“ ab, während 10 und 50 die Äquivalenzklassen „10 % Rabatt“ abdecken. Die Äquivalenzklasse „50 % Rabatt“ ist nicht abgedeckt. Es werden somit nur zwei Äquivalenzklassen abgedeckt.\n\nd) FALSCH – 29 und 31 decken die Äquivalenzklasse „kein Rabatt“ ab, während 10 und 30 die Äquivalenzklasse „10 % Rabatt“ abdecken. Die Äquivalenzklasse „50 % Rabatt“ ist nicht abgedeckt. Es werden somit nur zwei Äquivalenzklassen abgedeckt."
 },
 {
  "id": "B-21",
  "set": "B",
  "num": 21,
  "lo": "FL-4.2.2",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ein Weinlagerungssystem verwendet ein Kontrollgerät, das die Temperatur (T) des Weinlagers (gemessen in °C, gerundet auf das nächste Grad) misst und den Benutzer alarmiert, wenn die optimale Temperatur über- oder unterschritten wird: • Wenn 11 <= T <= 13, meldet das System: \"Optimale Temperatur\" • Wenn T < 11 ist, meldet das System: \"Die Temperatur ist zu niedrig!\" • Wenn T > 13 ist, meldet das System: \"Die Temperatur ist zu hoch!\" Sie verwenden die 3-Wert-Grenzwertanalyse, um das erwartete Verhalten des Reglers zu überprüfen. Die Testeingabe ist eine vom Gerät gelieferte Temperatur in °C. Welche Testeingaben ergeben eine 100 %ige Überdeckung?",
  "images": [],
  "options": [
   "11, 12, 13",
   "9, 13, 15",
   "9, 10, 11, 12, 13, 14, 15",
   "10, 11, 12, 13, 14"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn.",
  "explanation": "Um eine 100 %ige Überdeckung bei der 3-Wert-Grenzwertanalyse zu erreichen, müssen wir alle Überdeckungselemente testen, einschließlich der identifizierten Grenzwerte und ihrer Nachbarn (siehe CTFL-Lehrplan V4.0). Die Grenzwerte sind 10, 11, 13 und 14 (wobei negative Werte sowie Werte außerhalb der Wertebereichsgrenzen nicht betrachtet wurden). Bei der 3-Wert-Grenzwertanalyse müssen nun die Grenzwerte sowie ihre beiden Nachbarn verwendet werden: • 10: 9, 10, 11 • 11: 10, 11, 12 • 13: 12, 13, 14 • 14: 13, 14, 15 (Hier ist die Besonderheit, dass die Werte 11 und 13 sowohl für den oberen als auch unteren Grenzwert der Nachbar ist. Diese Werte müssen daher nur einmal verwendet werden in einem Testfall, somit ist Antwort c) korrekt.)\n\na) FALSCH – Das würde der 3-Wert-Grenzwertanalyse für eine Äquivalenzklasse, die aus dem Wert 12 besteht, entsprechen.\n\nb) FALSCH – Das entspräche einer reinen Äquivalenzklassenbildung, da immer nur ein beliebiger Wert aus der jeweiligen Äquivalenzklasse verwendet wird.\n\nc) KORREKT – Dies entspricht den oben aufgeführten identifizierten Werten für die 3-Wert- Grenzwertanalyse.\n\nd) FALSCH – Das entspricht der 2-Wert-Grenzwertanalyse für alle Äquivalenzklassen."
 },
 {
  "id": "B-22",
  "set": "B",
  "num": 22,
  "lo": "FL-4.2.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Die folgende Entscheidungstabelle enthält die Regeln zur Bestimmung des Risikos für Arteriosklerose (Arterienverkalkung) auf der Grundlage der Cholesterin- und Blutdruckwerte des Patienten. Regel 1 Regel 2 Regel 3 Regel 4 Regel 5 Bedingungen Cholesterin (mg/dl) ≤124 ≤ 124 125 – 200 125 – 200 ≥ 201 Blutdruck (mmHg) ≤ 140 > 140 ≤ 140 > 140 – Aktion Risikoniveau sehr gering gering mittel hoch sehr hoch Sie haben die Testfälle mit den folgenden Testdaten entworfen: TC1: Cholesterin = 125 mg/dl – Blutdruck = 141 mm Hg TC2: Cholesterin = 200 mg/dl – Blutdruck = 201 mm Hg TC3: Cholesterin = 124 mg/dl – Blutdruck = 201 mm Hg TC4: Cholesterin = 109 mg/dl – Blutdruck = 200 mm Hg TC5: Cholesterin = 201 mg/dl – Blutdruck = 140 mm Hg Welche Überdeckung der Entscheidungstabelle wird durch diese Testfälle erreicht?",
  "images": [
   "images/B-22.png"
  ],
  "options": [
   "40 %",
   "60 %",
   "80 %",
   "100 %"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?",
  "explanation": "Die Entscheidungstabelle besteht aus fünf Spalten. Jeder Testfall deckt eine dieser Spalten ab. TC1 und TC2 decken beide Regel 4 ab. TC3 und TC4 decken beide Regel 2 ab. TC5 deckt Regel 5 ab. Diese fünf Testfälle decken also drei von fünf Spalten ab und erreichen eine Überdeckung von (3/5) *100 % = 60 % (siehe CTFL-Lehrplan V4.0, Abschnitt 4.2.3, 5. Absatz). Folglich ist Option b) die KORREKTE Option. Daher\n\na) FALSCH\n\nb) KORREKT\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "B-23",
  "set": "B",
  "num": 23,
  "lo": "FL-4.2.4",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Gegeben sei folgendes Zustandsdiagramm für die Software eines Batterieladegerätes: Welcher der folgenden Testfälle enthält sowohl gültige als auch ungültige Übergänge?",
  "images": [
   "images/B-23.png"
  ],
  "options": [
   "Start → Warten → Aus → Warten → Erhaltungsladen → Warten",
   "Start → Warten → Erhaltungsladen → Laden → Hoch → Laden",
   "Start → Warten → Erhaltungsladen → Laden → Niedrig → Laden",
   "Start → Warten → Aus → Warten → Laden → Niedrig → Laden Warten Aus Erhaltungs- laden Laden Niedrig Hoch"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen.",
  "explanation": "Das Zustandsdiagramm zeigt 10 gültige Übergänge. Der Übergang Warten → Laden, der von Testfall d) ausgeführt wird, ist nicht in dem Zustandsdiagramm enthalten und daher ein ungültiger Übergang (siehe CTFL-Lehrplan V4.0, Abschnitt 4.2.4)\n\na) FALSCH – In diesem Testfall werden nur gültige Übergänge ausgeführt, da er den Zustand gemäß dem Diagramm durchläuft.\n\nb) FALSCH – In diesem Testfall werden nur gültige Übergänge ausgeführt, da er den Zustand gemäß dem Diagramm durchläuft.\n\nc) FALSCH – In diesem Testfall werden nur gültige Übergänge ausgeführt, da er den Zustand gemäß dem Diagramm durchläuft.\n\nd) KORREKT – Dieser Testfall enthält den ungültigen Übergang Warten → Laden. Daher ist Testfall d) derjenige, der neben gültigen Übergängen auch einen ungültigen Übergang aufweist."
 },
 {
  "id": "B-24",
  "set": "B",
  "num": 24,
  "lo": "FL-4.3.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Sie führen zwei Testfälle, T1 und T2, für denselben Code aus. Testfall T1 erreicht eine Anweisungsüberdeckung von 40 % und Testfall T2 erreicht eine Anweisungsüberdeckung von 65 %. Welche der folgenden Aussagen ist aufgrund der obigen Informationen KORREKT?",
  "images": [],
  "options": [
   "Die Testsuite, bestehend aus den Testfällen T1 und T2, erreicht eine Anweisungsüberdeckung von 105 %.",
   "Mindestens eine Anweisung wurde sowohl von T1 als auch von T2 ausgeführt.",
   "Mindestens 5 % der Anweisungen im getesteten Code sind nicht ausführbar.",
   "Die aus den Testfällen T1 und T2 bestehende Testsuite erreicht eine Zweigüberdeckung von 100 %."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Anweisungsüberdeckung = ausgeführte / alle Anweisungen. 100 % Anweisungen heißt NICHT alle Entscheidungen getestet.",
  "explanation": "a) FALSCH – Die Überdeckung wird immer als Prozentsatz der gesamten Anzahl ausführbarer Anweisungen im Code definiert. Sie kann daher nicht größer als 100 % sein (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.1, 1. Absatz).\n\nb) KORREKT – Wenn die von T1 und T2 ausgeführten Anweisungen disjunkt wären, würde die Überdeckung der Testsuite {T1, T2} 105 % betragen, was unmöglich ist (siehe Antwort a). Daher müssen mindestens 5 % der ausführbaren Anweisungen sowohl von T1 als auch von T2 ausgeführt worden sein.\n\nc) FALSCH – Die Anweisungsüberdeckung sagt nichts über die Menge der nicht ausführbaren Anweisungen im Code aus, denn sie zeigt nur die bisher ausgeführten Anweisungen an. Ob bisher nicht ausgeführter Code ein nicht erreichbarer und somit nicht ausführbarer Code ist, kann nur durch Analysen ermittelt werden.\n\nd) FALSCH – Selbst, wenn eine Testsuite eine 100 %ige Anweisungsüberdeckung erreicht, bedeutet dies nicht automatisch, dass eine 100 %ige Zweigüberdeckung erreicht wurde. Hierfür ist eine Messung der Zweigüberdeckung notwendig (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.1, 2. Absatz sowie Abschnitt 4.3.2, 4. Absatz)."
 },
 {
  "id": "B-25",
  "set": "B",
  "num": 25,
  "lo": "FL-4.3.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Die Formel für die Zweigüberdeckungsmetrik ist definiert als ZÜ = (X / Y) * 100 %. Was bedeuten X und Y in dieser Formel?",
  "images": [],
  "options": [
   "X = Anzahl der von den Testfällen ausgeführten Entscheidungsergebnisse Y = Gesamtzahl der Entscheidungsergebnisse im Code",
   "X = Anzahl der durch die Testfälle ausgeführten bedingten Zweige Y = Gesamtzahl der Zweige im Code",
   "X = Anzahl der von den Testfällen ausgeführten Zweige Y = Gesamtzahl der Zweige im Code",
   "X = Anzahl der von den Testfällen ausgeführten bedingten Zweige Y = Gesamtzahl der Entscheidungsergebnisse im Code"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Zweig schlägt Anweisung: 100 % Zweigüberdeckung ⇒ 100 % Anweisungsüberdeckung. Umgekehrt NICHT (if ohne else!).",
  "explanation": "Der Zweigtest ist ein White-Box-Testverfahren, bei dem die Überdeckungselemente Zweige sind. Ein Zweig ist ein Kontrollübergang zwischen zwei Knoten im Kontrollflussgraph, das die möglichen Sequenzen aufzeigt, in denen Quellcodeanweisungen im Testelement ausgeführt werden. Jeder Kontrollübergang kann entweder bedingungslos (d. h. geradliniger Code) oder bedingt (d. h. ein Entscheidungsergebnis) sein. Die Messgröße der Zweigüberdeckung erfolgt als Anzahl der durch die Testfälle ausgeführten Zweige dividiert durch die Gesamtzahl der Zweige im Code und wird in Prozent ausgedrückt. Daher\n\na) FALSCH – Ein Entscheidungsergebnis ist ein bedingter Zweig. Beim Zweigtest zählt X nicht nur bedingte, sondern auch unbedingte Zweige. Daher ist die Aussage zu X nicht korrekt, es fehlen die unbedingten Zweige. Analog gilt dies auch für die Aussage zu Y.\n\nb) FALSCH – Der Zweigtest umfasst nicht nur bedingte, sondern auch unbedingte Zweige (siehe a )).\n\nc) KORREKT – Die Zweigüberdeckung wird gemessen als die Anzahl der Zweige, die von den Testfällen mindestens einmal ausgeführt wurden (X), dividiert durch die Gesamtanzahl aller Zweige im Code (Y) und als Prozentsatz ausgedrückt (ZÜ = X / Y * 100 %).\n\nd) FALSCH – Sowohl X als auch Y zählen nur die bedingten Zweige und berücksichtigen nicht die unbedingten Zweige (siehe a))."
 },
 {
  "id": "B-26",
  "set": "B",
  "num": 26,
  "lo": "FL-4.4.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen liefert die BESTE Begründung für den effektiven Einsatz explorativer Tests?",
  "images": [],
  "options": [
   "Die bestehende Teststrategie fordert, dass die Tester Black-Box- Testverfahren verwenden.",
   "Die Spezifikation ist in einer formalen Sprache geschrieben, die von einem Werkzeug verarbeitet werden kann.",
   "Die Tester sind Mitglieder eines agilen Teams und verfügen über gute Programmierkenntnisse.",
   "Die Tester haben Erfahrung in der Anwendungsdomäne und gute analytische Fähigkeiten."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Explorativ: gleichzeitig LERNEN + ENTWERFEN + TESTEN, oft in Sessions mit Charter. Stark bei wenig Zeit oder dünner Spezifikation.",
  "explanation": "Explorative Tests sind dann sinnvoll, wenn es nur wenige oder unzureichende Spezifikationen gibt oder wenn die Tests unter erheblichem Zeitdruck durchgeführt werden müssen. Explorative Tests eignen sich auch als Ergänzung zu anderen, eher formalen Testverfahren. Explorative Tests sind effektiver, wenn der Tester über Erfahrungen und Fach- bzw. Anwendungskenntnisse verfügt und ein hohes Maß an analytischen Fähigkeiten, Neugier und Kreativität besitzt. Daher\n\na) FALSCH – Exploratives Testen ist kein Black-Box-Testverfahren, daher hat die Aussage keinen Bezug zu einer Begründung von einem explorativen Test.\n\nb) FALSCH – Explorative Tests sind nützlich, wenn die Spezifikationen unvollständig oder unzureichend sind. Eine formal beschriebene Spezifikation, die von Werkzeugen verarbeitet werden kann, rechtfertigt eher die Verwendung von statischer Analyse und automatisierten Tests als die Verwendung von explorativen Tests.\n\nc) FALSCH – Agile Teams und agile Entwicklung kann sinnvoll einen explorativen Test für neue Features einsetzen, jedoch haben Programmierkenntnisse nichts mit explorativem Testen zu tun bzw. unterstützen nicht die effiziente Durchführung. Daher ist dies keine Begründung.\n\nd) KORREKT – Explorative Tests sind effektiver, wenn die Tester Erfahrungen haben sowie über Anwendungskenntnisse und ein hohes Maß an analytischen Fähigkeiten, Neugier und Kreativität verfügen."
 },
 {
  "id": "B-27",
  "set": "B",
  "num": 27,
  "lo": "FL-4.4.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welches ist das BESTE Beispiel für eine Testbedingung bei der Verwendung von checklistenbasierten Tests?",
  "images": [],
  "options": [
   "„Der Entwickler hat bei der Implementierung des Codes eine Fehlhandlung gemacht.“",
   "„Die erreichte Anweisungsüberdeckung ist größer als 85 %.“",
   "„Das Programm erfüllt die funktionalen und nicht-funktionalen Anforderungen korrekt.“",
   "„Die Fehlermeldungen des Systems sind für die Benutzer verständlich.“"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Checklistenbasiert: Erfahrung als Liste – konsistenter als frei drauflos, flexibler als Skript. Checklisten pflegen, sonst Pestizid-Paradoxon!",
  "explanation": "a) FALSCH – Checklisten sollten zu prüfende Testbedingungen enthalten und keine allgemeinen Vermutungen. Dass Entwickler Fehlhandlungen begehen, kann eine Erfahrung sein. Um daraus ein oder mehrere Elemente als Testbedingungen für eine Checkliste zu machen, sollte diese Erfahrung konkretisiert werden: Welche Fehlhandlungen passieren öfters und welche Fehlerzustände bzw. welche Fehlerwirkungen können konkret daraus als Testbedingungen abgeleitet werden (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.3, 1. Absatz).\n\nb) FALSCH – Checklisten sollten keine Elemente enthalten, die besser als Endekriterien geeignet sind. Dies ist ein Beispiel für ein Endekriterium (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.3, 1. Absatz).\n\nc) FALSCH – Checklisten sollten zu prüfende Testbedingungen enthalten. Bei dieser Option handelt es sich um eine sehr allgemeine Forderung, die praktisch das grundsätzliche Ziel des Testens beschreibt und keine konkrete Testbedingung. Es sollte möglich sein, jedes Element einzeln und direkt zu prüfen (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.3, 2. Absatz).\n\nd) KORREKT – Dies ist ein Beispiel für eine Testbedingung, die von einem Tester auf Basis seines Wissens und seiner Erfahrung, was dem Benutzer wichtig ist, überprüft werden kann (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.3, 1. Absatz)."
 },
 {
  "id": "B-28",
  "set": "B",
  "num": 28,
  "lo": "FL-4.5.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Betrachten Sie das folgende Akzeptanzkriterium für eine User-Story, das aus der Perspektive eines Online-Shop-Inhabers geschrieben wurde. Angenommen, der Benutzer ist eingeloggt und befindet sich auf der Startseite: Wenn der Benutzer auf die Schaltfläche „Artikel hinzufügen“ klickt, Dann sollte das Formular „Artikel anlegen“ erscheinen, Und der Benutzer sollte in der Lage sein, einen Namen und einen Preis für den neuen Artikel einzugeben. In welchem Format ist dieses Akzeptanzkriterium geschrieben?",
  "images": [],
  "options": [
   "Regelorientiert",
   "Szenarioorientiert",
   "Produktorientiert",
   "Prozessorientiert"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Akzeptanzkriterien schreiben: szenariobasiert (Given/When/Then) oder regelorientiert (Checkliste, Tabelle). Immer prüfbar!",
  "explanation": "a) FALSCH – Das regelorientierte Format umfasst z. B. Verifizierungslisten mit Aufzählungspunkten oder tabellarische Formen von Eingabe-Ausgabe-Zuordnungen (Input- Output-Zuordnung), in denen die zu befolgenden Regeln angezeigt werden (siehe CTFL- Lehrplan V4.0, Abschnitt 4.5.2, 3. Absatz, 2. Aufzählungspunkt). Gegeben/Wenn/Dann ist ein szenarioorientiertes Format, das ein zu verifizierendes Szenario beschreibt.\n\nb) KORREKT – Das Akzeptanzkriterium nutzt das Gegeben/Wenn/Dann-Format, das szenarioorientiert ist (siehe CTFL-Lehrplan V4.0, Abschnitt 4.5.2, 3. Absatz, 1. Aufzählungspunkt).\n\nc) FALSCH – Es gibt kein „produktorientiertes“ Format für Akzeptanzkriterien, das allgemeingültig definiert ist.\n\nd) FALSCH – Es gibt kein „prozessorientiertes“ Format für Akzeptanzkriterien, das allgemeingültig definiert ist."
 },
 {
  "id": "B-29",
  "set": "B",
  "num": 29,
  "lo": "FL-4.5.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Bitte betrachten Sie die folgende User-Story: „Als Trainer einer Fußballmannschaft möchte ich die Spielberechtigungsliste im DFBNET für einen Spieltag abrufen können, damit ich den Kader für den nächsten Spieltag zusammenstellen kann.“ Welcher Testfall eignet sich AM BESTEN für eine abnahmetestgetriebene Entwicklung der User-Story?",
  "images": [],
  "options": [
   "Login als Trainer ins DFBNET; wähle die nächsten Spieltage für meine Mannschaft aus; lade die Spielberechtigungslisten.",
   "GEGEBEN: Ich bin als Trainer im DFBNET mit meiner Trainerkennung angemeldet UND GEGEBEN: Ich habe den nächsten Spieltag ausgewählt, WENN ich „Spielberechtigungsliste laden“ auswähle, DANN wird mir eine Liste der spielberechtigten Spieler für den nächsten Spieltag angezeigt.",
   "Login als Mannschaftsverantwortlicher; wähle den nächsten Spieltag aus; lade Spielberechtigungsliste; entferne Spieler, die nicht spielberechtigt sind.",
   "GEGEBEN: Ich habe die nächsten Spieltage für meine Mannschaft ausgewählt WENN ich einen Spieltag auswähle UND WENN ich die Spielberechtigungsliste für diesen Spieltag lade, DANN sollen mir alle spieleberechtigten Spieler für diesen Spieltag angezeigt werden."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung.",
  "explanation": "a) FALSCH – weil NICHT GEEIGNET – Die User-Story wird nicht korrekt wiedergeben. In diesem Testfall wird eine Liste von Spieltagen abgerufen und für alle diese Spieltage werden die Spielberechtigungslisten geladen. Dies wird aber in der User-Story nicht gefordert bzw. spezifiziert. Dort soll nur die Spielberechtigungsliste für einen Spieltag geladen werden.\n\nb) KORREKT – weil am besten GEEIGNET – Bei diesem Testfall wird nach dem Login als Trainer die Spielberechtigungsliste für den nächsten Spieltag geladen und angezeigt. Dies entspricht der Spezifikation der User-Story. Diese Option ist am besten geeignet, da sie die spezifischen Schritte für die Abnahme der Funktionalität klar definiert und die Akzeptanzkriterien direkt in den Testfall integriert.\n\nc) FALSCH – weil NICHT GEEIGNET – Die User-Story spezifiziert eindeutig, dass der Trainer die Spielberechtigungsliste für einen Spieltag einsehen möchte, um seine Mannschaft zusammenzustellen. Von einem Mannschaftsverantwortlichen ist nicht die Rede.\n\nd) FALSCH – weil NICHT GEEIGNET – Dieser Testfall prüft zwar die in der User-Story spezifizierte Funktionalität in angemessener Weise, berücksichtigt aber nicht, dass der Benutzer als Trainer am DFBNET angemeldet ist. Da die geforderte Funktionalität explizit auf die Rolle des Trainers zugeschnitten ist, ist der Testfall nicht am besten als Abnahmetest der User-Story geeignet."
 },
 {
  "id": "B-30",
  "set": "B",
  "num": 30,
  "lo": "FL-5.1.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Ihr Team folgt einem Prozess, der eine kontinuierliche Integrations - und Auslieferungspipeline (CI/CD) mit einem Shift-Left-Ansatz verwendet. Die ersten drei Schritte dieses Prozesses sind: (1) Entwicklung und Bereitstellung des Codes (2) Übergabe des Codes an das Versionskontrollsystem und Integration des Codes in den Branch „Test“ (3) Durchführen des automatisierten Komponententests des übergebenen Codes Welches der folgenden Kriterien eignet sich AM BESTEN als Eingangskriterium für Schritt (2) dieser Pipeline?",
  "images": [],
  "options": [
   "Die statische Analyse meldet für den übermittelten Code keine Fehler und keine Warnungen mit hohem Schweregrad.",
   "Die Versionskontrolle meldet keine Konflikte beim Kompilieren und Integrieren des Codes in den „Test“-Zweig.",
   "Die Komponententests sind kompiliert und stehen lauffähig für den „Test“- Zweig zur Verfügung.",
   "Die Anweisungsüberdeckung des Komponententests beträgt mindestens 80 %."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Eingangskriterien = Startbedingung (Definition of Ready). Endekriterien = Fertig-Bedingung (Definition of Done).",
  "explanation": "a) KORREKT – Der CI/CD-Ansatz zusammen mit dem Shift-Left-Ansatz fördert das frühe Testen, so dass Entwickler angehalten sind, ihren hochwertigen Code zusammen mit den Komponententests und der statischen Analyse bereitzustellen (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4 und 2.1.5). Daher sind die Ergebnisse der statischen Analyse ein sinnvolles und messbares Eingangskriterium vor der Integration des Codes in die CI/CD- Pipeline, vergleichbar einem Smoke-Test (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 2. Absatz).\n\nb) FALSCH – Dies kann überprüft werden, nachdem Schritt (2) ausgeführt wurde, da die Meldung von Konflikten erst nach der Kompilierung und Einbindung des Codes erfolgen kann.\n\nc) FALSCH – Dies ist als Eingangskriterium für Schritt (3) besser geeignet, da es keine Relevanz für Schritt (2) hat.\n\nd) FALSCH – Dies ist als Endekriterium für Schritt (3) besser geeignet."
 },
 {
  "id": "B-31",
  "set": "B",
  "num": 31,
  "lo": "FL-5.1.4",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie möchten den Testaufwand für ein neues Projekt mit Hilfe einer auf Kennzahlen basierenden Schätzung abschätzen. Sie berechnen das Verhältnis von Testaufwand zu Entwicklungsaufwand, indem Sie die Durchschnittsdaten sowohl für den Entwicklungs - als auch für den Testaufwand aus vier historischen Projekten verwenden, die dem neuen Projekt ähnlich sind. Die Tabelle zeigt unten diese historischen Daten. Projekt Entwicklungskosten (€) Testaufwand (€) P1 800.000 40.000 P2 1.200.000 130.000 P3 600.000 70.000 P4 1.000.000 120.000 Der geschätzte Entwicklungsaufwand für das neue Projekt beträgt 800.000 €. Wie hoch schätzen Sie den Testaufwand in diesem Projekt ein?",
  "images": [],
  "options": [
   "40.000 €",
   "80.000 €",
   "81.250 €",
   "82.500 €"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6.",
  "explanation": "Das genutzte Schätzverfahren basiert auf Verhältniszahlen, die sich aus den Durchschnittswerten historischer und ähnlicher Projekte als Kennzahlen ergeben (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.4, 3. Absatz). Der durchschnittliche Entwicklungsaufwand betrug 900.000 € (Summe: 3.600.000 €) und der durchschnittliche Testaufwand 90.000 € (Summe: 360.000 €), berechnet aus den vier Projekten. Das durchschnittliche Verhältnis von Testaufwand zu Entwicklungsaufwand beträgt 1:10 (90.000 €: 900.000 €), d. h., der Testaufwand betrug im Durchschnitt 10 % des Entwicklungsaufwands. Wenn also ein Entwicklungsaufwand von 800.000 € erwartet wird, kann der Testaufwand wie folgt geschätzt werden: 10 % * 800.000 € = 0,1 * 800.000 € = 80.000 €. Folglich\n\na) FALSCH\n\nb) KORREKT\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "B-32",
  "set": "B",
  "num": 32,
  "lo": "FL-5.1.5",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie wurden gebeten , eine optimale, risikobasierte Ausführungsreihenfolge der folgenden Testfälle festzulegen, die bereits priorisiert und auf mögliche Abhängigkeiten hin untersucht wurden: Testfall-ID Priorität Abhängig von T1 3 - T2 1 T1 T3 3 T2 T4 3 T2 T5 1 T3 T6 2 T4 Priorität 1 ist dringlicher als Priorität 2 usw. Welche der folgenden Testabläufe berücksichtigt die oben genannten Abhängigkeiten und Prioritäten?",
  "images": [
   "images/B-32.png"
  ],
  "options": [
   "T1 → T2 → T4 → T5 → T3 → T6",
   "T1 → T2 → T3 → T4 → T5 → T6",
   "T1 → T2 → T4 → T3 → T5 → T6",
   "T1 → T2 → T3 → T5 → T4 → T6"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall.",
  "explanation": "a) FALSCH – T5 ist von T3 abhängig, d. h., dass T3 vor T5 ausgeführt werden muss.\n\nb) FALSCH – T5 ist dringlicher als T4, so dass nach Ausführung von T3 als Nächstes T5 ausgeführt werden sollte.\n\nc) FALSCH – T5 ist dringlicher als T4, so dass T4 nach T3 und T5 ausgeführt werden sollte, nicht davor.\n\nd) KORREKT – Dieser Testausführungsplan berücksichtigt die Abhängigkeiten und Prioritäten korrekt. Der Testfall mit der höchsten Priorität (T5) benötigt T3. Dadurch wird T3 früher ausgeführt als der gleich priorisierte Testfall T4. T4 wird nach T5 ausgeführt, damit abschließend T6 ausgeführt werden kann."
 },
 {
  "id": "B-33",
  "set": "B",
  "num": 33,
  "lo": "FL-5.1.7",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welches der folgenden Elemente wird im Testquadrantenmodell dem Testquadranten Q1 („technologieorientiert“ und „Unterstützung des Teams“) zugeordnet?",
  "images": [],
  "options": [
   "Gebrauchstauglichkeitstests",
   "Smoke-Tests",
   "Benutzerabnahmetests",
   "Komponentenintegrationstests"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit).",
  "explanation": "a) FALSCH – Gebrauchstauglichkeitstests sind geschäftsorientierte Tests, die das Produkt kritisch betrachten (Q3).\n\nb) FALSCH – Smoke-Tests sind technologieorientierte Tests, die das Produkt kritisch betrachten (Q4).\n\nc) FALSCH – Benutzerakzeptanztests sind geschäftsorientierte Tests, die das Produkt kritisch betrachten (Q3).\n\nd) KORREKT – Komponentenintegrationstests sind technologieorientierte Tests, die das Team (die Entwicklung) unterstützen (Q1)."
 },
 {
  "id": "B-34",
  "set": "B",
  "num": 34,
  "lo": "FL-5.2.4",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche Aussage im Zusammenhang mit dem Risikomanagement beschreibt die Beziehung zwischen Produktrisiko und Testplanung NICHT genau?",
  "images": [],
  "options": [
   "Die potenziellen Auswirkungen von IT-Sicherheitsschwachstellen wurden als signifikant hoch bewertet, so dass das Endekriterium für den IT- Sicherheitstest auf 99 bestandene Testfälle erhöht wurde.",
   "Die geforderte Qualität des Netzwerkmoduls ist unklar, was zu weiteren Risikoanalysen in diesem Bereich führen wird.",
   "Die Benutzer hatten Probleme mit der Benutzungsschnittstelle des bestehenden Systems, so dass zusätzliche Gebrauchstauglichkeitstests für das Nachfolgesystem geplant sind.",
   "Die Ladezeit von Webseiten ist entscheidend für den Erfolg der neuen Website, daher wird ein Experte für Performanztests in das Projekt einbezogen."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Reaktion auf Produktrisiken: Testumfang/-tiefe anpassen, priorisieren, zusätzliche Maßnahmen (Reviews, Schulung, andere Teststufen).",
  "explanation": "a) FALSCH – Das Thema IT-Sicherheitsmängel wird als hohes Produktrisiko eingestuft und als Maßnahme zur Risikominderung wird das Thema IT-Sicherheitstests inklusive eines hohen Überdeckungsgrades gewählt. Dies ist eine sinnvolle Maßnahme im Sinne der Risikominderung (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.4, 2. Absatz und 4. Aufzählungspunkt).\n\nb) KORREKT – Wenn die Qualität eines Moduls unklar ist, ist eine zusätzliche Risikoanalyse notwendig, aber dies ist keine Aufgabe der Risikosteuerung. Die Testplanung sollte darauf abzielen, die Unsicherheiten zu beseitigen und die Qualität sicherzustellen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.4).\n\nc) FALSCH – Da die Anwender Probleme mit der Benutzungsschnittstelle des bisherigen Systems hatten, wird das Produktrisiko für die Gebrauchstauglichkeit der neuen Benutzungsschnittstelle als sehr hoch eingestuft, was dazu geführt hat, dass weitere Gebrauchstauglichkeitstests geplant sind. Diese Maßnahme eignet sich zur Risikominderung (mehr Tests im geeigneten Testverfahren, höhere Überdeckung) und somit ist diese Aussage im Rahmen des Risikomanagements sinnvoll (siehe CTFL- Lehrplan V4.0, Abschnitt 5.2.4, 2. Absatz und 4. Aufzählungspunkt).\n\nd) FALSCH – Da die Zeit, die zum Laden von Webseiten benötigt wird, als entscheidend für den Erfolg der neuen Website eingestuft wurde, ist die Performanz der Website als Risiko eingestuft. Die Auswahl von Testern mit dem richtigen Maß an Erfahrung und Fähigkeiten, die für einen bestimmten Risikotyp geeignet sind, ist eine sinnvolle Risikominderungsmaßnahme (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.4, 2. Absatz und 1. Aufzählungspunkt). Der Einsatz eines Performanztest-Experten ist daher im Rahmen des Risikomanagements sinnvoll."
 },
 {
  "id": "B-35",
  "set": "B",
  "num": 35,
  "lo": "FL-5.3.1",
  "k": "K1",
  "category": "Testmanagement",
  "question": "Welche der folgenden Kennzahlen ist eine Produktqualitätsmetrik?",
  "images": [],
  "options": [
   "Mittlere Betriebsdauer bis zum Ausfall (Mean time to Failure)",
   "Anzahl der aufgedeckten Fehlerzustände",
   "Anforderungsüberdeckung",
   "Fehlerdichte"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testmetriken: Fortschritt (Testfälle durchgeführt) · Qualität (Fehlerdichte, -findungsrate) · Überdeckung · Kosten. Zahlen statt Bauchgefühl.",
  "explanation": "a) KORREKT – Produktqualitätsmetriken messen Qualitätsmerkmale. Die mittlere Zeit bis zum Ausfall misst die Reife und ist somit eine Kennzahl für die Produktqualität (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.1, 3. Aufzählungspunkt).\n\nb) FALSCH – Dies ist ein Beispiel für eine Fehlerzustandsmetrik, keine Produktqualitätsmetrik (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.1, 4. Aufzählungspunkt).\n\nc) FALSCH – Dies ist ein Beispiel für eine Überdeckungsmetrik, keine Produktqualitätsmetrik (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.1, 6. Aufzählungspunkt).\n\nd) FALSCH – Dies ist ein Beispiel für eine Fehlerzustandsmetrik, keine Produktqualitätsmetrik (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.1, 4. Aufzählungspunkt)."
 },
 {
  "id": "B-36",
  "set": "B",
  "num": 36,
  "lo": "FL-5.3.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Stellen Sie sich vor, Sie sind Mitglied eines Testteams in Europa und entwickeln ein Produkt für einen Kunden in Nordamerika. Das Team arbeitet nach dem DevOps -Ansatz und verwendet eine Pipeline für kontinuierliche Integration und kontinuierliche Bereitstellung für die Entwicklung. Welche der folgenden Kommunikationsmethoden wäre angesichts der geografischen Entfernung und des agilen Charakters des Projekts AM WENIGSTEN effektiv, um den Testfortschritt an den Kunden zu übermitteln?",
  "images": [],
  "options": [
   "Persönliche Treffen (von Angesicht zu Angesicht)",
   "Interaktive Dashboards",
   "E-Mail-Aktualisierungen",
   "Videokonferenzen"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Teststatus kommunizieren: mündlich, Dashboard, Bericht – Kanal und Detailtiefe nach Zielgruppe wählen.",
  "explanation": "Laut Lehrplan ist nur die direkte Kommunikation von Angesicht zu Angesicht über verschiedene Zeitzonen hinweg nicht immer möglich. Daher ist Option a) korrekt.\n\na) KORREKT – Der Kunde befindet sich an einem anderen, weit entfernten Ort und in einer anderen Zeitzone, so dass es nicht immer möglich ist, persönlich zu kommunizieren (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.3, 2. Absatz, 2. Satz).\n\nb) FALSCH – Dashboards sind in der Regel für jeden Nutzer jederzeit verfügbar, so dass der Zeitzonenunterschied die Kommunikation nicht so sehr behindert wie die verbale Kommunikation von Angesicht zu Angesicht.\n\nc) FALSCH – Obwohl der Zeitunterschied zwischen Europa und Amerika mehrere Stunden beträgt und dies einige Unannehmlichkeiten mit sich bringen kann, sind diese sicherlich nicht so groß wie bei der Kommunikation von Angesicht zu Angesicht.\n\nd) FALSCH – Videokonferenzen sind ein praktisches Kommunikationsmittel. Obwohl die Kommunikation zwischen Europa und Amerika während der Arbeitszeit es normalerweise erfordert, dass eine Partei sehr früh am Tag oder sehr spät an der Videokonferenz teilnimmt, ist dies nicht mit so viel Unannehmlichkeiten verbunden wie die verbale Kommunikation von Angesicht zu Angesicht."
 },
 {
  "id": "B-37",
  "set": "B",
  "num": 37,
  "lo": "FL-5.4.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen beschreibt ein Beispiel dafür, wie Konfigurationsmanagement (KM) das Testen unterstützt?",
  "images": [],
  "options": [
   "Über die Versionsnummer der Testumgebung und die gespeicherten Beziehungen kann das KM-Werkzeug die Versionsnummern der in dieser Umgebung verwendeten Bibliotheken, Platzhalter und Treiber abrufen.",
   "Die Änderung von Baselines wird durch KM-Werkzeuge flexibel und pragmatisch unterstützt, wenn die Tester dies aufgrund unerwarteter Ereignisse während der Testdurchführung für notwendig erachten.",
   "Das Konfigurationsmanagement unterstützt die Verfolgung von Testskripten und Testfällen. Testergebnisse werden hingegen durch das Fehlermanagement verwaltet.",
   "Das Konfigurationsmanagement fasst komplexe Konfigurationselemente in einer Baseline zusammen. Um diese als Basis zu etablieren, können Tester später nicht mehr auf eine frühere Baseline zurückgreifen."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde.",
  "explanation": "a) KORREKT – Für ein komplexes Konfigurationselement (z. B. eine Testumgebung) zeichnet KM die Elemente auf, aus denen es besteht, sowie ihre Beziehungen und Versionen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.4, 2. Absatz, 1. Satz).\n\nb) FALSCH – Für die Änderung von Baselines ist ein formaler Änderungskontrollprozess notwendig (siehe CTFL-Lehrplan V4.0, Abschnitt 5.4, 2. Absatz, 2. Satz).\n\nc) FALSCH – Das Konfigurationsmanagement unterstützt auch die Verfolgung von Testergebnissen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.4, 1. Absatz).\n\nd) FALSCH – Es ist möglich, zu einer früheren Baseline zurückzukehren (siehe CTFL- Lehrplan V4.0, Abschnitt 5.4, 3. Absatz, 2. Satz). Das ist z. B. auch notwendig, um frühere Ergebnisse nachvollziehen zu können."
 },
 {
  "id": "B-38",
  "set": "B",
  "num": 38,
  "lo": "FL-5.5.1",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie testen eine Sortierfunktion, die eine Reihe von Zahlen als Eingabe erhält und dieselben Zahlen in aufsteigender Reihenfolge sortiert zurückgibt. Das Protokoll der Testausführung sieht wie folgt aus: Environment configuration: sort function build 2.002.2182, test case set: TCS-3, # of TCs: 5 Test run ID: 736 Start 12:43:21.003 12:43:21.003 Execution of TC1. Input: 3. Output: 3. Result: passed 12:43:21.003 Execution of TC2. Input: 3, 11, 6, 5. Output: 3, 5, 6, 11. Result: passed 12:43:21.004 Execution of TC3. Input: 8, 7, 3, 7, 1. Output: 1, 3, 7, 8. Result: failed 12:43:21.005 Execution of TC4. Input: -2 -2 -2 -3 -3. Output: -3, -2. Result: failed 12:43:21.005 Execution of TC5. Input: 0, -2, 0, 3, 4, 4. Output: -2, 0, 3, 4. Result: failed End 12:43:21.005 Total time of test cycle: 0:00:00.002 Welche der folgenden Beschreibungen ist die BESTE Fehlerbeschreibung, die in einem Fehlerbericht verwendet werden kann?",
  "images": [
   "images/B-38.png"
  ],
  "options": [
   "Das System kann mehrere Zahlensätze nicht sortieren. Referenz: TC3, TC4, TC5.",
   "Das System scheint Duplikate beim Sortieren zu ignorieren. Referenz: TC3, TC4, TC5.",
   "Das System kann keine negativen Zahlen sortieren. Referenz: TC4, TC5.",
   "TC3, TC4 und TC5 sind fehlerhaft (doppelte Eingabedaten) und sollten korrigiert werden."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung.",
  "explanation": "a) FALSCH – Obwohl der Satz wahr ist, bietet er dem Entwickler keinen großen Mehrwert. Die beobachteten Abweichungen lassen eine detailliertere Analyse zu. Daher ist Option b) zu bevorzugen.\n\nb) KORREKT – Aus den Testergebnissen geht hervor, dass das System Duplikate ignoriert und die Liste ohne Berücksichtigung der Wiederholungen sortiert bzw. die duplizierten Werte nur einmal zurückgibt. Dies ist wahrscheinlich die Ursache für Fehler in TC3, TC4, TC5. Solche Informationen können dem Entwickler helfen, den Fehler zu finden und ihn effizient zu beheben.\n\nc) FALSCH – Das System versagt nicht beim Sortieren negativer Zahlen. Das sieht man auch daran, dass die negativen Zahlen korrekt am Anfang der Reihe einsortiert werden. Das Problem besteht vielmehr darin, Duplikate zu ignorieren.\n\nd) FALSCH – Die Testfälle TC3, TC4 und TC5 schlagen fehl, aber wir kennen keine Fehler in den Testfällen. In der Spezifikation ist nicht beschrieben, dass Duplikate nicht verwendet werden dürfen bzw. dass alle Zahlen unterschiedlich sein müssen."
 },
 {
  "id": "B-39",
  "set": "B",
  "num": 39,
  "lo": "FL-6.1.1",
  "k": "K2",
  "category": "Testwerkzeuge",
  "question": "Berücksichtigen Sie die folgenden Beschreibungen: 1. Unterstützung der Verfolgung von Arbeitsabläufen 2. Kommunikation erleichtern 3. Virtuelle Maschinen 4. Unterstützung von Auswertungen bei Reviews und die folgenden Kategorien von Testwerkzeugen: A. Statische Testwerkzeuge B. Werkzeuge zur Unterstützung der Skalierbarkeit und Standardisierung der Bereitstellung C. DevOps-Werkzeuge D. Werkzeuge für die Zusammenarbeit Welche der folgenden Optionen ordnet die Beschreibungen und Kategorien AM BESTEN einander zu?",
  "images": [],
  "options": [
   "1A, 2B, 3C, 4D",
   "1B, 2D, 3C, 4A",
   "1C, 2D, 3B, 4A",
   "1D, 2C, 3A, 4B"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline).",
  "explanation": "Unter Berücksichtigung der einzelnen aufgeführten Werkzeugkategorien und ihrer Beschreibungen: A. Statische Testwerkzeuge – unterstützen den Tester bei der Durchführung von Überprüfungen und statischen Analysen (4) (siehe CTFL-Lehrplan V4.0, Absatz 6.1.1, 2. Aufzählungspunkt). B. Tools, die Skalierbarkeit und Bereitstellungsstandardisierung unterstützen – dazu gehören z. B. virtuelle Maschinen, Container-Tools (3) (siehe CTFL-Lehrplan V4.0, Absatz 6.1.1, 8. Aufzählungspunkt). C. DevOps-Testwerkzeuge – unterstützen die DevOps-Bereitstellungspipeline, Workflow- Tracking, automatisierte Build-Prozesse, kontinuierliche Integration/kontinuierliche Bereitstellung (CI/CD) (1) (siehe CTFL-Lehrplan V4.0, Absatz 6.1.1, 6. Aufzählungspunkt). D. Werkzeuge für die Zusammenarbeit – erleichtern die Kommunikation (2) (siehe CTFL- Lehrplan V4.0, Absatz 6.1.1, 7. Aufzählungspunkt). Daher\n\na) FALSCH\n\nb) FALSCH\n\nc) KORREKT – Die richtige Übereinstimmung ist: 1C, 2D, 3B, 4A.\n\nd) FALSCH"
 },
 {
  "id": "B-40",
  "set": "B",
  "num": 40,
  "lo": "FL-6.2.1",
  "k": "K1",
  "category": "Testwerkzeuge",
  "question": "Welcher der folgenden Vorteile trifft AM EHESTEN auf die Testautomatisierung zu?",
  "images": [],
  "options": [
   "Die Testautomatisierung ermöglicht auch die Messung komplexerer Überdeckungskriterien.",
   "Durch die Testautomatisierung wird ein Teil der Verantwortung für das Testen dem Werkzeuganbieter übertragen.",
   "Die Testautomatisierung macht kritisches Denken bei der Analyse von Testergebnissen überflüssig.",
   "Testautomatisierung generiert Testfälle auf Systemebene aus einer Analyse des Programmcodes."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit.",
  "explanation": "a) KORREKT – Die Testautomatisierung kann Messungen bereitstellen, die zu kompliziert sind, um von Menschen abgeleitet zu werden, z. B. White-Box-Testüberdeckungsmaße für alle Codes außer den trivialsten (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 3. Aufzählungspunkt).\n\nb) FALSCH – Bei der Verwendung von Testwerkzeugen wird die Verantwortung für das Testen NICHT mit dem Hersteller des Werkzeugs geteilt, da der Anbieter nicht am Testen beteiligt ist und das Testen in der Verantwortung des Testers liegt. Die einzige mögliche Verantwortung, die dem Tool-Anbieter übertragen werden kann, ist die, dass das Tool nicht wie erwartet funktioniert und falsche Testergebnisse liefert (siehe CTFL- Lehrplan V4.0, Abschnitt 6.2, 11. Aufzählungspunkt).\n\nc) FALSCH – Der Tester muss bei der Analyse von Anomalien in den Testergebnissen kritisch sein, um deren wahrscheinliche Ursache zu ermitteln (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 10. Aufzählungspunkt).\n\nd) FALSCH – Weder Tester noch Werkzeuge können Testfälle einfach aus einer Analyse des Programmcodes generieren, da der Code die Implementierung darstellt und keine Informationen über die erwarteten Ergebnisse liefert, die aus einem anderen Teil der Testbasis, z. B. der Designspezifikation, stammen müssen (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 7. Aufzählungspunkt). Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet) Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet)"
 },
 {
  "id": "C-1",
  "set": "C",
  "num": 1,
  "lo": "FL-1.1.1",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Optionen stellt ein typisches Testziel dar?",
  "images": [],
  "options": [
   "Validieren, ob die dokumentierten Anforderungen erfüllt sind.",
   "Auslösen von Fehlerwirkungen und Finden von Fehlerzuständen.",
   "Fehler initiieren und deren Ursachen identifizieren.",
   "Verifikation, ob das Testobjekt die Erwartungen der Benutzer erfüllt."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testziele: Fehler finden · Risiko senken · Vertrauen aufbauen · informieren. NIE: Fehlerfreiheit beweisen.",
  "explanation": "a) FALSCH – Die Validierung der Übereinstimmung mit dokumentierten Anforderungen ist nicht korrekt. „Validierung“ bezieht sich auf die Übereinstimmung mit den Bedürfnissen der Benutzer und anderer Stakeholder in der Betriebsumgebung, während „Verifizierung“ die Übereinstimmung mit den spezifizierten Anforderungen beschreibt (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.1.1, 5. Aufzählungspunkt).\n\nb) KORREKT – Das Auslösen von Fehlerwirkungen und das Finden von Fehlerzuständen ist im CTFL-Lehrplan V4.0.2, Abschnitt 1.1.1, ausdrücklich als typisches Testziel genannt.\n\nc) FALSCH – Fehler werden nicht durch Tester „initiiert“, sondern entstehen typischerweise durch Fehlhandlungen (z. B. von Entwicklern). Tester versuchen, Fehlerwirkungen aufzudecken. Die Ursachenanalyse ist Bestandteil des Debuggings und damit nicht Teil des eigentlichen Testens (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.1, 2. Aufzählungspunkt partiell sowie Abschnitt 1.1.2, letzter Absatz).\n\nd) FALSCH – Verifikation bezieht sich auf die Prüfung, ob spezifizierte (dokumentierte) Anforderungen erfüllt sind. Die Erwartungen der Benutzer werden hingegen im Rahmen der Validierung überprüft. Daher ist hier der Begriff „Verifikation“ fehl am Platz (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.1, letzter Aufzählungspunkt)."
 },
 {
  "id": "C-2",
  "set": "C",
  "num": 2,
  "lo": "FL-1.1.2",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging AM BESTEN?",
  "images": [],
  "options": [
   "Beim Testen wird die Ursache von Fehlerzuständen identifiziert, während beim Debugging die Fehlerzustände analysiert und behoben werden.",
   "Testen ist eine negative Aktivität, während Debugging eine positive Aktivität ist.",
   "Beim Testen können Fehlerzustände gefunden werden, während beim Debugging Fehlerzustände analysiert und behoben werden.",
   "Beim Testen wird die Fehlerursache gefunden, während beim Debugging die Fehlerursache behoben wird."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Testen findet die Fehlerwirkung – Debugging findet und beseitigt die Ursache. (Tester finden, Entwickler flicken.)",
  "explanation": "a) FALSCH – Beim Testen werden nicht die Ursachen von Fehlerzuständen identifiziert. Der Zweck des Debuggings besteht hingegen darin, Fehlerzustände zu analysieren und zu beheben (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.2, 1. und 2. Absatz).\n\nb) FALSCH – Testen und Debugging werden nicht als negative bzw. positive Aktivitäten unterschieden. Beide tragen zur Qualität bei; der Unterschied liegt darin, dass Testen Fehlerwirkungen auslösen oder Fehlerzustände finden kann, während Debugging Fehlerzustände analysiert und behebt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.2, 1. und 2. Absatz).\n\nc) KORREKT – Testen und Debugging sind getrennte Aktivitäten. Testen kann im dynamischen Test Fehlerwirkungen auslösen oder im statischen Test direkt Fehlerzustände finden. Debugging umfasst typischerweise die Reproduktion einer Fehlerwirkung, die Diagnose bzw. das Finden des verursachenden Fehlerzustands und die Behebung des Fehlerzustands (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.2).\n\nd) FALSCH – Fehlerursachen werden beim Testen nicht ermittelt und beim Debugging nicht automatisch behoben. Fehler entstehen typischerweise durch menschliches Versagen. Testen dient der Entdeckung von Fehlerwirkungen, Debugging der Analyse und Behebung von Defekten. Die Aussage stellt eine unzulässige Vereinfachung dar (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.1.2, 3. Absatz)."
 },
 {
  "id": "C-3",
  "set": "C",
  "num": 3,
  "lo": "FL-1.3.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Ein Grundsatz des Testens lautet: „Der Trugschluss, dass ein fehlerfreies System auch automatisch brauchbar ist, muss vermieden werden.“ Welches der folgenden Beispiele zeigt, wie dieser Grundsatz in der Praxis berücksichtigt wird?",
  "images": [],
  "options": [
   "Darauf hinweisen, dass Testen niemals die Abwesenheit von Fehlern beweisen kann.",
   "Die Endnutzer bei der Durchführung von Abnahmetests unterstützen.",
   "Sicherstellen, dass das gelieferte System keine Implementierungsfehler enthält.",
   "Tests verändern, die keine Fehler finden, um die Fehlerdichte zu verringern."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar.",
  "explanation": "Der Irrglaube, dass „keine Fehler“ ein brauchbares System bedeuten, beruht auf der Vorstellung, dass die Sicherstellung der Korrektheit gemäß den Anforderungen (d. h. die Überprüfung der Abwesenheit von Implementierungsfehlern) keine Garantie für die Zufriedenheit der Benutzer mit dem System ist. Um dieses Problem anzugehen, muss auch überprüft werden, ob das System die Bedürfnisse und Erwartungen der Benutzer erfüllt, die Geschäftsziele erreicht und konkurrierende Systeme übertrifft.\n\na) FALSCH – Der Grundsatz „Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlerzuständen“ bedeutet, dass das Testen zwar das Vorhandensein von Fehlern im Testobjekt nachweisen kann, dass es aber nicht möglich ist, die Abwesenheit von Fehlerzuständen nachzuweisen und damit die Korrektheit des Testobjekts zu gewährleisten. Daher würde die Erläuterung, dass es durch Tests nicht möglich ist, die Abwesenheit von Fehlern durch Testen nachzuweisen, teilweise diesem Grundsatz Rechnung tragen und nicht den Irrtum der „Abwesenheit von Fehlern“ widerspiegeln (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.3, 1. Grundsatz).\n\nb) KORREKT – Durch die Unterstützung des Endbenutzers bei der Durchführung von Abnahmetests sollte es möglich sein, zu validieren, ob das System die Bedürfnisse und Erwartungen der Benutzer erfüllt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.3, 7. Grundsatz, letzter Satz).\n\nc) FALSCH – Es kann nicht sichergestellt werden, dass keine Implementierungsfehler im gelieferten System verbleiben, da der Grundsatz „Testen zeigt das Vorhandensein, nicht die Abwesenheit von Fehlern“ besagt, dass Tests zwar das Vorhandensein von Fehlern im Testobjekt erkennen können, es aber nicht möglich ist, die Abwesenheit von Fehlerzuständen zu beweisen und damit deren Korrektheit zu garantieren (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.3, 1. Grundsatz).\n\nd) FALSCH – Die Modifikation von Tests, die keine Fehler verursachen, um sicherzustellen, dass nur wenige Fehler verbleiben, ist eine Möglichkeit, dem Prinzip „Tests nutzen sich ab“ zu begegnen. Bei diesem Grundsatz geht es um die Idee, dass die Wiederholung identischer Tests an unverändertem Code wahrscheinlich keine neuen Fehler aufdeckt und daher eine Änderung der Tests unerlässlich ist, sie bestätigt aber nicht, dass das System den Bedürfnissen und Erwartungen der Benutzer entspricht (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.3, 5. Grundsatz)."
 },
 {
  "id": "C-4",
  "set": "C",
  "num": 4,
  "lo": "FL-1.4.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Bei welchen der folgenden Testaktivitäten werden typischerweise die Testverfahren der Grenzwertanalyse und der Äquivalenz klassenbildung angewendet?",
  "images": [],
  "options": [
   "Testrealisierung",
   "Testentwurf",
   "Testdurchführung",
   "Testüberwachung",
   "Testanalyse"
  ],
  "correct": [
   1,
   4
  ],
  "nSelect": 2,
  "merksatz": "Testprozess: Planung → Überwachung/Steuerung → Analyse (WAS testen?) → Entwurf (WIE testen?) → Realisierung → Durchführung → Abschluss.",
  "explanation": "Die Testanalyse wird wie folgt beschrieben: Um die Merkmale zu identifizieren, die getestet werden müssen, wird die Testbasis analysiert und Testbedingungen identifiziert, die dann zusammen mit den damit verbundenen Risiken priorisiert werden. Die systematische Identifizierung von Testbedingungen als Überdeckungselemente erfordert häufig den Einsatz von Testverfahren sowohl während der Testanalyse als auch als Teil des Testentwurfs. Aus der obigen Beschreibung ist ersichtlich, dass Testverfahren häufig in der Testanalyse und beim Testentwurf verwendet werden. Grenzwertanalyse und Äquivalenzklassenbildung sind Testverfahren.\n\na) FALSCH – Die Testrealisierung erfordert wahrscheinlich nicht den Einsatz von Testverfahren, da es sich hauptsächlich um die Zusammenstellung von Testfällen zu Testprozeduren handelt, während Testverfahren Testfälle erstellen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, 6. Absatz: \"Die Testrealisierung umfasst ...\").\n\nb) KORREKT – Beim Testentwurf werden Testbedingungen zu Testfällen und anderen Testmitteln ausgearbeitet. Testverfahren wie Äquivalenzklassenbildung und Grenzwertanalyse können dabei zur Ableitung von Testfällen und zur Identifizierung von Überdeckungselementen eingesetzt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, 5. Absatz: \"Der Testentwurf umfasst ...\").\n\nc) FALSCH – Die Testdurchführung erfordert wahrscheinlich nicht den Einsatz von Testverfahren, da sie sich hauptsächlich mit der Ausführung von Testprozeduren (und damit Testfällen) befasst, während Testverfahren Testfälle erstellen (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.4.1, 7. Absatz: \"Die Testdurchführung umfasst ...\").\n\nd) FALSCH – Bei der Testüberwachung werden wahrscheinlich keine Testverfahren eingesetzt. Bei der Testüberwachung geht es hauptsächlich um die laufenden Kontrollen, um sicherzustellen, dass der Plan eingehalten wird, während Testverfahren Testfälle erstellen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, 3. Absatz: \"Die Testüberwachung umfasst ...\").\n\ne) KORREKT – Die Testanalyse beinhaltet wahrscheinlich den Einsatz von Testverfahren, um Testbedingungen zu identifizieren (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.1, 4. Absatz: \"Die Testanalyse umfasst ...\")."
 },
 {
  "id": "C-5",
  "set": "C",
  "num": 5,
  "lo": "FL-1.4.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Gegeben sind folgende Testaktivitäten: A. Testanalyse B. Testentwurf C. Testrealisierung D. Testabschluss Und folgende Testmittel: 1. Überdeckungselemente 2. Änderungsanträge 3. Testausführungsplan 4. Priorisierte Testbedingungen Welche der folgenden Aussagen beschreibt die Zuordnung von Testaktivität zu erzeugtem Testmittel AM ZUTREFFENDSTEN?",
  "images": [],
  "options": [
   "1B, 2D, 3C, 4A",
   "1B, 2D, 3A, 4C",
   "1D, 2C, 3A, 4B",
   "1D, 2C, 3B, 4A"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testmittel = Ergebnisse der Testaktivitäten: Testkonzept (Planung) · Testfälle (Entwurf) · Skripte/Daten (Realisierung) · Protokolle/Berichte (Durchführung/Abschluss).",
  "explanation": "Betrachten wir jede der aufgeführten Testaktivitäten und ihre Testergebnisse: A. Testanalyse – priorisierte Testbedingungen (4) (z. B. Akzeptanzkriterien) und Fehlerberichte für in der Testbasis identifizierte Fehler (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.3, 3. Aufzählungspunkt: \"... (priorisierte) Testbedingungen (…)\"). B. Testentwurf – priorisierte Testfälle, Test-Chartas, Überdeckungselemente (1), Testdatenanforderungen und Testumgebungsanforderungen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.3, 4. Aufzählungspunkt: \"… Überdeckungselemente ...\"). C. Testrealisierung – Testabläufe, manuelle und automatisierte Testskripte, Testsuiten, Testdaten, Testausführungspläne und Bestandteile der Testumgebung (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.4.3, 5. Aufzählungspunkt: \"Testausführungspläne …\"). D. Testabschluss – Testabschlussbericht, dokumentierte gewonnene Erkenntnisse, Verbesserungsmaßnahmen und Änderungsanforderungen (2) (als Elemente des Produkt-Backlogs (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.3, letzter Aufzählungspunkt: \"… Änderungsanträge ...\"). Daher\n\na) KORREKT – Die richtige Übereinstimmung ist: 1B, 2D, 3C, 4A\n\nb) FALSCH\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "C-6",
  "set": "C",
  "num": 6,
  "lo": "FL-1.4.5",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen über Testrollen in der agilen Softwareentwicklung trifft AM ZUTREFFENDSTEN zu?",
  "images": [],
  "options": [
   "In agilen Teams liegt das Testmanagement hauptsächlich beim Team, während das Testen überwiegend von externen Spezialisten durchgeführt wird.",
   "Die operative Rolle des Testens übernimmt vor allem die Testüberwachung und Teststeuerung, während das Testmanagement für Planung und Durchführung zuständig ist.",
   "In der agilen Entwicklung können einige Aufgaben des Testmanagements vom agilen Team selbst übernommen werden. Aufgaben, die mehrere Teams betreffen, können von Testmanagern außerhalb des Entwicklungsteams übernommen werden.",
   "Das Testmanagement ist hauptsächlich für Testanalyse und Testentwurf verantwortlich, während die operative Rolle des Testens vor allem Implementierung und Ausführung übernimmt."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Rolle des Testens: analysiert, entwirft, führt aus, meldet. Testmanagementrolle: plant, steuert, koordiniert, berichtet.",
  "explanation": "a) FALSCH – Obwohl es richtig ist zu sagen, dass bei der agilen Softwareentwicklung einige der Testmanagementaufgaben möglicherweise vom agilen Team selbst übernommen werden können, liegt die Testverantwortung nicht primär bei einer einzelnen Person außerhalb des Teams. Stattdessen ist es wahrscheinlicher, dass die Tests von verschiedenen Teammitgliedern durchgeführt werden, die dem Whole-Team- Ansatz folgen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5).\n\nb) FALSCH – Die Rolle des Testmanagements umfasst hauptsächlich Aktivitäten im Zusammenhang mit der Testplanung, der Testüberwachung und Teststeuerung sowie dem Testabschluss. Obwohl diese Aussage teilweise richtig ist, ist es falsch zu sagen, dass die Rolle des Testmanagements hauptsächlich für die Testüberwachung und Teststeuerung verantwortlich ist (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5).\n\nc) KORREKT – In der agilen Softwareentwicklung können einige der Testmanagementaufgaben vom agilen Team selbst übernommen werden. Bei Testaktivitäten, die mehrere Teams innerhalb einer Organisation betreffen, können diese Aufgaben jedoch auch von Testmanagern außerhalb des Entwicklungsteams durchgeführt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5, 2. Absatz).\n\nd) FALSCH – Die Rolle des Testmanagements umfasst in erster Linie Aktivitäten im Zusammenhang mit der Testplanung, der Teststeuerung sowie dem Testabschluss, während die Rolle des Testens hauptsächlich für die technischen und fachlichen Aspekte des Testens verantwortlich ist, wie z. B. Testanalyse, Testentwurf, Testimplementierung und Testausführung. Daher ist die Rolle des Testmanagements normalerweise nicht für die Testanalyse und den Testentwurf verantwortlich, obwohl es richtig ist zu sagen, dass die Rolle des Testens hauptsächlich für die Testimplementierung und die Testausführung verantwortlich ist (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.4.5)."
 },
 {
  "id": "C-7",
  "set": "C",
  "num": 7,
  "lo": "FL-1.5.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Was ist ein typischer Vorteil des ganzheitlichen Teamansatzes (Whole- Team-Ansatz) in agilen Projekten?",
  "images": [],
  "options": [
   "Das Team arbeitet ohne dedizierte Tester.",
   "Die Teamdynamik wird verbessert.",
   "Nur Mitglieder des Fachbereichs sind für das Testen zuständig.",
   "Teams werden durch zusätzliche Rollen vergrößert."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen.",
  "explanation": "a) FALSCH – Der Whole-Team-Ansatz bedeutet nicht, dass Teams ohne Tester arbeiten. Stattdessen spielen Tester eine wesentliche Rolle, indem sie ihr Fachwissen mit dem Team teilen, Teststrategien erarbeiten und die Qualitätssicherung unterstützen. Sie arbeiten eng mit Entwicklern und Business-Vertretern zusammen, um Abnahmetests und Testautomatisierung zu optimieren (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2).\n\nb) KORREKT – Der Whole-Team-Ansatz fördert eine bessere Teamdynamik durch stärkere Zusammenarbeit und effektivere Kommunikation. Dies führt zu einer effizienteren Arbeitsweise, da Synergien durch den gezielten Einsatz unterschiedlicher Kompetenzen entstehen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2, 2. Absatz).\n\nc) FALSCH – Der Whole-Team-Ansatz erfordert keine spezifischen Fachteams oder stark spezialisierte Rollen. Stattdessen wird Wert daraufgelegt, dass alle Teammitglieder flexibel Aufgaben übernehmen, sofern sie über die notwendigen Kompetenzen verfügen. Der Vorteil liegt in der Verteilung von Wissen und Verantwortung auf das gesamte Team (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2).\n\nd) FALSCH – Die Größe eines Teams ist kein entscheidender Faktor für den Whole-Team- Ansatz. Es gibt keine allgemeine Empfehlung, dass größere Teams besser funktionieren. Vielmehr kommt es darauf an, wie effektiv ein Team zusammenarbeitet, unabhängig von seiner Größe (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.2)."
 },
 {
  "id": "C-8",
  "set": "C",
  "num": 8,
  "lo": "FL-1.5.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen zur Unabhängigkeit des Testens trifft AM EHESTEN zu?",
  "images": [],
  "options": [
   "Unabhängige Tester entdecken häufig Fehler, weil sie mit einer anderen Perspektive als die Entwickler testen – diese Unabhängigkeit kann jedoch zu Spannungen im Team führen.",
   "Entwickler finden nur wenige Fehler in ihrem eigenen Code, und Tester mit ähnlichem Hintergrund sind beim Finden derselben Fehler ebenfalls eingeschränkt.",
   "Unabhängiges Testen ist nur durch externe Tester außerhalb des Teams oder der Organisation möglich, was jedoch die Kenntnis der Fachdomäne erschwert.",
   "Tester außerhalb des Teams gelten als unabhängiger, während interne Tester eher für Projektverzögerungen verantwortlich gemacht werden."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Unabhängiges Testen: + eigene Sicht, findet andere Fehler · − Isolation, Kommunikationshürden, Entwickler schieben Verantwortung ab.",
  "explanation": "a) KORREKT – Unabhängige Tester erkennen aufgrund ihres unterschiedlichen Hintergrunds, ihrer technischen Perspektive und anderer Voreingenommenheiten wahrscheinlich andere Arten von Fehlerwirkungen und Fehlerzuständen als Entwickler; diese Unabhängigkeit kann jedoch zu Kommunikationsproblemen oder Spannungen mit dem Entwicklungsteam führen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.3, 1. und 4. Absatz).\n\nb) FALSCH – Die Vertrautheit eines Entwicklers mit dem Code bedeutet nicht, dass er selten Fehler darin findet, sondern vielmehr, dass er viele Fehler in seinem eigenen Code effizient finden kann. Und der Grund dafür, dass Tester und Entwickler unterschiedliche Arten von Fehlern finden, ist normalerweise nicht, dass Entwickler und Tester den gleichen Hintergrund haben, sondern dass Entwickler einen anderen Hintergrund haben als Tester (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.3).\n\nc) FALSCH – Tests können auf verschiedenen Ebenen der Unabhängigkeit durchgeführt werden, von keiner Unabhängigkeit des Autors bis hin zu einer sehr hohen Unabhängigkeit für Tester von außerhalb der Organisation. In den meisten Projekten werden mehrere Unabhängigkeitsstufen verwendet: Entwickler führen Komponententests und Komponentenintegrationstests durch, das Testteam führt System- und Systemintegrationstests durch und Unternehmensvertreter führen Abnahmetests durch. Tester können also Teil des Entwicklungsteams sein und müssen nicht von außerhalb der Organisation kommen. Die Kenntnis der Anwendungsdomäne variiert von Fall zu Fall und hängt nicht vom Grad der Unabhängigkeit ab (siehe CTFL-Lehrplan V4.0.2, Abschnitt 1.5.3).\n\nd) FALSCH – Tests können auf verschiedenen Ebenen der Unabhängigkeit durchgeführt werden, von keiner Unabhängigkeit des Autors bis hin zu einer sehr hohen Unabhängigkeit für Tester von außerhalb der Organisation, wobei Tester von außerhalb des Entwicklungsteams im Allgemeinen unabhängiger sind als Tester innerhalb des Teams. Es gibt jedoch mehr Gründe zu der Annahme, dass Tester außerhalb des Teams wahrscheinlich stärker von den Entwicklern isoliert sind und daher eher für Verzögerungen bei der Produktfreigabe verantwortlich gemacht werden (siehe CTFL- Lehrplan V4.0.2, Abschnitt 1.5.3)."
 },
 {
  "id": "C-9",
  "set": "C",
  "num": 9,
  "lo": "FL-2.1.2",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt eine gute Testpraxis, die unabhängig vom gewählten Softwareentwicklungslebenszyklus gilt?",
  "images": [],
  "options": [
   "Jeder Teststufe ist eine bestimmte Entwicklungsstufe direkt zugeordnet.",
   "Jedes Testziel entspricht einem bestimmten Entwicklungsziel.",
   "Jede Testaktivität steht in direktem Zusammenhang mit einer Benutzeraktivität.",
   "Zu jeder Softwareentwicklungsaktivität gibt es eine entsprechende Testaktivität."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen.",
  "explanation": "a) FALSCH – Der Lehrplan fordert nicht, dass jeder Teststufe genau eine bestimmte Entwicklungsstufe direkt zugeordnet ist. Vielmehr gilt allgemein, dass es für jede Softwareentwicklungsaktivität eine entsprechende Testaktivität gibt. (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2, 1. Aufzählungspunkt).\n\nb) FALSCH – Zu jeder Softwareentwicklungsaktivität gehört eine entsprechende Testaktivität. Die Testziele sind jedoch sehr unterschiedlich. Beispielsweise könnte ein Testziel darin bestehen, sicherzustellen, dass ein Testobjekt eine vertragliche Anforderung erfüllt, wonach vor der Auslieferung eine bestimmte Art von Tests durchgeführt werden muss. In diesem Fall gibt es keinen Grund für ein entsprechendes Entwicklungsziel (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2).\n\nc) FALSCH – Die Qualitätskontrolle gilt für alle Entwicklungsaktivitäten, d. h., für jede Softwareentwicklungsaktivität gibt es eine entsprechende Testaktivität. Diese Symmetrie gilt jedoch nicht für Tests und Benutzeraktivitäten. Beispielsweise ist es bei einigen Systemen schwierig, die Endbenutzer überhaupt zu identifizieren. Außerdem konzentrieren sich einige Testaktivitäten auf Entwickler (z. B. Tests auf einfache Wartbarkeit), was keinen Benutzeraspekt betrifft (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.2).\n\nd) KORREKT – Zu den guten Testpraktiken gehört unabhängig vom gewählten SDLC-Modell, dass es für jede Softwareentwicklungsaktivität eine entsprechende Testaktivität gibt, sodass alle Entwicklungsaktivitäten der Qualitätssteuerung unterliegen (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 2.1.2, 1. Aufzählungspunkt)."
 },
 {
  "id": "C-10",
  "set": "C",
  "num": 10,
  "lo": "FL-2.1.3",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welcher der folgenden Ansätze ist ein Beispiel für einen Test-First-Ansatz in der Entwicklung?",
  "images": [],
  "options": [
   "Feature-getriebene Entwicklung",
   "Integrationstestgetriebene Entwicklung",
   "Systemtestgetriebene Entwicklung",
   "Abnahmetestgetriebene Entwicklung"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien).",
  "explanation": "a) FALSCH – Feature-getriebene Entwicklung ist im CTFL-Lehrplan als Softwareentwicklungsmethode bzw. agile Praktik genannt, jedoch nicht als Beispiel für einen Test-First-Ansatz. Beispiele für Test-First-Ansätze sind TDD, ATDD und BDD (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.3).\n\nb) FALSCH – Integrationstestgetriebene Entwicklung ist kein korrektes Beispiel für einen Test-First-Ansatz. Test-First-Ansätze wie ATDD konzentrieren sich darauf, Tests vor der Implementierung zu erstellen, wobei die Akzeptanztests die Benutzeranforderungen abbilden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.3).\n\nc) FALSCH – Systemtestgetriebene Entwicklung ist ebenfalls kein Beispiel für einen Test- First-Ansatz. Test-First-Ansätze umfassen Methoden wie ATDD, die explizit auf die Definition von Tests vor der Implementierung abzielen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.3).\n\nd) KORREKT – Abnahmetestgetriebene Entwicklung (ATDD) ist ein Beispiel für einen Test- First-Ansatz. Dabei werden Tests aus Akzeptanzkriterien abgeleitet und geschrieben, bevor der Teil der Anwendung entwickelt wird, der diese Tests erfüllt (siehe CTFL- Lehrplan V4.0.2, Abschnitt 2.1.3, 3. Absatz, 2. Aufzählungspunkt: \"Tests werden geschrieben, bevor der Teil der Anwendung entwickelt wird, der die Tests erfüllt.“)."
 },
 {
  "id": "C-11",
  "set": "C",
  "num": 11,
  "lo": "FL-2.1.5",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt Shift -Left im Softwaretesten AM ZUTREFFENDSTEN?",
  "images": [],
  "options": [
   "Manuelle Tests werden nach Zustimmung der Entwickler automatisiert, um Zeit und Kosten zu sparen.",
   "Testaktivitäten werden möglichst früh im Entwicklungsprozess eingeplant, um Fehlerzustände früher zu finden und spätere Qualitätskosten zu senken.",
   "Tester automatisieren Regressionstests, sobald Zeit dafür zur Verfügung steht – beginnend mit Komponententests.",
   "Tester werden geschult, um frühe Aktivitäten zu übernehmen, sodass spätere Tests besser automatisiert werden können."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Shift-Left = Testen nach vorn verlagern: Anforderungs-Reviews, frühe Testanalyse, Unit-Tests beim Coden, CI. Früher = billiger.",
  "explanation": "a) FALSCH – Die Praktiken des Shift-Left-Testens zielen darauf ab, mehr Testaktivitäten in den frühen Phasen des Entwicklungslebenszyklus zu implementieren und den SDLC so darzustellen, als würde er sich von links nach rechts bewegen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5).\n\nb) KORREKT – Shift-Left bedeutet, dass Testen zu einem früheren Zeitpunkt im Softwareentwicklungslebenszyklus beginnt, z. B. nicht erst, wenn der Code implementiert ist oder Komponenten integriert sind. Dadurch können Fehlerzustände früher gefunden und späterer Aufwand bzw. spätere Kosten reduziert werden (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 2.1.5).\n\nc) FALSCH – Obwohl automatisierte Komponententests und Komponentenintegrationstests im Allgemeinen für Regressionstests nützlich sind, liegt die Erstellung dieser Tests normalerweise in der Verantwortung der Entwickler, und wenn ein Continuous Integration/Continuous Delivery- (CI/CD-)Ansatz verfolgt wird, werden diese Tests zusammen mit dem Code ausgeliefert. In einigen Situationen kann der Tester Tests für Regressionstests und manchmal sogar für Komponententests und Komponentenintegrationstests automatisieren. Dies beschreibt jedoch nicht den Kern von Shift-Left, bei dem Testen zu einem früheren Zeitpunkt im SDLC erfolgt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.5).\n\nd) FALSCH – Die Ausbildung von Testern für die Durchführung von Aufgaben zu einem frühen Zeitpunkt im SDLC würde einen Shift-Left unterstützen, indem die Bedeutung des früheren Beginns des Testens im SDLC betont wird. Die Automatisierung anderer Testaktivitäten, die später im SDLC durchgeführt werden sollen, ist jedoch nicht Teil von Shift-Left (siehe CTFL- Lehrplan V4.0.2, Abschnitt 2.1.5)."
 },
 {
  "id": "C-12",
  "set": "C",
  "num": 12,
  "lo": "FL-2.1.6",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welches der folgenden Ergebnisse ist im Rahmen einer Retrospektive AM WENIGSTEN wahrscheinlich?",
  "images": [],
  "options": [
   "Die Qualität künftiger Testobjekte wird verbessert, weil Schwächen in den Entwicklungspraktiken erkannt werden.",
   "Die Testeffizienz steigt, weil Testumgebungen künftig automatisiert werden.",
   "Endanwender gewinnen ein besseres Verständnis für Entwicklungs- und Testprozesse.",
   "Entwickler geben Rückmeldung, durch die automatisierte Testskripte optimiert werden."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Retrospektive: nach der Iteration – Was lief gut? Was nicht? Was ändern wir? → kontinuierliche Prozessverbesserung.",
  "explanation": "a) FALSCH – Ein Ziel von Retrospektiven ist es, potenzielle Prozessverbesserungen zu identifizieren, die, wenn sie in die Praxis umgesetzt werden, zu einer höheren Qualität zukünftiger Ergebnisse des Entwicklungsprozesses (Testobjekte) führen sollten. Dies ist daher wahrscheinlich das Ergebnis einer Retrospektive (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.6).\n\nb) FALSCH – Einer der Vorteile von Retrospektiven für das Testen ist eine höhere Testeffizienz durch Prozessverbesserungen. Dies ist daher wahrscheinlich das Ergebnis einer Retrospektive (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.6).\n\nc) KORREKT – Zu den typischen Teilnehmern an Retrospektiven gehören laut Lehrplan z. B. Tester, Entwickler, Architekten, Product Owner und Businessanalysten. Endanwender werden nicht als typische Teilnehmer genannt. Daher ist es am wenigsten wahrscheinlich, dass Endanwender im Rahmen einer Retrospektive ein besseres Verständnis für Entwicklungs- und Testprozesse gewinnen (siehe CTFL- Lehrplan V4.0.2, Abschnitt 2.1.6, 1. Absatz).\n\nd) FALSCH – Ein Vorteil von Retrospektiven für das Testen ist die Verbesserung der Qualität der Testware (einschließlich automatisierter Testskripte) durch gemeinsame Reviews mit den Entwicklern. Dies ist daher wahrscheinlich das Ergebnis einer Retrospektive (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.1.6)."
 },
 {
  "id": "C-13",
  "set": "C",
  "num": 13,
  "lo": "FL-2.2.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "In welcher Teststufe stehen Validierung und der Nachweis der Einsatzfähigkeit im Vordergrund, und die Tests sollten idealerweise von den vorgesehenen Benutzern durchgeführt werden?",
  "images": [],
  "options": [
   "Komponententest",
   "Komponentenintegrationstest",
   "Systemintegrationstest",
   "Abnahmetest"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Teststufen: Komponente → Komponentenintegration → System → Systemintegration → Abnahme. Jede Stufe: eigene Testbasis, eigene Ziele.",
  "explanation": "a) FALSCH – Komponententests (auch Unit-Tests genannt) beinhalten das isolierte Testen einzelner Komponenten und sind in der Regel eine Verifikation gegen eine Spezifikation und keine Validierung gegen Benutzeranforderungen. Diese Tests werden in der Regel nicht von Testern durchgeführt, da die Entwickler diese Tests normalerweise in ihrer Entwicklungsumgebung durchführen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1).\n\nb) FALSCH – Das Testen der Komponentenintegration umfasst das Testen der Schnittstellen und Interaktionen zwischen Komponenten und ist in der Regel eine Verifikation gegen eine Spezifikation und keine Validierung anhand von Benutzeranforderungen. Diese Tests werden normalerweise nicht von Testern, sondern von Entwicklern durchgeführt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1).\n\nc) FALSCH – Bei Systemintegrationstests werden die Schnittstellen zu anderen Systemen und externen Diensten untersucht. Dabei handelt es sich in der Regel um eine Überprüfung anhand einer Spezifikation und nicht um eine Validierung anhand von Benutzeranforderungen. Diese Art von Tests wird auch am häufigsten von Testern durchgeführt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1).\n\nd) KORREKT – Der Abnahmetest konzentriert sich auf die Validierung und den Nachweis der Einsatzfähigkeit, d. h. darauf, dass das System die Geschäftsanforderungen des Benutzers erfüllt. Idealerweise sollten Abnahmetests von den vorgesehenen Benutzern durchgeführt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.1). Fazit: • Antwort d) ist korrekt, da sich der Abnahmetest auf Validierung und den Nachweis der Einsatzfähigkeit konzentriert, d. h. darauf, dass das System die Geschäftsanforderungen des Benutzers erfüllt. Idealerweise sollten Abnahmetests von den vorgesehenen Benutzern durchgeführt werden. • Antworten a), b) und c) sind falsch, da bei diesen Teststufen nicht die Validierung und der Nachweis der Einsatzfähigkeit aus Benutzersicht im Vordergrund stehen."
 },
 {
  "id": "C-14",
  "set": "C",
  "num": 14,
  "lo": "FL-2.2.3",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Nach einem Software-Update schlägt das Navigationssystem beispielsweise Routen durch Einbahnstraßen in der falschen Richtung vor, was einen klaren Verstoß gegen die Verkehrsregeln darstellt. Nachdem der zugrunde liegende Fehlerzustand korrigiert wurde, stellen sich folgende Fragen: Welche der folgenden Maßnahmen sind in diesem Fall AM SINNVOLLSTEN?",
  "images": [],
  "options": [
   "Nur Fehlernachtests",
   "Fehlernachtests gefolgt von Regressionstests",
   "Nur Regressionstests",
   "Regressionstests gefolgt von Fehlernachtests"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Fehlernachtest: Ist DER Fehler weg? Regressionstest: Ist dabei NICHTS ANDERES kaputtgegangen?",
  "explanation": "a) FALSCH – Ein Fehlernachtest ist erforderlich, um zu bestätigen, dass der ursprüngliche Fehlerzustand erfolgreich behoben wurde. Alleinige Fehlernachtests reichen jedoch nicht aus; ergänzend sollten Regressionstests durchgeführt werden, um zu prüfen, ob die Änderung keine nachteiligen Folgen in unveränderten Teilen des Systems, anderen Komponenten oder verbundenen Systemen verursacht hat (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.3).\n\nb) KORREKT – Durch Fehlernachtests wird bestätigt, dass der ursprüngliche Fehlerzustand erfolgreich behoben wurde. Ergänzend sollten Regressionstests durchgeführt werden, um zu prüfen, ob die Änderung keine nachteiligen Folgen in unveränderten Teilen des Systems, anderen Komponenten oder verbundenen Systemen verursacht hat (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.3).\n\nc) FALSCH – Regressionstests prüfen, ob eine Änderung keine nachteiligen Folgen hat. Sie ersetzen jedoch nicht den Fehlernachtest, der bestätigt, dass der ursprüngliche Fehlerzustand erfolgreich behoben wurde (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.3).\n\nd) FALSCH – Ein Regressionstest prüft, ob die Änderung keine nachteiligen Folgen in unveränderten Teilen des Systems, anderen Komponenten oder verbundenen Systemen verursacht hat. In diesem Szenario sollte jedoch zunächst durch einen Fehlernachtest bestätigt werden, dass der ursprüngliche Fehlerzustand erfolgreich behoben wurde; anschließend sind Regressionstests sinnvoll (siehe CTFL-Lehrplan V4.0.2, Abschnitt 2.2.3). Fazit: • Antwort b) ist korrekt, da nach der Korrektur des Fehlerzustands ein Fehlernachtest erforderlich ist und ergänzend Regressionstests sinnvoll sind, um mögliche nachteilige Folgen der Änderung zu erkennen. • Antworten a), c) und d) sind falsch, weil sie entweder nur eine der beiden erforderlichen Testmaßnahmen nennen oder die in diesem Szenario sinnvollste Reihenfolge nicht wiedergeben."
 },
 {
  "id": "C-15",
  "set": "C",
  "num": 15,
  "lo": "FL-3.1.3",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Beispiele beschreiben Fehlerzustände, die typischerweise durch statische Tests – im Unterschied zu dynamischen Tests – erkannt werden können?",
  "images": [],
  "options": [
   "Widersprüche zwischen verschiedenen Teilen der Entwurfsspezifikation",
   "Längere Antwortzeiten, die zur Frustration der Benutzer führen",
   "Beim Speichern einer Datei tritt eine Fehlerwirkung auf, wenn der Speicherplatz knapp wird.",
   "Eine im Code deklarierte Variable wird nicht verwendet",
   "Das System benötigt beim Erstellen eines Berichts übermäßig viel Speicher"
  ],
  "correct": [
   0,
   3
  ],
  "nSelect": 2,
  "merksatz": "Statisch findet die Ursache im Dokument (Fehlerzustand direkt), dynamisch die Wirkung im laufenden System (Fehlerwirkung). Ergänzen sich!",
  "explanation": "Unter Berücksichtigung jedes der aufgeführten Fehlerbeispiele\n\na) KORREKT – Zwei verschiedene Teile der Entwurfsspezifikation stimmen aufgrund der Komplexität des Entwurfs nicht überein – dies ist ein Beispiel für einen Spezifikationsfehler, der Inkonsistenzen, Mehrdeutigkeiten, Widersprüche, Auslassungen, Ungenauigkeiten und Duplikate umfasst, die am einfachsten durch statische Tests gefunden werden können (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.1.3, 2. Absatz, 2. Aufzählungspunkt).\n\nb) FALSCH – Eine Antwortzeit ist zu lang und lässt den Benutzer die Geduld verlieren – dies ist ein Beispiel für einen Antwortzeitfehler (Laufzeitfehler), der in der Praxis nur durch Ausführen des Programms und Messen der Antwortzeit gefunden werden kann, was am einfachsten durch dynamisches Testen festgestellt werden kann (siehe CTFL- Lehrplan V4.0.2, Abschnitt 3.1.3, 1. Absatz, 5. Aufzählungspunkt).\n\nc) FALSCH – Diese Aussage beschreibt eine zur Laufzeit auftretende Fehlerwirkung. Sie wird typischerweise durch dynamisches Testen sichtbar, da dafür das Verhalten des Systems beim Speichern einer Datei beobachtet werden muss (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.1.3, 1. Absatz, 2. Aufzählungspunkt).\n\nd) KORREKT – Eine im Code deklarierte, aber nicht verwendete Variable ist ein typischer Befund statischer Codeanalyse. Solche Code-Anomalien können ohne Ausführung der Software erkannt werden und gehören daher zu den Fehlerzuständen, die durch statische Tests leichter gefunden werden können (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.1.1 und Abschnitt 3.1.3, 2. Absatz, 3. Aufzählungspunkt).\n\ne) FALSCH – Die Menge an Speicher, die das Programm benötigt, um einen Bericht zu erstellen, ist zu groß – dies ist ein Beispiel für einen Performance-Fehler, der in der Praxis typischerweise durch Ausführen des Programms und Messen des verwendeten Speichers gefunden werden kann, was am einfachsten durch dynamische Tests festgestellt werden kann (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.1.3, 1. Absatz, 5. Aufzählungspunkt). Fazit: Die Antworten a) und d) sind korrekt, da diese Fehlerzustände durch statische Tests (z. B. Review oder statische Codeanalyse) identifiziert werden können. Die Antworten b), c) und e) sind falsch, da sie Laufzeitverhalten, Fehlerwirkungen oder Systemressourcennutzung betreffen und typischerweise durch dynamische Tests sichtbar werden."
 },
 {
  "id": "C-16",
  "set": "C",
  "num": 16,
  "lo": "FL-3.2.1",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welcher der folgenden Punkte ist ein typischer Vorteil von frühem und häufigem Stakeholder-Feedback?",
  "images": [],
  "options": [
   "Änderungen an Anforderungen werden früher verstanden und können früher umgesetzt werden.",
   "Geschäftsinteressenten erhalten eine Schulung zu den Benutzeranforderungen.",
   "Product Owner können ihre Anforderungen beliebig oft ändern.",
   "Endnutzer werden vor der Freigabe über nicht umgesetzte Anforderungen informiert."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Frühes, häufiges Stakeholder-Feedback: Missverständnisse früh erkannt = nicht am Bedarf vorbei entwickelt.",
  "explanation": "a) KORREKT – Frühzeitiges und häufiges Stakeholder-Feedback kann Missverständnisse über Anforderungen vorbeugen und sicherstellen, dass Änderungen an Anforderungen verstanden und früher umgesetzt werden (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 3.2.1).\n\nb) FALSCH – Frühzeitiges und häufiges Stakeholder-Feedback dient nicht der Schulung von Geschäftsinteressenten zu Benutzeranforderungen. Es soll helfen, Missverständnisse über Anforderungen zu vermeiden und Änderungen früher zu verstehen und umzusetzen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.1).\n\nc) FALSCH – Es kann von großem Nutzen sein, frühzeitig und häufig im Softwareentwicklungsprozess Feedback von Stakeholdern einzuholen. Es erleichtert die frühzeitige Kommunikation potenzieller Qualitätsprobleme, kann Missverständnisse über Anforderungen verhindern und stellt sicher, dass Änderungen der Stakeholder- Anforderungen schneller verstanden und umgesetzt werden. Da Änderungen der Anforderungen jedoch schneller verstanden und umgesetzt werden können, bedeutet dies nicht, dass unbegrenzte Änderungen der Anforderungen gefördert werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.1).\n\nd) FALSCH – Das Informieren von Endnutzern über nicht umgesetzte Anforderungen vor der Freigabe ist kein typischer Vorteil von frühzeitigem und häufigem Stakeholder-Feedback. Dieses Feedback soll vielmehr helfen, Missverständnisse über Anforderungen zu vermeiden und Änderungen an Anforderungen früher zu verstehen und umzusetzen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.1). Fazit: • Antwort a) ist korrekt, da Stakeholder-Feedback hilft, Änderungen früher zu verstehen und umzusetzen. • Antworten b), c) und d) sind falsch, da sie Aspekte ansprechen, die nicht direkt durch Stakeholder-Feedback verbessert oder ermöglicht werden."
 },
 {
  "id": "C-17",
  "set": "C",
  "num": 17,
  "lo": "FL-3.2.4",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Ordnen Sie die folgenden Reviewarten den entsprechenden Beschreibungen zu: 1. Technisches Review 2. Informelles Review 3. Inspektion 4. Walkthrough A. Zielt unter Leitung des Autors u.a. auf Vertrauen saufbau, Ideengenerierung und Schulung von Gutachtern. B. Dient hauptsächlich der Aufdeckung von Anomalien und erfordert keine formale Dokumentation. C. Ziel ist es, möglichst viele Anomalien zu finden und Metriken für die Prozessverbesserung zu erheben. D. Zielt darauf ab, durch technisch qualifizierte Gutachter Konsens zu erreichen, Entscheidungen zu treffen und neue Ideen zu entwickeln. Welche der folgenden Optionen beschreibt die korrekte Zuordnung AM BESTEN?",
  "images": [],
  "options": [
   "1A, 2B, 3C, 4D",
   "1D, 2B, 3C, 4A",
   "1B, 2C, 3D, 4A",
   "1C, 2D, 3A, 4B"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Formalitäts-Treppe: informelles Review < Walkthrough (AUTOR führt) < technisches Review (Experten) < Inspektion (formalste, mit Metriken).",
  "explanation": "Bei Betrachtung der einzelnen aufgeführten Review-Typen: 1. Das technische Review – Diese Art der Begutachtung wird von technisch qualifizierten Gutachtern unter der Leitung eines Moderators durchgeführt. Die Ziele bestehen darin, einen Konsens zu erzielen und Entscheidungen über technische Probleme zu treffen, während gleichzeitig die Qualität bewertet und Vertrauen in das Arbeitsergebnis aufgebaut wird, neue Ideen generiert werden, Autoren motiviert und befähigt werden, sich zu verbessern, und Anomalien aufgedeckt werden (siehe [CTFL 4.0], Abschnitt 3.2.4, 3. Absatz “Technisches Review”: \"Die Ziele ... sind die Erzielung eines Konsenses ... aber auch ... die Entwicklung neuer Ideen\"). Zuordnung: 1D 2. Das Informelle Review – Das primäre Ziel besteht darin, Anomalien zu erkennen. Der Prozess ist nicht definiert und erfordert keine formale Dokumentation (siehe [CTFL 4.0.2], Abschnitt 3.2.4, 3. Absatz “Informelles Review: Das Hauptziel ist die Aufdeckung von Anomalien” (Erkennung potenzieller Fehlerzustände) “und erfordert keine formalen, dokumentierten Ergebnisse\"). Zuordnung: 2B 3. Die Inspektion ist die formellste Art eines Reviews und folgt dem generischen Reviewprozess. Das Hauptziel besteht darin, die meisten Anomalien zu finden. Zu den weiteren Zielen gehören die Bewertung der Qualität und die Schaffung von Vertrauen in das Arbeitsergebnis, die Motivation und Befähigung der Autoren zur Verbesserung sowie die Erfassung von Kennzahlen, die zur Verbesserung des Softwareentwicklungslebenszyklus (SDLC) einschließlich des Inspektionsprozesses verwendet werden können. Der Autor kann nicht als Leiter oder Protokollführer eines Reviews fungieren (siehe [CTFL 4.0.2], Abschnitt 3.2.4, 3. Absatz “Inspektion”: \"Das Hauptziel ... die maximale Anzahl von Anomalien zu finden ...” und es werden “Metriken gesammelt\"). Zuordnung: 3C 4. Walkthrough – Diese Art von Review wird vom Autor geleitet und dient verschiedenen Zielen, wie z. B. der Bewertung der Qualität und dem Aufbau von Vertrauen in das Arbeitsergebnis, der Schulung von Gutachtern, der Konsensfindung, der Generierung neuer Ideen, der Motivation und Befähigung von Autoren zur Verbesserung und der Erkennung von Anomalien. Gutachter können vor dem Walkthrough ein individuelles Review durchführen, dies ist jedoch nicht zwingend erforderlich (siehe [CTFL 4.0.2], Abschnitt 3.2.4, 3. Absatz “Walkthrough”: \"Ziele umfassen die Erzielung eines Konsenses” und die ”Schulung von Gutachtern\"). Zuordnung: 4A Somit\n\na) FALSCH\n\nb) KORREKT\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "C-18",
  "set": "C",
  "num": 18,
  "lo": "FL-3.2.5",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welcher der folgenden Faktoren trägt typischerweise zum Erfolg eines Reviews bei?",
  "images": [],
  "options": [
   "Das Management wird als Gutachter in alle Reviews eingebunden.",
   "Große Arbeitsergebnisse werden in kleinere, überschaubare Einheiten aufgeteilt.",
   "Die Bewertung der Gutachter bzw. Reviewteilnehmer wird als Ziel des Reviews festgelegt.",
   "Für jedes Review wird genau ein Dokument eingeplant."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Review-Erfolg: klare Ziele · richtige Teilnehmer · genug Vorbereitungszeit · Fehler feiern statt Autor anklagen.",
  "explanation": "a) FALSCH – Um erfolgreiche Reviews zu gewährleisten, ist es wichtig, die Unterstützung des Managements für den Reviewprozess sicherzustellen. Das bedeutet jedoch nicht, dass sie als Reviewer teilnehmen sollten (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5).\n\nb) KORREKT – Ein Erfolgsfaktor für Reviews ist die Durchführung in kleinen Einheiten, damit Gutachter während eines individuellen Reviews und/oder einer Reviewsitzung nicht die Konzentration verlieren (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 3.2.5) (siehe CTFL- Lehrplan V4.0.2, Abschnitt 3.2.5, 3. Aufzählungspunkt).\n\nc) FALSCH – Um erfolgreiche Überprüfungen zu gewährleisten, ist es wichtig, klare Ziele und messbare Abschlusskriterien zu definieren, ohne die “Bewertung der Teilnehmer” vorzunehmen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5, 1. Aufzählungspunkt).\n\nd) FALSCH – Um sicherzustellen, dass Überprüfungen erfolgreich sind, ist es wichtig, die Überprüfung in kleinere Abschnitte zu unterteilen, um zu verhindern, dass Gutachter während einzelner Reviews oder Reviewsitzungen den Fokus verlieren. Sie sollten also NICHT planen, ein Dokument pro Review abzudecken (siehe CTFL-Lehrplan V4.0.2, Abschnitt 3.2.5). Fazit: • Antwort b) ist korrekt, da das Aufteilen großer Arbeitsprodukte die Effizienz und Qualität von Reviews verbessert. • Antworten a), c) und d) sind falsch, da sie entweder den falschen Fokus setzen oder ineffiziente Reviewpraktiken widerspiegeln."
 },
 {
  "id": "C-19",
  "set": "C",
  "num": 19,
  "lo": "FL-4.1.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Was ist der zentrale Unterschied zwischen Black -Box-Verfahren und erfahrungsbasierten Testverfahren?",
  "images": [],
  "options": [
   "Das getestete Objekt",
   "Die Teststufe, auf der das Testverfahren angewendet wird.",
   "Die Grundlage für die Ableitung der Testfälle",
   "Die Phase im Softwareentwicklungslebenszyklus (SDLC), in der das Testverfahren eingesetzt wird."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers.",
  "explanation": "a) FALSCH – In den meisten Fällen können für dieselben Testobjekte sowohl Black-Box- Testverfahren als auch erfahrungsbasierte Testverfahren eingesetzt werden. Die Wahl des Testverfahrens hängt nicht primär vom Testobjekt ab (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.1).\n\nb) FALSCH – Auf allen Teststufen können sowohl Black-Box-Testverfahren als auch erfahrungsbasierte Testverfahren eingesetzt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.1).\n\nc) KORREKT – Black-Box-Testverfahren basieren auf der Analyse des spezifizierten Verhaltens des Testobjekts ohne Kenntnis der internen Struktur. Erfahrungsbasierte Testverfahren nutzen dagegen vor allem das Wissen und die Erfahrung der Tester für den Entwurf und die Implementierung von Testfällen. Sie können Black-Box- und White- Box-Testverfahren ergänzen (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 4.1).\n\nd) FALSCH – Erfahrungsbasierte Testverfahren können Fehler erkennen, die mit Black- Box- und White-Box-Testverfahren möglicherweise übersehen werden. Daher ergänzen erfahrungsbasierte Testverfahren Black-Box-Testverfahren und White-Box- Testverfahren, und sowohl Black-Box-Testverfahren als auch erfahrungsbasierte Testverfahren können in allen SDLCs verwendet werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.1). Fazit: • Antwort c) ist korrekt, da die Testbasis den entscheidenden Unterschied zwischen Black-Box- und erfahrungsbasierten Testverfahren ausmacht. • Antworten a), b) und d) sind falsch, da sie sich auf Faktoren beziehen, die nicht ausschlaggebend für die Unterscheidung dieser Testverfahren sind."
 },
 {
  "id": "C-20",
  "set": "C",
  "num": 20,
  "lo": "FL-4.2.1",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ein PIN -Validator akzeptiert nur gültige PINs und lehnt ungültige ab. Betrachtet werden ausschließlich Eingaben, die aus Ziffern bestehen. Eine PIN gilt als gültig, wenn sie aus genau vier Ziffern besteht, von denen mindestens zwei unterschiedlich sind. Welche der folgenden Datensätze deckt alle relevanten Äquivalenzklassen ab?",
  "images": [],
  "options": [
   "112, 1111, 1234, 123456",
   "1, 123, 1111, 1234",
   "12, 112, 1112, 11112",
   "1, 111, 1111, 11111"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!",
  "explanation": "Die Äquivalenzklassen für gültige und ungültige PINs sind: 1. Gültige PINs: • Eine PIN mit genau vier Ziffern, von denen mindestens zwei unterschiedlich sind (z. B. 1234, 1123, 5678). 2. Ungültige PINs: • PINs mit weniger als vier Ziffern (z. B. 1, 12, 123). • PINs mit mehr als vier Ziffern (z. B. 123456, 11111). • PINs mit vier identischen Ziffern (z. B. 1111, 2222).\n\na) KORREKT – 112, 1111, 1234, 123456 • 112 → Ungültig (weniger als vier Ziffern) • 1111 → Ungültig (vier gleiche Ziffern) • 1234 → Gültig (vier Ziffern, mindestens zwei verschieden) • 123456 → Ungültig (mehr als vier Ziffern) Diese Option ist korrekt, weil alle Äquivalenzklassen abgedeckt werden: • Weniger als vier Ziffern (112) • Vier gleiche Ziffern (1111) • Gültige PIN (vier Ziffern, mind. zwei verschieden) (1234) • Mehr als vier Ziffern (123456)\n\nb) FALSCH – 1, 123, 1111, 1234 • 1 → Ungültig (weniger als vier Ziffern) • 123 → Ungültig (weniger als vier Ziffern) • 1111 → Ungültig (vier gleiche Ziffern) • 1234 → Gültig Hier fehlt die Äquivalenzklasse \"mehr als vier Ziffern\".\n\nc) FALSCH – 12, 112, 1112, 11112 • 12 → Ungültig (weniger als vier Ziffern) • 112 → Ungültig (weniger als vier Ziffern) • 1112 → Gültig (vier Ziffern, mind. zwei verschieden) • 11112 → Ungültig (mehr als vier Ziffern) Hier fehlt die Äquivalenzklasse \"vier gleiche Ziffern\" (z. B. 1111).\n\nd) FALSCH – 1, 111, 1111, 11111 • 1 → Ungültig (weniger als vier Ziffern) • 111 → Ungültig (weniger als vier Ziffern) • 1111 → Ungültig (vier gleiche Ziffern) • 11111 → Ungültig (mehr als vier Ziffern) Diese Option enthält keine einzige gültige PIN. Die Äquivalenzklasse der gültigen PINs (z. B. 1234) fehlt vollständig."
 },
 {
  "id": "C-21",
  "set": "C",
  "num": 21,
  "lo": "FL-4.2.2",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Gegeben ist die folgende Geschäftsregel: EINGABE: Wert (Ganzzahl) WENN (Wert ≤ 100 ODER Wert ≥ 200) DANN schreibe „Wert falsch“ ELSE schreibe „Wert OK“ Sie möchten Testfälle mit Hilfe einer Grenzwertanalyse mit jeweils zwei Werten pro Grenze entwerfen. Welche der folgenden Mengen von Testwerten deckt die relevanten Grenzwerte vollständig ab?",
  "images": [],
  "options": [
   "100, 150, 200, 201",
   "99, 100, 200, 201",
   "98, 99, 100, 101",
   "100, 101, 199, 200"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn.",
  "explanation": "Die Äquivalenzklassen sind: {…, 99, 100}, {101, 102, …, 198, 199}, {200, 201, …}. Somit gibt es 4 Grenzwerte: 100, 101, 199 und 200. Bei der 2-Wert-Grenzwertanalyse gibt es für jeden Grenzwert zwei Überdeckungselemente (den Grenzwert und seinen nächsten Nachbarn, der zur angrenzenden Äquivalenzklasse gehört). Da die nächsten Nachbarn auch Grenzwerte in der angrenzenden Partition sind, gibt es nur vier Überdeckungselemente. Daher\n\na) FALSCH – Nur 100 und 200 sind relevante Überdeckungselemente der 2-Wert- Grenzwertanalyse, so dass wir eine Überdeckung von 50 % erreichen. Es fehlen die benachbarten Grenzwerte 101 und 199, wodurch nur 50 % der Grenzwerte abgedeckt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2).\n\nb) FALSCH – Nur 100 und 200 sind relevante Überdeckungselemente der 2-Wert- Grenzwertanalyse. Die benachbarten Grenzwerte 101 und 199 werden nicht getestet, weshalb die Überdeckung ebenfalls nur 50 % beträgt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2).\n\nc) FALSCH – Nur 100 und 101 sind relevante Überdeckungselemente der 2-Wert- Grenzwertanalyse, ignoriert werden jedoch 199 und 200. Damit werden ebenfalls nur 50 % der möglichen Grenzwerte abgedeckt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2).\n\nd) KORREKT – Die Antwort d) ist korrekt, da sie mit 100, 101, 199 und 200 alle relevanten Grenzwerte der 2-Wert-Grenzwertanalyse vollständig abdeckt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2). Fazit: Die Antwort d) ist korrekt, da sie die relevanten Grenzwerte vollständig abdeckt. Die Antworten a), b) und c) sind falsch, da sie nicht alle relevanten Grenzwerte der 2-Wert- Grenzwertanalyse enthalten."
 },
 {
  "id": "C-22",
  "set": "C",
  "num": 22,
  "lo": "FL-4.2.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Gegeben ist ein System zur Analyse von Fahrprüfungsergebnissen. Die folgenden Regeln wurden in einer Entscheidungstabelle formuliert: R1 R2 R3 C1: Erster Prüfungsversuch? - - F C2: Theoretische Prüfung bestanden? T F - C3: Praktische Prüfung bestanden? T - F Führerschein ausstellen? X Zusätzliche Fahrstunden anfordern? X Antrag auf Wiederholung der Prüfung? X Welche Kombination von Eingabedaten zeigt, dass die Entscheidungstabelle widersprüchliche Regeln enthält?",
  "images": [
   "images/C-22.png"
  ],
  "options": [
   "C1 = T, C2 = T, C3 = F",
   "C1 = T, C2 = F, C3 = T",
   "C1 = T, C2 = T, C3 = T und C1 = F, C2 = T, C3 = T",
   "C1 = F, C2 = F, C3 = F"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?",
  "explanation": "a) FALSCH – Diese Kombination (T, T, F) entspricht keiner Regel (R1, R2 oder R3). Das zeigt, dass es sich um eine Auslassung handelt, aber nicht um einen Widerspruch (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3, 3. Absatz).\n\nb) FALSCH – Diese Kombination (T, F, T) entspricht nur der Regel R2, so dass kein Widerspruch zwischen mehreren Regeln besteht (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3).\n\nc) FALSCH – Beide Kombinationen (T, T, T) und (F, T, T) stimmen nur mit einer Spalte/Regel R1 überein. Es gibt daher keinen Widerspruch zwischen den Regeln (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.3).\n\nd) KORREKT – Die Kombination (F, F, F) erfüllt sowohl R2 als auch R3. Nach R2 soll ein Antrag auf Wiederholung der Prüfung gestellt werden, während zusätzliche Fahrstunden nicht vorgesehen sind. Nach R3 sollen zusätzliche Fahrstunden angefordert werden, während ein Antrag auf Wiederholung nicht vorgesehen ist. Damit führen zwei zutreffende Regeln für dieselbe Eingabekombination zu unterschiedlichen Aktionsmustern; dies zeigt einen Widerspruch in der Entscheidungstabelle (siehe CTFL- Lehrplan V4.0.2, Abschnitt 4.2.3, letzter Absatz: „… Widersprüche in den Anforderungen …“). Fazit: Die Antwort d) ist korrekt, da diese Kombination einen Widerspruch zwischen den Regeln R2 und R3 in der Entscheidungstabelle zeigt."
 },
 {
  "id": "C-23",
  "set": "C",
  "num": 23,
  "lo": "FL-4.2.4",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie entwerfen Testfälle auf der Grundlage des folgenden Zustandsübergangsdiagramms: Wie viele Testfälle sind MINDESTENS erforderlich, um eine vollständige Überdeckung aller gültigen Übergänge zu erreichen?",
  "images": [],
  "options": [
   "3",
   "2",
   "5",
   "6"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen.",
  "explanation": "Die folgenden drei Übergänge: „ANFRAGE -> BESTÄTIGT“ „WARTELISTE -> BESTÄTIGT“ „WARTELISTE -> END“ können nicht im selben Testfall vorkommen, was darauf hindeutet, dass mindestens drei Testfälle erforderlich sind. Alle anderen Übergänge können in Kombination mit einem oder mehreren dieser drei Übergänge auftreten, daher benötigen wir mindestens drei Testfälle. Zur vollständigen Überdeckung aller gültigen Übergänge reichen die folgenden drei Testfallsequenzen aus: TF1: START (Zimmeranfrage) -> ANFRAGE (Verfügbar) -> BESTÄTIGT (Bezahlen) -> END TF2: START (Zimmeranfrage) -> ANFRAGE (Nicht verfügbar) -> WARTELISTE (Verfügbar) - > BESTÄTIGT (Bezahlen) -> END TF3: START (Zimmeranfrage) -> ANFRAGE (Nicht verfügbar) -> WARTELISTE (Stornieren) -> END Daher\n\na) KORREKT\n\nb) FALSCH\n\nc) FALSCH\n\nd) FALSCH – Fazit: Antwort a) ist korrekt, da drei Testfälle mindestens erforderlich sind und ausreichen, um alle gültigen Übergänge des Zustandsübergangsdiagramms mindestens einmal auszuführen. Voraussetzung ist, dass die im Diagramm dargestellten Übergänge eindeutig als gültige Übergänge erkennbar sind."
 },
 {
  "id": "C-24",
  "set": "C",
  "num": 24,
  "lo": "FL-4.3.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Sie sollen einen Zweigtest für den folgenden Programmcode durchführen, dessen Ablauf im Kontrollflussdiagramm dargestellt ist. Wie viele Zweige müssen getestet werden, um vollständige Zweigüberdeckung zu erreichen?",
  "images": [],
  "options": [
   "2",
   "4",
   "8",
   "7"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Zweig schlägt Anweisung: 100 % Zweigüberdeckung ⇒ 100 % Anweisungsüberdeckung. Umgekehrt NICHT (if ohne else!).",
  "explanation": "Beim Zweigtest entsprechen die Überdeckungselemente den Zweigen, also den Kanten des Kontrollflussgraphen. Das dargestellte Kontrollflussdiagramm enthält acht Kanten; daher müssen für eine vollständige Zweigüberdeckung acht Zweige ausgeführt werden. Daher\n\na) FALSCH\n\nb) FALSCH\n\nc) KORREKT\n\nd) FALSCH"
 },
 {
  "id": "C-25",
  "set": "C",
  "num": 25,
  "lo": "FL-4.3.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Wie können White -Box-Tests zur Verbesserung von Black -Box-Tests beitragen?",
  "images": [],
  "options": [
   "White-Box-Überdeckungsanalysen helfen, die Codeüberdeckung durch Black- Box-Tests zu bewerten.",
   "White-Box-Überdeckungsanalysen können helfen, unerreichbare Teile des Quellcodes zu identifizieren.",
   "Zweigtests subsumieren Black-Box-Testverfahren, sodass vollständige Zweigüberdeckung die vollständige Überdeckung jedes Black-Box-Verfahrens garantiert.",
   "White-Box-Testverfahren können Überdeckungselemente für Black-Box- Testverfahren liefern."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "White-Box-Wert: testet, was WIRKLICH gebaut wurde – auch Code, den die Spezifikation vergisst. Schwäche: findet keine fehlenden Anforderungen.",
  "explanation": "a) KORREKT – Die reine Durchführung von Black-Box-Tests liefert kein Maß für die tatsächliche Codeüberdeckung. White-Box-Überdeckungsmessungen bieten eine objektive Messung der Überdeckung und liefern die notwendigen Informationen, um die Generierung zusätzlicher Tests zu ermöglichen, um diese Überdeckung zu erhöhen und anschließend das Vertrauen in den Code zu stärken (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.3.3, 3. Absatz). • Black-Box-Tests basieren auf der Spezifikation und können nicht messen, wie viel Code tatsächlich getestet wurde. • White-Box-Tests liefern Codeüberdeckungsmetriken, die helfen, Lücken in Black- Box-Tests aufzudecken. • Durch die Kombination beider Testarten kann eine bessere Testabdeckung erreicht werden. Daraus folgt: Diese Option ist korrekt, da sie den Zusammenhang zwischen Codeüberdeckung (White Box) und funktionalen Tests (Black Box) richtig beschreibt.\n\nb) FALSCH – White-Box-Analysen ersetzen Black-Box-Tests nicht. White-Box- Testverfahren basieren auf der internen Struktur und Verarbeitung des Testobjekts, während Black-Box-Testverfahren auf dem spezifizierten Verhalten des Testobjekts basieren. Außerdem können White-Box-Tests Fehlerzustände, die aus nicht erfüllten Anforderungen resultieren, möglicherweise nicht erkennen (siehe CTFL-Lehrplan V4.0.2, Abschnitte 4.1 und 4.3.3).\n\nc) FALSCH – Im Allgemeinen gibt es keine direkten (subsumierten) Beziehungen zwischen White-Box- und Black-Box-Verfahren (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.3.3).\n\nd) FALSCH – White-Box-Testverfahren basieren auf der internen Struktur und Verarbeitung des Testobjekts, während Black-Box-Testverfahren auf dem spezifizierten Verhalten des Testobjekts basieren. Daher liefern sie nicht dieselben Überdeckungselemente (siehe CTFL-Lehrplan V4.0.2 Abschnitte 4.1 und 4.3.3)."
 },
 {
  "id": "C-26",
  "set": "C",
  "num": 26,
  "lo": "FL-4.4.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Ein Tester verwendet beim Testen die folgende Liste: • Korrekte Eingaben werden nicht akzeptiert • Ungültige Eingaben werden akzeptiert • Falsches Ausgabeformat • Division durch null Welches Testverfahren wird dabei am WAHRSCHEINLICHSTEN eingesetzt?",
  "images": [],
  "options": [
   "Exploratives Testen",
   "Fehlerangriff",
   "Checklistenbasiertes Testen",
   "Grenzwertanalyse"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Intuitive Testfallermittlung (Error Guessing): Erfahrung zielt auf typische Fehler – Eingaben, Randfälle, bekannte Schwächen. Fehlerattacken!",
  "explanation": "a) FALSCH – Beim explorativen Test werden Tests gleichzeitig entworfen, ausgeführt und bewertet, während der Tester mehr über das Testobjekt erfährt. Er kann zwar andere Testverfahren einbeziehen, der Einsatz einer Liste möglicher Fehlhandlungen, Fehlerzustände und Fehlerwirkungen spricht hier jedoch am wahrscheinlichsten für einen Fehlerangriff (siehe CTFL-Lehrplan V4.0.2, Abschnitte 4.4.1 und 4.4.2, 2. Absatz: Beim explorativen Testen verwendet der Tester \"eine Test-Charta mit Testzielen, um das Testen zu steuern\").\n\nb) KORREKT – Die Liste enthält mögliche Fehlerzustände bzw. typische Fehlersituationen. Fehlerangriffe sind eine Möglichkeit der intuitiven Testfallermittlung. Dabei erstellt oder übernimmt der Tester eine Liste möglicher Fehlhandlungen, Fehlerzustände und Fehlerwirkungen und entwirft Tests, um damit verbundene Fehlerzustände zu identifizieren, Fehlerzustände aufzudecken oder Fehlerwirkungen auszulösen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.4.1, 3. Absatz: Fehlerangriffe erfordern, dass \"Tester eine Liste möglicher Fehlhandlungen, Fehlerzustände und Fehlerwirkungen erstellen ...\").\n\nc) FALSCH – Beim checklistenbasierten Test entwirft, implementiert und führt ein Tester Tests aus, um Testbedingungen aus einer Checkliste abzudecken. Zwar werden auch beim checklistenbasierten Test Listen verwendet, im vorliegenden Fall handelt es sich jedoch ausdrücklich um eine Liste möglicher Fehlerzustände bzw. Fehlersituationen. Daher ist ein Fehlerangriff das wahrscheinlichste Verfahren (siehe CTFL-Lehrplan V4.0.2, Abschnitte 4.4.1 und 4.4.3, 1. Absatz: \"Beim checklistenbasierten Test entwirft, implementiert und führt ein Tester Tests aus, um Testbedingungen aus einer Checkliste abzudecken.\").\n\nd) FALSCH – Die Grenzwertanalyse basiert auf einer Analyse der Grenzwerte von Äquivalenzklassen. In der obigen Liste werden Äquivalenzklassen oder ihre Grenzen nicht erwähnt (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.2.2, 1. Absatz: \"Die Grenzwertanalyse ist ein Testverfahren, das auf der Überprüfung der Grenzen von Äquivalenzklassen basiert.\"). Antwort b) ist korrekt, da die beschriebene Liste möglicher Fehlerzustände bzw. Fehlersituationen typisch für das Verfahren des Fehlerangriffs ist."
 },
 {
  "id": "C-27",
  "set": "C",
  "num": 27,
  "lo": "FL-4.4.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN, wie der Einsatz von checklistenbasiertem Testen zu höhere r Testüberdeckung führen kann?",
  "images": [],
  "options": [
   "Checklistenelemente können so detailliert definiert werden, dass der Tester auf dieser Grundlage detaillierte Testfälle implementieren und ausführen kann.",
   "Durch die Automatisierung von Checklistenpunkten wird bei jeder Testausführung automatisch eine höhere Überdeckung erzielt.",
   "Jedes Checklistenelement sollte separat und unabhängig getestet werden, sodass die Elemente unterschiedliche Bereiche der Software abdecken.",
   "Zwei Tester, die dieselben allgemein formulierten Checklistenpunkte nutzen, können diese unterschiedlich umsetzen – dies kann zu ergänzender Überdeckung führen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Checklistenbasiert: Erfahrung als Liste – konsistenter als frei drauflos, flexibler als Skript. Checklisten pflegen, sonst Pestizid-Paradoxon!",
  "explanation": "a) FALSCH – Checklistenelemente ersetzen detaillierte Testfälle nicht vollständig und machen Testanalyse nicht überflüssig. Beim checklistenbasierten Test entwirft, implementiert und führt ein Tester Tests aus, um Testbedingungen aus einer Checkliste abzudecken (siehe CTFL-Lehrplan V4.0.2.2, Abschnitt 4.4.3).\n\nb) FALSCH – “Checklisten sollten keine Elemente enthalten, die automatisch geprüft werden können\" (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.4.3, 3. Satz) d. h., Checklisten sollten nicht aus Elementen bestehen, die bereits automatisch geprüft werden können. Aber selbst, wenn dies der Fall ist, führen die automatisierten Testskripte die Tests immer auf die gleiche Weise aus, was in der Regel keine erhöhte Überdeckung zur Folge hat.\n\nc) FALSCH – Eine festgelegte Ausführungsreihenfolge ist kein typischer Mechanismus, durch den checklistenbasiertes Testen zu höherer Überdeckung führt. Entscheidend ist vielmehr, dass allgemein formulierte Checklistenelemente bei der konkreten Umsetzung durch Tester zu Variabilität führen können.\n\nd) KORREKT – Wenn Checklisten generisch bzw. auf einer höheren Abstraktionsebene formuliert sind, ist beim tatsächlichen Testen eine gewisse Variabilität wahrscheinlich. Verschiedene Tester können dann unterschiedliche Testdaten, Testschritte oder konkrete Prüfungen verwenden. Dies kann zu potenziell größerer Überdeckung führen, jedoch zu geringerer Wiederholbarkeit (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.4.3)."
 },
 {
  "id": "C-28",
  "set": "C",
  "num": 28,
  "lo": "FL-4.5.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welches der folgenden Akzeptanzkriterien (Abnahmekriterien) ist ein typisches Beispiel für ein szenarioorientiertes Kriterium?",
  "images": [],
  "options": [
   "Die Anwendung muss es Nutzenden ermöglichen, ihr Konto sowie alle zugehörigen Daten auf Anfrage zu löschen.",
   "Gegeben ist ein Kunde, der nicht angemeldet ist. Wenn er einen Artikel in den Warenkorb legt und zur Kasse geht, dann wird er aufgefordert, sich anzumelden oder ein Konto zu erstellen.",
   "IF (contain(product(23).Name, cart.products())) THEN return FALSE.",
   "Die Website muss den Anforderungen der ICT Accessibility 508 Standards entsprechen und sicherstellen, dass alle Inhalte für Menschen mit Behinderungen zugänglich sind."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Akzeptanzkriterien schreiben: szenariobasiert (Given/When/Then) oder regelorientiert (Checkliste, Tabelle). Immer prüfbar!",
  "explanation": "a) FALSCH – Dieses Akzeptanzkriterium beschreibt, welche Regeln oder Vorschriften das System einhalten muss (in diesem Fall das Recht auf Vergessenwerden). Dies ist ein Beispiel für ein regelorientiertes Akzeptanzkriterium (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.5.2).\n\nb) KORREKT – Dieses Akzeptanzkriterium beschreibt ein Beispielszenario, das vom System realisierbar sein muss. Dies ist ein Beispiel für ein szenarioorientiertes Akzeptanzkriterium (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.5.2). Laut ISTQB-Lehrplan sind szenarioorientierte Akzeptanzkriterien typischerweise in einem \"Gegeben/Wenn/Dann\"-Format beschrieben und orientieren sich an der verhaltensgetriebenen Entwicklung (BDD).\n\nc) FALSCH – Dieser Satz ähnelt eher einer Codezeile, die eine Geschäftsregel implementiert. Akzeptanzkriterien sollten in Zusammenarbeit mit Unternehmensvertretern verfasst werden und daher in einer Sprache formuliert sein, die sie verstehen. Dieser Satz wird für diese Stakeholder höchstwahrscheinlich unverständlich sein (siehe CTFL- Lehrplan V4.0.2, Abschnitt 4.5.2).\n\nd) FALSCH – Dieses Akzeptanzkriterium beschreibt, welche Regeln oder Vorschriften das System einhalten muss und wie die Einhaltung sichergestellt wird. Daher handelt es sich hier um ein Beispiel für ein regelorientiertes Akzeptanzkriterium und nicht um ein szenarioorientiertes Akzeptanzkriterium (siehe CTFL-Lehrplan V4.0.2, Abschnitt 4.5.2). Fazit: • Antwort b) ist korrekt, da sie ein konkretes Nutzungsszenario beschreibt, das überprüft werden kann. • Antworten a) und d) sind falsch, da sie regelorientierte Kriterien sind. • Antwort c) ist falsch, da sie eine technische Implementierung darstellt, die für Stakeholder nicht verständlich ist."
 },
 {
  "id": "C-29",
  "set": "C",
  "num": 29,
  "lo": "FL-4.5.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie arbeiten mit abnahmetestgetriebener Entwicklung und entwerfen Testfälle auf Grundlage der folgenden User-Story: Als regulärer oder spezieller Benutzer möchte ich meine elektronische Etagenkarte nutzen, um Zugang zu den jeweils erlaubten Etagen zu erhalten. Akzeptanzkriterien: AC1: Reguläre Benutzer haben Zugang zu den Etagen 1 bis 3. AC2: Etage 4 ist ausschließlich für spezielle Benutzer zugänglich. AC3: Spezielle Benutzer verfügen über alle Zugriffsrechte reguläre r Benutzer. Welcher Testfall eignet sich AM BESTEN, um das Akzeptanzkriterium AC3 zu testen?",
  "images": [],
  "options": [
   "Ein regulärer Benutzer erhält Zugang zu den Etagen 1 und 3.",
   "Ein regulärer Benutzer hat keinen Zugang zur Etage 4.",
   "Ein spezieller Benutzer versucht, auf Etage 5 zuzugreifen.",
   "Ein spezieller Benutzer erhält Zugang zu den Etagen 1, 2 und 3."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung.",
  "explanation": "a) FALSCH – Wir möchten überprüfen, ob spezielle Benutzer die Rechte von regulären Benutzern haben. Daher müssen wir die Zugriffsrechte für einen speziellen Benutzer testen, nicht für einen regulären Benutzer.\n\nb) FALSCH – Wir möchten überprüfen, ob spezielle Benutzer die Rechte von regulären Benutzern haben. Daher müssen wir die Zugriffsrechte für einen speziellen Benutzer testen, nicht für einen regulären Benutzer.\n\nc) FALSCH – In den Akzeptanzkriterien ist keine Etage 5 beschrieben. Die Testfälle sollten den Umfang der User-Story nicht erweitern. Selbst wenn wir gerne einen Negativtest durchführen würden, steht dieser Test nicht in direktem Zusammenhang mit AC3.\n\nd) KORREKT – Auf diese Weise können wir prüfen, ob ein spezieller Benutzer Zugriff auf Etagen hat, die für einen regulären Benutzer zugänglich sind. Die korrekte Option ist d), da dieser Testfall spezifisch die Zugriffsrechte eines speziellen Benutzers auf die regulären Etagen überprüft, wie es AC3 verlangt."
 },
 {
  "id": "C-30",
  "set": "C",
  "num": 30,
  "lo": "FL-5.1.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welcher der folgenden Punkte gehört nicht zu Zweck oder typischem Inhalt eines Testkonzepts?",
  "images": [],
  "options": [
   "Detaillierte Festlegung konkreter Testdaten und erwarteter Ergebnisse einzelner Komponenten- und Integrationstestfälle",
   "Festlegung eines Endekriteriums auf Komponententestebene mit dem Ziel 100 % Anweisungs- und Zweigüberdeckung",
   "Festlegung von Formen und Häufigkeit der Kommunikation sowie Dokumentationsvorlagen für Testberichte",
   "Begründung, warum eine in der Teststrategie vorgesehene Teststufe (z. B. Systemintegration) nicht durchgeführt wird"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testkonzept = Was? Wie? Wer? Wann? Womit? Wann fertig? (Ziele, Umfang, Ansatz, Ressourcen, Zeitplan, Ende- & Eingangskriterien, Risiken).",
  "explanation": "a) KORREKT – Ein Testkonzept kann Anforderungen an Testdaten enthalten, jedoch typischerweise nicht die detaillierten Testdaten und erwarteten Ergebnisse einzelner Testfälle. Diese werden im Rahmen des Testentwurfs bzw. der Testrealisierung konkretisiert (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.1).\n\nb) FALSCH – Einer der Zwecke eines Testkonzepts besteht darin, sicherzustellen, dass die durchgeführten Testaktivitäten die festgelegten Kriterien erfüllen, indem es Eingangs- und Endekriterien einbezieht. Ein Beispiel für solche Kriterien für die Komponententestebene sind die Codeüberdeckungskriterien (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.1, Typische Inhalte eines Testkonzepts, 6. Aufzählungspunkt).\n\nc) FALSCH – Dokumentationsvorlagen sind typische Inhalte eines Testkonzepts. Dies trägt dazu bei, die Kommunikation zwischen den Beteiligten zu erleichtern, indem eine Standardmethode für die Kommunikation oder Berichterstattung definiert wird (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.1, Typische Inhalte eines Testkonzepts, 4. Aufzählungspunkt).\n\nd) FALSCH – Einer der Zwecke eines Testkonzepts besteht darin, nachzuweisen, dass sich die Tests an die bestehende Testrichtlinie und Teststrategie halten, oder zu erklären, warum die Tests davon abweichen. Dies ist ein Beispiel zur Erläuterung der Abweichung hinsichtlich der Teststufen, die befolgt werden (oder nicht befolgt werden) (siehe CTFL- Lehrplan V4.0.2, Abschnitt 5.1.1, Typische Inhalte eines Testkonzepts, 2. Aufzählungspunkt)."
 },
 {
  "id": "C-31",
  "set": "C",
  "num": 31,
  "lo": "FL-5.1.4",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Zu Beginn jeder Iteration schätzt das Team den Testaufwand (in Personentagen), den es während dieser Iteration leisten wird. E(n) bezeichnet den geschätzten und A(n) den tatsächlich geleisteten Aufwand in Iteration n. Ab der dritten Iteration verwendet das Team folgendes Extrapolationsmodell zur Aufwandsschätzung: E(n) = 𝟑∗𝑨(𝒏−𝟏)+𝑨(𝒏−𝟐) 𝟒 (𝒇ü𝒓 𝒏 ≥ 𝟑) Eine Grafik zeigt die geschätzten und tatsächlichen Werte für die ersten vier Iterationen. Wie hoch ist der geschätzte Testaufwand für Iteration Nr. 5?",
  "images": [],
  "options": [
   "10,5 Personentage",
   "8,25 Personentage",
   "6,5 Personentage",
   "9,4 Personentage 0 1 2 3 4 5 6 7 8 9 10 11 12 13 Wiederholung #1 Wiederholung #2 Wiederholung #3 Wiederholung #4 Geschätzter und tatsächlicher Aufwand (in Personentagen) Geschätzt Aktual"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6.",
  "explanation": "Die Prüfungsfrage basiert auf der Extrapolation, einem Verfahren zur Schätzung des Testaufwands. Laut dem Lehrplan wird bei der Extrapolation der für die verbleibende Arbeit erforderliche Aufwand durch Anwendung eines mathematischen Modells auf historische Daten angenähert. Aus der Grafik ergibt sich: A(4)=6 und A(3)=8 (die letzten beiden grauen Balken/Säulen) Aus der Formel erhalten wir: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6,5 Personentage Daher\n\na) FALSCH\n\nb) FALSCH\n\nc) KORREKT\n\nd) FALSCH – Die Antwort c) ist korrekt, da die Schätzung von 6,5 Personentagen mit der Formel und den historischen Daten übereinstimmt."
 },
 {
  "id": "C-32",
  "set": "C",
  "num": 32,
  "lo": "FL-5.1.5",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie erstellen einen Testausführungsplan für sieben Testfälle (TC 1 bis TC 7). Eine Abbildung zeigt: – Die Priorität jedes Testfalls (1 = höchste, 3 = niedrigste) – Abhängigkeiten zwischen den Testfällen in Form gerichteter Pfeile. Ein Testfall darf nur ausgeführt werden, wenn alle vorgelagerten (abhängigen) Testfälle bereits ausgeführt wurden. Der Testausführungsplan ist so zu erstellen, dass Testfälle mit Priorität 1 so früh wie möglich ausgeführt werden. Dafür dürfen vorgelagerte Testfälle mit niedrigerer Priorität vor anderen bereits ausführbaren Testfällen mit höherer Priorität eingeplant we rden, sofern dies erforderlich ist, um Testfälle mit Priorität 1 früher auszuführen. Welcher Testfall sollte gemäß diesen Vorgaben als sechster ausgeführt werden?",
  "images": [
   "images/C-32.png"
  ],
  "options": [
   "TC 3",
   "TC 5",
   "TC 6",
   "TC 2"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall.",
  "explanation": "Wir wollen Testfälle entsprechend ihren Prioritäten ausführen, müssen aber auch die Abhängigkeiten berücksichtigen. Wenn wir nur Prioritäten berücksichtigen, möchten wir zuerst TC 5 und TC 7 (höchste Priorität), dann TC 1, TC 3 und TC 4 und schließlich TC 2 und TC 6 (niedrigste Priorität) ausführen. Um jedoch TC 7 auszuführen, müssen wir zuerst TC 4 ausführen. Um TC 5 auszuführen, müssen zuerst TC1 und TC 2 ausgeführt werden. TC 2 ist wiederum von TC 1 abhängig. Um TC 7 auszuführen, muss zuvor TC 4 ausgeführt werden. Um also Testfälle der Priorität 1 so früh wie möglich auszuführen, sollten die ersten fünf Testfälle sein: TC 4 – TC 7 – TC 1 – TC 2 – TC 5. Als Nächstes müssen wir TC 3 ausführen, da es eine höhere Priorität als TC 6 hat. Somit wird der vollständige Testausführungsplan TC 4 – TC 7 – TC 1 – TC 2 – TC 5 – TC 3 – TC 6 sein. Der sechste Testfall wird also TC 3 sein. Daher\n\na) KORREKT\n\nb) FALSCH\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "C-33",
  "set": "C",
  "num": 33,
  "lo": "FL-5.1.6",
  "k": "K1",
  "category": "Testmanagement",
  "question": "Was zeigt das Testpyramidenmodell?",
  "images": [],
  "options": [
   "Tests können unterschiedliche Prioritäten haben.",
   "Tests haben unterschiedliche Granularität.",
   "Für verschiedene Tests gelten unterschiedliche Überdeckungskriterien.",
   "Tests können voneinander abhängig sein."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testpyramide: unten VIELE kleine, schnelle Tests (Unit), oben WENIGE große, langsame (UI/E2E).",
  "explanation": "a) FALSCH – Das Testpyramidenmodell beschreibt keine Testprioritäten. Es konzentriert sich auf die Hierarchie und Granularität von Tests, nicht auf ihre Priorisierung (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.6).\n\nb) KORREKT – Die Testpyramide ist ein Modell, das zeigt, dass verschiedene Tests eine unterschiedliche Granularität haben können. Es unterstützt das Team bei der Testautomatisierung und bei der Verteilung des Testaufwands; die Ebenen der Pyramide stellen Gruppen von Tests unterschiedlicher Granularität, Isolation und typischer Testdurchführungszeit dar (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.6, 1. Satz).\n\nc) FALSCH – Überdeckungskriterien sind nicht Teil des Fokus des Testpyramidenmodells. Dieses Modell beschäftigt sich mit Testebenen und Granularität, nicht mit den Überdeckungskriterien der Tests (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.6).\n\nd) FALSCH – Das Testpyramidenmodell beschreibt keine Abhängigkeiten zwischen Tests. Es konzentriert sich auf die Struktur und Hierarchie von Testebenen (siehe CTFL- Lehrplan V4.0.2, Abschnitt 5.1.6)."
 },
 {
  "id": "C-34",
  "set": "C",
  "num": 34,
  "lo": "FL-5.1.7",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche Beziehung besteht zwischen den Testquadranten, Teststufen und Testarten?",
  "images": [],
  "options": [
   "Testquadranten kombinieren bestimmte Teststufen mit Testarten und ordnen sie einem festen Abschnitt im Softwareentwicklungslebenszyklus zu.",
   "Testquadranten definieren die Granularität von Testarten, die auf unterschiedlichen Teststufen angewendet werden.",
   "Testquadranten ordnen jeder Teststufe eine spezifische Menge an Testarten zu.",
   "Testquadranten gruppieren Teststufen und Testarten nach Kriterien wie der Zielgruppe oder dem Testfokus."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit).",
  "explanation": "a) FALSCH – Testquadranten gruppieren Teststufen mit entsprechenden Testarten, Aktivitäten, Testverfahren und Arbeitsergebnissen. Sie ordnen diese jedoch keinem festen Abschnitt im Softwareentwicklungslebenszyklus zu (siehe CTFL- Lehrplan V4.0.2, Abschnitt 5.1.7).\n\nb) FALSCH – Testquadranten gruppieren Teststufen und Testarten nach mehreren Kriterien. Sie beschreiben nicht den Grad der Granularität der einzelnen Testarten, die auf jeder Teststufe durchgeführt werden. Ein solches Modell hinsichtlich der Teststufen wird als Testpyramide bezeichnet (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.7).\n\nc) FALSCH – Die Aussage ist falsch, da grundsätzlich jede Testart auf jeder Teststufe durchgeführt werden kann (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.7).\n\nd) KORREKT – Die Testquadranten gruppieren Teststufen, Testarten, Aktivitäten, Testverfahren und Arbeitsprodukte in der agilen Softwareentwicklung. In diesem Modell können Tests geschäftsorientiert oder technologieorientiert sein. Tests können das Team unterstützen (d. h. die Entwicklung leiten) oder das Produkt kritisieren (d. h. sein Verhalten anhand der Erwartungen messen). Die Kombination dieser beiden Standpunkte bestimmt die vier Quadranten (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.1.7, 1. Satz)."
 },
 {
  "id": "C-35",
  "set": "C",
  "num": 35,
  "lo": "FL-5.2.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Wie kann eine Produktrisikoanalyse den Umfang und die Gründlichkeit von Tests beeinflussen?",
  "images": [],
  "options": [
   "Durch kontinuierliche Risikoüberwachung können neue Risiken frühzeitig erkannt werden.",
   "Die Risikoidentifikation unterstützt die Planung risikomindernder Maßnahmen.",
   "Das bewertete Risikoniveau bestimmt die erforderliche Testtiefe und - überdeckung.",
   "Die Risikoanalyse liefert die Grundlage für die Auswahl technischer Testobjekte."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Produktrisikoanalyse steuert das Testen: hohes Risiko → früher, gründlicher, mehr Teststufen/Techniken; niedriges Risiko → weniger.",
  "explanation": "a) FALSCH – Die Risikoüberwachung ist Teil der Risikosteuerung, nicht der Risikoanalyse. Sie dient der Identifizierung neuer Risiken oder der Überprüfung bereits erkannter Risiken während des Testprozesses.\n\nb) FALSCH – Die Risikoidentifizierung selbst ermöglicht es uns nicht, Maßnahmen zur Risikominderung umzusetzen. Die Maßnahmen zur Risikominderung werden in der Risikosteuerung definiert.\n\nc) KORREKT – Die Risikoanalyse bewertet die Risiken nach Wahrscheinlichkeit und Auswirkung. Diese Bewertung hilft dabei, die Gründlichkeit und den Umfang der Tests für verschiedene Testobjekte festzulegen. Höhere Risiken erfordern gründlichere Tests.\n\nd) FALSCH – Überdeckungselemente werden durch Testverfahren (z. B. Äquivalenzklassen oder Grenzwertanalyse) definiert, nicht durch die Risikoanalyse."
 },
 {
  "id": "C-36",
  "set": "C",
  "num": 36,
  "lo": "FL-5.3.2",
  "k": "K2",
  "category": "Testmanagement",
  "question": "In welcher der folgenden Aktivitäten werden Daten aus Testfortschrittsberichten typischerweise verwendet?",
  "images": [],
  "options": [
   "Testentwurf",
   "Testabschluss",
   "Testanalyse",
   "Testplanung"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testfortschrittsbericht: LAUFEND, ans Team, steuert. Testabschlussbericht: am ENDE, an Stakeholder, bilanziert. Sprache an Zielgruppe anpassen!",
  "explanation": "a) FALSCH – Daten aus Testfortschrittsberichten werden typischerweise während der Testüberwachung und Teststeuerung sowie beim Testabschluss verwendet, nicht während des Testentwurfs (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2).\n\nb) KORREKT – Ein Testabschlussbericht wird während des Testabschlusses erstellt, wenn ein Projekt, eine Teststufe oder eine Testart abgeschlossen ist und im Idealfall die Endekriterien erfüllt wurden. Dieser Bericht basiert auf Testfortschrittsberichten und anderen Daten (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2).\n\nc) FALSCH – Daten aus Testfortschrittsberichten werden typischerweise während der Testüberwachung und Teststeuerung sowie beim Testabschluss verwendet, nicht während der Testanalyse (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2).\n\nd) FALSCH – Testfortschrittsberichte unterstützen die Teststeuerung und Testüberwachung. Daten aus Testfortschrittsberichten entstehen jedoch erst während laufender Testaktivitäten und werden daher nicht typischerweise in der Testplanung verwendet (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.3.2)."
 },
 {
  "id": "C-37",
  "set": "C",
  "num": 37,
  "lo": "FL-5.4.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen stellt kein Beispiel dafür dar, wie das Konfigurationsmanagement das Testen unterstützt?",
  "images": [],
  "options": [
   "Alle Konfigurationselemente im Repository werden eindeutig identifiziert, versionskontrolliert und Änderungen werden nachverfolgt.",
   "Änderungen an der Testumgebung werden dokumentiert und nachvollziehbar gemacht.",
   "Anforderungen sind in Testdokumenten eindeutig referenziert.",
   "Fehlerberichte enthalten einen Fehlerstatus, z. B. offen oder geschlossen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde.",
  "explanation": "a) FALSCH – Das Konfigurationsmanagement stellt sicher, dass alle Konfigurationselemente, einschließlich Testelemente und Softwarekomponenten, eindeutig identifiziert, versionskontrolliert und nachverfolgt werden. Dies erleichtert die Reproduzierbarkeit von Testergebnissen, indem man zu einer bestimmten Version zurückkehren kann (siehe CTFL- Lehrplan V4.0.2, Abschnitt 5.4).\n\nb) FALSCH – Das Konfigurationsmanagement unterstützt die Verwaltung von Änderungen an Testumgebungen, indem es diese dokumentiert, nachvollziehbar macht und eine Rückkehr zu früheren Baselines oder Versionen ermöglicht. Dadurch können Tester konsistente und reproduzierbare Testbedingungen herstellen bzw. wiederherstellen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.4).\n\nc) FALSCH – Das Konfigurationsmanagement stellt sicher, dass alle identifizierten Dokumente (z. B. Anforderungsspezifikationen) und Softwareelemente in der Testdokumentation (z. B. Testkonzepte) eindeutig referenziert werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.4).\n\nd) KORREKT – Der Fehlerstatus ist ein typischer Bestandteil eines Fehlerberichts und gehört zum Fehlermanagement (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.5), nicht Teil des Konfigurationsmanagements. Das Konfigurationsmanagement konzentriert sich auf Identifizierung, Steuerung, Versionierung, Nachverfolgung und eindeutige Referen-zierung von Konfigurationselementen. (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.4)."
 },
 {
  "id": "C-38",
  "set": "C",
  "num": 38,
  "lo": "FL-5.5.1",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Betrachten Sie den folgenden Fehlerbericht für eine webbasierte Einkaufsanwendung: Anwendung: WebShop v0.99 Fehler: Login-Button funktioniert nicht Schritte zum Reproduzieren: Starten Sie die Website Klicken Sie auf den Login-Button Erwartetes Ergebnis: Der Benutzer wird zur Anmeldeseite weitergeleitet. Tatsächliches Ergebnis: Der Login-Button reagiert nicht. Schweregrad: Hoch Priorität: Dringend Welche fehlende Information ist für die Reproduktion AM WICHTIGSTEN?",
  "images": [],
  "options": [
   "Name des Testers und Datum des Berichts.",
   "Angaben zur Testumgebung, z. B. Browser und jeweilige Versionsinformationen.",
   "Identifizierung des Testobjekts.",
   "Beschreibung der Auswirkungen für betroffene Stakeholder."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung.",
  "explanation": "a) FALSCH – Diese Informationen sind zwar hilfreich, aber weniger entscheidend als Details zur Testumgebung, da diese für die Fehlerreproduktion und -behebung wichtiger sind (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.5, 3. Absatz, 3. Aufzählungspunkt).\n\nb) KORREKT – Angaben zur Testumgebung, z. B. Browser, Betriebssystem und jeweilige Versionsinformationen, sind besonders wichtig, um die beobachtete Fehlerwirkung unter möglichst gleichen Bedingungen reproduzieren und analysieren zu können. Ohne diese Informationen kann es für Entwickler schwierig sein, das Problem in derselben Umgebung nachzustellen und die Ursache zu identifizieren (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.5).\n\nc) FALSCH – Das Testobjekt wurde im Bericht klar identifiziert (WebShop v0.99). Diese Information ist vorhanden und kein fehlender Bestandteil (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.5, 3. Absatz, 4. Aufzählungspunkt).\n\nd) FALSCH – Eine Beschreibung der Auswirkungen für betroffene Stakeholder kann für die Bewertung und Priorisierung eines Fehlerberichts hilfreich sein, ist jedoch für die unmittelbare Reproduktion des Fehlers weniger wichtig als Angaben zur Testumgebung (siehe CTFL-Lehrplan V4.0.2, Abschnitt 5.5, 3. Absatz, 8. und 9. Aufzählungspunkt)."
 },
 {
  "id": "C-39",
  "set": "C",
  "num": 39,
  "lo": "FL-6.1.1",
  "k": "K2",
  "category": "Testwerkzeuge",
  "question": "Welche der folgenden Werkzeugkategorien unterstützt die Verwaltung von Anforderungen, Tests, Fehlerzuständen und Konfiguration?",
  "images": [],
  "options": [
   "Werkzeuge für Testdurchführung und Testüberdeckung.",
   "Werkzeuge für Testentwurf und Testrealisierung.",
   "Fehlermanagementwerkzeuge.",
   "Testmanagementwerkzeuge."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline).",
  "explanation": "a) FALSCH – Testdurchführungswerkzeuge und Testüberdeckungswerkzeuge dienen der automatisierten Ausführung von Testfällen sowie der Messung der Überdeckung (z. B. Codeabdeckung). Diese Werkzeuge unterstützen jedoch nicht direkt das Fehlermanagement oder das Konfigurationsmanagement, da sie sich primär auf die Testdurchführung und Metriken konzentrieren (siehe CTFL-Lehrplan V4.0.2, Abschnitt 6.1).\n\nb) FALSCH – Testentwurfs- und Testrealisierungswerkzeuge erleichtern die Erstellung von Testfällen, Testdaten und Testabläufen (siehe CTFL-Lehrplan V4.0.2, Abschnitt 6.1, 3. Aufzählungspunkt), unterstützen jedoch nicht beim Fehlermanagement und beim Konfigurationsmanagement.\n\nc) FALSCH – Fehlermanagementwerkzeuge unterstützen vor allem das Erfassen, Verfolgen und Verwalten von Fehlerberichten bzw. Fehlerzuständen. Sie decken jedoch nicht die im Fragestamm genannte umfassende Verwaltung von Anforderungen, Tests, Fehlerzuständen und Konfiguration ab (siehe CTFL-Lehrplan V4.0.2, Abschnitt 6.1).\n\nd) KORREKT – Testmanagementwerkzeuge erhöhen die Effizienz des Testprozesses, indem sie das Management des SDLC, der Anforderungen, der Tests, der Fehlerzustände und der Konfiguration erleichtern. Damit passen sie genau zu der im Fragestamm beschriebenen Unterstützung des Testens (siehe CTFL-Lehrplan V4.0.2, Abschnitt 6.1)."
 },
 {
  "id": "C-40",
  "set": "C",
  "num": 40,
  "lo": "FL-6.2.1",
  "k": "K1",
  "category": "Testwerkzeuge",
  "question": "Welcher der folgenden Punkte ist ein typischer Nutzen der Testautomatisierung?",
  "images": [],
  "options": [
   "Automatisierte Generierung von Testfällen ohne Bezug zur Testbasis",
   "Erhöhte Überdeckung durch objektive Bewertung von Testergebnissen",
   "Längere Testlaufzeiten durch höhere Verarbeitungsleistung",
   "Vermeidung einfacher menschlicher Fehlhandlungen durch konsistente und wiederholbare Testausführung"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit.",
  "explanation": "a) FALSCH – Eine automatisierte Generierung von Testfällen ohne Bezug zur Testbasis ist kein typischer Nutzen der Testautomatisierung. Sinnvolle Testfälle sollten aus der Testbasis abgeleitet oder mit ihr nachvollziehbar verknüpft sein.\n\nb) FALSCH – Testautomatisierung kann eine objektivere Bewertung, z. B. der Überdeckung, und entsprechende Messungen unterstützen. Dadurch wird die Überdeckung jedoch nicht automatisch erhöht; eine höhere Überdeckung entsteht erst durch geeignete zusätzliche oder erweiterte Tests.\n\nc) FALSCH – Diese Aussage ist widersprüchlich. Höhere Verarbeitungsleistung reduziert typischerweise die Testausführungszeiten, was einen Vorteil darstellt, nicht die Erhöhung der Ausführungszeiten.\n\nd) KORREKT – Ein typischer Nutzen der Testautomatisierung ist die Vermeidung einfacher menschlicher Fehlhandlungen durch größere Konsistenz und Wiederholbarkeit, z. B. wenn Tests durch ein Werkzeug in gleicher Reihenfolge und mit gleicher Häufigkeit ausgeführt werden (siehe CTFL-Lehrplan V4.0.2, Abschnitt 6.2). Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet) Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet)"
 },
 {
  "id": "D-1",
  "set": "D",
  "num": 1,
  "lo": "FL-1.1.1",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt ein typisches Ziel von Softwaretests?",
  "images": [],
  "options": [
   "Fehler im Testobjekt identifizieren und beheben.",
   "Eine effektive Kommunikation mit dem Entwicklungsteam sicherstellen.",
   "Nachweisen, dass gesetzliche Vorgaben umgesetzt wurden.",
   "Vertrauen in die Qualität des Testobjekts aufbauen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Testziele: Fehler finden · Risiko senken · Vertrauen aufbauen · informieren. NIE: Fehlerfreiheit beweisen.",
  "explanation": "a) FALSCH – Das Finden und Beheben von Fehlern im Testobjekt ist kein typisches Testziel, da das Identifizieren von Fehlern zwar ein Ziel des Testens ist (siehe CTFL- Lehrplan V4.0, Abschnitt 1.1.1, 2. Aufzählungspunkt), das Beheben von Fehlern jedoch keine Testaktivität ist.\n\nb) FALSCH – Die Aufrechterhaltung einer effektiven Kommunikation mit Entwicklern ist kein typisches Testziel, da sie zwar nützlich ist, um andere Testziele wie die Bereitstellung von Informationen für Stakeholder zu erreichen, aber kein Hauptgrund für das Testen ist.\n\nc) FALSCH – Die Validierung, ob die gesetzlichen Anforderungen erfüllt sind, ist kein typisches Testziel, da die Validierung darauf abzielt, zu überprüfen, ob das System die Bedürfnisse der Benutzer und anderer Stakeholder in seiner Betriebsumgebung erfüllt. Die Überprüfung, ob die gesetzlichen Anforderungen erfüllt sind, ist eine Form der Verifikation.\n\nd) KORREKT – Das Vertrauen in die Qualität des Testobjekts wird durch das Ausführen von Tests, die bestanden werden, aufgebaut (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.1, 8. Aufzählungspunkt)."
 },
 {
  "id": "D-2",
  "set": "D",
  "num": 2,
  "lo": "FL-1.2.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Ein Designer erstellt das Layout einer Benutzeroberfläche, berücksichtigt dabei jedoch nicht die Bedürfnisse behinderter Nutzer – möglicherweise aufgrund von Müdigkeit. Ein Entwickler implementiert dieses Design, verzichtet aber aus Zeitgründen auf eine ge eignete Ausnahmebehandlung für Bonusberechnungen. Nach der Einführung des Systems beschweren sich einige Nutzer über die eingeschränkte Barrierefreiheit, woraufhin das Unternehmen von der Aufsichtsbehörde mit einer Geldstrafe belegt wird. Der Fehler in der Bonusberechnung bleibt zunächst unbemerkt. Welche der folgenden Aussagen IST KORREKT?",
  "images": [],
  "options": [
   "Die fehlerhafte Bonusberechnung ist ein sporadisch auftretender Fehlerzustand.",
   "Die verhängte Geldstrafe wegen mangelnder Barrierefreiheit stellt einen Ausfall dar.",
   "Der Zeitdruck, unter dem der Entwickler stand, ist eine wesentliche Ursache.",
   "Das Design enthält eine offensichtliche Fehlerwirkung des Designers."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Kette: Grundursache → Fehlhandlung (Mensch irrt) → Fehlerzustand (im Code) → Fehlerwirkung (im Betrieb sichtbar).",
  "explanation": "a) FALSCH – Die falsche Berechnung von Boni ist ein Fehler des Systems, kein Fehlerzustand.\n\nb) FALSCH – Das System bietet keine angemessene Unterstützung für behinderte Benutzer, was letztendlich zu einer Geldstrafe führt, aber die Geldstrafe selbst ist kein Fehler (es scheint sich um das korrekte Funktionieren des Regulierungssystems zu handeln).\n\nc) KORREKT – Der Fehler wird vom Programmierer gemacht, und dieser Fehler wird dadurch verursacht, dass der Programmierer unter großem Zeitdruck arbeitet, was die eigentliche Ursache für den nachfolgenden Fehler ist (siehe CTFL-Lehrplan V4.0, Abschnitt 1.2.3, 1. + 4. Absatz).\n\nd) FALSCH – Gemäß ISTQB® CTFL 4.0 Lehrplan (Abschnitt 1.2.3) ist eine Fehlerwirkung (Failure) eine Abweichung vom erwarteten Verhalten, die erst im Betrieb eines Systems sichtbar wird (z. B. wenn das System tatsächlich von Endbenutzern oder Stakeholdern verwendet wird). Ein Design-Dokument selbst kann unmittelbar keine Fehlerwirkung enthalten, da es ein statisches Arbeitsprodukt ist. Das Design-Dokument enthält vielmehr einen Fehlerzustand (Defect), der durch einen menschlichen Irrtum (Fehlhandlung) des Designers (aufgrund von Müdigkeit) verursacht wurde. Die Aussage verwechselt Fehlerzustand und Fehlerwirkung und ist damit nicht korrekt."
 },
 {
  "id": "D-3",
  "set": "D",
  "num": 3,
  "lo": "FL-1.3.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Tester leiten aus denselben Testbedingungen jeweils unterschiedliche Testfälle ab. Welcher Grundsatz des Testens wird dadurch am besten verdeutlicht?",
  "images": [],
  "options": [
   "Tests nutzen sich ab.",
   "„Keine Fehler“ bedeutet ein brauchbares System.",
   "Frühes Testen spart Zeit und Geld.",
   "Fehlerzustände treten gehäuft auf."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar.",
  "explanation": "a) KORREKT – Das Prinzip des „Tests nutzen sich ab“ befasst sich mit der Idee, dass die Wiederholung identischer Tests an unverändertem Code wahrscheinlich keine neuen Fehler aufdeckt und daher eine Änderung der Tests unerlässlich sein kann. Durch die Verwendung von Testbedingungen, um jedes Mal neue Tests zu generieren, sind die Tests nicht identisch und das Risiko des „Tests nutzen sich ab“ wird reduziert (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 5. Grundsatz).\n\nb) FALSCH – Das Prinzip „„Keine Fehler“ bedeutet ein brauchbares System“ befasst sich mit der Sicherstellung, dass die Bedürfnisse der Benutzer erfüllt werden, auch wenn viele Tests durchgeführt werden und keine Fehler gefunden werden (d. h., eine Validierung ist ebenfalls erforderlich). Die Verwendung von Testbedingungen zur Generierung von Testfällen und zur Durchführung von Tests geht nicht direkt auf dieses Problem ein (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 7. Grundsatz).\n\nc) FALSCH – Das Prinzip „Frühes Testen spart Zeit und Geld“ befasst sich mit der frühzeitigen Behebung von Fehlern, um das Auftreten nachfolgender Fehler in abgeleiteten Arbeitsprodukten zu verhindern und so die Kosten und die Wahrscheinlichkeit von Fehlschlägen zu reduzieren. Dies wird in der Regel dadurch erreicht, dass die Tests (sowohl statische als auch dynamische) so früh wie möglich beginnen, aber nicht durch die Verwendung von Testbedingungen zur Generierung von Testfällen und zur Durchführung von Tests (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 3. Grundsatz).\n\nd) FALSCH – Das Prinzip „Fehlerzustände treten gehäuft auf“ befasst sich mit der Verteilung von Defekten in einem System, die in der Regel einer Pareto-Verteilung folgt. Die Verwendung von Testbedingungen zur Generierung von Testfällen und zur Durchführung von Tests geht nicht auf dieses Problem ein, das üblicherweise durch risikobasiertes Testen angegangen wird (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 4. Grundsatz)."
 },
 {
  "id": "D-4",
  "set": "D",
  "num": 4,
  "lo": "FL-1.4.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Gegeben sind die folgenden Testaufgaben: 1. Testfälle aus Testbedingungen ableiten 2. Wiederverwendbare Testware identifizieren 3. Testfälle in Testabläufen organisieren 4. Testbasis und Testobjekt bewerten Und die folgenden Testaktivitäten: A. Testanalyse B. Testentwurf C. Testrealisierung D. Testabschluss Welche der folgenden Zuordnungen passt AM BESTEN zu den Aufgaben und Aktivitäten?",
  "images": [],
  "options": [
   "1B, 2A, 3D, 4C",
   "1B, 2D, 3C, 4A",
   "1C, 2A, 3B, 4D",
   "1C, 2D, 3A, 4B"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testprozess: Planung → Überwachung/Steuerung → Analyse (WAS testen?) → Entwurf (WIE testen?) → Realisierung → Durchführung → Abschluss.",
  "explanation": "A. Testanalyse – Zur Identifikation der zu testenden Funktionen wird die Testbasis analysiert und in Form von Testbedingungen definiert, die zusammen mit den zugehörigen Risiken priorisiert werden. Während dieser Testanalyse werden typischerweise Fehler in der Testbasis aufgedeckt und die Testbarkeit des Testobjekts kann ebenfalls bewertet werden (Aufgabe 4). B. Testentwurf – Beinhaltet die Erstellung von Testfällen und anderen notwendigen Testwerkzeugen, wie Testdatenanforderungen und Test-Chartas für exploratives Testen, auf Basis der Testbedingungen (Aufgabe 1). C. Testrealisierung – Testabläufe wie manuelle und automatisierte Testskripte werden aus Testfällen erstellt und in Testsuiten zusammengefasst. Testabläufe werden priorisiert und in einem Testausführungsplan angeordnet (Aufgabe 3). D. Testabschluss – Erfolgt bei Projektmeilensteinen wie Release, Ende der Iteration oder Ende des Testlevels. Testware wird identifiziert und archiviert oder den entsprechenden Teams zur Wiederverwendung übergeben, die Testumgebung wird heruntergefahren und die Testaktivitäten werden für Lerneffekte und zukünftige Verbesserungen analysiert (Aufgabe 2). Daher\n\na) FALSCH\n\nb) KORREKT – Die KORREKTE Zuordnung ist: 1B, 2D, 3C, 4A. • 1B: Testentwurf umfasst das Ableiten von Testfällen aus Testbedingungen. • 2D: Testabschluss schließt die Identifikation wiederverwendbarer Testware ein. • 3C: Testrealisierung organisiert Testfälle in Testabläufen. • 4A: Testanalyse bewertet die Testbasis und das Testobjekt.\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "D-5",
  "set": "D",
  "num": 5,
  "lo": "FL-1.4.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Optionen ist das beste Beispiel für Testware, die im",
  "images": [],
  "options": [
   "Testabschlussbericht",
   "Testdaten für Eingaben und erwartete Ergebnisse in einer Datenbank",
   "Liste der Komponenten zur Einrichtung der Testumgebung",
   "Testfälle"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testmittel = Ergebnisse der Testaktivitäten: Testkonzept (Planung) · Testfälle (Entwurf) · Skripte/Daten (Realisierung) · Protokolle/Berichte (Durchführung/Abschluss).",
  "explanation": "Die Testrealisierung erzeugt folgende Ergebnisse: Testabläufe, automatisierte Testskripte, Testsuiten, Testdaten, Testausführungspläne und Bestandteile der Testumgebung wie Platzhalter (Stubs), Treiber, Simulatoren und Dienst-Virtualisierungen. Betrachten Sie jede der aufgelisteten Testware und die Testaktivität, die sie produziert\n\na) FALSCH – Der Testabschlussbericht ist ein Ergebnis der Testabschlussaktivität und nicht der Testrealisierung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3, 7. Aufzählungspunkt).\n\nb) KORREKT – Testdaten wie Daten in einer Datenbank, die für Testeingaben und erwartete Ergebnisse verwendet werden, sind ein Ergebnis der Testrealisierung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3, 5. Aufzählungspunkt).\n\nc) FALSCH – Die Testumgebungsanforderungen, einschließlich der Liste der Elemente zum Aufbau der Testumgebung, sind ein Ergebnis der Aktivitäten des Testentwurfs (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3, 4. Aufzählungspunkt).\n\nd) FALSCH – Testfälle sind ein Ergebnis der Aktivitäten des Testentwurfs und nicht der Testrealisierung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.3, 4. Aufzählungspunkt)."
 },
 {
  "id": "D-6",
  "set": "D",
  "num": 6,
  "lo": "FL-1.4.5",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Optionen beschreibt AM BESTEN eine typische Aufgabe einer Person in der Testmanagementrolle?",
  "images": [],
  "options": [
   "Bewertung von Testbasis und Testobjekt",
   "Definition der Anforderungen an die Testumgebung",
   "Bewertung der Testbarkeit des Testobjekts",
   "Erstellung des Testabschlussberichts"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Rolle des Testens: analysiert, entwirft, führt aus, meldet. Testmanagementrolle: plant, steuert, koordiniert, berichtet.",
  "explanation": "a) FALSCH – Die Bewertung der Testbasis auf Fehler und des Testobjekts auf Testbarkeit wird typischerweise im Rahmen der Testanalyse durchgeführt und ist eine Aufgabe der Testrolle, die sich auf technische und ingenieurmäßige Aspekte des Testens konzentriert (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.5, 3. Absatz).\n\nb) FALSCH – Die Definition der Testumgebungsanforderungen ist eine Aufgabe der Testrolle, die im Rahmen des Testentwurfs durchgeführt wird. Die Testmanagementrolle umfasst diese Aufgabe nicht (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.5, 3. Absatz).\n\nc) FALSCH – Die Bewertung der Testbarkeit eines Testobjekts ist ebenfalls eine Aufgabe, die typischerweise von der Testrolle im Rahmen der Testanalyse durchgeführt wird (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.5, 3. Absatz).\n\nd) KORREKT – Die Testmanagementrolle umfasst Aktivitäten wie Testplanung, Testüberwachung und Teststeuerung sowie Testabschluss. Das Erstellen des Testabschlussberichts ist eine Hauptaufgabe der Testmanagementrolle im Rahmen der Testabschlussaktivität (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.5, 2. Absatz)."
 },
 {
  "id": "D-7",
  "set": "D",
  "num": 7,
  "lo": "FL-1.5.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt einen einen Vorteil des Whole-Team-Ansatzes?",
  "images": [],
  "options": [
   "Verbesserte Kommunikation im Team",
   "Geringere individuelle Verantwortung für Qualität",
   "Schnellere Bereitstellung von Ergebnissen für Endbenutzer",
   "Weniger Zusammenarbeit mit externen Geschäftsnutzern"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen.",
  "explanation": "a) KORREKT – Der Whole-Team-Ansatz fördert eine robuste Kommunikation und Zusammenarbeit zwischen den Teammitgliedern, was ein wesentlicher Vorteil ist (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz).\n\nb) FALSCH – Obwohl der Whole-Team-Ansatz die kollektive Verantwortung für Qualität priorisiert, bleibt jedes Teammitglied weiterhin gleichermaßen verantwortlich für Qualität (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz).\n\nc) FALSCH – Der Whole-Team-Ansatz zielt darauf ab, qualitativ hochwertigere Ergebnisse zu erzielen, jedoch nicht zwangsläufig eine schnellere Bereitstellung an Endbenutzer (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz).\n\nd) FALSCH – Im Whole-Team-Ansatz arbeiten Tester eng mit Geschäftsvertretern zusammen, z. B. zur Erstellung von Akzeptanztests. Es gibt keine Hinweise darauf, dass der Ansatz die Zusammenarbeit mit externen Geschäftsnutzern verringert (siehe CTFL- Lehrplan V4.0, Abschnitt 1.5.2, 3. Absatz)."
 },
 {
  "id": "D-8",
  "set": "D",
  "num": 8,
  "lo": "FL-1.5.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen zur Unabhängigkeit des Testens werden",
  "images": [],
  "options": [
   "Die Tester arbeiten an einem anderen Standort als die Entwickler.",
   "Tester hinterfragen die Annahmen, die Entwickler beim Schreiben von Code treffen.",
   "Es herrsche eine konfrontative Beziehung zwischen Testern und Entwicklern.",
   "Entwickler gehen davon aus, dass Tester die alleinige Verantwortung für Qualität tragen.",
   "Tester bringen eine andere Sichtweise als Entwickler ein."
  ],
  "correct": [
   1,
   4
  ],
  "nSelect": 2,
  "merksatz": "Unabhängiges Testen: + eigene Sicht, findet andere Fehler · − Isolation, Kommunikationshürden, Entwickler schieben Verantwortung ab.",
  "explanation": "a) FALSCH – Eine physische Trennung zwischen Testern und Entwicklern kann die Zusammenarbeit erschweren und wird daher als Nachteil angesehen.\n\nb) KORREKT – Tester haben oft unterschiedliche Perspektiven und können Annahmen und Spezifikationen hinterfragen, was die Wahrscheinlichkeit erhöht, Fehler und Mängel zu erkennen (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 3. Absatz).\n\nc) FALSCH – Eine konfrontative Beziehung zwischen Testern und Entwicklern ist ein Nachteil der Unabhängigkeit, da sie die Zusammenarbeit und Kommunikation behindern kann.\n\nd) FALSCH – Wenn Entwickler die Verantwortung für Qualität auf Tester abwälzen, ist dies ein Nachteil der Unabhängigkeit, da dies die Qualität des gesamten Systems beeinträchtigen kann.\n\ne) KORREKT – Tester und Entwickler haben unterschiedliche technische Hintergründe und kognitive Vorurteile, was es Testern ermöglicht, Fehler zu erkennen, die Entwicklern möglicherweise entgehen (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 3. Absatz)."
 },
 {
  "id": "D-9",
  "set": "D",
  "num": 9,
  "lo": "FL-2.1.2",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Optionen ist eine bewährte Testpraxis, die auf alle Softwareentwicklungslebenszyklen angewendet wird?",
  "images": [],
  "options": [
   "Jede Teststufe verfolgt eigene, eindeutig definierte Testziele.",
   "Testrealisierung und -ausführung sollten während der jeweiligen Entwicklungsphase beginnen.",
   "Mit dem Testentwurf sollte begonnen werden, sobald erste Entwürfe verfügbar sind.",
   "Für jede dynamische Testaktivität gibt es eine entsprechende statische Aktivität."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen.",
  "explanation": "a) KORREKT – Jede Teststufe hat spezifische und eindeutige Testziele, um sicherzustellen, dass unterschiedliche Aspekte des Testobjekts geprüft werden. Überschneidungen der Testziele können zu unnötiger Duplizierung führen (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.2, 2. Aufzählungspunkt).\n\nb) FALSCH – Während die Testanalyse und der Testentwurf frühzeitig beginnen sollten, beginnt die Testrealisierung in der Regel später und die Testausführung erfolgt während der Teststufe.\n\nc) FALSCH – Der Testentwurf sollte nicht auf einem frühen Entwurf basieren, da sich das Design noch ändern kann. Er sollte auf einer stabilen und vereinbarten Testbasis erfolgen.\n\nd) FALSCH – Es gibt keine direkte Symmetrie zwischen dynamischen und statischen Testaktivitäten. Einige statische Testaktivitäten wie die statische Analyse haben keine offensichtliche dynamische Entsprechung."
 },
 {
  "id": "D-10",
  "set": "D",
  "num": 10,
  "lo": "FL-2.1.3",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Optionen ist ein Beispiel für testgetriebene Entwicklung?",
  "images": [],
  "options": [
   "Verhaltensgetriebene Entwicklung",
   "Teststufengetriebene Entwicklung",
   "Funktionsgetriebene Entwicklung",
   "Performanzgetriebene Entwicklung"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien).",
  "explanation": "a) KORREKT – Verhaltensgetriebene Entwicklung (Behavior-Driven Development, BDD) ist ein bekanntes Beispiel für einen testgetriebenen Entwicklungsansatz (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.3, 4. Absatz).\n\nb) FALSCH – Teststufengetriebene Entwicklung ist kein Beispiel für einen testgetriebenen Entwicklungsansatz.\n\nc) FALSCH – Funktionsgetriebene Entwicklung ist kein Beispiel für einen testgetriebenen Entwicklungsansatz.\n\nd) FALSCH – Performanzgetriebene Entwicklung ist kein Beispiel für einen testgetriebenen Entwicklungsansatz."
 },
 {
  "id": "D-11",
  "set": "D",
  "num": 11,
  "lo": "FL-2.1.4",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt AM BESTEN eine typische Herausforderung bei der Einführung von DevOps?",
  "images": [],
  "options": [
   "Sicherstellen, dass nicht-funktionale Anforderungen ausreichend berücksichtigt werden.",
   "Umgang mit häufig wechselnden Testumgebungen.",
   "Bedarf an zusätzlichen manuellen Testern mit spezieller Erfahrung.",
   "Integration der Testautomatisierung in die Bereitstellungspipeline."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "DevOps: CI/CD-Pipeline mit automatisierten Tests = schnelles Feedback. Aber: manuelle, nutzernahe Tests bleiben nötig; Pipeline braucht Pflege.",
  "explanation": "a) FALSCH – DevOps erhöht im Allgemeinen die Sichtbarkeit nicht-funktionaler Qualitätsmerkmale wie Performanz und Zuverlässigkeit und stellt daher keine bedeutende Herausforderung dar.\n\nb) FALSCH – Automatisierte Prozesse wie Continuous Integration/Continuous Delivery (CI/CD), die in DevOps verwendet werden, erleichtern die Stabilisierung von Testumgebungen, wodurch dieses Problem minimiert wird.\n\nc) FALSCH – DevOps reduziert im Allgemeinen den Bedarf an manuellen Tests, da die Automatisierung ein zentraler Bestandteil von DevOps ist.\n\nd) KORREKT – Eine der größten Herausforderungen bei der Implementierung von DevOps ist das Einrichten und Warten der Testautomatisierung als integraler Bestandteil der Bereitstellungspipeline, einschließlich der Einführung und Pflege von CI/CD-Tools (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.4, 3. Absatz, 3. Aufzählungspunkt)."
 },
 {
  "id": "D-12",
  "set": "D",
  "num": 12,
  "lo": "FL-2.1.6",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt den Zweck von Retroperspektiven AM BESTEN ?",
  "images": [],
  "options": [
   "Retrospektiven dienen dazu, Beiträge einzelner Teammitglieder kritisch zu bewerten.",
   "Retrospektiven ermöglichen es dem Team, erfolgreiche Aktivitäten zu identifizieren, um sie künftig beizubehalten.",
   "Retrospektiven bieten Raum für das Ansprechen von Bedenken gegenüber dem Management in geschütztem Rahmen.",
   "Retrospektiven sind Sitzungen, in denen das Team technische Entscheidungen für die nächste Iteration trifft."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Retrospektive: nach der Iteration – Was lief gut? Was nicht? Was ändern wir? → kontinuierliche Prozessverbesserung.",
  "explanation": "a) FALSCH – Retrospektiven fördern Teambindung und Zusammenarbeit durch das Teilen von Problemen und die Überprüfung und Verbesserung der Arbeitspraktiken. Das Identifizieren einzelner Personen, die nicht zur Qualität beigetragen haben, fördert weder Teambindung noch Zusammenarbeit.\n\nb) KORREKT – Retrospektiven bieten Teams die Möglichkeit, über erfolgreiche Aktivitäten zu sprechen, die beibehalten werden sollten, und über Verbesserungsmöglichkeiten nachzudenken (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.6, 1. Absatz, Aufzählungspunkte).\n\nc) FALSCH – Retrospektiven dienen der Prozessverbesserung und nicht als Plattform für Kritik oder das Äußern von Bedenken gegenüber Management und Kunden.\n\nd) FALSCH – Retrospektiven konzentrieren sich auf die Diskussion qualitätsbezogener Probleme der aktuellen Iteration. Die Planung und technische Entscheidungsfindung erfolgen in der Iterationsplanungssitzung."
 },
 {
  "id": "D-13",
  "set": "D",
  "num": 13,
  "lo": "FL-2.2.2",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welcher der folgenden Tests gehört AM EHESTEN zu den Funktionstests?",
  "images": [],
  "options": [
   "Der Test überprüft, ob die Sortierfunktion eine Liste korrekt in aufsteigender Reihenfolge sortiert.",
   "Der Test überprüft, ob die Sortierfunktion das Sortieren innerhalb einer Sekunde abschließt.",
   "Der Test überprüft, wie einfach sich die Sortierfunktion auf absteigende Sortierung umstellen lässt.",
   "Der Test überprüft, ob die Sortierfunktion auch auf einer 64-Bit-Architektur korrekt funktioniert."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testarten: funktional (WAS tut es) · nicht-funktional (WIE GUT: Performanz, Sicherheit, Usability) · strukturell (White-Box) · änderungsbezogen.",
  "explanation": "a) KORREKT – Die Überprüfung, ob die Sortierfunktion die Elemente korrekt sortiert, bewertet die funktionale Korrektheit der Funktion und gehört zu den Funktionstests (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.2, 2. Absatz).\n\nb) FALSCH – Die Überprüfung der Erfüllung einer nicht-funktionalen Anforderung, wie z. B. der Geschwindigkeit (innerhalb einer Sekunde), gehört zu den Performanztests, die Teil der nicht-funktionalen Tests sind.\n\nc) FALSCH – Die Bewertung der Änderbarkeit, wie z. B. die Umstellung von aufsteigender auf absteigende Sortierung, ist ein Wartbarkeitstest, der Teil der nicht-funktionalen Tests ist.\n\nd) FALSCH – Die Überprüfung der Anpassungsfähigkeit bei der Portierung zwischen verschiedenen Architekturen gehört zu den Portabilitätstests, die Teil der nicht- funktionalen Tests sind."
 },
 {
  "id": "D-14",
  "set": "D",
  "num": 14,
  "lo": "FL-2.3.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt AM EHESTEN einen typischen Auslöser für Wartungstests eines Währungsumtauschsystems?",
  "images": [],
  "options": [
   "Entwickler berichteten über Schwierigkeiten bei Änderungen am System, woraufhin das Testteam eine technische Überprüfung einleitete.",
   "Die Rückerstattungsoption des Währungsumtauschsystems wurde entfernt, da sie den Kunden nicht immer den richtigen Betrag zurückzahlte.",
   "Das agile Team begann mit der Implementierung einer neuen Kundenbindungsfunktion.",
   "Die Sprachunterstützung wurde erweitert, um Transaktionen in Englisch und der Landessprache zu ermöglichen."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Wartungstest-Auslöser: Modifikation (Fix, Update) · Migration (Plattform-/Datenumzug) · Außerbetriebnahme (Archivierung, Datenmigration).",
  "explanation": "a) FALSCH – Wenn Tester die Änderbarkeit eines Systems überprüfen möchten, würden sie Wartbarkeitstests und keine Wartungstests durchführen. Dies ist kein Auslöser für Wartungstests.\n\nb) KORREKT – Systemänderungen wie Korrekturen oder Erweiterungen sind typische Auslöser für Wartungstests. Das Entfernen der Rückerstattungsoption ist eine Korrektur, die Wartungstests erforderlich macht (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz).\n\nc) FALSCH – Das Hinzufügen neuer Funktionen würde zu Funktionstests und Regressionstests führen, jedoch nicht zu Wartungstests.\n\nd) FALSCH – Die Erweiterung der Sprachunterstützungdes Systems ist keine Systemänderung, keine Änderung der Betriebsumgebung und keine Stilllegung des Systems, die die drei Hauptauslöser für Wartungstests sind."
 },
 {
  "id": "D-15",
  "set": "D",
  "num": 15,
  "lo": "FL-3.1.1",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welches der folgenden Artefakte kann NICHT durch statisches Testen untersucht werden?",
  "images": [],
  "options": [
   "Vertrag",
   "Testkonzept",
   "Verschlüsselter Code",
   "Test-Charta"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Reviewen kann man (fast) alles Lesbare: Anforderungen, Code, Testware, Verträge, Handbücher – nur eine lesbare Struktur ist Pflicht.",
  "explanation": "a) FALSCH – Verträge sind Arbeitsergebnisse, die für Menschen interpretierbar sind und daher mit statischen Testverfahren wie Reviews oder Inspektionen überprüft werden können (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.1, 1. Absatz).\n\nb) FALSCH – Ein Testkonzept ist ein dokumentiertes Arbeitsergebnis, das für Menschen interpretierbar ist und statisch überprüft werden kann, z. B. durch Reviews (siehe CTFL- Lehrplan V4.0, Abschnitt 3.1.1, 1. Absatz).\n\nc) KORREKT – Verschlüsselter Code ist zu komplex, um von Menschen interpretiert werden zu können, und nicht geeignet für die Analyse durch statische Testwerkzeuge, wenn er korrekt verschlüsselt ist. Daher kann er nicht effektiv durch statisches Testen untersucht werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.1, 3. Absatz).\n\nd) FALSCH – Eine Test-Charta ist ein Arbeitsergebnis, das für Menschen interpretierbar ist und durch statische Testmethoden wie Reviews überprüft werden kann (siehe CTFL- Lehrplan V4.0, Abschnitt 3.1.1, 1. Absatz)."
 },
 {
  "id": "D-16",
  "set": "D",
  "num": 16,
  "lo": "FL-3.1.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen beschreibt den Wert des statischen Testens AM BESTEN?",
  "images": [],
  "options": [
   "Die bei statischen Tests gefundenen Fehlertypen unterscheiden sich von denen, die durch dynamische Tests gefunden werden können.",
   "Dynamische Tests können alle Fehler erkennen, die auch bei statischen Tests gefunden werden, sowie weitere.",
   "Dynamische Tests erkennen einige, aber nicht alle Fehler, die durch statische Tests gefunden werden können.",
   "Statische Tests können alle Fehler erkennen, die durch dynamische Tests gefunden werden, sowie zusätzliche."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Statisches Testen: findet Fehler FRÜH und BILLIG, direkt an der Ursache – bevor Code überhaupt läuft.",
  "explanation": "a) FALSCH – Die Aussage ist zwar teilweise richtig, statische Tests finden andere Arten von Fehlern als dynamische Tests (z.B. Verstöße gegen Syntax, Codierstandards oder Designregeln) – aber sie beschreibt nicht am besten den Wert des statischen Testens. Die Aussage ist zu allgemein und hebe den eigentlichen Nutzen (z.B. frühe Fehlererkennung ohne Codeausführung) nicht hervor.\n\nb) FALSCH – Diese Aussage ist falsch, weil dynamische Tests nicht alle Fehler erkennen können, die durch statische Tests auffindbar sind. Beispielsweise erkennt ein dynamischer Test keine fehlende Code- Kommentierung, fehlerhafte Algorithmen ohne Ausführung, oder Verstöße gegen Namenskonventionen. Damit wird der Wert statischer Tests klar unterschätzt.\n\nc) KORREKT – Dies ist die beste Beschreibung des Werts statischer Tests. Statische Tests können viele Fehler frühzeitig und ohne Codeausführung finden, z. B. Designprobleme oder Verstöße gegen Standards. Dynamische Tests hingegen entdecken nur Fehler, die bei der Ausführung auftreten – nicht aber rein strukturelle oder dokumentationsbezogene Mängel. Diese Aussage betont die Komplementarität und Vorteile statischer Tests am besten.\n\nd) FALSCH – Diese Aussage ist übertrieben und falsch, da statische Tests niemals Fehler aufdecken können, die nur bei der Laufzeit auftreten – z. B. Division durch null oder Speicherzugriffsfehler. Damit wird der Wert dynamischer Tests fälschlich negiert, und die Aussage führt zu einem falschen Verständnis der Testarten."
 },
 {
  "id": "D-17",
  "set": "D",
  "num": 17,
  "lo": "FL-3.2.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Nachfolgend finden Sie fünf Beschreibungen typischer Aktivitäten im Rahmen eines strukturierten Reviews: 1. Entdeckte Anomalien werden diskutiert und bezüglich ihres Ihres Status, ihre r Zuständigkeit und möglicher Folgemaßnahmen bewertet. 2. Probleme werden erfasst und notwendige Anpassungen vor der Abnahme des Arbeitsergebnissses vorgenommen. 3. Gutachter entwickeln Vorschläge und Fragen zum Arbeitsergebnis und identifizieren dabei mögliche Anomalien. 4. Ziel und Zeitplan werden definiert, um den Ablauf fokussiert und effizient zu gestalten. 5. Die Teilnehmenden erhalten Zugriff auf das zu prüfende Dokument. Welche der folgenden Optionen entspricht der korrekten Reihenfolge dieser Aktivitäten im Reviewprozess?",
  "images": [],
  "options": [
   "4 – 3 – 5 – 2 – 1",
   "4 – 5 – 3 – 1 – 2",
   "5 – 4 – 1 – 3 – 2",
   "5 – 4 – 3 – 2 – 1"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Reviewprozess: Planung → Review-Initiierung → INDIVIDUELLES Review (meiste Funde!) → Kommunikation & Analyse → Fehlerbehebung & Berichterstattung.",
  "explanation": "a) FALSCH – Diese Reihenfolge stimmt nicht mit dem generischen Reviewprozess gemäß ISO/IEC 20246 überein. Der Reviewbeginn (5) sollte auf die Planung (4) folgen und vor dem individuellen Review (3) erfolgen.\n\nb) KORREKT – Diese Reihenfolge stimmt mit dem generischen Reviewprozess überein (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.2, 3. Absatz): • Planung (4): Ziele und Zeitplan der Reviews werden festgelegt. • Reviewbeginn (5): Teilnehmer erhalten Zugriff auf das zu überprüfende Element. • Individuelles Review (3): Reviewer identifizieren Anomalien und stellen Fragen. • Kommunikation und Analyse (1): Anomalien werden diskutiert und Entscheidungen werden getroffen. • Behebung und Testberichterstattung (2): Probleme werden behoben und Berichte werden erstellt.\n\nc) FALSCH – Die Planung (4) sollte dem Reviewbeginn (5) (Reviewinitiierung) vorausgehen, und Kommunikation und Analyse (1) erfolgen nach dem individuellen Review (3).\n\nd) FALSCH – Die Planung (4) sollte dem Reviewbeginn (5) vorausgehen, und Behebung und Testberichterstattung (2) sollten nach Kommunikation und Analyse (1) erfolgen."
 },
 {
  "id": "D-18",
  "set": "D",
  "num": 18,
  "lo": "FL-3.2.3",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welcher Teilnehmer im Reviewprozess ist dafür verantwortlich , sicherzustellen, dass die Reviewsitzungen effektiv verlaufen und dass jeder Teilnehmer in den Sitzungen seine Meinung frei äußern kann?",
  "images": [],
  "options": [
   "Manager",
   "Moderator",
   "Vorsitzender",
   "Reviewleiter"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Review-Rollen: Moderator leitet · Autor erstellt & korrigiert · Gutachter finden · Protokollant notiert · Management gibt Ressourcen.",
  "explanation": "a) FALSCH – Der Manager ist verantwortlich für Entscheidungen darüber, was überprüft werden soll, und für die Bereitstellung von Ressourcen wie Personal und Zeit für das Review.\n\nb) KORREKT – Der Moderator (auch Facilitator genannt) ist dafür verantwortlich, sicherzustellen, dass die Reviewsitzungen effektiv ablaufen. Dazu gehören Zeitmanagement, Moderation von Diskussionen und die Schaffung einer sicheren Umgebung, in der alle Teilnehmer ihre Meinungen frei äußern können (siehe CTFL- Lehrplan V4.0, Abschnitt 3.2.3, 3. Aufzählungspunkt).\n\nc) FALSCH – Der Vorsitzende ist keine anerkannte Rolle im Reviewprozess gemäß den Definitionen im Lehrplan.\n\nd) FALSCH – Der Reviewleiter überwacht den gesamten Reviewprozess, wozu Aufgaben wie die Auswahl der Teammitglieder, die Planung von Sitzungen und die Sicherstellung des erfolgreichen Abschlusses des Reviews gehören."
 },
 {
  "id": "D-19",
  "set": "D",
  "num": 19,
  "lo": "FL-4.1.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Sie testen eine E-Commerce-Webanwendung und erhalten die folgende Anforderung: REQ 05 -017. Wenn die Gesamtkosten der Einkäufe 100 € überschreiten, erhält der Kunde einen Rabatt von 5 % auf zukünftige Einkäufe. Andernfalls erhält der Kunde keinen Rabatt. Welche Test verfahren eignen sich AM BESTEN zur Ableitung von Testfällen aus dieser Anforderung?",
  "images": [],
  "options": [
   "White-Box-Testverfahren",
   "Black-Box-Testverfahren",
   "Erfahrungsbasierte Testverfahren",
   "Risikobasierte Testverfahren"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers.",
  "explanation": "a) FALSCH – Die Anforderung beschreibt das gewünschte Verhalten des Systems und bezieht sich nicht auf die interne Struktur oder den Code des Testobjekts. Daher sind White-Box-Testverfahren für die Erstellung von Testfällen in diesem Fall nicht geeignet (siehe CTFL-Lehrplan V4.0, Abschnitt 4.1, 4. Absatz).\n\nb) KORREKT – Die Anforderung spezifiziert das gewünschte Verhalten des Systems und enthält klare Geschäftsregeln, wie „übersteigt 100 €“. Diese Art von Information eignet sich gut für Black- Box-Testverfahren wie Grenzwertanalyse oder Entscheidungstabellentest (siehe CTFL-Lehrplan V4.0, Abschnitt 4.1, 3. Absatz).\n\nc) FALSCH – Erfahrungsbasierte Testverfahren könnten verwendet werden, sind jedoch weniger geeignet als Black-Box-Testverfahren, da die Anforderung präzise Geschäftsregeln enthält, die sich besser mit Black-Box-Testverfahren wie der Grenzwertanalyse testen lassen (siehe CTFL- Lehrplan V4.0, Abschnitt 4.1, 5. Absatz).\n\nd) FALSCH – Risikobasierte Testverfahren sind keine spezifische Art von Testverfahren, sondern eine Strategie, die bei der Priorisierung von Tests verwendet wird. Sie sind in diesem Kontext nicht anwendbar."
 },
 {
  "id": "D-20",
  "set": "D",
  "num": 20,
  "lo": "FL-4.2.1",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ein System zur Online-Buchung von Kinokarten berechnet die Art des Rabatts auf Grundlage des Geburtsjahrs (BY) und des aktuellen Jahres (CY) wie folgt: Sei D = CY – BY. • Wenn D < 0: Anzeige der Fehlermeldung „Geburtsjahr kann nicht größer als aktuelles Jahr sein“. • Wenn 0 ≤ D < 18: Kinder-/Jugendrabatt. • Wenn 18 ≤ D < 65: Kein Rabatt. • Wenn D ≥ 65: Rentnerrabatt. Die Testsuite enthält bereits zwei Testfälle: • BY = 1990, CY = 2020 → erwartetes Ergebnis: Kein Rabatt • BY = 2030, CY = 2029 → erwartetes Ergebnis: Fehlermeldung Welche der folgenden Testdaten sollten ergänzt werden, um eine vollständige Äquivalenzklassenüberdeckung der Rabattberechnung zu erreichen?",
  "images": [],
  "options": [
   "BY = 2001, CY=2065",
   "BY = 1900, CY=1965",
   "BY = 1965, CY =1900",
   "BY = 2011, CY=2029",
   "BY = 2000, CY=2000"
  ],
  "correct": [
   1,
   4
  ],
  "nSelect": 2,
  "merksatz": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!",
  "explanation": "a) FALSCH – CY - BY = 64. Dieser Eingabewert liegt in der bereits abgedeckten Klasse „kein Rabatt“.\n\nb) KORREKT – CY - BY = 65. Dieser Eingabewert gehört zur Klasse „Rentnerrabatt“, die in den bisherigen Testfällen noch nicht abgedeckt ist.\n\nc) FALSCH – CY - BY = - 65. Dieser Eingabewert gehört zur Klasse „Fehlermeldung“, die bereits durch den bestehenden Testfall abgedeckt ist.\n\nd) FALSCH – CY - BY = 18. Dieser Eingabewert liegt in der Klasse „kein Rabatt“, die bereits durch einen bestehenden Testfall abgedeckt ist.\n\ne) KORREKT – CY - BY = 0. Dieser Eingabewert gehört zur Klasse „Kinder-/Jugendrabatt“, die in den bisherigen Testfällen noch nicht abgedeckt ist. Es gibt zwei Äquivalenzklassen, die noch nicht abgedeckt sind, und zwar die Klassen, die dem „Rentnerrabatt“ (b) und dem „Kinder-/Jugendrabatt“ (e) entsprechen."
 },
 {
  "id": "D-21",
  "set": "D",
  "num": 21,
  "lo": "FL-4.2.2",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie testen ein Temperaturüberwachungssystem für eine Kühlanlage. Das System erhält die Temperatur (in ganzen Grad Celsius) als Eingabe. Liegt die Temperatur zwischen 0 und 2 Grad einschließlich, zeigt das System die Nachricht „Temperatur OK“ an. Liegt sie unter 0 Grad, erscheint „Temperatur zu niedrig“ , und bei h öheren Temperaturen über 2 Grad erscheint „Temperatur zu hoch“. Welches der folgenden Sets von Testeingaben liefert unter Verwendung der Zwei -Wert-Grenzwertanalyse DIE VOLLSTÄNDIGSTE Überdeckung der Grenzwerte?",
  "images": [],
  "options": [
   "-1, 3",
   "0, 2",
   "-1, 0, 2, 3",
   "-2, 0, 2, 4"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn.",
  "explanation": "a) FALSCH – Dieses Set deckt nur die Grenzwerte -1 (für die Klasse „Temperatur zu niedrig“) und 3 (für die Klasse „Temperatur zu hoch“) ab. Es fehlen die Grenzwerte 0 und 2 für die Klasse „Temperatur OK“.\n\nb) FALSCH – Dieses Set deckt nur die Grenzwerte 0 und 2 der Klasse „Temperatur OK“ ab, jedoch keine Grenzwerte für die Klassen „Temperatur zu niedrig“ und „Temperatur zu hoch“.\n\nc) KORREKT – Dieses Set deckt alle relevanten Grenzwerte ab: • -1 für die Klasse „Temperatur zu niedrig“ • 0 und 2 für die Klasse „Temperatur OK“ • 3 für die Klasse „Temperatur zu hoch“\n\nd) FALSCH – Dieses Set deckt nicht alle relevanten Grenzwerte ab, insbesondere fehlt -1 (für die Klasse „Temperatur zu niedrig“) und 3 (für die Klasse „Temperatur zu hoch“). Es gibt drei Äquivalenzklassen: {…, -2, -1}, {0, 1, 2}, {3, 4, …}. Für die Zwei-Wert-Grenzwertanalyse müssen alle Grenzwerte für alle Äquivalenzklassen abgedeckt sein. Die Grenzwerte sind -1 (für die Klasse „Temperatur zu niedrig“), 0 und 2 (für die Klasse „Temperatur OK“) und 3 (für die Klasse „Temperatur zu hoch“)."
 },
 {
  "id": "D-22",
  "set": "D",
  "num": 22,
  "lo": "FL-4.2.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie entwerfen Testfälle basierend auf der folgenden Entscheidungstabelle. R1 R2 R3 R4 R5 R6 R7 C1: Alter 0-18 19-65 19-65 >65 0-18 19-65 >65 C2: Erfahrung - 0-4 >4 - - - - C3: Registriert? NEIN NEIN NEIN NEIN JA JA JA Kategorie A A B B B D C Bisher haben Sie die folgenden Testfälle entworfen: • TC1: 19-jähriger, nicht registrierter Mann ohne Erfahrung; erwartetes Ergebnis: Kategorie A • TC2: 65-jährige, nicht registrierte Frau mit 5 Jahren Erfahrung; erwartetes Ergebnis: Kategorie B • TC3: 66-jähriger, registrierter Mann ohne Erfahrung; erwartetes Ergebnis: Kategorie C • TC4: 65-jährige, registrierte Frau mit 4 Jahren Erfahrung; erwartetes Ergebnis: Kategorie D Welcher der folgenden Testfälle erhöht die Überdeckung der Entscheidungstabelle, wenn er zu den bestehenden Testfällen hinzugefügt wird?",
  "images": [
   "images/D-22.png"
  ],
  "options": [
   "66-jähriger, nicht registrierter Mann ohne Erfahrung; erwartetes Ergebnis: Kategorie B.",
   "55-jährige, nicht registrierte Frau mit 2 Jahren Erfahrung; erwartetes Ergebnis: Kategorie A.",
   "19-jährige, registrierte Frau mit 5 Jahren Erfahrung; erwartetes Ergebnis: Kategorie D.",
   "Kein zusätzlicher Testfall kann die bereits erreichte Überdeckung der Entscheidungstabelle erhöhen."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?",
  "explanation": "Die Testfälle TC1, TC2, TC3 und TC4 decken jeweils die Regeln R2, R3, R7 und R6 in der Entscheidungstabelle ab.\n\na) KORREKT – Die Bedingungen „66-jährig“, „nicht registriert“ und „ohne Erfahrung“ entsprechen der Regel R4, die bisher nicht von den bestehenden Testfällen abgedeckt wurde. Das Hinzufügen dieses Testfalls erhöht die Überdeckung der Entscheidungstabelle.\n\nb) FALSCH – Die Bedingungen „55-jährig“, „nicht registriert“ und „2 Jahre Erfahrung“ entsprechen der Regel R2, die bereits durch TC1 abgedeckt ist. Das Hinzufügen dieses Testfalls erhöht die Überdeckung nicht.\n\nc) FALSCH – Die Bedingungen „19-jährig“, „registriert“ und „5 Jahre Erfahrung“ entsprechen der Regel R6, die bereits durch TC4 abgedeckt ist. Das Hinzufügen dieses Testfalls erhöht die Überdeckung nicht.\n\nd) FALSCH – Die bestehenden Testfälle decken nur 4 von 7 Spalten der Entscheidungstabelle ab. Die Überdeckung kann durch Hinzufügen von Testfällen, die Regeln wie R1, R4 oder R5 abdecken, erhöht werden."
 },
 {
  "id": "D-23",
  "set": "D",
  "num": 23,
  "lo": "FL-4.2.4",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie wenden den Zustandsübergangstest auf das Zimmerreservierungssystem an, das durch die folgende Zustandsübergangstabelle mit vier Zuständen und fünf Ereignissen modelliert wird. Ereignisse Zustand Verfügbar Nicht verfügbar Zimmer wechseln Stornieren Bezahlen S1: Anfordern S2 S3 S2: Bestätigt S1 S4 S4 S3: Warteliste S2 S4 S4: Ende Angenommen, alle Testfälle beginnen im Zustand „Anfordern“. Welcher der folgenden Testfälle (Abfolge von Ereignissen), erreicht die GRÖßTMÖGLICHE ÜBERDECKUNG GÜLTIGER ÜBERGÄNGE?",
  "images": [
   "images/D-23.png"
  ],
  "options": [
   "Nicht verfügbar, Verfügbar, Zimmer wechseln, Nicht verfügbar, Stornieren",
   "Verfügbar, Zimmer wechseln, Nicht verfügbar, Verfügbar, Bezahlen",
   "Verfügbar, Zimmer wechseln, Verfügbar, Zimmer wechseln, Nicht verfügbar",
   "Nicht verfügbar, Stornieren, Zimmer wechseln, Verfügbar, Bezahlen"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen.",
  "explanation": "a) FALSCH – Diese Abfolge von fünf Ereignissen deckt 4 verschiedene gültige Übergänge ab (beide „Nicht verfügbar“-Ereignisse entsprechen demselben Übergang zwischen S1 und S3). Dieser Testfall deckt 4 von 7 gültigen Übergängen ab.\n\nb) KORREKT – Diese Abfolge von fünf Ereignissen deckt 5 verschiedene Übergänge ab (das erste „Verfügbar“-Ereignis entspricht einem Übergang zwischen S1 und S2 und das zweite „Verfügbar“-Ereignis entspricht einem Übergang zwischen S3 und S2, so dass zwei verschiedene Übergänge abgedeckt werden). Dieser Testfall deckt 5 von 7 gültigen Übergängen ab und erreicht die höchste gültige Übergangsüberdeckung.\n\nc) FALSCH – Diese Abfolge von fünf Ereignissen deckt 3 verschiedene Übergänge ab (beide „Verfügbar“-Ereignisse entsprechen demselben Übergang von S1 zu S2; beide „Zimmer wechseln“-Ereignisse entsprechen demselben Übergang von S2 zu S1). Dieser Testfall deckt 3 von 7 gültigen Übergängen ab.\n\nd) FALSCH – Diese Abfolge von fünf Ereignissen stellt keinen machbaren Testfall dar, da nach dem „Stornieren“-Ereignis das System im Endzustand endet und keine weiteren gültigen Übergänge ausgeführt werden können."
 },
 {
  "id": "D-24",
  "set": "D",
  "num": 24,
  "lo": "FL-4.3.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Ihre Testsuite S für ein Programm P erreicht 100 % Anweisungsüberdeckung. Sie besteht aus drei Testfällen, von denen jeder jeweils 50 % Anweisungsüberdeckung erreicht. Welche der folgenden Aussagen IST KORREKT?",
  "images": [],
  "options": [
   "Das Ausführen von S deckt alle möglichen Fehler in P auf.",
   "S erreicht 100 % Zweigüberdeckung für P.",
   "Jede ausführbare Anweisung in P, die einen Fehler enthält, wurde mindestens einmal durch S ausgeführt.",
   "Nach dem Entfernen eines Testfalls aus S erreichen die verbleibenden beiden Testfälle weiterhin 100% Anweisungsüberdeckung."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Anweisungsüberdeckung = ausgeführte / alle Anweisungen. 100 % Anweisungen heißt NICHT alle Entscheidungen getestet.",
  "explanation": "a) FALSCH – Eine Zeile mit einem Fehler muss bei der Ausführung nicht zwangsläufig einen Fehler verursachen. Ein Beispiel: Eine Zeile x: = y / z verursacht nur dann einen Fehler, wenn z gleich 0 ist.\n\nb) FALSCH – Eine 100 %ige Anweisungsüberdeckung garantiert keine 100 %ige Zweigüberdeckung. Ein Beispiel: Ein Testfall mit x = 0 für den Code 1. IF (x = 0) THEN 2. A; 3. ENDIF erreicht eine 100 %ige Anweisungsüberdeckung, deckt jedoch nicht den Zweig von 1 zu 3 ab.\n\nc) KORREKT – Eine 100 %ige Anweisungsüberdeckung bedeutet, dass jede ausführbare Anweisung mindestens einmal ausgeführt wurde.\n\nd) FALSCH – Der entfernte Testfall könnte die Überdeckung einiger Anweisungen bieten, die von keinem der anderen beiden Testfälle abgedeckt werden, in diesem Fall werden die verbleibenden zwei Testfälle zusammen keine 100 %ige Anweisungsüberdeckung erreichen."
 },
 {
  "id": "D-25",
  "set": "D",
  "num": 25,
  "lo": "FL-4.3.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Warum erleichtert White-Box-Testen die Fehlererkennung auch dann, wenn die Softwarespezifikation vage, veraltet oder unvollständig ist?",
  "images": [],
  "options": [
   "Testfälle werden auf der Basis der Struktur des Testobjekts und nicht auf der Spezifikation entworfen.",
   "Für jedes White-Box-Testverfahren kann die Überdeckung genau definiert und leicht gemessen werden.",
   "White-Box-Testverfahren sind sehr gut geeignet, um Auslassungen in den Anforderungen zu erkennen.",
   "White-Box-Testverfahren können sowohl im statischen als auch im dynamischen Testen eingesetzt werden."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "White-Box-Wert: testet, was WIRKLICH gebaut wurde – auch Code, den die Spezifikation vergisst. Schwäche: findet keine fehlenden Anforderungen.",
  "explanation": "a) KORREKT – White-Box-Tests berücksichtigen die gesamte Softwareimplementierung, was die Fehlererkennung erleichtert, selbst wenn die Spezifikation unklar oder unvollständig ist. Dies ermöglicht es, Fehlerzustände zu finden, die nicht durch Black- Box-Tests aufgedeckt werden können, wie z. B. zusätzliche Funktionen im Code, die nicht vorgesehen waren (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.3, 1. Absatz).\n\nb) FALSCH – Obwohl die Überdeckung genau definiert und gemessen werden kann, ist dies nicht der Hauptgrund, warum White-Box-Tests bei vagen oder unvollständigen Spezifikationen hilfreich sind.\n\nc) FALSCH – White-Box-Tests erkennen Fehler in der Implementierung, aber sie können Fehler der Auslassung nicht zuverlässig identifizieren, da diese in den Anforderungen und nicht im Code liegen.\n\nd) FALSCH – Obwohl dies korrekt ist, steht diese Tatsache nicht im Zusammenhang mit der Fähigkeit von White-Box-Tests, Fehler bei schlechten Spezifikationen zu erkennen."
 },
 {
  "id": "D-26",
  "set": "D",
  "num": 26,
  "lo": "FL-4.4.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welches der folgenden Beispiele wird durch den Tester bei der Anwendung de r intuitiven Testfallermittlung AM WENIGSTEN vorhergesehen?",
  "images": [],
  "options": [
   "Der Entwickler hat die Formel in der User-Story zur Berechnung der Zinsen falsch verstanden.",
   "Der Entwickler hat „FA = A*(1+IR^N)“ statt „FA = A*(1+IR)^N“ im Quellcode geschrieben.",
   "Der Entwickler hat das Seminar über die neue Gesetzgebung zu Zinseszinsen verpasst.",
   "Die Genauigkeit der vom System berechneten Zinsen ist nicht ausreichend."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Intuitive Testfallermittlung (Error Guessing): Erfahrung zielt auf typische Fehler – Eingaben, Randfälle, bekannte Schwächen. Fehlerattacken!",
  "explanation": "a) FALSCH – Dies ist ein Beispiel für die Vorhersage eines Entwicklerfehlers, der durch intuitive Testfallermittlung vorhergesehen werden kann.\n\nb) FALSCH – Dies ist ein Beispiel für die Vorhersage eines Defekts im Code, der durch intuitive Testfallermittlung identifiziert werden kann.\n\nc) KORREKT – Dies ist ein Beispiel für eine potenzielle Grundursache eines Defekts, aber keine direkte Vorhersage eines Fehlers, Defekts oder Ausfalls. Es liegt außerhalb des Fokus der intuitiven Testfallermittlung.\n\nd) FALSCH – Dies ist ein Beispiel für die Vorhersage eines Ausfalls, der durch intuitive Testfallermittlung basierend auf Erfahrungen mit ähnlichen Systemen vorhergesehen werden kann."
 },
 {
  "id": "D-27",
  "set": "D",
  "num": 27,
  "lo": "FL-4.4.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen über das explorative Testen IST KORREKT?",
  "images": [],
  "options": [
   "Testfälle werden vor Beginn einer explorativen Testsitzung entworfen.",
   "Der Tester darf die Testausführung vornehmen, aber nicht den Testentwurf.",
   "Ergebnisse des explorativen Testens erlauben verlässliche Vorhersagen über verbleibende Fehler.",
   "Während des explorativen Testens kann der Tester Black-Box-Testverfahren einsetzen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Explorativ: gleichzeitig LERNEN + ENTWERFEN + TESTEN, oft in Sessions mit Charter. Stark bei wenig Zeit oder dünner Spezifikation.",
  "explanation": "a) FALSCH – Beim explorativen Testen werden Testfälle typischerweise während der Sitzung erstellt, zusammen mit der Testanalyse, Testimplementierung und Testausführung.\n\nb) FALSCH – Beim explorativen Testen werden Tests gleichzeitig entworfen, ausgeführt und bewertet, während der Tester das Testobjekt erkundet und besser versteht.\n\nc) FALSCH – Die Ergebnisse des explorativen Testens sind stark von der Erfahrung des Testers abhängig. Sie können zwar Hinweise auf potenzielle Risiken geben, sind jedoch kein zuverlässiger Indikator für die Anzahl verbleibender Fehler.\n\nd) KORREKT – Während des explorativen Testens können Tester alle Testverfahren anwenden, einschließlich Black-Box-Testverfahren, die sie für geeignet halten (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.2, 4. Absatz)."
 },
 {
  "id": "D-28",
  "set": "D",
  "num": 28,
  "lo": "FL-4.5.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche kollaborative Praxis beim Schreiben von User -Storys hilft dem Team am besten, ein gemeinsames Verständnis über das zu liefernde Produkt zu entwickeln?",
  "images": [],
  "options": [
   "Planungspoker, um einen Konsens über den Aufwand für die Umsetzung einer User-Story zu erreichen.",
   "Reviews, um Inkonsistenzen und Widersprüche in einer User-Story zu erkennen.",
   "Iterationsplanung, um User-Storys mit dem höchsten Geschäftswert zu priorisieren.",
   "Gespräch, um ein gemeinsames Verständnis über die Nutzung der Software zu entwickeln."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "User-Story = 3 C: Card (Karte), Conversation (Gespräch), Confirmation (Akzeptanzkriterien). Gemeinsam schreiben, INVEST beachten.",
  "explanation": "a) FALSCH – Planungspoker dient der Schätzung des Aufwands für eine bereits geschriebene User-Story. Es trägt nicht dazu bei, das Verständnis dafür zu entwickeln, was geliefert werden soll.\n\nb) FALSCH – Reviews sind keine kollaborative Praxis zur Erstellung von User-Storys, sondern dienen der Überprüfung bereits existierender Artefakte.\n\nc) FALSCH – Iterationsplanung ist eine Methode zur Priorisierung und Planung der Arbeit, aber nicht zur Klärung der Anforderungen.\n\nd) KORREKT – Gespräche sind eine kollaborative Praxis, die es dem Team ermöglicht, ein kollektives Verständnis über die Anforderungen zu erreichen. Sie helfen oft bei der Definition von Akzeptanzkriterien und der Klärung von Unklarheiten (siehe CTFL- Lehrplan V4.0, Abschnitt 4.5.1, 2. Aufzählungspunkt)."
 },
 {
  "id": "D-29",
  "set": "D",
  "num": 29,
  "lo": "FL-4.5.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Sie haben gerade begonnen, Testfälle für die folgende User-Story zu entwerfen. Als Kunde möchte ich die Suchergebnisse nach Preisspanne filtern können, damit ich Produkte innerhalb meines Budgets leichter finden kann. Akzeptanzkriterien: 1. Der Filter sollte für alle Versionen der Anwendung ab Version 3.0 funktionieren. 2. Der Filter sollte dem Kunden ermöglichen, eine Preisspanne mit einem Mindest- und einem Höchstpreis festzulegen. 3. Die Suchergebnisse sollten sich dynamisch aktualisieren, wenn der Kunde den Preisbereichsfilter anpasst. In allen Testfällen lautet die Vorbedingung wie folgt: Es sind nur zwei Produkte verfügbar, Produkt A und Produkt B. Produkt A kostet 100 € und Produkt B kostet 110 €. Welches der folgenden Beispiele ist DAS BESTE Beispiel für einen Testfall für diese User-Story?",
  "images": [],
  "options": [
   "Webseite aufrufen und den Filter so einstellen, dass Preise zwischen 90 € und 100 € angezeigt werden. Erwartetes Ergebnis: Ergebnisse zeigen nur Produkt A. Höchstpreis auf 110 € setzen. Erwartetes Ergebnis: Ergebnisse beinhalten jetzt sowohl Produkt A als auch Produkt B.",
   "Webseite aufrufen. Erwartetes Ergebnis: Die Standardmindest- und -höchstpreise betragen jeweils 100 € und 110 €. Produkt C zum Lager hinzufügen, mit einem Preis von 120 €. Die Webseite des Kunden aktualisieren. Erwartetes Ergebnis: Der Standardhöchstpreis ändert sich auf 120 €.",
   "Webseite aufrufen und den Filter so einstellen, dass Preise zwischen 90 € und 115 € angezeigt werden. Erwartetes Ergebnis: Ergebnisse zeigen sowohl Produkt A als auch Produkt B. Währung von EUR auf USD ändern. Erwartetes Ergebnis: Der Filterbereich ändert sich korrekt zu USD-Werten.",
   "Webseite mit drei verschiedenen Browsern aufrufen: Edge, Chrome und Opera. In jedem Browser den Filter zwischen 90 € und 110 € einstellen. Erwartetes Ergebnis: Ergebnisse beinhalten sowohl Produkt A als auch Produkt B und das Layout der Ergebnisse ist in allen drei Browsern gleich."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung.",
  "explanation": "a) KORREKT – Dieser Testfall deckt die Akzeptanzkriterien 2 und 3 ab: • Akzeptanzkriterium 2: Überprüfung, ob eine Preisspanne definiert werden kann. • Akzeptanzkriterium 3: Überprüfung, ob die Suchergebnisse dynamisch aktualisiert werden, wenn der Filter angepasst wird (siehe CTFL-Lehrplan V4.0, Abschnitt 4.5.3, 5. Absatz).\n\nb) FALSCH – Dieser Testfall bezieht sich auf keine der Akzeptanzkriterien, sondern testet die Standardwerteinstellung des Filters, was nicht in der User-Story spezifiziert ist.\n\nc) FALSCH – Dieser Testfall überprüft die Währungsumrechnungsfunktion, die in der User- Story nicht erwähnt wird.\n\nd) FALSCH – Dieser Testfall überprüft die Browserkompatibilität, die in dieser User-Story nicht thematisiert wird."
 },
 {
  "id": "D-30",
  "set": "D",
  "num": 30,
  "lo": "FL-5.1.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Optionen beschreiben AM BESTEN typische Endekriterien in einem Testprojekt?",
  "images": [],
  "options": [
   "Das Budget ist genehmigt.",
   "Das Budget ist aufgebraucht.",
   "Die Testbasis ist verfügbar.",
   "Testfälle haben mindestens 80 % Anweisungsüberdeckung erreicht.",
   "Alle Testanalysten sind nach ISTQB Foundation Level zertifiziert."
  ],
  "correct": [
   1,
   3
  ],
  "nSelect": 2,
  "merksatz": "Eingangskriterien = Startbedingung (Definition of Ready). Endekriterien = Fertig-Bedingung (Definition of Done).",
  "explanation": "a) FALSCH – Die Genehmigung des Budgets ist ein Beispiel für ein Eingangskriterium. Es wäre unsinnig, ein Budget für eine Aktivität zu genehmigen, die bereits abgeschlossen ist.\n\nb) KORREKT – Das Aufbrauchen des Budgets kann als Endekriterium betrachtet werden, da es signalisiert, dass die verfügbaren Ressourcen vollständig genutzt wurden und somit keine weiteren Aktivitäten durchgeführt werden können (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 4. Absatz).\n\nc) FALSCH – Die Verfügbarkeit der Testbasis ist ein Beispiel für ein Eingangskriterium, das erfüllt sein muss, bevor das Testen beginnt.\n\nd) KORREKT – Überdeckung ist ein typisches Maß für die Gründlichkeit und wird häufig als Endekriterium verwendet, um zu bewerten, ob das Testen abgeschlossen ist (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 3. Absatz).\n\ne) FALSCH – Dies ist ein Beispiel für ein Eingangskriterium, das vor Beginn des Projekts erfüllt sein sollte."
 },
 {
  "id": "D-31",
  "set": "D",
  "num": 31,
  "lo": "FL-5.1.4",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Das Team möchte die Zeit abschätzen, die ein Tester benötigt, um vier Testfälle auszuführen. Es wurden folgende Aufwandsschätzungen für einen Testfall ermittelt: • Best-Case: 1 Stunde • Worst-Case: 8 Stunden • Wahrscheinlichstes Fall: 3 Stunden Das Team verwendet das Drei -Punkt-Schätzverfahren. Wie hoch ist die geschätzte Gesamtzeit zur Ausführung aller vier Testfälle?",
  "images": [],
  "options": [
   "14 Stunden",
   "3,5 Stunden",
   "16 Stunden",
   "12 Stunden"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6.",
  "explanation": "a) KORREKT – Beim Drei-Punkt-Schätzverfahren wird die endgültige Schätzung E wie folgt berechnet: E = (a + 4m + b) / 6, wobei a die optimistischste Schätzung, m die wahrscheinlichste Schätzung und b die pessimistischste Schätzung ist. In diesem Fall beträgt die Schätzung für die Ausführung eines einzelnen Testfalls: E = (1h + 4*3h + 8h) / 6 = 3,5 Stunden Somit beträgt die Gesamtzeit, die der Tester benötigt, um vier Testfälle auszuführen: 3,5h * 4 = 14 Stunden (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.4, Absatz „Drei-Punkt-Schätzung“).\n\nb) FALSCH – 3,5 Stunden ist die geschätzte Zeit für einen einzelnen Testfall, nicht für vier Testfälle.\n\nc) FALSCH – Diese Antwort ignoriert die Formel des Drei-Punkt-Schätzverfahrens und ist daher nicht korrekt. FALSCH – Diese Schätzung basiert auf einer fehlerhaften Interpretation der Gewichtung der Wahrscheinlichkeit und entspricht nicht dem Drei-Punkt-Schätzverfahren."
 },
 {
  "id": "D-32",
  "set": "D",
  "num": 32,
  "lo": "FL-5.1.5",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Die Tabelle zeigt die Nachverfolgbarkeitsmatrix zwischen Testfällen undu Anforderungen. Ein „X“ bedeutet, dass ein Testfall die Anforderung überdeckt. Req1 Req2 Req3 Req4 Req5 Req6 Req7 TC1 X X X X TC2 X X X TC3 X X TC4 X Die Testfälle sollen mithilfe des Verfahrens der zusätzlichen Über- deckung priorisiert und anschließend alle ausgeführt werden. Welcher Testfall sollte gemäß diesem Verfahren ALS LETZTER ausgeführt werden?",
  "images": [],
  "options": [
   "TC1",
   "TC2",
   "TC3",
   "TC4"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall.",
  "explanation": "TC1 erreicht die höchste Überdeckung (4/7 – Req1, Req3, Req4 und Req7) und sollte daher zuerst ausgeführt werden. Req2, Req5 und Req6 sind noch nicht abgedeckt. Der nächste Testfall, der die höchste zusätzliche Überdeckung der verbleibenden Anforderungen erreicht, ist TC3, der 2 dieser 3 Anforderungen (Req5 und Req6) abdeckt. Daher sollte TC3 als Zweites ausgeführt werden. Nun ist die einzige Anforderung, die noch nicht abgedeckt ist, Req2, die von TC4 abgedeckt wird. Daher sollte TC4 als dritter Testfall ausgeführt werden. Demnach wird der letzte ausgeführte Testfall TC2 sein. Daher\n\na) FALSCH\n\nb) KORREKT\n\nc) FALSCH\n\nd) FALSCH"
 },
 {
  "id": "D-33",
  "set": "D",
  "num": 33,
  "lo": "FL-5.1.7",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Wie unterstützen Testquadranten das Testen?",
  "images": [],
  "options": [
   "Sie helfen bei der Testplanung, indem sie den Testprozess in vier Stufen unterteilen, die den vier grundlegenden Teststufen entsprechen: Komponententests, Integrationstests, Systemtests und Abnahmetests.",
   "Sie helfen bei der Bewertung hoher Überdeckungsstufen (z. B. Anforderungsüberdeckung) basierend auf niedrigen Überdeckungsstufen (z. B. Codeüberdeckung).",
   "Sie helfen nicht-technischen Stakeholdern, verschiedene Testarten zu verstehen und sich bewusst zu werden, dass einige Testarten für bestimmte Teststufen relevanter sind als andere.",
   "Sie helfen agilen Teams, Kommunikationsstrategien auf Basis psychologischer Typen zu entwickeln und Beziehungen zwischen Rollen zu modellieren."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit).",
  "explanation": "a) FALSCH – Die Testquadranten sind kein Modell zur Beschreibung der Beziehungen zwischen den Teststufen, sondern eine Methode, um Testarten zu klassifizieren und ihre Ziele zu verdeutlichen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7, 1.+2. Absatz).\n\nb) FALSCH – Die Testquadranten sind nicht für die Bewertung oder Quantifizierung von Überdeckungsstufen gedacht, sondern fokussieren sich auf die Einordnung von Testarten nach ihrer Zielsetzung und Ausrichtung (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7, 2. Absatz).\n\nc) KORREKT – Die Testquadranten bieten eine strukturierte Möglichkeit, die Beziehung zwischen Testarten und ihrer Rolle in den Bereichen Teamunterstützung (z. B. geschäftsorientiert) und Produktkritik (z. B. technologieorientiert) zu erklären, was für Stakeholder hilfreich ist (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7, 2. Absatz).\n\nd) FALSCH – Die Testquadranten sind kein psychologisches Modell, sondern ein Testmodell zur Klassifizierung und Organisation von Testarten (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7, 1.+2. Absatz)."
 },
 {
  "id": "D-34",
  "set": "D",
  "num": 34,
  "lo": "FL-5.2.1",
  "k": "K1",
  "category": "Testmanagement",
  "question": "Für ein bestimmtes Risiko beträgt dessen Risikostufe 1.000 €, und die geschätzte Eintrittswahrscheinlichkeit liegt bei 50 %. Was ist das Schadensausmaß des Risikos?",
  "images": [],
  "options": [
   "500 €",
   "2.000 €",
   "50.000 €",
   "200 €"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Risikostufe = Eintrittswahrscheinlichkeit × Schadensausmaß. (Umgestellt: Schaden = Stufe ÷ Wahrscheinlichkeit.)",
  "explanation": "Die Risikobewertung kann einen quantitativen oder qualitativen Ansatz oder eine Mischung aus beidem verwenden. Beim quantitativen Ansatz wird die Risikostufe als Produkt aus Eintrittswahrscheinlichkeit und Schadensausmaß des Risikos berechnet. Also, Risikostufe = Eintrittswahrscheinlichkeit * Schadensausmaß des Risikos, daher gilt: Schadensausmaß des Risikos = Risikostufe / Eintrittswahrscheinlichkeit. In unserem Fall: Schadensausmaß des Risikos = Risikostufe / Eintrittswahrscheinlichkeit = 1.000 € / 50 % = 1.000 € / 0,5 = 2.000 €. Daher\n\na) FALSCH\n\nb) KORREKT\n\nc) FALSCH – FALSCH"
 },
 {
  "id": "D-35",
  "set": "D",
  "num": 35,
  "lo": "FL-5.2.2",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Optionen stellen Produktrisiken dar?",
  "images": [],
  "options": [
   "Umfangserweiterung",
   "Schlechte Architektur",
   "Kostensenkung",
   "Schlechte Werkzeugunterstützung",
   "Antwortzeiten zu lang"
  ],
  "correct": [
   1,
   4
  ],
  "nSelect": 2,
  "merksatz": "PROJEKTrisiko bedroht das Projekt (Termin, Budget, Personal, Werkzeuge). PRODUKTrisiko bedroht die Produktqualität (Fehlfunktion, Performanz, Sicherheit).",
  "explanation": "a) FALSCH – Umfangserweiterung ist ein Projektrisiko, das sich auf technische oder organisatorische Probleme bezieht und nicht direkt auf eine Eigenschaft des Produkts (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.2, 2. Absatz, 3. Aufzählungspunkt).\n\nb) KORREKT – Schlechte Architektur ist ein Produktrisiko, da sie sich direkt auf die interne Struktur und Qualität des Produkts bezieht, was die Funktionalität, Wartbarkeit und Zuverlässigkeit des Produkts beeinflussen kann (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.2, 4. Absatz).\n\nc) FALSCH – Kostensenkung ist ein Projektrisiko, das mit finanziellen oder organisatorischen Aspekten eines Projekts verbunden ist und nicht direkt mit einer Produkteigenschaft (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.2, 2. Absatz, 1. Aufzählungspunkt).\n\nd) FALSCH – Schlechte Werkzeugunterstützung ist ein Projektrisiko, da es technische Aspekte betrifft, die sich auf den Entwicklungs- oder Testprozess auswirken können, aber nicht direkt auf das Produkt (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.2, 2. Absatz, 3. Aufzählungspunkt).\n\ne) KORREKT – Zu lange Antwortzeiten sind ein Produktrisiko, da sie sich auf die Leistungsfähigkeit und Gebrauchstauglichkeit des Produkts auswirken, die wichtige Produkteigenschaften darstellen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.2.2, 4. Absatz)."
 },
 {
  "id": "D-36",
  "set": "D",
  "num": 36,
  "lo": "FL-5.3.2",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welcher der folgenden Zwecke gehört NICHT zu den gültigen Zielen eines Testberichts?",
  "images": [],
  "options": [
   "Verfolgung des Testfortschritts und Identifizierung von Bereichen, die weitere Aufmerksamkeit erfordern.",
   "Bereitstellung von Informationen über die durchgeführten Tests, deren Ergebnisse und gefundene Probleme oder Fehlerzustände",
   "Bereitstellung detaillierter Informationen zu jedem einzelnen Fehlerzustand, einschließlich der Schritte zur Reproduktion",
   "Bereitstellung von Informationen über die für den nächsten Zeitraum geplanten Tests"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Testfortschrittsbericht: LAUFEND, ans Team, steuert. Testabschlussbericht: am ENDE, an Stakeholder, bilanziert. Sprache an Zielgruppe anpassen!",
  "explanation": "a) FALSCH – Testberichte unterstützen die laufende Kontrolle des Testprozesses, indem sie Informationen über den Fortschritt bereitstellen und Bereiche identifizieren, die zusätzliche Aufmerksamkeit erfordern. Dies ist ein gültiger Zweck eines Testberichts.\n\nb) FALSCH – Ein zentraler Zweck eines Testberichts ist die Zusammenfassung der durchgeführten Tests, deren Ergebnisse sowie gefundene Probleme oder Fehlerzustände.\n\nc) KORREKT – Dies ist der Zweck eines Fehlerberichts, nicht eines Testberichts. Testberichte konzentrieren sich auf den Gesamtstatus und die Ergebnisse des Testens, nicht auf die detaillierte Beschreibung einzelner Fehler (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.2, 1. Absatz und Abschnitt 5.5).\n\nd) FALSCH – Testberichte umfassen oft Informationen über geplante Tests, um Transparenz über die zukünftigen Schritte im Testprozess zu gewährleisten. Dies ist ein gültiger Zweck eines Testberichts."
 },
 {
  "id": "D-37",
  "set": "D",
  "num": 37,
  "lo": "FL-5.4.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Der Benutzer meldete einen Softwarefehler. Ein Ingenieur aus dem Support-Team fragte den Benutzer nach der Softwareversionsnummer, in der der Fehler beobachtet wurde. Basierend auf der Versionsnummer stellte das Team alle Dateien des entsprechenden Release zusammen. Ein Entwickler konnte anschließend eine Analyse durchführen, den Fehlerzustand identifizieren und beheben. Welche der folgenden Optionen ermöglichte dem Team diese Vorgehensweise?",
  "images": [],
  "options": [
   "Risikomanagement",
   "Testüberwachung und Teststeuerung",
   "Whole-Team-Ansatz",
   "Konfigurationsmanagement"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde.",
  "explanation": "a) FALSCH – Das Risikomanagement umfasst Risikoanalyse und Risikokontrolle, die sich mit der Identifizierung und Steuerung von Risiken befassen. Es unterstützt nicht die Verwaltung von Konfigurationselementen oder die Zusammenstellung von Dateien eines Release.\n\nb) FALSCH – Die Testüberwachung bezieht sich auf die Sammlung von Informationen über den Testprozess, während die Teststeuerung die Nutzung dieser Informationen zur Anleitung und für Korrekturmaßnahmen beinhaltet. Keine dieser Aktivitäten umfasst die Verwaltung von Konfigurationselementen oder die Nachverfolgung von Softwareversionen.\n\nc) FALSCH – Der Whole-Team-Ansatz konzentriert sich auf die Zusammenarbeit und das gemeinsame Verständnis innerhalb eines Teams, nicht jedoch auf die Verwaltung von Konfigurationselementen oder die Rückverfolgbarkeit von Releases.\n\nd) KORREKT – Konfigurationsmanagement ist die Disziplin zur Identifikation, Kontrolle und Nachverfolgung von Arbeitsergebnissen. Es legt Aufzeichnungen über geänderte Konfigurationselemente an, wenn eine neue Basislinie erstellt wird. Mit Hilfe des Konfigurationsmanagements ist es möglich, zu einer vorherigen Basislinie zurückzukehren, um frühere Testergebnisse zu reproduzieren (siehe CTFL-Lehrplan V4.0, Abschnitt 5.4, 3. Absatz)."
 },
 {
  "id": "D-38",
  "set": "D",
  "num": 38,
  "lo": "FL-5.5.1",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Betrachten Sie den folgenden Fehlerbericht für ein Buchausleihsystem. Fehler-ID: 001 Titel: Rückgabe eines Buches wird nicht registriert. Schweregrad: Hoch Priorität: nicht angegeben Umgebung: Windows 11, Google Chrome Beschreibung: Beim Versuch, ein Buch mit der Funktion „Buch zurückgeben“ zurückzugeben, registriert das System die Rückgabe nich t. D as Buch bleibt weiterhin dem Benutzer zugewiesen. Schritte zur Reproduktion: Melden Sie sich als Benutzer mit einem ausgeliehen Buch im Buchausleihsystem an. Klicken Sie auf die Schaltfläche „Buch zurückgeben“ für das ausgeliehene Buch. Das System registriert die Rückgabe nicht und das Buch wird weiterhin als ausgeliehen angezeigt. Erwartetes Ergebnis: Das Buch sollte als zurückgegeben registriert und dem Benutzer nicht mehr zugewiesen sein. Tatsächliches Ergebnis: Das Buch bleibt dem Benutzer zugewiesen. Anhänge: [leere Liste] Welche der folgenden Optionen hilft dem Entwickler AM EHESTEN, den Fehler schnell zu reproduzieren?",
  "images": [
   "images/D-38.png"
  ],
  "options": [
   "Hinzufügen spezifischer Informationen zu den betroffenen Benutzern und Büchern im Abschnitt „Beschreibung“.",
   "Ergänzung des fehlenden Wertes im Feld „Priorität“.",
   "Hinzufügen von Speicherabzügen und Datenbankschnappschüssen im Abschnitt „Anhänge“ nach jedem beschriebenen Schritt.",
   "Wiederholung desselben Testfalls in verschiedenen Umgebungen und Erstellung separater Fehlerberichte für jede Umgebung."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung.",
  "explanation": "a) KORREKT – Das Hinzufügen solcher Informationen, wie spezifische Benutzer- und Buchdaten, ermöglicht es dem Entwickler, die gleichen Eingabedaten zu verwenden, wodurch die Wahrscheinlichkeit steigt, dass der Fehlerzustand schnell reproduziert wird. Dies beschleunigt den Fehlerbehebungsprozess erheblich (siehe CTFL-Lehrplan V4.0, Abschnitt 5.5, 3. Absatz).\n\nb) FALSCH – Das Hinzufügen eines Wertes im Feld „Priorität“ ist wichtig für die Organisation und Planung der Fehlerbehebung, hat jedoch keinen direkten Einfluss auf die Reproduzierbarkeit des Fehlers.\n\nc) FALSCH – Solche Informationen können zwar in spezifischen Fällen nützlich sein, doch das übermäßige Hinzufügen solcher Anhänge macht den Bericht unübersichtlich und erschwert die schnelle Analyse. Die Zeit, die benötigt wird, um diese Daten zu sichten, verlängert den Reparaturprozess.\n\nd) FALSCH – Diese Maßnahme hilft nicht bei der Reproduktion des Fehlers in der angegebenen Umgebung, sondern führt zu einer unnötigen Vervielfachung von Berichten und könnte den Fokus von der relevanten Umgebung ablenken."
 },
 {
  "id": "D-39",
  "set": "D",
  "num": 39,
  "lo": "FL-6.1.1",
  "k": "K2",
  "category": "Testwerkzeuge",
  "question": "Werkzeuge aus welche n Testwerkzeugkategorien erleichtern höchstwahrscheinlich die Testausführung?",
  "images": [],
  "options": [
   "Kooperationswerkzeuge",
   "DevOps-Werkzeuge",
   "Managementwerkzeuge",
   "Nicht-funktionale Testwerkzeuge",
   "Testentwurfs- und Implementierungswerkzeuge"
  ],
  "correct": [
   1,
   3
  ],
  "nSelect": 2,
  "merksatz": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline).",
  "explanation": "Unter Berücksichtigung jeder der aufgeführten Werkzeugkategorien\n\na) FALSCH – Kooperationswerkzeuge unterstützen die Kommunikation und Zusammenarbeit innerhalb eines Teams, jedoch nicht direkt die Testausführung.\n\nb) KORREKT – DevOps-Werkzeuge unterstützen die Lieferpipeline, einschließlich Continuous Integration/Continuous Delivery (CI/CD), die automatische Builds und automatisierte Tests umfasst. Dadurch erleichtern sie die Testausführung erheblich (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 6. Aufzählungspunkt).\n\nc) FALSCH – Managementwerkzeuge helfen bei der Verwaltung von Anforderungen, Testfällen, Defekten und Konfigurationen, haben jedoch keinen direkten Einfluss auf die Erleichterung der Testausführung.\n\nd) KORREKT – Werkzeuge für nicht-funktionale Tests ermöglichen das Testen von Aspekten wie Performanz, Last und Stress, die manuell schwer durchzuführen sind. Diese Werkzeuge erleichtern die dynamische Testausführung in nicht-funktionalen Bereichen (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 5. Aufzählungspunkt).\n\ne) FALSCH – Testentwurfs- und Implementierungswerkzeuge unterstützen die Erstellung von Testfällen, Testdaten und Testprozeduren, jedoch nicht die direkte Testausführung."
 },
 {
  "id": "D-40",
  "set": "D",
  "num": 40,
  "lo": "FL-6.2.1",
  "k": "K1",
  "category": "Testwerkzeuge",
  "question": "Welche der folgenden Optionen ist höchstwahrscheinlich ein Risiko der Testautomatisierung?",
  "images": [],
  "options": [
   "Die Entdeckung zusätzlicher schwerwiegender Fehler.",
   "Bereitstellung von Maßnahmen, die für Menschen zu kompliziert sind, um sie abzuleiten.",
   "Inkompatibilität mit der Entwicklungsplattform",
   "Deutlich reduzierte Testausführungszeiten"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit.",
  "explanation": "a) FALSCH – Dies wäre ein Vorteil der Testautomatisierung, da automatisierte Tests dabei helfen können, schwerwiegende Fehler schneller und präziser zu identifizieren.\n\nb) FALSCH – Dies wird ebenfalls als Vorteil der Testautomatisierung betrachtet, da solche Maßnahmen durch automatisierte Tests ermöglicht werden, was mit manuellen Tests nicht erreichbar wäre.\n\nc) KORREKT – Inkompatibilität mit der Entwicklungsplattform ist ein typisches Risiko der Testautomatisierung, da sie die Integration, Durchführung und den Datenaustausch zwischen Testautomatisierung und Testobjekt erschwert oder unmöglich macht (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 3. Absatz, 7. Aufzählungspunkt).\n\nd) FALSCH – Dies ist ein Vorteil der Testautomatisierung, da automatisierte Tests oft viel schneller durchgeführt werden können als manuelle Tests. Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet) Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet)"
 },
 {
  "id": "E-1",
  "set": "E",
  "num": 1,
  "lo": "FL-1.1.1",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt ein typisches Testziel?",
  "images": [],
  "options": [
   "Der Test beginnt kurz vor der Freigabe des Testobjekts, um Fehlerzustände zu finden, die eine Abnahme verhindern.",
   "Es erfolgt eine Validierung, dass das Testobjekt so funktioniert, wie es von den verschiedenen Stakeholdern erwartet wird.",
   "Es lässt sich nachweisen, dass alle Fehlerzustände identifiziert wurden.",
   "Es lässt sich nachweisen, dass die verbleibenden Fehlerzustände keine negativen Auswirkungen haben werden."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testziele: Fehler finden · Risiko senken · Vertrauen aufbauen · informieren. NIE: Fehlerfreiheit beweisen.",
  "explanation": "a) FALSCH – Diese Aussage beschreibt ein Testziel, das sich auf die Identifizierung von Fehlerzuständen kurz vor der Freigabe konzentriert. Laut CTFL-Lehrplan V4.0 ist ein Ziel des Testens, Fehlerzustände zu finden und zu beheben, bevor das System in Produktion geht. Allerdings ist es nicht typisch, dass Tests erst kurz vor der Freigabe beginnen; Tests sollten während des gesamten Entwicklungsprozesses durchgeführt werden, um frühzeitig Fehler zu finden und zu beheben (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.1 und Abschnitt 1.3).\n\nb) KORREKT – Dies ist eines der typischen Ziele des Testens (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.1, 9. Aufzählungspunkt). Dieses Testziel zielt darauf ab, sicherzustellen, dass das Testobjekt die Anforderungen und Erwartungen der verschiedenen Interessengruppen (Stakeholder) erfüllt. Es geht darum, die Funktionalität, Gebrauchstauglichkeit (Interaktionsfähigkeit, Usability) und andere Aspekte des Testobjekts zu überprüfen, um sicherzustellen, dass es den beabsichtigten Zweck erfüllt.\n\nc) FALSCH – Steht im Widerspruch zum 2. Grundsatz des Testens “Vollständiges Testen ist unmöglich” (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3) und der daraus folgenden Ableitung, dass man nicht beweisen kann, alle Fehlerzustände gefunden zu haben. Somit ist dies kein typisches Testziel (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.1).\n\nd) FALSCH – Um beurteilen zu können, ob ein Fehlerzustand eine Fehlerwirkung verursacht oder nicht, muss der Fehlerzustand bekannt sein. Der Nachweis, dass die verbleibenden Fehlerzustände keine Fehlerwirkungen verursachen, bedeutet implizit, dass alle Fehlerzustände gefunden wurden. Dies widerspricht (analog zu Option c)) dem 2. Grundsatz des Testens (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3). Somit ist dies kein typisches Testziel (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.1)."
 },
 {
  "id": "E-2",
  "set": "E",
  "num": 2,
  "lo": "FL-1.1.2",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt den Unterschied zwischen Testen und Debugging am BESTEN?",
  "images": [],
  "options": [
   "Testen identifiziert die Ursache von Fehlerzuständen. Debugging analysiert die Fehlerzustände und schlägt Präventionsmaßnahmen vor.",
   "Dynamisches Testen zeigt Fehlerwirkungen auf, die durch Fehlerzustände verursacht werden. Debugging analysiert und behebt den zugehörigen Fehlerzustand.",
   "Testen beseitigt Fehlerwirkungen; während Debugging Fehlerzustände beseitigt, die Fehlerwirkungen verursachen.",
   "Dynamisches Testen verhindert die Ursache von Fehlerwirkungen. Debugging beseitigt die Fehlerwirkungen."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testen findet die Fehlerwirkung – Debugging findet und beseitigt die Ursache. (Tester finden, Entwickler flicken.)",
  "explanation": "a) FALSCH – Beim Testen werden nicht die Ursachen von Fehlerzuständen identifiziert, sondern Fehlerwirkungen (dynamischer Test) oder Fehlerzustände (statischer Test). Beim Debugging werden die Ursachen von Fehlerwirkungen gefunden (Fehlerzustände) (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.2, 1. und 2. Absatz). Präventionsmaßnahmen sind weder Bestandteil des Testens noch des Debuggings.\n\nb) KORREKT – Dynamisches Testen zeigt Fehlerwirkungen auf, die durch Fehlerzustände verursacht werden. Durch Debugging können die Ursachen der Fehlerwirkungen analysiert und die Fehlerzustände beseitigt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.2).\n\nc) FALSCH – Der erste Teil des Satzes ist falsch, da Fehlerzustände und daraus resultierende Fehlerwirkungen nicht durch Testen, sondern nur durch Debugging beseitigt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.2).\n\nd) FALSCH – Durch dynamisches Testen können die Ursachen von Fehlerwirkungen (d. h. Fehlerzustände) nicht verhindert werden, sondern nur das Vorhandensein von Fehlerzuständen, die Fehlerwirkungen hervorrufen, nachgewiesen werden (siehe CTFL- Lehrplan V4.0, Abschnitt 1.1.2 sowie Abschnitt 1.3, 1. Grundsatz)."
 },
 {
  "id": "E-3",
  "set": "E",
  "num": 3,
  "lo": "FL-1.3.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Ein Product Owner sagt, dass Ihre Rolle als Tester in einem agilen Team darin besteht, alle Fehlerzustände vor dem Ende jeder Iteration aufzudecken. Welche der folgenden Optionen ist ein Grundsatz, das als Antwort auf diese (falsche) Aussage verwendet werden könnte?",
  "images": [],
  "options": [
   "Häufung von Fehlerzuständen.",
   "Testen zeigt die Anwesenheit von Fehlerzuständen.",
   "Trugschluss: “Keine Fehler” bedeutet ein brauchbares System.",
   "Analyse der Grundursache."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar.",
  "explanation": "a) FALSCH – Die Fehlerhäufung hat damit zu tun, wo Fehlerzustände (Defekte) am wahrscheinlichsten zu finden sind, nicht, ob alle gefunden werden können (siehe CTFL- Lehrplan V4.0, Abschnitt 1.3, 4. Grundsatz).\n\nb) KORREKT – Testen kann das Vorhandensein von Fehlern zeigen, aber nicht deren Abwesenheit beweisen, was es unmöglich macht, zu wissen, ob Sie alle Bugs erwischt haben. Außerdem macht es die Unmöglichkeit des vollständigen Testens für Sie unmöglich, alle Fehlerzustände aufzudecken (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 1. Grundsatz).\n\nc) FALSCH – Dieser Grundsatz besagt, dass Sie viele Fehler finden und beseitigen können, aber trotzdem ein erfolgloses Softwareprodukt veröffentlichen können, was nicht das bietet, was der Product Owner von Ihnen verlangt (siehe CTFL-Lehrplan V4.0, Abschnitt 1.3, 7. Grundsatz).\n\nd) FALSCH – Die Grundursachenanalyse ist kein Grundsatz des Testens (siehe CTFL- Lehrplan V4.0, Abschnitt 1.3)."
 },
 {
  "id": "E-4",
  "set": "E",
  "num": 4,
  "lo": "FL-1.4.1",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Optionen ist ein Beispiel für eine Aufgabe, die im Rahmen de r Testrealisierung des Tes tprozesses durchgeführt werden kann?",
  "images": [],
  "options": [
   "Analysieren eines Fehlerzustands.",
   "Entwerfen von Testdaten.",
   "Einem Testobjekt eine Version zuordnen.",
   "Schreiben einer User-Story."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Testprozess: Planung → Überwachung/Steuerung → Analyse (WAS testen?) → Entwurf (WIE testen?) → Realisierung → Durchführung → Abschluss.",
  "explanation": "a) FALSCH – Das Analysieren eines Fehlerzustands ist Teil des Debuggings, nicht des Testens (siehe CTFL-Lehrplan V4.0, Abschnitt 1.1.2, 2. Absatz).\n\nb) KORREKT – Das Erstellen von Testdaten ist eine Aufgabe der Testrealisierung (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.1, 6. Absatz).\n\nc) FALSCH – Obwohl ein Tester die Version eines Testobjekts für die Ergebnisberichterstattung identifizieren muss, ist die Zuweisung der Version eines Testobjekts Teil des Konfigurationsmanagements.\n\nd) FALSCH – Das Schreiben einer User-Story ist keine Testaktivität und sollte vom Product Owner gemeinsam mit Fachbereichsvertretern und Testern durchgeführt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1, 2. Absatz)."
 },
 {
  "id": "E-5",
  "set": "E",
  "num": 5,
  "lo": "FL-1.4.2",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen ist ein Beispiel für einen technischen Faktor, der den Testprozess beeinflusst?",
  "images": [],
  "options": [
   "Die Software ist eine Webanwendung, die auf verschiedenen Browsern funktionieren muss.",
   "Die Software ist für einen Finanzdienstleister bestimmt, der strenge Sicherheitsanforderungen hat.",
   "Die Software wird mit einer agilen Methode entwickelt, die kurze Iterationen und häufige Releases erfordert.",
   "Die Software wird von einem Team getestet, das über unterschiedliche Kompetenzen und Erfahrungen verfügt."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Kein Einheitstest: Kontext (Risiko, Branche, Vorgehen, Regularien) bestimmt Umfang und Formalität des Testprozesses.",
  "explanation": "a) KORREKT – Dies ist ein Beispiel für einen technischen Faktor, der den Testprozess beeinflusst. Zu den technischen Faktoren, die den Testprozess beeinflussen, zählen die Art der Software, die Produktarchitektur und die verwendete Technologie (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 4. Aufzählungspunkt).\n\nb) FALSCH – Dies ist kein Beispiel für einen technischen Faktor, sondern für einen Unternehmensbereich, der den Testprozess beeinflusst, da die Kritikalität des Testobjekts, die identifizierten Risiken, die Marktbedürfnisse und die spezifischen gesetzlichen Vorschriften die Teststrategie, die Testverfahren, die Testdokumentation und die Berichterstattung bestimmen können (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 3. Aufzählungspunkt).\n\nc) FALSCH – Dies ist kein Beispiel für einen technischen Faktor, sondern für den Faktor Softwareentwicklungslebenszyklus, der den Testprozess beeinflusst, da die technologischen Praktiken und die Entwicklungsmethoden die Teststrategie, die Testverfahren, die Testautomatisierung und die Testdokumentation bestimmen können (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 7. Aufzählungspunkt).\n\nd) FALSCH – Dies ist kein Beispiel für einen technischen Faktor, sondern für den Faktor Teammitglieder, der den Testprozess beeinflusst, da die Kompetenz, das Wissen, der Erfahrungsstand, die Verfügbarkeit und der Schulungsbedarf die Teststrategie, die Testverfahren, die Testautomatisierung und die Testdokumentation bestimmen können (siehe CTFL-Lehrplan V4.0, Abschnitt 1.4.2, 2. Aufzählungspunkt)."
 },
 {
  "id": "E-6",
  "set": "E",
  "num": 6,
  "lo": "FL-1.4.5",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Aussagen beschreibt am BESTEN die Unterschiede zwischen der Rolle des Testmanagements und der Rolle des Testens?",
  "images": [],
  "options": [
   "Die Rolle des Testmanagements konzentriert sich hauptsächlich auf die Aktivitäten der Testanalyse, des Testentwurfs, der Testrealisierung und der Testdurchführung, während die Rolle des Testens die Gesamtverantwortung für den Testprozess, das Testteam und die Leitung der Testaktivitäten übernimmt.",
   "Die Rolle des Testmanagements und die Rolle des Testens sind identisch und können von derselben Person gleichzeitig übernommen werden.",
   "Die Rolle des Testmanagements übernimmt die Gesamtverantwortung für den Testprozess, das Testteam und die Leitung der Testaktivitäten, während die Rolle des Testens sich hauptsächlich auf die Aktivitäten der Testanalyse, des Testentwurfs, der Testrealisierung und der Testdurchführung konzentriert.",
   "Die Rolle des Testmanagements und die Rolle des Testens haben keine spezifischen Aufgaben und können je nach Kontext variieren."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Rolle des Testens: analysiert, entwirft, führt aus, meldet. Testmanagementrolle: plant, steuert, koordiniert, berichtet.",
  "explanation": "a) FALSCH – Hier sind die Rollen des Testmanagements und des Testens vertauscht.\n\nb) FALSCH – Die Rollen des Testmanagements und des Testens sind nicht identisch, weil sie unterschiedliche Aufgaben und Verantwortlichkeiten haben.\n\nc) KORREKT – Diese Aussage gibt in Anlehnung an den Lehrplantext die Unterschiede zwischen den Rollen des Testmanagements und des Testens wieder (siehe CTFL- Lehrplan V4.0, Abschnitt 1.4.5, 2. und 3. Absatz).\n\nd) FALSCH – Obwohl die Art und Weise, wie die Rollen ausgeübt werden, je nach Kontext variieren kann, haben sowohl das Testmanagement als auch das Testen spezifische Aufgaben und Verantwortlichkeiten."
 },
 {
  "id": "E-7",
  "set": "E",
  "num": 7,
  "lo": "FL-1.5.3",
  "k": "K2",
  "category": "Testgrundlagen",
  "question": "Während der Besprechung einer User -Story in einem agilen Projekt stellen Sie als Tester einen Widerspruch in der Interpretation eines Akzeptanzkriteriums einer User-Story zwischen dem Product Owner und dem Entwicklungsteam fest. Sie bringen diesen Widerspruch zur Sprache. Welche der folgenden Optionen beschreibt einen Vorteil der Unabhängigkeit des Testens, der in dieser Situation deutlich wird?",
  "images": [],
  "options": [
   "Tester können verschiedene Arten von Fehlerwirkungen und -zuständen erkennen.",
   "Tester können die Hauptverantwortung für die Qualität übernehmen.",
   "Die Entwickler können darauf vertrauen, dass die Tester für die gewünschte Qualität der Arbeitsergebnisse sorgen.",
   "Tester können Annahmen der Stakeholder hinterfragen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Unabhängiges Testen: + eigene Sicht, findet andere Fehler · − Isolation, Kommunikationshürden, Entwickler schieben Verantwortung ab.",
  "explanation": "a) FALSCH – Das Erkennen verschiedener Arten von Fehlerwirkungen und -zuständen ist ein Vorteil der Unabhängigkeit des Testens (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 3. Absatz), wird aber in diesem Szenario nicht genutzt. Hier geht es um den Vorteil des Hinterfragens von Annahmen und Aussagen, insbesondere aus der Sicht des Testens.\n\nb) FALSCH – Die Übernahme der Verantwortung für die Qualität durch unabhängige Tester ist kein Vorteil, sondern eher ein Nachteil, da die anderen Stakeholder ihre Verantwortung für die Qualität verlieren können (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 4. Absatz).\n\nc) FALSCH – Dies beschreibt keinen Vorteil der Unabhängigkeit des Testens, sondern einen Nachteil (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 4. Absatz, vorletzter Satz: „Die Entwickler verlieren möglicherweise das Gefühl der Verantwortung für die Qualität“).\n\nd) KORREKT – Die Annahmen der Stakeholder zu überprüfen und zu hinterfragen, ist ein Vorteil der Unabhängigkeit des Testens (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.3, 3. Absatz). Dieser Vorteil kommt in diesem Szenario zum Tragen, da der Tester die Widersprüche in den Annahmen aufzeigen kann und so eine frühzeitige Klärung erreicht sowie ggf. zukünftige Fehlhandlungen der Entwicklung vermeidet."
 },
 {
  "id": "E-8",
  "set": "E",
  "num": 8,
  "lo": "FL-1.5.2",
  "k": "K1",
  "category": "Testgrundlagen",
  "question": "Welche der folgenden Optionen beschreibt am BESTEN die Verantwortlichkeiten, die sich aus dem agilen Whole -Team-Ansatz ergeben?",
  "images": [],
  "options": [
   "Tester sind für die Entwicklung von Unittests verantwortlich und übergeben diese an die Entwickler zur Testdurchführung.",
   "Fachbereichsvertreter haben die Aufgabe, die Werkzeuge auszuwählen, die das Entwicklungsteam zu verwenden hat.",
   "Von den Testern wird erwartet, dass sie gemeinsam mit den Fachbereichsvertretern und dem Entwicklungsteam die Testfälle erstellen.",
   "Von den Entwicklern wird erwartet, dass sie nicht-funktionale Anforderungen (Performance, Usability, Sicherheit etc.) testen."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen.",
  "explanation": "a) FALSCH – Abhängig von den Fähigkeiten eines Teammitglieds kann jedes Mitglied diese Aufgabe übernehmen. Die Aufgabe ist nicht an eine bestimmte Rolle gebunden (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz). Daher ist diese Aussage nicht auf den Whole-Team-Ansatz anwendbar.\n\nb) FALSCH – Der Whole-Team-Ansatz hat keinen hierarchischen Ansatz, sondern löst Aufgaben auf der Grundlage von Kompetenzen und Fähigkeiten, die jede(r) Einzelne einbringt (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz). Das Team kann daher auch über Werkzeuge entscheiden, nicht einzelne Rollen.\n\nc) KORREKT – Tester unterstützen die Fachbereichsvertreter bei der Definition geeigneter Abnahmetestfälle (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 3. Absatz). Der agile Whole-Team-Ansatz betont die Zusammenarbeit und Verantwortung des gesamten Teams, einschließlich Entwicklern, Testern und Fachbereichsvertretern.\n\nd) FALSCH – Abhängig von den Fähigkeiten der Teammitglieder können diese Aufgaben von jedem Teammitglied übernommen werden. Die Aufgaben sind nicht an bestimmte Rollen gebunden (siehe CTFL-Lehrplan V4.0, Abschnitt 1.5.2, 2. Absatz). Daher ist diese Aussage nicht auf den Whole-Team-Ansatz anwendbar."
 },
 {
  "id": "E-9",
  "set": "E",
  "num": 9,
  "lo": "FL-2.1.2",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt ein bewährtes Verfahren für das Testen in allen Softwareentwicklungslebenszyklus-(SDLC-) Modellen?",
  "images": [],
  "options": [
   "Testaktivitäten für eine Teststufe beginnen bereits während der entsprechenden Entwicklungsphase.",
   "Eine Teststufe im Softwareentwicklungslebenszyklus-Modell beginnt, wenn die vorhergehende Teststufe abgeschlossen ist.",
   "Das Testen wird als separate Phase betrachtet. Sie beginnt, wenn die Entwicklung abgeschlossen ist.",
   "Das Testen wird der Entwicklung als Inkrement hinzugefügt."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen.",
  "explanation": "a) KORREKT – Das Testen sollte während der Entwicklung beginnen, z. B. Testanalyse und Testentwurf, um Fehlerzustände frühzeitig zu erkennen und zu beheben (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.2, 3. Aufzählungspunkt).\n\nb) FALSCH – Dies beschreibt eine Vorgehensweise, die nur für ein sequenzielles Modell gilt und selbst dort nicht unbedingt eine gute Praktik ist (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1).\n\nc) FALSCH – Dies beschreibt die Vorgehensweise im sequenziellen Wasserfallmodell und ist daher keine gute Praktik bzw. kein bewährtes Verfahren für alle Modelle (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1).\n\nd) FALSCH – Das Testen selbst ist kein Inkrement/zusätzlicher Schritt in der Entwicklung, aber während der Entwicklung gibt es Inkremente, die getestet werden müssen (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1)."
 },
 {
  "id": "E-10",
  "set": "E",
  "num": 10,
  "lo": "FL-2.1.3",
  "k": "K1",
  "category": "Testen im SDLC",
  "question": "Welcher der folgenden beschriebenen Entwicklungsansätze definiert Testen NICHT als Treiber der Softwareentwicklung?",
  "images": [],
  "options": [
   "Zuerst werden Tests erstellt. Dann wird der Code geschrieben.",
   "Die Testfälle steuern die Codierung.",
   "Das gewünschte Verhalten einer Anwendung wird durch Testfälle definiert.",
   "Tests werden aus Akzeptanzkriterien (Abnahmekriterien) abgeleitet und teilweise automatisiert."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien).",
  "explanation": "a) FALSCH – Dies ist ein korrekter Ansatz für eine testgetriebene Entwicklung (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.3, 1. Absatz).\n\nb) FALSCH – Dies ist ein korrekter Ansatz für eine testgetriebene Entwicklung, hier das Beispiel TDD (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.3, 2. Absatz, 1. Aufzählungspunkt).\n\nc) FALSCH – Dies ist ein korrekter Ansatz für eine testgetriebene Entwicklung, hier das Beispiel BDD (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.3, 4. Absatz, 1. Aufzählungspunkt).\n\nd) KORREKT – Dieser Ansatz definiert keine testgetriebene Entwicklung, da in dieser Aussage die Testfälle zwar nach den Akzeptanzkriterien (Abnahmekriterien) entworfen und automatisiert werden, aber nicht unbedingt vor der Entwicklung (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.3, 1. Absatz, 2. Satz). Die Tests wirken sich nicht unbedingt explizit steuernd auf die Entwicklung aus, somit ist dies kein effektiver Ansatz."
 },
 {
  "id": "E-11",
  "set": "E",
  "num": 11,
  "lo": "FL-2.1.5",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Aussagen beschreibt im Softwareentwicklungslebenszyklus (SDLC) am BESTEN Shift -Left im Testen?",
  "images": [],
  "options": [
   "Testaktivitäten beginnen so früh wie möglich im SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
   "Testaktivitäten beginnen so spät wie möglich im SDLC und werden nach den Entwicklungsaktivitäten durchgeführt.",
   "Testaktivitäten beginnen in der Mitte des SDLC und werden parallel zu den Entwicklungsaktivitäten durchgeführt.",
   "Testaktivitäten werden über mehrere Phasen des SDLC verteilt und in jeder Phase entsprechend dem Reifegrad des Produkts durchgeführt."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Shift-Left = Testen nach vorn verlagern: Anforderungs-Reviews, frühe Testanalyse, Unit-Tests beim Coden, CI. Früher = billiger.",
  "explanation": "a) KORREKT – Shift-Left setzt das Prinzip des frühen Testens um, bei dem die Testaktivitäten so früh wie möglich im Softwareentwicklungslebenszyklus beginnen und parallel zu den Entwicklungsaktivitäten durchgeführt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.5, 1. Absatz).\n\nb) FALSCH – Da Shift-Left das Prinzip des frühen Testens umsetzt, beschreibt diese Option eher das Gegenteil von Shift-Left und ist daher keine korrekte Aussage (siehe CTFL- Lehrplan V4.0, Abschnitt 2.1.5).\n\nc) FALSCH – Shift-Left setzt das Prinzip des frühen Testens um, bei dem die Testaktivitäten so früh wie möglich im Softwareentwicklungslebenszyklus beginnen. Dies legt keinen Zeitpunkt fest, so dass die ‘Mitte des Softwareentwicklungslebenszyklus’ keine korrekte Aussage für Shift-Left ist (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.5).\n\nd) FALSCH – Da Shift-Left nicht vorschreibt, dass die Testaktivitäten in mehrere Phasen des Softwareentwicklungslebenszyklus aufgeteilt und in jeder Phase entsprechend dem Reifegrad des Produkts durchgeführt werden, ist diese Aussage in Bezug auf Shift-Left nicht korrekt (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.5)."
 },
 {
  "id": "E-12",
  "set": "E",
  "num": 12,
  "lo": "FL-2.1.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Sie sind als Tester in einem Projekt eingesetzt, das nach dem iterativ - inkrementellen Entwicklungsmodell vorgeht. Welche der folgenden Aussagen sollten Sie in dieser Situation unbedingt berücksichtigen, um die Testaktivitäten optimal zu integrieren?",
  "images": [],
  "options": [
   "Sie planen den Test als einmalige Aktivität, wenn alle Inkremente des Produkts umgesetzt wurden.",
   "Statische Tests sollten ausschließlich auf Komponententestebene stattfinden, um möglichst viele codenahe Fehlerzustände frühzeitig zu finden.",
   "Da schnelle Rückmeldung über die Qualität eines Inkrements wichtig ist, sollten die Tester die Regressionstests idealerweise manuell ausführen.",
   "Durch die Lieferung neuer Inkremente über verschiedene Iterationen hinweg ist es wichtig, umfangreiche Regressionstests aufzubauen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "SDLC bestimmt Testen: sequenziell = Teststufen spät und nacheinander · iterativ/agil = jede Iteration testen + automatisierte Regressionstests.",
  "explanation": "a) FALSCH – Diese Vorgehensweise beschreibt eine (ebenfalls schlechte) Auslegung des Wasserfallmodells, nicht eine iterativ-inkrementelle Vorgehensweise.\n\nb) FALSCH – Statische Tests sollten grundsätzlich in jeder Iteration auf allen Teststufen vorgesehen werden, nicht nur im Komponententest (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 3. Absatz: „Dies impliziert, dass in jeder Iteration sowohl statische als auch dynamische Tests auf allen Teststufen durchgeführt werden können.“).\n\nc) FALSCH – Es ist zwar korrekt, dass schnelle Rückmeldung für jedes Inkrement nötig ist, allerdings spricht das eher dafür, dass die Regressionstests automatisiert werden und nicht manuell durchgeführt werden.\n\nd) KORREKT – In jeder Iteration wird ein Stück neue Funktionalität geliefert, d. h., dass die Menge der bestehenden und bereits abgenommenen Funktionalität ebenfalls von Iteration zu Iteration wächst. Dies macht umfangreiche Regressionstests notwendig, um das Regressionsrisiko abzumildern (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1.1, 3. Absatz, letzter Satz: „Die häufige Lieferung von Inkrementen erfordert eine schnelle Rückmeldung und umfangreiche Regressionstests.“)."
 },
 {
  "id": "E-13",
  "set": "E",
  "num": 13,
  "lo": "FL-2.2.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Ein Testfall hat folgende Eigenschaften: • Er basiert auf Schnittstellenspezifikationen. • Der Schwerpunkt liegt auf dem Finden von Fehlerwirkungen in der Interaktion zwischen Komponenten. • Es werden sowohl funktionale als auch strukturbasierte Test s angewendet. In welcher der folgenden Teststufen wird dieser Testfall am WAHRSCHEINLICHSTEN ausgeführt?",
  "images": [],
  "options": [
   "Komponentenintegrationstest",
   "Abnahmetest",
   "Systemtest",
   "Komponententest"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Teststufen: Komponente → Komponentenintegration → System → Systemintegration → Abnahme. Jede Stufe: eigene Testbasis, eigene Ziele.",
  "explanation": "a) KORREKT – Der Komponentenintegrationstest konzentriert sich auf das Testen der Schnittstellen und des Zusammenspiels, d. h. der Interaktion zwischen Komponenten (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 2. Aufzählungspunkt). Basis ist die Schnittstellenspezifikation, wobei neben dem funktionalen Test auch strukturbasierte Tests (White-Box-Tests) sinnvoll sind.\n\nb) FALSCH – Der Abnahmetest konzentriert sich auf die Validierung des Systems und seiner Einsatzfähigkeit und somit auf die Funktion und Leistungsfähigkeit (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 5. Aufzählungspunkt). Basis sind nicht die Schnittstellenspezifikationen, die Testziele sind nicht auf die interne Kommunikation ausgerichtet.\n\nc) FALSCH – Der Systemtest konzentriert sich auf das Gesamtverhalten und die Leistungsfähigkeit durch funktionale und nicht-funktionale Tests (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 3. Aufzählungspunkt). Basis sind nicht die Schnittstellenspezifikationen und die Testziele sind nicht auf die interne Kommunikation ausgerichtet.\n\nd) FALSCH – Der Komponententest konzentriert sich auf das Testen isolierter Komponenten (siehe CTFL-Lehrplan V4.0, Abschnitt 2.2.1, 1. Aufzählungspunkt). Basis ist nicht allein die Schnittstellenspezifikation, die Testarten sind zwar spezifikationsorientiert und strukturbasiert, aber die Testziele sind nicht auf die Kommunikation über Schnittstellen hin ausgerichtet."
 },
 {
  "id": "E-14",
  "set": "E",
  "num": 14,
  "lo": "FL-2.3.1",
  "k": "K2",
  "category": "Testen im SDLC",
  "question": "Welche der folgenden Optionen ist KEIN Auslöser für Wartung und Wartungstest?",
  "images": [],
  "options": [
   "Außerbetriebnahme",
   "Korrigierende Änderungen oder Hotfixes",
   "Upgrades oder Migrationen der Betriebsumgebung",
   "Implementierung neuer Funktionen"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Wartungstest-Auslöser: Modifikation (Fix, Update) · Migration (Plattform-/Datenumzug) · Außerbetriebnahme (Archivierung, Datenmigration).",
  "explanation": "a) FALSCH – Außerbetriebnahme ist ein Auslöser für Wartung und Wartungstest (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz, 3. Aufzählungspunkt).\n\nb) FALSCH – Korrigierende Änderungen oder Hotfixes sind ebenfalls Auslöser für Wartung und Wartungstest, da sie Fehlerbehebungen oder dringende Änderungen am System beinhalten (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3, 3. Absatz, 1. Aufzählungspunkt).\n\nc) FALSCH – Upgrades oder Migrationen der Betriebsumgebung können auch Wartung und Wartungstests auslösen, da sie Tests der neuen Umgebung sowie der geänderten Software erfordern können (siehe CTFL-Lehrplan V4.0, Abschnitt 2.3.1, 3. Absatz, 2. Aufzählungspunkt).\n\nd) KORREKT – Die Implementierung neuer Funktionen ist kein Auslöser für Wartung und Wartungstest, da sie in der Regel in Entwicklungsaktivitäten und nicht in Wartungsaktivitäten durchgeführt wird (siehe CTFL-Lehrplan V4.0, Abschnitt 2.1)."
 },
 {
  "id": "E-15",
  "set": "E",
  "num": 15,
  "lo": "FL-3.1.2",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen zum statischen Test ist am EHESTEN zutreffend?",
  "images": [],
  "options": [
   "Der statische Test ist eine kostengünstige Möglichkeit, Fehlerzustände zu erkennen.",
   "Der statische Test macht den dynamischen Test theoretisch überflüssig.",
   "Der statische Test ermöglicht, Laufzeitprobleme frühzeitig im Lebenszyklus zu erkennen.",
   "Bei der Prüfung sicherheitskritischer Systeme hat der statische Test einen geringen Stellenwert, da der dynamische Test den Fehlerzustand besser findet."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Statisches Testen: findet Fehler FRÜH und BILLIG, direkt an der Ursache – bevor Code überhaupt läuft.",
  "explanation": "a) KORREKT – Laut CTFL-Lehrplan V4.0, Abschnitt 3.1.2, 1. Satz kann der statische Test, Fehlerzustände in den frühesten Phasen des SDLC aufdecken und erfüllt damit den Grundsatz des frühen Testens. Früh entdeckte Fehlerzustände sind oft viel kostengünstiger zu beheben als Fehlerzustände, die später im Lebenszyklus erkannt werden.\n\nb) FALSCH – Dynamische Tests haben ihre Berechtigung, da sie andere Fehlerarten finden als statische Tests (siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2).\n\nc) FALSCH – Dies geschieht beim dynamischen Testen (siehe Glossar).\n\nd) FALSCH – Statischer Test ist wichtig für sicherheitskritische Computersysteme ( siehe CTFL-Lehrplan V4.0, Abschnitt 3.1.2)."
 },
 {
  "id": "E-16",
  "set": "E",
  "num": 16,
  "lo": "FL-3.2.1",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Welche der folgenden Aussagen beschreibt KEINEN Vorteil von frühem und häufigem Stakeholder-Feedback?",
  "images": [],
  "options": [
   "Häufiges Feedback von Stakeholdern hilft, dass Änderungen der Anforderungen früher verstanden und umgesetzt werden.",
   "Häufiges Feedback von Stakeholdern hilft dem Entwicklungsteam, besser zu verstehen, was sie entwickeln.",
   "Häufiges Feedback von Stakeholdern hilft dem Entwicklungsteam, sich auf die Features zu konzentrieren, die den größten Nutzen bringen.",
   "Häufiges Feedback von Stakeholdern kann zu Missverständnissen über Anforderungen führen."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Frühes, häufiges Stakeholder-Feedback: Missverständnisse früh erkannt = nicht am Bedarf vorbei entwickelt.",
  "explanation": "a) FALSCH – Dies ist ein Vorteil von frühem und häufigem Stakeholder-Feedback (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 2. Absatz: „(…) Änderungen an den Anforderungen verstanden und früher umgesetzt werden.“).\n\nb) FALSCH – Dies ist ein Vorteil von frühem und häufigem Stakeholder-Feedback (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 2. Absatz: „Dies hilft dem Entwicklungsteam dabei, besser zu verstehen, was es entwickelt.“).\n\nc) FALSCH – Dies ist ein Vorteil von frühem und häufigem Stakeholder-Feedback (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 2. Absatz: „Es ermöglicht ihm, sich auf die Features zu konzentrieren, die für die Stakeholder den größten Nutzen bringen“).\n\nd) KORREKT – Die Aussage ist kein Vorteil nach Lehrplan, da sie den beschriebenen Vorteil negiert (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.1, 2. Absatz: „Häufiges Feedback der Stakeholder während des SDLC kann Missverständnissen über Anforderungen vorbeugen und sicherstellen, dass Änderungen an den Anforderungen verstanden und früher umgesetzt werden.“)."
 },
 {
  "id": "E-17",
  "set": "E",
  "num": 17,
  "lo": "FL-3.2.4",
  "k": "K2",
  "category": "Statisches Testen",
  "question": "Welche der unten aufgeführten Reviewarten ist am BESTEN geeignet, wenn das Review in Übereinstimmung mit dem vollständigen allgemeinen Reviewprozess und mit dem Ziel, möglichst viel e Anomalien zu finden, durchgeführt werden soll?",
  "images": [],
  "options": [
   "Informelles Review",
   "Technisches Review",
   "Inspektion",
   "Walkthrough"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Formalitäts-Treppe: informelles Review < Walkthrough (AUTOR führt) < technisches Review (Experten) < Inspektion (formalste, mit Metriken).",
  "explanation": "a) FALSCH – Ein informelles Review verwendet keinen definierten Prozess (siehe CTFL- Lehrplan V4.0, Abschnitt 3.2.4, 3. Absatz, 1. Aufzählungspunkt).\n\nb) FALSCH – Das Hauptziel eines technischen Reviews ist die Konsensfindung und Entscheidungsfindung in Bezug auf ein technisches Problem. Ein definierter Reviewprozess und das Auffinden von Anomalien sind möglich, aber nicht ausschlaggebend für die Wahl dieses Reviewtyps (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.4, 3. Absatz, 3. Aufzählungspunkt).\n\nc) KORREKT – Die Inspektion nutzt den vollständigen allgemeinen Reviewprozess mit dem Ziel, u. a. so viele Anomalien bzw. Abweichungen wie möglich aufzudecken (siehe CTFL- Lehrplan V4.0, Abschnitt 3.2.4, 3. Absatz, 4. Aufzählungspunkt).\n\nd) FALSCH – Ein Walkthrough erfordert nicht grundsätzlich einen definierten Prozess, z. B. kann das individuelle Review entfallen. Darüber hinaus verfolgt ein Walkthrough eine Vielzahl von Zielen, zu denen auch die Aufdeckung von Anomalien gehören kann. Das Finden einer maximalen Anzahl von Anomalien steht jedoch nicht im Vordergrund (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.4, 3. Absatz, 2. Aufzählungspunkt)."
 },
 {
  "id": "E-18",
  "set": "E",
  "num": 18,
  "lo": "FL-3.2.5",
  "k": "K1",
  "category": "Statisches Testen",
  "question": "Während einer Phase intensiver Projektüberstunden wird eine umfangreiche Systemarchitekturspezifikation an verschiedene Projektteilnehmer versandt, zusammen mit weiteren Informationen und der Ankündigung eines technischen Reviews in drei Tagen. Das technische Review war ursprünglich nicht eingeplant. Es werden keine weiteren Anpassungen an den zugewiesenen Aufgaben der Projektteilnehmer vorgenommen, die während des technischen Reviews als Gutachter fungieren sollen. Welcher der folgenden Erfolgsfaktoren für Reviews fehlt allein aufgrund dieser Information?",
  "images": [],
  "options": [
   "Geeignete Art des Reviews.",
   "Ausreichend Zeit zur Vorbereitung.",
   "Die Festlegung klarer Ziele und messbarer Endekriterien.",
   "Gut geleitete Reviewsitzung."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Review-Erfolg: klare Ziele · richtige Teilnehmer · genug Vorbereitungszeit · Fehler feiern statt Autor anklagen.",
  "explanation": "a) FALSCH – Technische Reviews sind für technische Dokumente wie z. B. eine Systemarchitektur, geeignet, d. h., es wurde eine geeignete Reviewart gewählt (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.5, 2. Aufzählungspunkt).\n\nb) KORREKT – Ausreichende Vorbereitungszeit ist ein wichtiger Erfolgsfaktor für Reviews, aber die Projektteilnehmer machen bereits Überstunden und haben keine zusätzlichen Freiräume für ein „individuelles Review“, da die zugewiesenen Aufgaben nicht reduziert werden. Kurz: Es wird keine ausreichende Vorbereitungszeit eingeplant (siehe CTFL- Lehrplan V4.0, Abschnitt 3.2.5, 5. Aufzählungspunkt). Ausreichende Vorbereitungszeit ist jedoch wichtig, um sicherzustellen, dass die Gutachter die Systemarchitekturspezifikation gründlich überprüfen und qualitativ hochwertiges Feedback geben können. Ohne ausreichende Vorbereitungszeit kann die Effektivität des Reviews beeinträchtigt werden.\n\nc) FALSCH – Die Vorgabe klarer Ziele und messbarer Endekriterien ist ein richtiger Erfolgsfaktor, dessen Fehlen aber aus den Informationen im Fragenstamm nicht abgeleitet werden kann. Diese könnten in den \"weiteren Informationen\" gegeben werden (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.5, 1. Aufzählungspunkt).\n\nd) FALSCH – Eine gut geleitete Reviewsitzung kann ein Erfolgsfaktor sein, aber es gibt keinen Grund zu der Annahme, dass die Reviewsitzung aufgrund der bereitgestellten Informationen nicht gut geführt wird (siehe CTFL-Lehrplan V4.0, Abschnitt 3.2.5, 9. Aufzählungspunkt)."
 },
 {
  "id": "E-19",
  "set": "E",
  "num": 19,
  "lo": "FL-4.1.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Im Vorfeld einer Sitzung zur Iterationsplanung analysieren Sie eine User-Story und deren Akzeptanzkriterien ( Abnahmekriterien). Daraus leiten Sie entsprechende Testfälle ab, um das Prinzip des frühen Testens anzuwenden. Welches Testverfahren bzw. welchen Testansatz wenden Sie an?",
  "images": [],
  "options": [
   "White-Box-Testen",
   "Black-Box-Testen",
   "Erfahrungsbasierter Test",
   "Intuitive Testfallermittlung"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers.",
  "explanation": "a) FALSCH – White-Box-Testverfahren (auch als strukturbasierte Verfahren bekannt) basieren auf einer Analyse der internen Struktur und Verarbeitung des Testobjekts. Da die Testfälle vom Entwurf der Software abhängig sind, können sie erst nach dem Entwurf oder der Implementierung des Testobjekts erstellt werden (siehe CTFL-Lehrplan V4.0, Abschnitt 4.1, 4. Absatz).\n\nb) KORREKT – Black-Box-Testverfahren (auch spezifikationsbasierte Verfahren genannt) basieren auf einer Analyse des spezifizierten Verhaltens des Testobjekts ohne Kenntnis der internen Struktur. Das spezifizierte Verhalten ist in der User-Story und den Akzeptanzkriterien festgelegt und kann entsprechend analysiert werden (siehe CTFL- Lehrplan V4.0, Abschnitt 4.1, 3. Absatz).\n\nc) FALSCH – Erfahrungsbasierte Testverfahren nutzen das Wissen und die Erfahrung der Tester, um Testfälle zu entwerfen (siehe CTFL-Lehrplan V4.0, Abschnitt 4.1, 5. Absatz). Sie nutzen Spezifikationen nur als Rahmen und nicht als Basis für den Testentwurf (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4).\n\nd) FALSCH – Die intuitive Testfallermittlung ist ein erfahrungsbasiertes Testverfahren, das auf dem Wissen der Tester beruht (siehe auch Begründung zu Option c))."
 },
 {
  "id": "E-20",
  "set": "E",
  "num": 20,
  "lo": "FL-4.2.1",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ein Gerät zur Messung des täglichen Strahlungseinfalls für Pflanzen ermittelt einen Einstrahlungswert für Sonnenschein. Dieser ergibt sich aus der Kombination der Anzahl der Stunden, in denen eine Pflanze der Sonne ausgesetzt ist (unter 3 Stunden, 3 bis 6 Stunden, über 6 Stunden), und der durchschnittlichen Intensität des Sonnenscheins (sehr niedrig, niedrig, mittel, hoch). Die folgenden Testfälle existieren bereits: Dauer (Stunden) Intensität Einstrahlung T1 1,5 sehr niedrig 10 T2 7,0 mittel 60 T3 0,5 sehr niedrig 10 Wie viele Testfälle müssen mindestens noch erzeugt werden, um eine vollständige Überdeckung ALLER GÜLTIGEN Eingabe -Äquivalenz- klassen zu gewährleisten?",
  "images": [],
  "options": [
   "1",
   "2",
   "3",
   "4"
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!",
  "explanation": "Die folgenden Äquivalenzklassen können identifiziert werden: • Dauer: 1. Unter 3 Stunden 2. 3 – 6 Stunden 3. Über 6 Stunden • Intensität: 4. sehr niedrig 5. niedrig 6. mittel 7. hoch Die existierenden Testfälle decken die folgenden gültigen Eingabe-Äquivalenzklassen ab: T1 1,5 (1) sehr niedrig (4) T2 7,0 (3) mittel (6) T3 0,5 (1) sehr niedrig (4) Folglich sind die fehlenden gültigen Eingabe-Äquivalenzklassen (2), (5) und (7). Sie können mit zwei zusätzlichen Testfällen abgedeckt werden, da (2) sowohl mit (5) als auch mit (7) kombiniert werden kann. Folglich ist Antwort b) KORREKT."
 },
 {
  "id": "E-21",
  "set": "E",
  "num": 21,
  "lo": "FL-4.2.2",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Eine Smart-Home-App misst die durchschnittliche Temperatur im Haus während der vergangenen Woche und gibt den Bewohnern basierend auf diesem Wert Informationen zur Umweltfreundlichkeit ihres Verhaltens. Das Feedback für die verschiedenen Durchschnittstemperaturbereiche (gerundet auf die nächsten ganzen °C) soll lauten: Bis zu 10°C Eiskalt! 11°C bis 15°C Ganz schön schattig! 16°C bis 19°C Cool! 20°C bis 22°C Zu warm! Über 22°C Sauna! Welches der folgenden Testsets liefert die HÖCHSTE Überdeckung von Grenzwerten, wenn die 2-Wert-Grenzwertanalyse verwendet wird?",
  "images": [],
  "options": [
   "0°C, 11°C, 20°C, 22°C, 23°C",
   "9°C, 15°C, 19°C, 23°C, 100°C",
   "10°C, 16°C, 19°C, 22°C, 23°C",
   "14°C, 15°C, 18°C, 19°C, 21°C, 22°C"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn.",
  "explanation": "Bei den angegebenen Eingabe-Äquivalenzklassen ergibt das Zwei-Punkt-Grenzwertverfahren folgende 8 Überdeckungselemente: 10°C, 11°C, 15°C, 16°C, 19°C, 20°C, 22°C, 23°C. Die Überdeckung durch die Optionen ist folglich jeweils\n\na) FALSCH – 4 von 8 (11, 20 ,22 und 23).\n\nb) FALSCH – 3 von 8 (15, 19 und 23).\n\nc) KORREKT – 5 von 8 (10, 16, 19, 22 und 23).\n\nd) FALSCH – 3 von 8 (15, 19 und 22)"
 },
 {
  "id": "E-22",
  "set": "E",
  "num": 22,
  "lo": "FL-4.2.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Ein System zur Berechnung der Strafe für Geschwindigkeitsübertretungen im Straßenverkehr wird mit folgender Entscheidungstabelle spezifiziert: Regeln R1 R2 R3 R4 Bedingungen Geschwindigkeit > 50 J J N N Schulzone J N J N Aktionen 250 € Geldstrafe - X - - Führerscheinentzug X - - - Ihnen liegen bereits die folgenden Testfälle und deren Eingaben vor: TF1: Geschwindigkeit = 65, Schulzone = Ja TF2: Geschwindigkeit = 45, Schulzone = Ja TF3: Geschwindigkeit = 50, Schulzone = Nein TF4: Geschwindigkeit = 49, Schulzone = Nein Welche der Regeln der Entscheidungstabelle ist (noch) NICHT durch einen Testfall überdeckt?",
  "images": [
   "images/E-22.png"
  ],
  "options": [
   "Regel 4",
   "Regel 1",
   "Regel 2",
   "Regel 3"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?",
  "explanation": "Regel 2 ist nicht überdeckt, da es keinen Testfall für die Eingaben Geschwindigkeit > 50 = Ja und Schulzone = Nein gibt. Ein möglicher Testfall wäre: TF5: Geschwindigkeit = 51, Schulzone = Nein\n\na) FALSCH – Regel 4 ist durch Testfälle 3 und 4 überdeckt.\n\nb) FALSCH – Regel 1 ist durch Testfall 1 überdeckt.\n\nc) KORREKT – Regel 2 ist nicht überdeckt.\n\nd) FALSCH – Regel 3 ist durch Testfall 2 überdeckt."
 },
 {
  "id": "E-23",
  "set": "E",
  "num": 23,
  "lo": "FL-4.2.4",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Betrachten Sie das folgende Zustandsdiagramm für eine Zapfsäule, die nur mit einer Kreditkarte bedient wird: Nehmen Sie an, dass Sie eine minimale Anzahl von Tests entwickeln möchten, um jeden Übergang im Zustandsdiagramm abzudecken. Nehmen Sie weiter an, dass jeder Test im Anfangszustand beginnen muss, also beim Warten auf den Kunden, und jeder Test endet, wenn ein Übergang im Anfangszustand ankommt. Wie viele Tests benötigen Sie?",
  "images": [
   "images/E-23.png"
  ],
  "options": [
   "4",
   "7",
   "1",
   "Unendlich viele Tests"
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen.",
  "explanation": "Jeder Übergang muss mindestens einmal durchlaufen werden. Dabei kann der erste Test einen erfolgreichen Kauf, der zweite Test den Abbruch oder Zeitablauf vom Warten auf das Tanken, der dritte Test den Abbruch oder Zeitablauf vom Warten auf den Kraftstofftyp und der letzte Test das Einführen einer ungültigen Kreditkarte abdecken. Die Reihenfolge ist unerheblich, aber bei weniger als vier Tests wird einer der Übergänge vom Eingang zum Warten auf den Kunden nicht abgedeckt oder die Regeln darüber, wo ein Test beginnt oder endet, werden verletzt. Mehr als vier Tests beinhalten Tests, die bereits abgedeckte Übergänge erneut durchlaufen. Daher ist Option a) KORREKT."
 },
 {
  "id": "E-24",
  "set": "E",
  "num": 24,
  "lo": "FL-4.3.1",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Beschreibungen der Anweisungsüberdeckung trifft zu?",
  "images": [],
  "options": [
   "Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Quellcodezeilen (ohne Kommentare), die während des Tests ausgeführt wurden.",
   "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Anweisungen im Quellcode, die im Test ausgeführt wurden.",
   "Die Anweisungsüberdeckung ist ein Maß für den prozentualen Anteil der Quellcodezeilen (ohne Kommentare), die im Test ausgeführt wurden.",
   "Die Anweisungsüberdeckung ist ein Maß für die Anzahl der Anweisungen im Quellcode, die während des Tests ausgeführt wurden."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Anweisungsüberdeckung = ausgeführte / alle Anweisungen. 100 % Anweisungen heißt NICHT alle Entscheidungen getestet.",
  "explanation": "Glossareintrag ‘Anweisungsüberdeckung’: Die Überdeckung von ausführbaren Anweisungen (Stand 09.2024). Siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.1, 1. Absatz: „Die Überdeckung wird als Anzahl der durch die Testfälle ausgeführten Anweisungen, geteilt durch die Gesamtanzahl der ausführbaren Anweisungen im Code, gemessen und in Prozent ausgedrückt.“\n\na) FALSCH – Die Anweisungsüberdeckung bezieht sich auf die durch Tests überdeckten Anweisungen. Da in einer Quellcodezeile mehrere Anweisungen stehen können oder eine Anweisung sich über mehrere Zeilen erstrecken kann, ist die Anzahl der Quellcodezeilen kein Maß für die Anweisungsüberdeckung (siehe oben).\n\nb) KORREKT – Der prozentuale Anteil der Anweisungen ist der Anteil im Test ausgeführter Anweisungen bezogen auf alle Anweisungen, also Anzahl durch den Test ausgeführter Anweisungen / Anzahl aller Anweisungen als Prozentwert (siehe oben).\n\nc) FALSCH – Die Anweisungsüberdeckung bezieht sich nicht auf Quellcodezeilen, sondern auf Anweisungen, die durch Tests ausgeführt werden (siehe auch Begründung zu a)).\n\nd) FALSCH – Die Anweisungsüberdeckung bezieht sich nicht auf die absolute Anzahl der von der Testsuite ausgeführten Anweisungen, sondern auf deren Anteil an allen Anweisungen (siehe oben)."
 },
 {
  "id": "E-25",
  "set": "E",
  "num": 25,
  "lo": "FL-4.3.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Welche der folgenden Aussagen stellt einen Mehrwert von White -Box- Tests dar?",
  "images": [],
  "options": [
   "White-Box-Tests können Messgrößen für die Überdeckung von z. B. Anweisungen liefern.",
   "White-Box-Tests können überprüfen, ob der Code die Akzeptanzkriterien (Abnahmekriterien) erfüllt.",
   "White-Box-Tests können die Kompatibilität mit anderen Systemen testen.",
   "White-Box-Tests können alle Fehlerzustände im Code aufdecken."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "White-Box-Wert: testet, was WIRKLICH gebaut wurde – auch Code, den die Spezifikation vergisst. Schwäche: findet keine fehlenden Anforderungen.",
  "explanation": "a) KORREKT – White-Box-Tests gehören zur Kategorie der struktur- und codebasierten Testverfahren und können daher Messgrößen für codebasierte Metriken, wie z. B. Anweisungsüberdeckung, liefern (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.3, 3. Absatz und Abschnitt 4.3.1).\n\nb) FALSCH – White-Box-Tests gehören zur Kategorie der strukturbasierten Testverfahren und haben die Schwäche, dass sie bei Nichterfüllung von Anforderungen die daraus resultierenden Fehlerzustände möglicherweise nicht erkennen können (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.3, 1. Absatz). Akzeptanzkriterien (Abnahmekriterien) sind eine Art von Anforderungen. Dies ist die Stärke von Black-Box-Tests, die zu den spezifikationsbasierten Testverfahren gehören.\n\nc) FALSCH – White-Box-Tests gehören zur Kategorie der strukturbasierten Testverfahren und konzentrieren sich auf die interne Struktur des Testobjekts (siehe CTFL-Lehrplan V4.0, Abschnitt 4.1, 4. Absatz). Die Kompatibilität, insbesondere die Interoperabilität, mit anderen Komponenten oder Systemen wird in der Regel im Rahmen eines Integrationstests geprüft.\n\nd) FALSCH – White-Box-Tests können nicht alle Fehlerzustände im Code aufdecken. Beispielsweise werden sowohl datenabhängige Fehlerzustände mitunter nicht erkannt (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.1, letzter Absatz: „So werden beispielsweise Fehlerzustände, die datenabhängig sind, nicht erkannt (z. B. eine Division durch null, die nur fehlschlägt, wenn der Nenner auf null gesetzt wird)“) als auch Fehlerzustände, die auf einem bestimmten, unter Umständen nicht ausgeführten Ausführungspfad liegen (siehe CTFL-Lehrplan V4.0, Abschnitt 4.3.2, 3. Absatz: „Das Ausführen eines Zweigs mit einem Testfall wird jedoch nicht in allen Fällen Fehlerzustände aufdecken. So werden beispielsweise Fehlerzustände, die die Ausführung eines bestimmten Pfades in einem Code erfordern, nicht erkannt.“)."
 },
 {
  "id": "E-26",
  "set": "E",
  "num": 26,
  "lo": "FL-4.4.3",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Sie testen eine mobile App, mit der Kunden auf ihre Bankkonten zugreifen und diese verwalten können. Sie führen eine Testsuite aus, die die Bewertung jedes Bildschirms und jedes Feldes auf jedem Bildschirm anhand einer Sammlung von Heuristiken für Benutzer schnittstellen umfasst. Sie wurde aus einem populären Buch zu diesem Thema abgeleitet und soll die Attraktivität, Gebrauchstauglichkeit (Interaktionsfähigkeit) und Zugänglichkeit für solche Apps maximieren. Welche der folgenden Testverfahren kategorisiert das von Ihnen verwendete Testverfahren am BESTEN?",
  "images": [],
  "options": [
   "Entscheidungstabellentest",
   "Explorativer Test",
   "Checklistenbasiertes Testen",
   "Intuitive Testfallermittlung"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Checklistenbasiert: Erfahrung als Liste – konsistenter als frei drauflos, flexibler als Skript. Checklisten pflegen, sonst Pestizid-Paradoxon!",
  "explanation": "a) FALSCH – Das Buch bietet einen allgemeinen Leitfaden und ist kein formales Anforderungsdokument, keine Spezifikation oder eine Sammlung von Anwendungsfällen, User-Storys oder Geschäftsprozessen.\n\nb) FALSCH – Während Sie die Sammlung als eine Reihe von Test-Chartas betrachten könnten, ähnelt sie eher der Reihe von Testbedingungen.\n\nc) KORREKT – Die Sammlung der Best Practices für die Benutzerschnittstellen ist die Liste der Testbedingungen. Checklistenbasiertes Testen verwendet vordefinierte Listen und Kriterien, um die Qualität und Konformität einer Anwendung zu überprüfen. Im o. a. Fall wird eine Sammlung von Heuristiken verwendet, um die Attraktivität, Gebrauchstauglichkeit (Interaktionsfähigkeit) und Zugänglichkeit der mobilen App zu bewerten.\n\nd) FALSCH – Die Tests konzentrieren sich nicht auf Fehler, die auftreten könnten, sondern auf die Erkenntnis, was für den Benutzer wichtig ist, im Sinne der Leichtigkeit der Nutzung (Gebrauchstauglichkeit, Interaktionsfähigkeit)."
 },
 {
  "id": "E-27",
  "set": "E",
  "num": 27,
  "lo": "FL-4.4.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Für welche der folgenden Situationen ist der Einsatz von explorative n Tests am EHESTEN sinnvoll?",
  "images": [],
  "options": [
   "Wenn unter Zeitdruck die Durchführung bereits spezifizierter Tests beschleunigt werden muss.",
   "Wenn das System inkrementell entwickelt wird und keine Test-Charta vorhanden ist.",
   "Wenn Tester mit ausreichenden Kenntnissen über ähnliche Anwendungen und Technologien zur Verfügung stehen.",
   "Wenn eine umfangreiche Spezifikation des Systems zur Verfügung steht, die für die Testanalyse und den Testentwurf verwendet werden kann."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Explorativ: gleichzeitig LERNEN + ENTWERFEN + TESTEN, oft in Sessions mit Charter. Stark bei wenig Zeit oder dünner Spezifikation.",
  "explanation": "a) FALSCH – Der explorative Test kann nützlich sein, wenn Zeitdruck besteht, ist aber nicht geeignet, die Durchführung bereits spezifizierter Tests zu beschleunigen. Beim explorativen Testen werden die Tests gleichzeitig entworfen, durchgeführt und ausgewertet, aber es werden keine bereits spezifizierten Tests durchgeführt (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.2, 1. Absatz).\n\nb) FALSCH – Ein explorativer Test ist unabhängig vom SDLC, egal, ob er inkrementell oder sequenziell entwickelt wird. Der explorative Test sollte eine Test-Charta verwenden (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.2).\n\nc) KORREKT – Der explorative Test ist nützlich, wenn Zeitdruck besteht und/oder die Spezifikationen unzureichend sind. Er ist besonders effektiv, wenn die Tester erfahren sind und über Fachwissen verfügen, und kann andere Testverfahren unterstützen (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.2, 3. Absatz).\n\nd) FALSCH – In dieser Situation böten sich vermutlich spezifikationsorientierte Testverfahren an, um Testfälle aus der umfangreichen Spezifikation abzuleiten. Exploratives Testen eignet sich insbesondere dann, wenn keine ausreichende Spezifikation zur Verfügung steht (siehe CTFL-Lehrplan V4.0, Abschnitt 4.4.2, 3. Absatz, erster Satz: „Explorative Tests sind sinnvoll, wenn es nur wenige oder unzureichende Spezifikationen gibt …“)."
 },
 {
  "id": "E-28",
  "set": "E",
  "num": 28,
  "lo": "FL-4.5.2",
  "k": "K2",
  "category": "Testanalyse und -entwurf",
  "question": "Ein agiles Entwicklungsteam hat folgende User -Story formuliert: „Als Anwender möchte ich, dass der Alarmton der elektronischen Eieruhr in der Lautstärke variabel einstellbar ist, so dass ich ihn immer hören kann.“ Welches der folgenden Abnahmekriterien (Akzeptanzkriterien) ist aus der Sicht des Testens am BESTEN geeignet, um eindeutige Abnahmetests zu entwerfen?",
  "images": [],
  "options": [
   "Die Lautstärke ist für jede Person einfach einzustellen, d. h., die Einstelltasten müssen eine nutzbare Größe haben.",
   "Der Tester kann den Alarmton auch auf der tiefsten Stufe gut hören.",
   "Die Lautstärke kann in einem Bereich von 40 bis 80 Dezibel eingestellt werden.",
   "Die Lautstärkeeinstellung funktioniert in den meistverkauften Modellen dieser Eieruhr korrekt."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Akzeptanzkriterien schreiben: szenariobasiert (Given/When/Then) oder regelorientiert (Checkliste, Tabelle). Immer prüfbar!",
  "explanation": "a) FALSCH – Abnahmekriterien werden als Testbedingungen betrachtet und sollen daher eine Prüfung auf Korrektheit oder Angemessenheit unterstützen, ohne Realisierungsvorgaben zu machen (siehe CTFL-Lehrplan V4.0, Abschnitte 4.5.2 und 2.2.2). Dies ist hier nicht der Fall, da erstens nicht vorgeschrieben ist, wie die Lautstärkeregelung zu bedienen ist, z. B. als Drehknopf oder über Tasten, und zweitens eine ‘nutzbare Größe’ keine messbaren Werte vorgibt, z. B. als Verweis auf eine Norm.\n\nb) FALSCH – Akzeptanzkriterien (Abnahmekriterien) werden als Testbedingungen betrachtet und sollen daher eine Prüfung auf Korrektheit oder Angemessenheit unterstützen (siehe CTFL-Lehrplan V4.0, Abschnitte 4.5.2 und 2.2.2). Dies ist hier nicht der Fall, da erstens das Gehör des Testers individuell und damit als Korrektheitskriterium nicht verlässlich ist und zweitens eine Größe von ‘gut hörbar’ keinen messbaren Wert liefert.\n\nc) KORREKT – Akzeptanzkriterien (Abnahmekriterien) werden als Testbedingungen betrachtet und sollen daher eine Prüfung auf Korrektheit oder Angemessenheit unterstützen (siehe CTFL-Lehrplan V4.0, Abschnitte 4.5.2 und 2.2.2). Dies ist hier der Fall, da der Einstellbereich klar definiert ist und die zugewiesene Lautstärke messbar ist (und den allgemeinen Grenzen von ‘leise’ bis ‘laut’ entspricht).\n\nd) FALSCH – Akzeptanzkriterien (Abnahmekriterien) werden als Testbedingungen betrachtet und sollen daher eine Prüfung auf Korrektheit oder Angemessenheit unterstützen (siehe CTFL-Lehrplan V4.0, Abschnitt 4.5.2 und 2.2.2). Dies ist hier nicht der Fall, da erstens bei einer Neuentwicklung nicht klar ist, welche Eieruhren die meistverkauften sein werden, und zweitens die Anforderung ‘korrekt’ nicht spezifiziert, was damit gemeint ist (nicht testbar, nicht messbar)."
 },
 {
  "id": "E-29",
  "set": "E",
  "num": 29,
  "lo": "FL-4.5.3",
  "k": "K3",
  "category": "Testanalyse und -entwurf",
  "question": "Bitte betrachten Sie die folgende User-Story: \"Als Systemadministrator möchte ich die Performanz des Servers überwachen können, um über einen Performanztest sicherzustellen, dass das System effizient läuft.\" Welcher Testfall eignet sich am BESTEN für eine abnahmetestgetriebene Entwicklung der User-Story?",
  "images": [],
  "options": [
   "1. Login als Systemadministrator; wähle den Server aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe den Server ausgewählt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt.",
   "2. Login als Benutzer; führe eine Aufgabe aus; überprüfe die Serverleistung. GEGEBEN: Ich bin als Benutzer angemeldet UND GEGEBEN: Ich habe eine Aufgabe ausgeführt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt.",
   "3. Login als Systemadministrator; wähle den Server aus; führe einen Performanztest durch. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe den Server ausgewählt, WENN ich „Performanztest durchführen“ auswähle, DANN wird ein Performanztest durchgeführt und ich erhalte eine Übersicht über die Ergebnisse.",
   "4. Login als Systemadministrator; führe einen Performanztest durch; überprüfe die Serverleistung. GEGEBEN: Ich bin als Systemadministrator angemeldet UND GEGEBEN: Ich habe einen Performanztest durchgeführt, WENN ich „Serverleistung überprüfen“ auswähle, DANN wird mir eine Übersicht über die Performanz des Servers angezeigt."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung.",
  "explanation": "a) FALSCH – weil NICHT GEEIGNET – Obwohl diese Option die Rolle des Systemadministrators und die Aktion der Überprüfung der Serverleistung beinhaltet, fehlt die spezifische Aktion des Durchführens eines Performanztests.\n\nb) FALSCH – weil nicht GEEIGNET – Diese Option beinhaltet nicht die Rolle des Systemadministrators, was ein Schlüsselaspekt der User-Story ist.\n\nc) KORREKT – weil GEEIGNET – Diese Option beinhaltet sowohl die Rolle des Systemadministrators als auch die spezifischen Aktionen des Auswählens des Servers und des Durchführens eines Performanztests, was der User-Story entspricht.\n\nd) FALSCH – weil NICHT GEEIGNET – Obwohl diese Option die Rolle des Systemadministrators und die Aktion der Überprüfung der Serverleistung beinhaltet, fehlt das Ausführen des Performanztests."
 },
 {
  "id": "E-30",
  "set": "E",
  "num": 30,
  "lo": "FL-5.1.2",
  "k": "K1",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aktivitäten führ en Tester während der Releaseplanung im agilen Projekt durch?",
  "images": [],
  "options": [
   "Tester identifizieren und verfeinern funktionale und nicht-funktionale Aspekte des Testobjekts.",
   "Tester unterstützen die Ableitung von Aufgaben (Tasks) aus den User-Storys.",
   "Tester nehmen an der detaillierten Risikoanalyse der User-Storys teil.",
   "Tester unterstützen bei der Erstellung von User -Storys, bei deren Testbarkeit und bei den Akzeptanzkriterien (Abnahmekriterien)."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Tester in der Planung: machen Storys testbar, schätzen Testaufwand mit, denken Risiken und Abhängigkeiten voraus.",
  "explanation": "a) FALSCH – Dies ist eine Aufgabe in der Iterationsplanung: „… und identifizieren und verfeinern die funktionalen und nicht-funktionalen Aspekte des Testobjekts“ (siehe CTFL- Lehrplan V4.0, Abschnitt 5.1.2, letzter Absatz).\n\nb) FALSCH – Die Releaseplanung beinhaltet (noch) keine Aufgabenplanung, diese ist Teil der Iterationsplanung: „... zerlegen die User-Storys in Aufgaben (insbesondere Testaufgaben), schätzen den Testaufwand für alle Testaufgaben …“ (siehe CTFL- Lehrplan V4.0, Abschnitt 5.1.2, letzter Absatz).\n\nc) FALSCH – Die Releaseplanung beinhaltet nicht die Beteiligung an der detaillierten Risikoanalyse der User-Storys, dies ist ein Teil der Iterationsplanung (siehe CTFL- Lehrplan V4.0, Abschnitt 5.1.2, letzter Absatz).\n\nd) KORREKT – Dies ist eine Aufgabe der Tester in der Releaseplanung: „…, beteiligen sich an der Erstellung von testbaren User-Storys und Akzeptanzkriterien (…), …“ (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.2, 2. Absatz). Tester arbeiten eng mit dem Produktteam zusammen, um sicherzustellen, dass die User-Storys klar definiert sind, testbare Akzeptanzkriterien (Abnahmekriterien) haben und die Anforderungen der Kunden erfüllen."
 },
 {
  "id": "E-31",
  "set": "E",
  "num": 31,
  "lo": "FL-5.1.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Gegeben seien die folgenden Beispiele für Eingangs - und Endekriterien für einen Systemtest: 1. Das geplante Testbudget von 400 Aufwandsstunden für den Systemtest ist aufgebraucht. 2. Mehr als 95 % der geplanten Testfälle sind vollständig durchgeführt. 3. Die Testumgebung für den Performanztest ist entworfen, eingerichtet und verifiziert. 4. Es sind keine Prio-1-Fehlerzustände und maximal 4 Prio -2- Fehlerzustände offen. 5. Die Designspezifikation ist durch ein technisches Review geprüft und freigegeben. 6. Der Unittest für die Komponenten 'Steuersatz' und 'Gesamtpreis' ist abgeschlossen und freigegeben. Welche der folgenden Kombinationen ordnet die Beispiele am BESTEN als Eingangs- und Endekriterien ein?",
  "images": [],
  "options": [
   "Eingangskriterien: 5, 6; Endekriterien: 1, 2, 3, 4",
   "Eingangskriterien: 2, 3, 4; Endekriterien: 1, 5, 6",
   "Eingangskriterien: 1, 3; Endekriterien: 2, 4, 5, 6",
   "Eingangskriterien: 3, 5, 6; Endekriterien: 1, 2, 4"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Eingangskriterien = Startbedingung (Definition of Ready). Endekriterien = Fertig-Bedingung (Definition of Done).",
  "explanation": "Die korrekte Zuordnung der Beispiele zu Eingangs- und Endekriterien ist: • Eingangskriterien: o (3) Die Testumgebung für den Performanztest ist entworfen, eingerichtet und verifiziert – ein Beispiel dafür, dass eine Testumgebung bereit sein muss, bevor mit dem Testen begonnen werden kann (Verfügbarkeit von Ressourcen, siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 2. Absatz). o (5) Die Designspezifikation für das System wurde einem Review unterzogen, ggf. nachgebessert und freigegeben – ein Beispiel dafür, dass die Testmittel zur Verfügung stehen müssen, bevor mit dem Testen begonnen werden kann (Verfügbarkeit von Testbasis / testbaren Anforderungen, siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 2. Absatz). o (6) Die Komponenten für die Berechnung des Steuersatzes und des Gesamtpreises haben die Unittests bestanden und sind freigegeben – ein Beispiel für die Notwendigkeit, dass ein Testobjekt eine Anfangsqualität erfüllen muss, bevor mit dem Testen begonnen werden kann (Qualität des Testobjekts, z. B. Freigabe aus einer vorherigen Teststufe, siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 2. Absatz). • Endekriterien: o (1) Das Ausschöpfen eines geplanten Testbudgets kann ein Beispiel für eine Endekriterium sein, wenn die Stakeholder dies wünschen und das Risiko akzeptieren (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 4. Absatz). o (2) Das Erreichen von einer Grenze an durchgeführten Testfällen im Rahmen der geplanten Tests kann ein Testabschlusskriterium und somit ein Endekriterium für eine Teststufe sein (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 3. Absatz). o (4) Die Einhaltung einer bestimmten Anzahl bekannter, priorisierter und nicht behobener Fehlerzustände (offene Fehler) kann als Maß für die Vollständigkeit und somit als Endekriterium angesehen werden (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.3, 3. Absatz). Dies sollte jedoch nie das alleinige Endekriterium sein, sondern im Zusammenhang mit der Testfallüberdeckung stehen (siehe Endekriterium (2) für durchgeführte Testfälle). Somit ist Option d) KORREKT."
 },
 {
  "id": "E-32",
  "set": "E",
  "num": 32,
  "lo": "FL-5.1.4",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie möchten den Testaufwand für ein neues Projekt mit Hilfe einer Drei - Punkt-Schätzung abschätzen. Sie haben die folgenden Schätzungen von den Experten erhalten: Die optimistischste Schätzung (a) ist 300 Personentage, die wahrscheinlichste Schätzung (m) ist 400 Personentage und die pessimistischste Schätzung (b) ist 500 Personentage. Wie hoch schätzen Sie den Testaufwand auf Basis der Drei -Punkt- Schätzung für dieses Projekt ein?",
  "images": [],
  "options": [
   "350 Personentage",
   "420 Personentage",
   "400 ± 33 Personentage",
   "450 Personentage"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6.",
  "explanation": "a) FALSCH – Diese Schätzung wäre das Ergebnis, wenn ausschließlich die optimistische (300 PT) und die wahrscheinlichste (400 PT) Schätzung berücksichtigt würden (z. B. als einfacher Durchschnitt: (300 + 400) / 2 = 350 PT). Die pessimistische Schätzung (500 PT) wurde hierbei nicht beachtet. Damit fehlen kritische Risikofaktoren, und das Ergebnis wäre wahrscheinlich zu optimistisch; zum Bespiel einfach den Durchschnitt: (300 + 400) / 2 = 350 PT.\n\nb) FALSCH – Die Zahl 420 Personentage entsteht durch eine gewichtete Drei-Punkt- Schätzung nach der PERT-Formel: (E) wird berechnet als E = (a + 4*m + b) / 6 = (300 + 4*400 + 500) / 6 = 400. Die korrekte Berechnung ergibt jedoch eindeutig genau 400 Personentage, nicht 420. Option b enthält also einen Rechenfehler und ist daher falsch. Hier zeigt sich jedoch, dass die korrekte Berechnung exakt 400 Personentage ergibt, nicht 420. Daher wäre Option b rechnerisch fehlerhaft und somit falsch.\n\nc) KORREKT – Option c basiert korrekt auf der Drei-Punkt-Schätzung (PERT-Methode), welche optimistische (a = 300 PT), wahrscheinlichste (m = 400 PT) und pessimistische Schätzung (b = 500 PT) vollständig einbezieht: Erwarteter Wert (PERT-Formel): (E) wird berechnet als E = (a + 4*m + b) / 6 = (300 + 4*400 + 500) / 6 = 400. Standardabweichung: SD = (b - a) / 6 = (500 - 300) / 6 = 33.\n\nd) FALSCH – Diese Option berücksichtigt lediglich die wahrscheinlichste (400 PT) und die pessimistischste Schätzung (500 PT) (z. B. einfacher Durchschnitt: (400 + 500) / 2 = 450 PT). Die optimistische Schätzung (300 PT) wird hier ignoriert, was dazu führt, dass die Schätzung zu hoch (zu pessimistisch) ist. Kritische Chancen oder Potenziale für geringeren Aufwand werden nicht einbezogen."
 },
 {
  "id": "E-33",
  "set": "E",
  "num": 33,
  "lo": "FL-5.1.5",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie wurden gebeten , eine optimale, risikobasierte Ausführungsreihenfolge nachfolgender Testfälle festzulegen, die bereits priorisiert und auf etwaige Abhängigkeiten hin untersucht wurden: Testfall-ID Priorität Abhängig von T7 2 - T8 1 T7 T9 3 T8 T10 3 T8 T11 1 T9 T12 2 T10 Priorität 1 ist dringlicher als Priorität 2 usw. Welche der folgenden Testabläufe berücksichtigt die oben genannten Abhängigkeiten und Prioritäten?",
  "images": [
   "images/E-33.png"
  ],
  "options": [
   "T7 -> T8 -> T10 -> T11 -> T9 -> T12",
   "T7 -> T8 -> T9 -> T10 -> T11 -> T12",
   "T7 -> T8 -> T10 -> T9 -> T11 -> T12",
   "T7 -> T8 -> T9 -> T11 -> T10 -> T12"
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall.",
  "explanation": "a) FALSCH – Diese Reihenfolge berücksichtigt nicht die Abhängigkeit von T11, der von T9 abhängig ist und daher nach T9 ausgeführt werden sollte.\n\nb) FALSCH – Diese Reihenfolge berücksichtigt nicht die Priorität von T11, der vor T10 ausgeführt werden sollte (siehe auch Begründung zu Option d)).\n\nc) FALSCH – Diese Reihenfolge berücksichtigt nicht die Abhängigkeit und Priorität von T9 und T10, die von T8 abhängen. T8 aktiviert T9 und T10. Hier muss zum ersten Mal priorisiert werden: T9 und T10 haben beide Prio 3, aber T9 schaltet mit T11 einen Prio- 1-Testfall frei, während T10 mit T12 nur einen Prio-2-Testfall freigibt. Somit wäre T9 eindeutig besser für die optimale Reihenfolge, aber hier ist T10 vor T9 aufgeführt, was nicht die optimale Reihenfolge darstellt (siehe auch Begründung zu Option d)).\n\nd) KORREKT – Diese Reihenfolge berücksichtigt sowohl die Prioritäten als auch die Abhängigkeiten korrekt. Im Detail: • Zu Beginn der Testausführung ist T7 alternativlos, da alle anderen Testfälle zunächst unerfüllte Abhängigkeiten haben. • T7 schaltet nur T8 frei, der deshalb als zweiter Testfall folgen muss. • T8 aktiviert T9 und T10. Hier muss zum ersten Mal priorisiert werden: T9 und T10 haben beide Prio 3, aber T9 schaltet mit T11 einen Prio-1-Testfall frei, während T10 mit T12 nur einen Prio-2-Testfall freigibt. Somit ist T9 eindeutig besser. • Jetzt sind T10 und T11 frei. T11 gewinnt eindeutig nach Priorität. • Danach ist T10 die einzige Option. • T12 wird zum Schlusslicht."
 },
 {
  "id": "E-34",
  "set": "E",
  "num": 34,
  "lo": "FL-5.1.7",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen veranschaulicht den Nutzen der Testquadranten?",
  "images": [],
  "options": [
   "Der Tester kann sich bei der Auswahl der Testarten auf den entsprechenden Quadranten beziehen, so dass alle beteiligten Stakeholder den Zweck der Tests besser verstehen.",
   "Der Tester kann die Testarten, die durch Testquadranten beschrieben werden, als Überdeckungsmetrik verwenden; je mehr Tests von jedem Quadranten ausgeführt werden, desto höher ist die Überdeckung.",
   "Das Team sollte für jeden Quadranten die ungefähr gleiche Anzahl von Testfällen einplanen, um sicherzustellen, dass alle Teststufen und Testarten gleichwertig berücksichtigt werden.",
   "Der Tester kann die Testquadranten zur Risikoanalyse einsetzen, wobei niedrigere Stufen der Quadranten ein geringeres Risiko für den Kunden repräsentieren."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit).",
  "explanation": "a) KORREKT – Die Testquadranten bieten eine Möglichkeit, die Testarten zu differenzieren und allen Stakeholdern, einschließlich Entwicklern, Testern und Fachbereichsvertretern, zu beschreiben und das Verständnis zu erhöhen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7, 1. Absatz).\n\nb) FALSCH – Das Modell der Testquadranten unterstützt das Testmanagement dabei, die Teststufen und Testarten zu visualisieren, um sicherzustellen, dass alle geeigneten Testarten und Teststufen in den SDLC einbezogen werden, und um zu verstehen, dass einige Testarten für bestimmte Teststufen relevanter sind als für andere (siehe CTFL- Lehrplan V4.0, Abschnitt 5.1.7, 1. Absatz). Das Modell bietet somit keine Art von Metrik an.\n\nc) FALSCH – Das Modell der Testquadranten unterstützt das Testmanagement dabei, die Teststufen und Testarten zu visualisieren, um sicherzustellen, dass alle geeigneten Testarten und Teststufen in den SDLC einbezogen werden, und um zu verstehen, dass einige Testarten für bestimmte Teststufen relevanter sind als für andere (siehe CTFL- Lehrplan V4.0, Abschnitt 5.1.7, 1. Absatz). Welche Teststufen für das zu prüfende Testobjekt relevant sind und welche Testarten und damit welche Anzahl von Testfällen sich daraus ableiten, ist durch das Modell nicht vorgegeben. Gerade die Anzahl der Testfälle eines jeden Quadranten hängt vom jeweiligen System ab und wird eigentlich nie für alle Quadranten gleich sein, z. B. wird der Quadrant Q1 mit Komponenten- und Komponentenintegrationstest in der Regel deutlich mehr Testfälle umfassen als der Quadrant Q3 mit Abnahmetests und Gebrauchstauglichkeitstests.\n\nd) FALSCH – Testquadranten haben keinen Bezug zu Risikostufen, denn das Modell der Testquadranten unterstützt das Testmanagement nur dabei, die Teststufen und Testarten zu visualisieren, um sicherzustellen, dass alle geeigneten Testarten und Teststufen in den SDLC einbezogen werden, und um zu verstehen, dass einige Testarten für bestimmte Teststufen relevanter sind als für andere (siehe CTFL-Lehrplan V4.0, Abschnitt 5.1.7)."
 },
 {
  "id": "E-35",
  "set": "E",
  "num": 35,
  "lo": "FL-5.2.4",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen über die Steuerung von Produktrisiken im Rahmen der Risikominderung trifft NICHT zu?",
  "images": [],
  "options": [
   "Die Komplexität des Datenbankmoduls wurde als hoch eingestuft, daher wurden zusätzliche Testfälle für das Modul erstellt.",
   "Die Anforderungen an das Benutzerinterface sind unklar, daher wird ein Experte für Benutzererfahrung in das Projekt einbezogen.",
   "Die Performanz des Systems ist entscheidend für den Erfolg des Projekts, daher wird auf Code-Reviews verzichtet, um Zeit zu sparen.",
   "Das System muss eine hohe Verfügbarkeit aufweisen, daher werden zusätzliche Lasttests durchgeführt."
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Reaktion auf Produktrisiken: Testumfang/-tiefe anpassen, priorisieren, zusätzliche Maßnahmen (Reviews, Schulung, andere Teststufen).",
  "explanation": "a) FALSCH – Dies ist eine geeignete Maßnahme zur Risikominderung, da zusätzliche Testfälle helfen können, die Qualität des Moduls zu gewährleisten und mögliche Fehler frühzeitig zu erkennen.\n\nb) FALSCH – Dies ist eine geeignete Maßnahme zur Risikominderung, da ein Experte für Benutzererfahrung dazu beitragen kann, die Anforderungen zu klären und eine benutzerfreundliche Gestaltung des Interface zu gewährleisten.\n\nc) KORREKT – Dies trifft nicht zu, da Code-Reviews eine wichtige Maßnahme zur Risikominderung sind und nicht übergangen werden sollten, um Zeit zu sparen. Sie helfen dabei, mögliche Fehler und Probleme in der Codebasis frühzeitig zu erkennen und zu beheben, was letztendlich zur Verbesserung der Systemperformanz beitragen kann.\n\nd) FALSCH – Dies ist eine geeignete Maßnahme zur Risikominderung, da Lasttests dazu beitragen können, die Leistung und Verfügbarkeit des Systems unter hoher Last zu überprüfen und sicherzustellen."
 },
 {
  "id": "E-36",
  "set": "E",
  "num": 36,
  "lo": "FL-5.3.3",
  "k": "K2",
  "category": "Testmanagement",
  "question": "In einem regulatorischen Projekt, das bereits in Verzug ist, haben die relevanten Stakeholder darum gebeten, täglich über den Teststatus informiert zu werden. Welche ist die EFF EKTIVERE Möglichkeit, den Teststatus zu kommunizieren, wenn die Stakeholder sich aufgrund räumlicher und zeitlicher Gegebenheiten nicht direkt abstimmen können?",
  "images": [],
  "options": [
   "Es sollten formelle Kommunikationsmittel (z.B. formale Berichte, E-Mails) verwendet werden, um sicherzustellen, dass wichtige Informationen die Empfänger erreichen.",
   "Die Kommunikation sollte über eine Chatgruppe erfolgen, damit alle Teammitglieder möglichst zeitnah über den Teststatus informiert werden können.",
   "Die relevanten Stakeholder sollten mündlich über den Teststatus informiert werden, um die wichtigsten Informationen direkt zu übermitteln.",
   "Der Teststatus sollte in täglichen Abstimmungsrunden per Videokonferenz kommuniziert werden, an denen Stakeholder aus allen beteiligten Zeitzonen teilnehmen sollten."
  ],
  "correct": [
   0
  ],
  "nSelect": 1,
  "merksatz": "Teststatus kommunizieren: mündlich, Dashboard, Bericht – Kanal und Detailtiefe nach Zielgruppe wählen.",
  "explanation": "a) KORREKT – Für zeitlich und räumlich verteilte Teams ist eine formellere Art der Kommunikation vorzuziehen (siehe CTFL-Lehrplan V4.0, Abschnitt 5.3.3, 2. Absatz 2. Satz: „Eine formellere Kommunikation kann sich für verteilte Teams anbieten, in denen eine direkte Kommunikation von Angesicht zu Angesicht aufgrund von geografischen Entfernungen oder Zeitunterschieden nicht immer möglich ist.“). Zusammengefasst bedeutet formellere Kommunikation in diesem Kontext, dass die Informationen strukturiert, dokumentiert und nachvollziehbar übermittelt werden, was in verteilten Teams besonders wichtig ist.\n\nb) FALSCH – Chatgruppen sind eine sehr gute Möglichkeit für einen schnellen Austausch, aber nicht unbedingt für zeitlich verteilte Gruppen, da es schwierig sein kann, relevante Informationen im Chatverlauf zu finden. Außerdem ist das Argument falsch. In zeitlich verteilten Teams ist es nicht relevant, dass Informationen zeitnah an den Empfängerkreis übermittelt werden.\n\nc) FALSCH – Die mündliche Kommunikation ist bei zeitlich verteilten Teams nicht immer möglich und daher nicht die effizienteste Art der Kommunikation. In der Frage wurde klar angegeben, dass sich die Teammitglieder aufgrund der zeitlichen Verteilung nicht direkt abstimmen können.\n\nd) FALSCH – Da die Stakeholder bereits täglich über den Teststatus informiert werden möchten, ist es keine Option, sie durch ein dafür ungeeignetes Werkzeug wie eine Videokonferenz zu unterstützen."
 },
 {
  "id": "E-37",
  "set": "E",
  "num": 37,
  "lo": "FL-5.4.1",
  "k": "K2",
  "category": "Testmanagement",
  "question": "Welche der folgenden Aussagen beschreibt, wie das Konfigurationsmanagement die Testaktivitäten unterstützen kann?",
  "images": [],
  "options": [
   "Eine Testerin hinterlegt den Fortschritt, den sie bei der Testdurchführung am aktuellen Tag gemacht hat, in einem Testmanagementwerkzeug.",
   "Ein Tester speichert Testdaten für die datengetriebene Testausführung in einer Datenbank und stellt sicher, dass die Daten zur Testausführungszeit aus der Datenbank gelesen werden können.",
   "Ein Tester verwendet ein Tabellenkalkulationsprogramm, um die Geschäftsregeln eines zu testenden Systems in Form von Entscheidungstabellen zu formalisieren.",
   "Ein Tester oder eine Testerin stellt automatisiert die relevanten Testmittel für eine ältere Version eines Produkts wieder her, um den Wartungstest für diese ältere Version durchführen zu können."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde.",
  "explanation": "a) FALSCH – Die Verwendung von Testmanagementwerkzeugen als Informations- und Fortschrittsrepositorien ist Teil der Aktivität Testüberwachung und Teststeuerung und nicht Teil des Konfigurationsmanagements.\n\nb) FALSCH – Diese Aktivitäten haben in erster Linie nichts mit dem Konfigurations- management zu tun, sondern sind Teil der Testrealisierung.\n\nc) FALSCH – Die Formalisierung von logischen Geschäftsregeln in Form von Entscheidungstabellen ist Teil der Testanalyse, bei der die Testbedingungen formal dokumentiert werden, und hat primär nichts mit dem Konfigurationsmanagement von Testmitteln zu tun.\n\nd) KORREKT – Ein wesentlicher Teil des Konfigurationsmanagements besteht darin, bei Bedarf zu einer früheren Baseline eines Konfigurationselements zurückzukehren (siehe CTFL-Lehrplan V4.0, Abschnitt 5.4, 3. Absatz). Dies entspricht genau der in Antwort d) beschriebenen Situation."
 },
 {
  "id": "E-38",
  "set": "E",
  "num": 38,
  "lo": "FL-5.5.1",
  "k": "K3",
  "category": "Testmanagement",
  "question": "Sie testen eine neue Version der Software für eine Kaffeemaschine. Mit dieser Software kann die Maschine verschiedene Kaffeevarianten zubereiten, die in vier Kategorien eingeteilt sind: Kaffeemenge, Zucker, Milch und Kaffeegeschmack. Die Kategorien sind wie folgt: • Kaffeemenge (klein, mittel, groß) • Zucker (keiner, 1 Einheit, 2 Einheiten, 3 Einheiten, 4 Einheiten) • Milch (ja oder nein) • Kaffeegeschmack (kein Sirup, Karamell, Haselnuss, Vanille) Sie schreiben einen Fehlerbericht mit den folgenden Informationen: Titel: Niedrige Kaffeetemperatur. Kurze Zusammenfassung: Bei der Auswahl von Kaffee mit Milch, ist die Temperatur des Getränks zu niedrig (unter 40 ºC). Erwartetes Ergebnis: Die Temperatur des Kaffees sollte dem Standard entsprechen (ca. 75 ºC). Grad der Auswirkung: Mittel Priorität: Normal Welche relevanten Informationen haben Sie im obigen Fehlerbericht vergessen?",
  "images": [],
  "options": [
   "Tatsächliches Testergebnis.",
   "Identifikation der getesteten Softwareversion.",
   "Ideen zur Verbesserung des Testfalls.",
   "Qualität des Arbeitsergebnisses, das getestet wurde."
  ],
  "correct": [
   1
  ],
  "nSelect": 1,
  "merksatz": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung.",
  "explanation": "a) FALSCH – Das erwartete Ergebnis und das tatsächliche Ergebnis sind normalerweise wertvolle Informationen im Fehlerbericht (siehe CTFL-Lehrplan V4.0, Abschnitt 5.5, 3. Absatz und 7. Aufzählungspunkt). Das erwartete Testergebnis wird angegeben (ca. 75 ºC) und das tatsächliche Ergebnis wird ebenfalls angegeben („Temperatur des Getränks zu niedrig (weniger als 40 ºC)“).\n\nb) KORREKT – Die Identifikation des Testobjekts und der Testumgebung sind in der Regel wertvolle Informationen im Fehlerbericht (siehe CTFL-Lehrplan V4.0, Abschnitt 5.5, 3. Absatz und 4. Aufzählungspunkt), daher ist die Angabe der eingesetzten Softwareversion ein wichtiger und wertvoller Teil des Fehlerberichts.\n\nc) FALSCH – Diese Information kann für den Tester nützlich sein, ist aber normalerweise nicht Teil eines Fehlerberichts (siehe CTFL-Lehrplan V4.0, Abschnitt 5.5, 3. Absatz).\n\nd) FALSCH – Die Qualität des getesteten Arbeitsergebnisses ist eine wichtige Information für das Projekt, aber nicht für einen Fehlerbericht. Vielmehr ergibt sind die geschätzte Qualität des Arbeitsergebnisses unter anderem aus der Anzahl der für das Arbeitsergebnis erstellten Fehlerberichte."
 },
 {
  "id": "E-39",
  "set": "E",
  "num": 39,
  "lo": "FL-6.1.1",
  "k": "K2",
  "category": "Testwerkzeuge",
  "question": "Gegeben seien folgende Testaktivitäten: 1. Performanzmessung und IT-Sicherheitsprüfungen 2. Testautomatisierung 3. Management der Testaktivitäten 4. Testentwurf und Testrealisierung und Testwerkzeuge: A. Werkzeuge zur Testdurchführung B. Testwerkzeuge für nicht-funktionale Tests C. Werkzeuge zur Vorbereitung von Testfällen und Testdaten D. Fehlermanagementwerkzeuge Welche Zuordnung der Werkzeuge zu den Aktivitäten trifft am BESTEN zu?",
  "images": [],
  "options": [
   "1 – D, 2 – C, 3 – B, 4 – A",
   "1 – B, 2 – A, 3 – C, 4 – D",
   "1 – B, 2 – A, 3 – D, 4 – C",
   "1 – A, 2 – B, 3 – D, 4 – C"
  ],
  "correct": [
   2
  ],
  "nSelect": 1,
  "merksatz": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline).",
  "explanation": "Die korrekte Zuordnung von Testaktivitäten zu Arten von Testwerkzeugen ist wie folgt (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1): • 1. Performanzmessung und IT-Sicherheitsprüfungen sind nicht-funktionale Tests, daher werden sie durch Testwerkzeuge für nicht-funktionale Tests (B) unterstützt (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 5. Aufzählungspunkt). • 2. Testautomatisierung gehört zur automatisierten Testdurchführung, daher wird sie durch Werkzeuge zur Testdurchführung (A) unterstützt (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 4. Aufzählungspunkt). • 3. Das Management der Testaktivitäten beinhaltet die Verwaltung von Fehlerzuständen, daher wird es durch ein Fehlermanagementwerkzeug (D) unterstützt (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 1. Aufzählungspunkt). • 4. Zum Testentwurf und zur Testrealisierung gehört die Vorbereitung von Testdaten, daher werden sie durch Werkzeuge zur Vorbereitung von Testfällen und Testdaten (C) unterstützt (siehe CTFL-Lehrplan V4.0, Abschnitt 6.1, 3. Aufzählungspunkt). Somit ist Option c) [1 – B, 2 – A, 3 – D, 4 – C] KORREKT."
 },
 {
  "id": "E-40",
  "set": "E",
  "num": 40,
  "lo": "FL-6.2.1",
  "k": "K1",
  "category": "Testwerkzeuge",
  "question": "Welche der folgenden Aussagen beschreibt am BESTEN den potenziellen Nutzen des Einsatzes von Werkzeugen für die automatisierte Testdurchführung?",
  "images": [],
  "options": [
   "Die Implementierung von Regressionstests ist einfacher, da diese direkt mit einem Testskript implementiert werden können.",
   "Es findet eine effizientere Bewertung des Testobjekts durch das Automatisierungswerkzeug statt.",
   "Ein Testwerkzeug wird verwendet, wenn manuelles Testen besser geeignet ist.",
   "Regressionstests können schneller durchgeführt werden und ermöglichen somit eine schnellere Rückmeldung an das Team."
  ],
  "correct": [
   3
  ],
  "nSelect": 1,
  "merksatz": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit.",
  "explanation": "a) FALSCH – Testausführungswerkzeuge, die die Testautomatisierung unterstützen, erleichtern nicht die Erstellung und Implementierung von Regressionstests, sondern deren Durchführung (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 1. Aufzählungspunkt).\n\nb) FALSCH – Durch eine automatisierte Testdurchführung wird eine objektive Bewertung des Testobjekts ermöglicht. Objektiv ist aber nicht dasselbe wie eine effizientere Bewertung (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 2. Absatz, 3. Aufzählungspunkt).\n\nc) FALSCH – Dies beschreibt keinen Nutzen der Testautomatisierung, sondern ein Risiko (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 3. Absatz, 3. Aufzählungspunkt).\n\nd) KORREKT – Zu den potenziellen Vorteilen der Testautomatisierung und des Einsatzes von Testausführungswerkzeugen gehört die Zeitersparnis durch die Reduzierung sich wiederholender manueller Arbeiten (z. B. Ausführung von Regressionstests) (siehe CTFL-Lehrplan V4.0, Abschnitt 6.2, 2. Absatz, 1. und 5. Aufzählungspunkt). Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet) Platz für Ihre Notizen: (Sie werden bei der Korrektur weder gelesen noch bewertet)"
 }
];

const MNEMONICS = [
 {
  "lo": "FL-1.1.1",
  "category": "Testgrundlagen",
  "text": "Testziele: Fehler finden · Risiko senken · Vertrauen aufbauen · informieren. NIE: Fehlerfreiheit beweisen."
 },
 {
  "lo": "FL-1.1.2",
  "category": "Testgrundlagen",
  "text": "Testen findet die Fehlerwirkung – Debugging findet und beseitigt die Ursache. (Tester finden, Entwickler flicken.)"
 },
 {
  "lo": "FL-1.2.1",
  "category": "Testgrundlagen",
  "text": "Testen ist nötig: Fehler kosten Geld, Zeit, Ruf – je später gefunden, desto teurer die Korrektur."
 },
 {
  "lo": "FL-1.2.2",
  "category": "Testgrundlagen",
  "text": "Testen = produktorientiert + korrigierend (Qualitätssteuerung). QS = prozessorientiert + präventiv. Nicht dasselbe!"
 },
 {
  "lo": "FL-1.2.3",
  "category": "Testgrundlagen",
  "text": "Kette: Grundursache → Fehlhandlung (Mensch irrt) → Fehlerzustand (im Code) → Fehlerwirkung (im Betrieb sichtbar)."
 },
 {
  "lo": "FL-1.3.1",
  "category": "Testgrundlagen",
  "text": "7 Grundsätze: ① zeigt Fehler, beweist keine Fehlerfreiheit ② vollständig unmöglich ③ früh testen ④ Fehler klumpen ⑤ Tests nutzen sich ab ⑥ kontextabhängig ⑦ fehlerfrei ≠ brauchbar."
 },
 {
  "lo": "FL-1.4.1",
  "category": "Testgrundlagen",
  "text": "Testprozess: Planung → Überwachung/Steuerung → Analyse (WAS testen?) → Entwurf (WIE testen?) → Realisierung → Durchführung → Abschluss."
 },
 {
  "lo": "FL-1.4.2",
  "category": "Testgrundlagen",
  "text": "Kein Einheitstest: Kontext (Risiko, Branche, Vorgehen, Regularien) bestimmt Umfang und Formalität des Testprozesses."
 },
 {
  "lo": "FL-1.4.3",
  "category": "Testgrundlagen",
  "text": "Testmittel = Ergebnisse der Testaktivitäten: Testkonzept (Planung) · Testfälle (Entwurf) · Skripte/Daten (Realisierung) · Protokolle/Berichte (Durchführung/Abschluss)."
 },
 {
  "lo": "FL-1.4.4",
  "category": "Testgrundlagen",
  "text": "Verfolgbarkeit = Anforderung ↔ Testfall ↔ Fehler verknüpft: Überdeckung messbar, Änderungsauswirkungen sichtbar, Berichte aussagekräftig."
 },
 {
  "lo": "FL-1.4.5",
  "category": "Testgrundlagen",
  "text": "Rolle des Testens: analysiert, entwirft, führt aus, meldet. Testmanagementrolle: plant, steuert, koordiniert, berichtet."
 },
 {
  "lo": "FL-1.5.1",
  "category": "Testgrundlagen",
  "text": "Tester-Kompetenzen: Kommunikation, kritisches Denken, Neugier, Genauigkeit, Fach- und Technikwissen."
 },
 {
  "lo": "FL-1.5.2",
  "category": "Testgrundlagen",
  "text": "Whole-Team: Qualität ist Sache des GANZEN Teams – jeder kann Testaufgaben übernehmen, Tester teilen ihr Wissen."
 },
 {
  "lo": "FL-1.5.3",
  "category": "Testgrundlagen",
  "text": "Unabhängiges Testen: + eigene Sicht, findet andere Fehler · − Isolation, Kommunikationshürden, Entwickler schieben Verantwortung ab."
 },
 {
  "lo": "FL-2.1.1",
  "category": "Testen im SDLC",
  "text": "SDLC bestimmt Testen: sequenziell = Teststufen spät und nacheinander · iterativ/agil = jede Iteration testen + automatisierte Regressionstests."
 },
 {
  "lo": "FL-2.1.2",
  "category": "Testen im SDLC",
  "text": "Gilt in JEDEM Modell: jede Entwicklungsaktivität hat eine Testaktivität · jede Teststufe eigene Ziele · Testanalyse beginnt bei den Anforderungen."
 },
 {
  "lo": "FL-2.1.3",
  "category": "Testen im SDLC",
  "text": "Test-First-Ansätze: TDD (Unit-Test vor Code) · ATDD (Abnahmetests aus Akzeptanzkriterien) · BDD (Given-When-Then-Szenarien)."
 },
 {
  "lo": "FL-2.1.4",
  "category": "Testen im SDLC",
  "text": "DevOps: CI/CD-Pipeline mit automatisierten Tests = schnelles Feedback. Aber: manuelle, nutzernahe Tests bleiben nötig; Pipeline braucht Pflege."
 },
 {
  "lo": "FL-2.1.5",
  "category": "Testen im SDLC",
  "text": "Shift-Left = Testen nach vorn verlagern: Anforderungs-Reviews, frühe Testanalyse, Unit-Tests beim Coden, CI. Früher = billiger."
 },
 {
  "lo": "FL-2.1.6",
  "category": "Testen im SDLC",
  "text": "Retrospektive: nach der Iteration – Was lief gut? Was nicht? Was ändern wir? → kontinuierliche Prozessverbesserung."
 },
 {
  "lo": "FL-2.2.1",
  "category": "Testen im SDLC",
  "text": "Teststufen: Komponente → Komponentenintegration → System → Systemintegration → Abnahme. Jede Stufe: eigene Testbasis, eigene Ziele."
 },
 {
  "lo": "FL-2.2.2",
  "category": "Testen im SDLC",
  "text": "Testarten: funktional (WAS tut es) · nicht-funktional (WIE GUT: Performanz, Sicherheit, Usability) · strukturell (White-Box) · änderungsbezogen."
 },
 {
  "lo": "FL-2.2.3",
  "category": "Testen im SDLC",
  "text": "Fehlernachtest: Ist DER Fehler weg? Regressionstest: Ist dabei NICHTS ANDERES kaputtgegangen?"
 },
 {
  "lo": "FL-2.3.1",
  "category": "Testen im SDLC",
  "text": "Wartungstest-Auslöser: Modifikation (Fix, Update) · Migration (Plattform-/Datenumzug) · Außerbetriebnahme (Archivierung, Datenmigration)."
 },
 {
  "lo": "FL-3.1.1",
  "category": "Statisches Testen",
  "text": "Reviewen kann man (fast) alles Lesbare: Anforderungen, Code, Testware, Verträge, Handbücher – nur eine lesbare Struktur ist Pflicht."
 },
 {
  "lo": "FL-3.1.2",
  "category": "Statisches Testen",
  "text": "Statisches Testen: findet Fehler FRÜH und BILLIG, direkt an der Ursache – bevor Code überhaupt läuft."
 },
 {
  "lo": "FL-3.1.3",
  "category": "Statisches Testen",
  "text": "Statisch findet die Ursache im Dokument (Fehlerzustand direkt), dynamisch die Wirkung im laufenden System (Fehlerwirkung). Ergänzen sich!"
 },
 {
  "lo": "FL-3.2.1",
  "category": "Statisches Testen",
  "text": "Frühes, häufiges Stakeholder-Feedback: Missverständnisse früh erkannt = nicht am Bedarf vorbei entwickelt."
 },
 {
  "lo": "FL-3.2.2",
  "category": "Statisches Testen",
  "text": "Reviewprozess: Planung → Review-Initiierung → INDIVIDUELLES Review (meiste Funde!) → Kommunikation & Analyse → Fehlerbehebung & Berichterstattung."
 },
 {
  "lo": "FL-3.2.3",
  "category": "Statisches Testen",
  "text": "Review-Rollen: Moderator leitet · Autor erstellt & korrigiert · Gutachter finden · Protokollant notiert · Management gibt Ressourcen."
 },
 {
  "lo": "FL-3.2.4",
  "category": "Statisches Testen",
  "text": "Formalitäts-Treppe: informelles Review < Walkthrough (AUTOR führt) < technisches Review (Experten) < Inspektion (formalste, mit Metriken)."
 },
 {
  "lo": "FL-3.2.5",
  "category": "Statisches Testen",
  "text": "Review-Erfolg: klare Ziele · richtige Teilnehmer · genug Vorbereitungszeit · Fehler feiern statt Autor anklagen."
 },
 {
  "lo": "FL-4.1.1",
  "category": "Testanalyse und -entwurf",
  "text": "Black-Box: aus der SPEZIFIKATION. White-Box: aus der STRUKTUR (Code). Erfahrungsbasiert: aus dem WISSEN des Testers."
 },
 {
  "lo": "FL-4.2.1",
  "category": "Testanalyse und -entwurf",
  "text": "Äquivalenzklassen: gleiche Verarbeitung = gleiche Klasse, 1 Vertreter reicht. Gültige UND ungültige Klassen bilden!"
 },
 {
  "lo": "FL-4.2.2",
  "category": "Testanalyse und -entwurf",
  "text": "Grenzwertanalyse: Fehler wohnen am Rand! 2-Wert: Grenze + Nachbar außerhalb. 3-Wert: Grenze + beide Nachbarn."
 },
 {
  "lo": "FL-4.2.3",
  "category": "Testanalyse und -entwurf",
  "text": "Entscheidungstabelle: Spalte = Regel (Bedingungskombination → Aktion). Prüfe: unmögliche Kombinationen? Lücken? Widersprüche?"
 },
 {
  "lo": "FL-4.2.4",
  "category": "Testanalyse und -entwurf",
  "text": "Zustandsübergangstest: alle ZUSTÄNDE < alle ÜBERGÄNGE (0-Switch) – Übergangsüberdeckung ist das stärkere Kriterium. Ungültige Übergänge extra prüfen."
 },
 {
  "lo": "FL-4.3.1",
  "category": "Testanalyse und -entwurf",
  "text": "Anweisungsüberdeckung = ausgeführte / alle Anweisungen. 100 % Anweisungen heißt NICHT alle Entscheidungen getestet."
 },
 {
  "lo": "FL-4.3.2",
  "category": "Testanalyse und -entwurf",
  "text": "Zweig schlägt Anweisung: 100 % Zweigüberdeckung ⇒ 100 % Anweisungsüberdeckung. Umgekehrt NICHT (if ohne else!)."
 },
 {
  "lo": "FL-4.3.3",
  "category": "Testanalyse und -entwurf",
  "text": "White-Box-Wert: testet, was WIRKLICH gebaut wurde – auch Code, den die Spezifikation vergisst. Schwäche: findet keine fehlenden Anforderungen."
 },
 {
  "lo": "FL-4.4.1",
  "category": "Testanalyse und -entwurf",
  "text": "Intuitive Testfallermittlung (Error Guessing): Erfahrung zielt auf typische Fehler – Eingaben, Randfälle, bekannte Schwächen. Fehlerattacken!"
 },
 {
  "lo": "FL-4.4.2",
  "category": "Testanalyse und -entwurf",
  "text": "Explorativ: gleichzeitig LERNEN + ENTWERFEN + TESTEN, oft in Sessions mit Charter. Stark bei wenig Zeit oder dünner Spezifikation."
 },
 {
  "lo": "FL-4.4.3",
  "category": "Testanalyse und -entwurf",
  "text": "Checklistenbasiert: Erfahrung als Liste – konsistenter als frei drauflos, flexibler als Skript. Checklisten pflegen, sonst Pestizid-Paradoxon!"
 },
 {
  "lo": "FL-4.5.1",
  "category": "Testanalyse und -entwurf",
  "text": "User-Story = 3 C: Card (Karte), Conversation (Gespräch), Confirmation (Akzeptanzkriterien). Gemeinsam schreiben, INVEST beachten."
 },
 {
  "lo": "FL-4.5.2",
  "category": "Testanalyse und -entwurf",
  "text": "Akzeptanzkriterien schreiben: szenariobasiert (Given/When/Then) oder regelorientiert (Checkliste, Tabelle). Immer prüfbar!"
 },
 {
  "lo": "FL-4.5.3",
  "category": "Testanalyse und -entwurf",
  "text": "ATDD: Testfälle entstehen aus Akzeptanzkriterien VOR der Implementierung – die Tests treiben die Entwicklung."
 },
 {
  "lo": "FL-5.1.1",
  "category": "Testmanagement",
  "text": "Testkonzept = Was? Wie? Wer? Wann? Womit? Wann fertig? (Ziele, Umfang, Ansatz, Ressourcen, Zeitplan, Ende- & Eingangskriterien, Risiken)."
 },
 {
  "lo": "FL-5.1.2",
  "category": "Testmanagement",
  "text": "Tester in der Planung: machen Storys testbar, schätzen Testaufwand mit, denken Risiken und Abhängigkeiten voraus."
 },
 {
  "lo": "FL-5.1.3",
  "category": "Testmanagement",
  "text": "Eingangskriterien = Startbedingung (Definition of Ready). Endekriterien = Fertig-Bedingung (Definition of Done)."
 },
 {
  "lo": "FL-5.1.4",
  "category": "Testmanagement",
  "text": "Schätzung: metrikbasiert (Vergangenheitsdaten, Burndown) · extrapolierend · Weitband-Delphi/Planning Poker · Dreipunkt: E = (a + 4m + b) ÷ 6."
 },
 {
  "lo": "FL-5.1.5",
  "category": "Testmanagement",
  "text": "Priorisierung: Höchste Priorität zuerst – ABER Abhängigkeiten gewinnen: erst die Voraussetzung, dann der abhängige Testfall."
 },
 {
  "lo": "FL-5.1.6",
  "category": "Testmanagement",
  "text": "Testpyramide: unten VIELE kleine, schnelle Tests (Unit), oben WENIGE große, langsame (UI/E2E)."
 },
 {
  "lo": "FL-5.1.7",
  "category": "Testmanagement",
  "text": "Testquadranten: Q1 technisch+teamunterstützend (Unit) · Q2 fachlich+teamunterstützend (funktional) · Q3 fachlich+produktkritisierend (explorativ, UAT) · Q4 technisch+produktkritisierend (Performanz, Sicherheit)."
 },
 {
  "lo": "FL-5.2.1",
  "category": "Testmanagement",
  "text": "Risikostufe = Eintrittswahrscheinlichkeit × Schadensausmaß. (Umgestellt: Schaden = Stufe ÷ Wahrscheinlichkeit.)"
 },
 {
  "lo": "FL-5.2.2",
  "category": "Testmanagement",
  "text": "PROJEKTrisiko bedroht das Projekt (Termin, Budget, Personal, Werkzeuge). PRODUKTrisiko bedroht die Produktqualität (Fehlfunktion, Performanz, Sicherheit)."
 },
 {
  "lo": "FL-5.2.3",
  "category": "Testmanagement",
  "text": "Produktrisikoanalyse steuert das Testen: hohes Risiko → früher, gründlicher, mehr Teststufen/Techniken; niedriges Risiko → weniger."
 },
 {
  "lo": "FL-5.2.4",
  "category": "Testmanagement",
  "text": "Reaktion auf Produktrisiken: Testumfang/-tiefe anpassen, priorisieren, zusätzliche Maßnahmen (Reviews, Schulung, andere Teststufen)."
 },
 {
  "lo": "FL-5.3.1",
  "category": "Testmanagement",
  "text": "Testmetriken: Fortschritt (Testfälle durchgeführt) · Qualität (Fehlerdichte, -findungsrate) · Überdeckung · Kosten. Zahlen statt Bauchgefühl."
 },
 {
  "lo": "FL-5.3.2",
  "category": "Testmanagement",
  "text": "Testfortschrittsbericht: LAUFEND, ans Team, steuert. Testabschlussbericht: am ENDE, an Stakeholder, bilanziert. Sprache an Zielgruppe anpassen!"
 },
 {
  "lo": "FL-5.3.3",
  "category": "Testmanagement",
  "text": "Teststatus kommunizieren: mündlich, Dashboard, Bericht – Kanal und Detailtiefe nach Zielgruppe wählen."
 },
 {
  "lo": "FL-5.4.1",
  "category": "Testmanagement",
  "text": "Konfigurationsmanagement: Testobjekt + Testmittel eindeutig identifiziert & versioniert → jederzeit reproduzierbar, WAS mit WELCHEM Stand getestet wurde."
 },
 {
  "lo": "FL-5.5.1",
  "category": "Testmanagement",
  "text": "Fehlerbericht: ID · Titel · Umgebung · Reproduktionsschritte · ERWARTET vs. TATSÄCHLICH · Schweregrad. Objektiv, vollständig, keine Schuldzuweisung."
 },
 {
  "lo": "FL-6.1.1",
  "category": "Testwerkzeuge",
  "text": "Werkzeugtypen: Testmanagement (verwalten) · statische Analyse (Code lesen) · Testautomatisierung (ausführen + vergleichen) · Performanz (Last erzeugen) · CI/CD (Pipeline)."
 },
 {
  "lo": "FL-6.2.1",
  "category": "Testwerkzeuge",
  "text": "Automatisierung: + Wiederholbarkeit, schnelles Feedback, weniger Routine · − unrealistische Erwartungen, Skript-Wartungskosten, Werkzeuggläubigkeit."
 }
];
