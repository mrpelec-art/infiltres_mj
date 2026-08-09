# infiltres_mj

Outil web pour le Maître du Jeu des **Infiltrés** — le pendant, pour ce jeu, de l'app [`loups_garous_mj`](https://github.com/mrpelec-art/loups_garous_mj).

Une seule page (`index.html`) qui guide le MJ pas à pas : configuration de la partie, attribution des rôles, séquence de nuit rôle par rôle, bilan, vote de jour, et détection automatique de la victoire.

## Utilisation

Ouvrez simplement `index.html` dans un navigateur (mobile ou desktop) — aucune installation nécessaire. Pour l'héberger, servez le dossier tel quel (GitHub Pages, Netlify, etc.).

## Rôles

Pasteur, Agent Double, Entremetteuse, Prophète, Hackeuse, Avocate, Intercesseur, Lanceuse d'Alerte, Juge, Colocataires, Infiltrés, Propagandiste, Ministre, Leader Louange, Guetteuse, Journaliste, Martyr. Le MJ peut activer/désactiver chaque rôle manuellement dans l'onglet « Joueurs & Rôles » ; certains se débloquent automatiquement selon le nombre de joueurs (jusqu'à 25).

## Attribution des rôles

Deux modes, au choix dans l'onglet « Joueurs & Rôles » :
- **Avant la partie** : attribution classique via l'onglet ② Attribution, avant de démarrer.
- **Pendant la Nuit 1 (« Découverte »)** : les cartes sont distribuées physiquement par le MJ, sans rien attribuer dans l'app. La Nuit 1 réveille alors tous les rôles actifs un par un — y compris ceux qui ne se réveillent normalement jamais — pour que le MJ explique chaque rôle et attribue en direct qui le porte. Un bouton « cette carte n'a pas été distribuée » permet de gérer les cartes en trop de l'Agent Double.

## Inscription en ligne (optionnel)

L'app peut générer un QR code que les joueurs scannent pour s'inscrire eux-mêmes avant la partie (`inscription.html`), via Firebase Firestore. Une option permet de s'inscrire en groupe (plusieurs noms d'un coup, pour rester assis côte à côte). Cette fonctionnalité nécessite de compléter `firebase-config.js` avec les identifiants d'un projet Firebase — voir les instructions dans ce fichier. Sans configuration, le reste de l'app fonctionne normalement (attribution des noms à la main).

## Partie à plusieurs communautés liées (optionnel)

Jusqu'à **6 MJ**, chacun sur son propre appareil, peuvent lier leurs parties respectives (Communautés A à F) pour transférer un joueur d'une communauté à une autre en cours de jeu — utile en cas de défection ou de scission du groupe, y compris pour un gros week-end à 3-4 tables. Nécessite aussi Firebase (même projet que l'inscription).

1. Le bouton « 🔗 Lier à une autre communauté » est visible dès l'écran de configuration (avant même l'attribution des rôles), et reste accessible ensuite dans la colonne de gauche une fois la partie lancée. Un premier MJ clique dessus et choisit **Créer la liaison** (il devient la Communauté A) → il obtient un code à 4 caractères.
2. Chaque MJ suivant ouvre le même panneau et **rejoint** avec ce code : il devient automatiquement Communauté B, puis C, D… (jusqu'à F). Le panneau liste en direct toutes les communautés déjà reliées.
3. Le transfert d'un joueur, lui, ne peut se faire qu'une fois **sa propre partie lancée** — il faut des rôles attribués pour avoir quelque chose à transférer. Si un transfert arrive pour une communauté qui n'a pas encore démarré, il est mis en attente et proposé automatiquement dès que ce MJ démarre sa partie.
4. Une fois lancé et lié à au moins une autre communauté, un bouton ↗ apparaît sur chaque joueur en vie. S'il n'y a qu'une seule autre communauté reliée, il l'envoie directement dessus ; s'il y en a plusieurs, un menu demande de choisir la destination. Le MJ qui le reçoit voit une notification et l'accueille dans sa propre partie, avec son rôle. Si ce rôle est déjà attribué à quelqu'un dans la communauté d'accueil, l'app propose d'en choisir un autre (ou de le mettre Croyant de base).

Limites à connaître :
- Seul le **rôle** traverse — pas l'état de ses pouvoirs à usage limité (ex. un Ministre arrivant dans une communauté où le Ministre local a déjà utilisé un pouvoir pourra, dans de rares cas, hériter de cette restriction si le rôle était vacant suite à un décès).
- Chaque communauté garde sa propre nuit/jour/vote — la liaison ne synchronise que les transferts, pas le déroulé de la partie.
- Le bouton de transfert vit dans la colonne de gauche, masquée sur petit écran (mobile) — actuellement plus pratique sur tablette/desktop pour cette fonctionnalité précise.

## Fichiers

- `index.html` — l'outil MJ (page principale)
- `inscription.html` — page d'inscription pour les joueurs (scannée via QR code)
- `firebase-config.js` — configuration Firebase (à compléter, voir le fichier)
- `qrcode.js` — bibliothèque de génération de QR code ([MIT](http://www.opensource.org/licenses/mit-license.php), © Kazuhiko Arase)
- `apple-touch-icon.png` — icône pour ajout à l'écran d'accueil (iOS/Android)
