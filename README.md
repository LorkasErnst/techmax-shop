# TechMax - Retro-Technik Online-Shop

**TechMax** ist ein mein moderner Online-Shop für Retro-Technik, entwickelt mit **Django** und **JavaScript**. Dieses Projekt ist meine erste interaktive Webanwendung, die es Nutzern ermöglicht, alte Technikprodukte zu durchsuchen, sie in den Warenkorb zu legen und zu bestellen.

**Live-Demo**: [TechMax Shop auf PythonAnywhere](https://techmaxbyle.pythonanywhere.com/)

## Features

- **Warenkorbsystem** für angemeldete Benutzer und Gäste
- **Benutzer-Authentifizierung** (Registrierung, Login, Logout)
- **PayPal-Zahlungsintegration** (im Testmodus)
- **Dynamisches Laden von Bildern & Produktdetails**
- **Admin-Panel für Shop-Management**
- **Deployment auf PythonAnywhere**

## Projektstruktur

```
techmax/
│-- shop/                  # Haupt-App mit allen Django-Views & Models
│-- static/                # Statische Dateien (CSS, JS, Bilder)
│-- techmax/               # Django-Projektordner mit Einstellungen
│-- manage.py              # Django Management Script
│-- requirements.txt       # Abhängigkeiten
│-- README.md              # Diese Dokumentation
```

## Installation & Setup

1. **Repository klonen**
   ```bash
   git clone https://github.com/dein-github-username/techmax.git
   cd techmax
   ```

2. **Virtuelle Umgebung erstellen & aktivieren**
   ```bash
   python -m venv venv
   source venv/bin/activate  # macOS & Linux
   venv\Scripts\activate     # Windows
   ```

3. **Abhängigkeiten installieren**
   ```bash
   pip install -r requirements.txt
   ```

4. **Datenbankmigrationen durchführen**
   ```bash
   python manage.py migrate
   ```

5. **Superuser für Admin-Panel erstellen (optional)**
   ```bash
   python manage.py createsuperuser
   ```

6. **Lokalen Server starten**
   ```bash
   python manage.py runserver
   ```
   
   Die Anwendung ist jetzt unter `http://127.0.0.1:8000/` erreichbar.

## Deployment auf PythonAnywhere

1. Code auf PythonAnywhere hochladen
2. Virtuelle Umgebung einrichten & Abhängigkeiten installieren
3. Statische Dateien sammeln:
   ```bash
   python manage.py collectstatic --noinput
   ```
4. Webserver konfigurieren und App neustarten

## 📝 Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**. Du kannst es frei nutzen, ändern und verteilen.

---

Falls du Fragen hast oder mitentwickeln möchtest, erstelle einfach ein Issue oder einen Pull Request. Viel Spaß mit TechMax! 🚀
