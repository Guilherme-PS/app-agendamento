export async function inicializeDatabase(database) {
    try {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT, 
                usuario TEXT NOT NULL UNIQUE, 
                senha TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS agendamentos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                agendamentos TEXT NOT NULL,
                userId INTEGER NOT NULL,
                FOREIGN KEY (userId) REFERENCES usuarios(id)
            );
        `);
    }
    catch(error) {
        console.log(error);
    }
}