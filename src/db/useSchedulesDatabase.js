import { useSQLiteContext } from "expo-sqlite";
import * as Crypto from "expo-crypto";

export function useSchedulesDatabase() {
    const database = useSQLiteContext();

    async function signUp(user, password) {
        const senhaCriptografada = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);

        const query = `SELECT * FROM usuarios WHERE usuario = ($usuario) AND senha = ($senha);`

        const statement = await database.prepareAsync(`
            INSERT INTO usuarios (usuario, senha) VALUES ($usuario, $senha)    
        `);

        try {
            const queryResult = await database.getAllAsync(query, {
                $usuario: user,
                $senha: senhaCriptografada
            });

            if(queryResult.length == 0 ) {
                const result = await statement.executeAsync({
                    $usuario: user,
                    $senha: senhaCriptografada
                });
                
                return result !== undefined;
            }
        } 
        catch (error) {
            console.log(error);
        }
        finally {
            await statement.finalizeAsync();
        }
    }
    
    async function signIn(user, password) {
        const senhaCriptografada = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);

        const query = `SELECT * FROM usuarios WHERE usuario = ($usuario) AND senha = ($senha);`

        try {
            const result = await database.getFirstAsync(query, {
                $usuario: user,
                $senha: senhaCriptografada
            });

            return result != null ? result.id : false;
        } 
        catch (error) {
            console.log(error);
        }
    }

    async function getUser(id) {
        const query = `SELECT usuario FROM usuarios WHERE id = ($id);`

        try {
            const result = await database.getFirstAsync(query, {
                $id: id
            })

            return result;
        }
        catch(error){
            console.log(error);
        }
    }

    return { signUp, signIn, getUser }
}