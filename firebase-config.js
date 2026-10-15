// Configuration Firebase du projet "Les Infiltrés".
// Ces valeurs identifient le projet mais ne sont pas secrètes : la sécurité
// réelle est assurée par les règles Firestore, pas par ce fichier.
//
// Les règles doivent autoriser la lecture/écriture des collections "games"
// (QR d'inscription) et "duo" (parties liées à plusieurs communautés,
// jusqu'à 6 : A à F). Si la collection "duo" n'est pas encore couverte par
// tes règles actuelles, ajoute ce bloc dedans (à côté du bloc "games" déjà
// en place) :
//
// Pour pouvoir supprimer une inscription test ou erronée depuis l'app (bouton
// ✕ dans la liste des inscrits), la sous-collection "registrations" (sous
// "games/{code}") doit aussi autoriser la suppression :
//
//     match /games/{code} {
//       ...
//       match /registrations/{regId} {
//         allow read: if true;
//         allow create: if true;
//         allow delete: if true;
//       }
//     }
//
//     match /duo/{code} {
//       allow read: if true;
//       allow create: if !exists(/databases/$(database)/documents/duo/$(code));
//       // "villages" est une map {A:true, B:true, ...} — chaque MJ qui
//       // rejoint y ajoute sa propre lettre (villages.C, etc.), d'où le
//       // hasOnly(['villages']) plutôt qu'une liste de champs fixes.
//       allow update: if request.resource.data.diff(resource.data).affectedKeys()
//                        .hasOnly(['villages']);
//       match /transfers/{transferId} {
//         allow read: if true;
//         allow create: if request.resource.data.keys().hasAll(['fromVillage','toVillage','playerName','consumed']);
//         allow update: if request.resource.data.diff(resource.data).affectedKeys().hasOnly(['consumed']);
//       }
//     }
//
export const firebaseConfig = {
  apiKey: "AIzaSyDJt1sqTuBUaDVIDwp8mQPLq8zMtfc7QaI",
  authDomain: "les-infiltres-b4ea2.firebaseapp.com",
  projectId: "les-infiltres-b4ea2",
  storageBucket: "les-infiltres-b4ea2.firebasestorage.app",
  messagingSenderId: "212590849687",
  appId: "1:212590849687:web:d0c636f8bcff1a2a6703d2",
  measurementId: "G-3M6Z65RWFV"
};
