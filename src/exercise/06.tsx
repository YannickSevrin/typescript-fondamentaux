"use client"
// Les tuples
// http://localhost:3000/alone/exercise/06.ts

// ❌ NE PAS MODIFIER
// Utilitaire ne faisant pas partie de l'exercice
import displayText, { App, init } from "../lib/exerciseHelper"
const exercice = () => {
  init()

  // ✔️ Début de l'exercice

  // 🐶 Déclare un type `Connexion` un tuple contennant toutes les informations utile a la connexion

  // - le nom de la connexion  (ex : Connexion à Google) `string`
  // - le protocole (ex : ftp, http) `string`
  // - le hostname (ex : google.com) `string`
  // - le port  (ex : 423) `number`
  // - le username : (ex : admin) `string`
  // - le password (ex : admin) `string`
  // 📝 documentation tuples https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
  enum Protocol {
    HTTP = "http",
    HTTPS = "https",
    FTP = "ftp",
  }
  // type Connexion
  type Connexion = [
    nom: string,
    protocole: Protocol,
    hostname: string,
    port: number,
    username: string,
    password: string,
  ]

  // 🐶 Créer une variable 'google' qui contiendra les infos de connexion à google
  const google: Connexion = [
    "google",
    Protocol.HTTPS,
    "google.com",
    423,
    "admin",
    "admin",
  ]

  const gmail: Connexion = [
    "gmail",
    Protocol.HTTP,
    "gmail.com",
    423,
    "admin",
    "admin",
  ]

  const ftp: Connexion = ["ftp", Protocol.FTP, "ftp.com", 423, "admin", "admin"]

  const mikecodeur: Connexion = [
    "mikecodeur",
    Protocol.HTTP,
    "mikecodeur.com",
    423,
    "admin",
    "admin",
  ]
  // https google.com 443
  // Affiche le resultat à l'ecran avec le code
  displayText(
    `Connexion ${google[0]} : ${google[1]}://${google[2]}:${google[3]} `
  )

  // 🐶 créer 3 autres connexions de ton choix et affiche le resultat à l'écran

  // 🐶 créer un tableau `connexions` qui contiendra toutes les connexions
  // Ajoute des connexion via l'initialisation et via la méthode `push`
  const connexions: Connexion[] = [google, gmail]
  connexions.push(ftp, mikecodeur)

  let [, gmailProtocol, gmailHostname] = gmail
  displayText(`Connexion ${gmailProtocol} : ${gmailHostname} `)
  /*
eslint
  @typescript-eslint/no-unused-vars: "off"
*/
}
export default () => <App exercice={exercice} />
