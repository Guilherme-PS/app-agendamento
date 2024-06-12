import * as SQLite from "expo-sqlite";
import * as Crypto from "expo-crypto";

let db;

export async function initDatabase() {
    db = await SQLite.openDatabaseAsync("dbApp");
}

export async function createDatabase() {
    try {
        await db.runAsync(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                usuario TEXT NOT NULL UNIQUE, 
                senha TEXT NOT NULL
            )
        `);
    }
    catch(error) {
        console.log(error);
    }
    try {
        await db.runAsync(`
            CREATE TABLE IF NOT EXISTS agendamentos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            agendamentos TEXT NOT NULL,
            horario DATETIME NOT NULL,
            userId INTEGER NOT NULL,
            FOREIGN KEY (userId) REFERENCES usuarios(id)
            );
        `);
    }
    catch(error) {
        console.log(error);
    }
}

export async function SignUp(usuario, senha) {      
    const algoritmo = 'SHA256';
    const senhaCriptografada = Crypto.digestStringAsync(Crypto[algoritmo], senha);
  
    try {
        let userCheck = await db.getFirstAsync(`
            SELECT usuario
            FROM usuarios
            WHERE usuario = (?)
        `, [usuario]);
        
        if(userCheck == null) {
            await db.runAsync(`
                INSERT INTO usuarios (usuario, senha) VALUES (?, ?)
              `, [usuario, senhaCriptografada]);
    
            return true;
        }
        else {
            return false;
        }
    }
    catch(error) {
        console.error("Erro ao criar usuário: ", error);
    }
}

export async function SignIn(usuario, senha) {
    try {
        const algoritmo = "SHA256";
        const senhaCriptografadaVerificada = Crypto.digestStringAsync(Crypto[algoritmo], senha);
    
        let result = await db.getFirstAsync(
            `
          SELECT * FROM usuarios WHERE usuario = (?) AND senha = (?)
        `,
            [usuario, senhaCriptografadaVerificada]
        );
        
        if(result !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    catch(error) {
        console.log(error);
    }
}