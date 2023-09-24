# PathPal - Indoornavigations-App mit BLE-Technologie

## Projektzusammenfassung

Die Nutzung von Smartphones zur Navigation ist allgegenwärtig, aber herkömmliche Navigationslösungen stoßen an ihre Grenzen, wenn es um komplexe Innenräume wie Flughäfen, Einkaufszentren und Krankenhäuser geht. Die Schwierigkeit liegt in der präzisen Positionsbestimmung, da GPS-Signale in Innenräumen oft nicht verfügbar sind.

**PathPal** ist eine Indoornavigations-App, die speziell entwickelt wurde, um dieses Problem zu lösen. Die Hauptzielsetzung besteht darin, eine Lösung bereitzustellen, die es Nutzern ermöglicht, sich präzise in komplexen Innenräumen zu orientieren. Die App verwendet Bluetooth Low Energy (BLE) Ortungstechnologie, um die genaue Position von Nutzern innerhalb von Gebäuden zu bestimmen. Dies geschieht durch das Platzieren von Bluetooth-fähigen Beacons in den Räumlichkeiten. Die Indoornavigations-App nutzt die Signale dieser Beacons, um die Position des Nutzers in Echtzeit zu ermitteln und ihm eine präzise Wegführung durch das Gebäude zu bieten.

### Hauptmerkmale

- Präzise Indoornavigation in komplexen Innenräumen.
- Nutzung von BLE-Beacons für die Positionsbestimmung.
- Echtzeit-Wegführung und -Navigation.
- Anpassbare Kartengrundlage für verschiedene Innenräume.
- Prototyp entwickelt für potenzielle Kundenprojekte.

### Herausforderungen

- Präzise Positionierung in Innenräumen.
- Integration und Verwaltung von BLE-Beacons.
- Entwurf einer benutzerfreundlichen Schnittstelle.

## Projektstatus

Der aktuelle Stand des Projekts ist die Entwicklung des BLE Managers. Dieser Manager dient als Grundlage für die Ortungstechnologie per Bluetooth Low Energy (BLE). Hierbei werden BLE-Beacons in den Räumlichkeiten platziert, um genaue Standortdaten zu erfassen und sie in der PathPal-App zu verwenden.

## Nächste Schritte

Die nächsten Schritte im PathPal-Projekt umfassen die Integration des Raumumrisses, die Entwicklung der API und die Erstellung der Datenbank. Hier ist eine Liste der geplanten Aufgaben und User Stories:

### Integration des Raumumrisses

- [ ] **Raumumrissdaten importieren**: Importieren Sie Raumumrissdaten aus geeigneten Quellen oder erstellen Sie diese manuell.

- [ ] **Raumumriss in App integrieren**: Implementieren Sie die Möglichkeit, den Raumumriss in der PathPal-App anzuzeigen, sodass Benutzer die Layouts von Gebäuden und Innenräumen visualisieren können.

- [ ] **Benutzerdefinierte Kartengrundlage**: Ermöglichen Sie Benutzern die Auswahl und Anpassung der Kartengrundlage je nach Innenraum.

### Entwicklung der API

- [ ] **API-Endpoints definieren**: Entwerfen Sie die notwendigen API-Endpoints für die Kommunikation zwischen der PathPal-App und der Datenbank.

- [ ] **API entwickeln**: Implementieren Sie die API unter Verwendung eines geeigneten Frameworks (z. B. Express.js für Node.js) und gewährleisten Sie die Sicherheit und Authentifizierung.

- [ ] **Datenbankintegration**: Verbinden Sie die API mit der Datenbank, um Raumumrissdaten, Standortdaten und weitere relevante Informationen zu speichern und abzurufen.

### Erstellung der Datenbank

- [ ] **Datenbankdesign**: Entwerfen Sie das Datenbankschema, das für die Speicherung von Raumumrissdaten und Standortinformationen erforderlich ist.

- [ ] **Datenbank erstellen**: Erstellen Sie die Datenbank unter Verwendung eines geeigneten Datenbankverwaltungssystems (z. B. PostgreSQL oder MySQL).

- [ ] **Datenbankzugriff implementieren**: Implementieren Sie den Zugriff auf die Datenbank in der API, um Daten zu speichern und abzurufen.

## Kanban Board für User Stories

Für eine effektive Verwaltung dieser Aufgaben und User Stories empfehle ich die Verwendung eines Kanban-Boards. Hier ist ein einfaches Beispiel für die Verwendung von GitHub Projects, um Ihr Kanban-Board zu erstellen:

1. **Projekt erstellen**: Erstellen Sie ein neues GitHub-Projekt mit dem Namen "PathPal Kanban Board".

2. **Spalten erstellen**: Erstellen Sie Spalten, um den Fortschritt der Aufgaben zu verfolgen, z. B. "To Do", "In Bearbeitung", "Abgeschlossen".

3. **Karten erstellen**: Erstellen Sie Karten für jede Aufgabe oder User Story und verschieben Sie sie entsprechend ihrem Fortschritt zwischen den Spalten.

4. **Labels verwenden**: Verwenden Sie Labels, um Aufgaben nach Typ (Integration, Entwicklung, Datenbank) oder Priorität zu kennzeichnen.

5. **Projekt verwalten**: Aktualisieren Sie das Kanban-Board regelmäßig, um den aktuellen Stand des Projekts widerzuspiegeln.

Sie können GitHub Projects, Trello oder andere Projektmanagement-Tools Ihrer Wahl verwenden, um Ihr Kanban-Board zu erstellen und zu verwalten. Dies erleichtert die Planung und Verfolgung der nächsten Schritte im PathPal-Projekt.
