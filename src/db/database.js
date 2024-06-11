import * as SQLite from "expo-sqlite";

async function createDatabase() {
const db = await SQLite.openDatabaseAsync("dbApp");
await db.execAsync(`
    CREATE TABLE IF NOT EXISTS usuarios(
        id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, 
        usuario TEXT NOT NULL, 
        senha TEXT NOT NULL;
    )
`);
await db.execAsync(`
    CREATE TABLE IF NOT EXISTS agendamentos(
        id INTEGER PRIMARY KEY NOT NULL, 
        agendados TEXT NOT NULL, 
        horario DATETIME NOT NULL,
        userID INTEGER FOREIGNKEY
    );
`);
}


export default {
    createDatabase,
  };
