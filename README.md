# 🧾 README.md — GrooveNomad

## 📌 Présentation

GrooveNomad est une application web qui permet à des clients de créer des propositions personnalisées de séjour pour des festivals musicaux, en fonction de leurs choix de destination, transport, hébergement et disponibilités.

L'application repose sur un front-end en Next.js avec un chatbot intégré, et un backend constitué de plusieurs scénarios Make connectés à une base de données Airtable.

## 🏗 Architecture Générale

```text
Client (Landing Page + Chatbot)
        |
        | Appels webhook
        V
      Make (getFestivals, getHebergements, getTransports)
        |
        V
    Airtable (6 tables)
        |
        | Enrichissement & génération de PDF
        V
      Make (createPDF, sendDemande)
        |
        V
     Client (reçoit la proposition par email)
```

## 🖥 Frontend

* Framework : Next.js (React)
* UI : shadcn/ui (basé sur Tailwind CSS)
* Animation : Framer Motion
* Composant principal : Chatbot (flow de questions/réponses)
* Appels backend : Webhooks Make en POST via fetch / axios

## 🧩 Base de données Airtable

| Table               | Utilité principale                          |
| ------------------- | ------------------------------------------- |
| Festivals           | Infos festivals (nom, date, lieu, prix...)  |
| Clients             | Infos utilisateur (nom, mail, téléphone...) |
| Propositions        | Historique des devis envoyés                |
| Destinations        | Lieux, aéroports, festival associé          |
| Types d'hébergement | Prix, description, confort                  |
| Types de transport  | Type, ville de départ, prix, extras         |

📸 Voir schéma relationnel : (capture à insérer ici)

## 🔁 Backend Make

Backends décomposés en scénarios déployés sur plusieurs comptes gratuits.

### Scénario : getFestivals

* 🔗 Entrée : Webhook (POST avec nom de festival)
* 🔍 Action : Recherche dans la table "Festivals"
* 📤 Sortie : JSON avec infos festival (dates, lieu, prix, logements, transports)

### Scénario : getHebergements

* 🔗 Entrée : Webhook (festival ou destination)
* 🔍 Action : Recherche des hébergements via la table "Destinations"
* 📤 Sortie : JSON avec liste filtrée (type, prix, description)

### Scénario : getTransports

* 🔗 Entrée : Webhook (ville de départ + destination)
* 🔍 Action : Recherche dans "Types de transport"
* 📤 Sortie : Liste d'options (type, prix, temps, extras)

### Scénario : createPDF

* 🔗 Entrée : Infos client + choix + prix
* 📝 Action : Création d'une fiche dans "Propositions" + génération PDF
* 📎 Sortie : Lien vers le PDF enregistré

### Scénario : sendDemande

* 🔗 Entrée : Nom, mail, fichier PDF
* 📤 Action : Envoi d'un mail contenant la proposition personnalisée

## 🧠 Logique conversationnelle du chatbot

1. Le client indique le festival de son choix
2. Appel de getFestivals → récupération des infos
3. Questions sur nombre de personnes, ville de départ
4. Appel à getHebergements + getTransports
5. Une synthèse est affichée et validée
6. Appel à createPDF puis sendDemande

## 📄 Notes

* Structure distribuée sur plusieurs comptes Make
* Dernier update : juillet 2025
