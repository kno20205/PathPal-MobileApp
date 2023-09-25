# PathPal - Indoor-Navigationsystem für mobile Endgeräte ![PathPal Logo](/BLEManager/assets/PP_Logo_V2.png)

## Projektzusammenfassung

Die Nutzung von Smartphones zur Navigation ist allgegenwärtig, aber herkömmliche Navigationslösungen stoßen an ihre Grenzen, wenn es um komplexe Innenräume wie Flughäfen, Einkaufszentren und Krankenhäuser geht. Die Schwierigkeit liegt in der präzisen Positionsbestimmung, da GPS-Signale in Innenräumen oft nicht verfügbar sind.

**PathPal** ist eine Indoornavigations-App, die speziell entwickelt wurde, um dieses Problem zu lösen. Die Hauptzielsetzung besteht darin, eine Lösung bereitzustellen, die es Nutzern ermöglicht, sich präzise in komplexen Innenräumen zu orientieren. Die App verwendet Bluetooth Low Energy (BLE) Ortungstechnologie, um die genaue Position von Nutzern innerhalb von Gebäuden zu bestimmen. Dies geschieht durch das Platzieren von Bluetooth-fähigen Beacons in den Räumlichkeiten. Die Indoornavigations-App nutzt die Signale dieser Beacons, um die Position des Nutzers in Echtzeit zu ermitteln und ihm eine präzise Wegführung durch das Gebäude zu bieten.

### Hauptmerkmale

- Präzise Indoornavigation in komplexen Innenräumen.
- Nutzung von BLE-Beacons für die Positionsbestimmung.
- Echtzeit-Wegführung und -Navigation.
- Prototyp entwickelt für potenzielle Kundenprojekte.

### Herausforderungen

- Präzise Positionierung in Innenräumen.
- Integration und Verwaltung von BLE-Beacons.
- Entwurf einer benutzerfreundlichen Schnittstelle.

## Projektstatus

Der aktuelle Stand des Projekts ist die Entwicklung des BLE Managers. Dieser Manager ist die grundlegende Komponente des PathPal-Projekts und demonstriert die Kernfunktionen, nämlich das Finden von BLE-Beacons. Durch die Integration des BLE Managers wird die Fähigkeit geschaffen, Bluetooth Low Energy (BLE) Beacons in den Räumlichkeiten zu identifizieren und deren Signale zu erkennen. Dies bildet die Grundlage für die präzise Ortungstechnologie, die in der PathPal-App verwendet wird, um Benutzern eine genaue Indoor-Navigation zu ermöglichen.

Der BLE Manager ist der erste Schritt zur Realisierung des PathPal-Projekts und dient als Ausgangspunkt für die weitere Entwicklung und Integration von Raumumriss, API und Datenbank.

## Nächste Schritte

Die nächsten Schritte im PathPal-Projekt umfassen die Integration des Raumumrisses, die Entwicklung der API und die Erstellung der Datenbank. Hier ist eine Liste der geplanten Aufgaben und User Stories:

### Integration des Raumumrisses

- [ ] **Raumumrissdaten importieren**: Importieren Sie Raumumrissdaten aus geeigneten Quellen oder erstellen Sie diese manuell.

- [ ] **Raumumriss in App integrieren**: Implementieren Sie die Möglichkeit, den Raumumriss in der PathPal-App anzuzeigen, sodass Benutzer die Layouts von Gebäuden und Innenräumen visualisieren können.

### Entwicklung der API

- [ ] **API-Endpoints definieren**: Entwerfen Sie die notwendigen API-Endpoints für die Kommunikation zwischen der PathPal-App und der Datenbank.

- [ ] **API entwickeln**: Implementieren Sie die API unter Verwendung eines geeigneten Frameworks (z. B. Express.js für Node.js) und gewährleisten Sie die Sicherheit und Authentifizierung.

- [ ] **Datenbankintegration**: Verbinden Sie die API mit der Datenbank, um Raumumrissdaten, Standortdaten und weitere relevante Informationen zu speichern und abzurufen.

### Erstellung der Datenbank

- [ ] **Datenbankdesign**: Entwerfen Sie das Datenbankschema, das für die Speicherung von Raumumrissdaten und Standortinformationen erforderlich ist.

- [ ] **Datenbank erstellen**: Erstellen Sie die Datenbank unter Verwendung eines geeigneten Datenbankverwaltungssystems (z. B. PostgreSQL oder MySQL).

- [ ] **Datenbankzugriff implementieren**: Implementieren Sie den Zugriff auf die Datenbank in der API, um Daten zu speichern und abzurufen.
