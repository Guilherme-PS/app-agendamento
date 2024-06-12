import { useSQLiteContext } from "expo-sqlite";
import * as Crypto from "expo-crypto";

async function hashPassword(password) {
    return await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, password);
}

export function useSchedulesDatabase() {
    const database = useSQLiteContext();

    async function signUp(user, password) {
        const senhaCriptografada = await hashPassword(password);

        const checkUserQuery = `SELECT * FROM usuarios WHERE usuario = $usuario AND senha = $senha;`;
        const insertUserQuery = `INSERT INTO usuarios (usuario, senha) VALUES ($usuario, $senha);`;

        const statement = await database.prepareAsync(insertUserQuery);

        try {
            const queryResult = await database.getAllAsync(checkUserQuery, {
                $usuario: user,
                $senha: senhaCriptografada
            });

            if (queryResult.length === 0) {
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

        return false;
    }

    async function signIn(user, password) {
        const senhaCriptografada = await hashPassword(password);

        const query = `SELECT id FROM usuarios WHERE usuario = $usuario AND senha = $senha;`;

        try {
            const result = await database.getFirstAsync(query, {
                $usuario: user,
                $senha: senhaCriptografada
            });

            return result ? result.id : false;
        } 
        
        catch (error) {
            console.log(error);
        }

        return false;
    }

    async function getUser(id) {
        const query = `SELECT usuario FROM usuarios WHERE id = $id;`;

        try {
            return await database.getFirstAsync(query, {
                $id: id
            });
        } 
        
        catch (error) {
            console.log(error);
        }

        return null;
    }

    async function toSchedule(id, data) {
        const dictString = JSON.stringify(data);

        const checkScheduleQuery = `SELECT agendamentos FROM agendamentos WHERE agendamentos = $data AND userId = $userId`;
        const insertScheduleQuery = `INSERT INTO agendamentos (agendamentos, userId) VALUES ($data, $userId);`;

        const statement = await database.prepareAsync(insertScheduleQuery);

        try {
            const queryResult = await database.getFirstAsync(checkScheduleQuery, {
                $data: dictString,
                $userId: id
            });

            if (!queryResult) {
                await statement.executeAsync({
                    $data: dictString,
                    $userId: id
                });

                return true;
            }
        } 
        
        catch (error) {
            console.log(error);
        } 
        
        finally {
            await statement.finalizeAsync();
        }

        return false;
    }

    async function searchByDate(data) {
        const dataString = JSON.stringify(data);

        const checkDateQuery = `SELECT agendamentos FROM agendamentos WHERE agendamentos = $data`;

        try {
            const response = await database.getFirstAsync(checkDateQuery, `%${dataString}%`);
            
            console.log(response)
        }

        catch (error) {
            console.log(error);
        }
    }

    return { signUp, signIn, getUser, toSchedule };
}