import AsyncStorage from "@react-native-async-storage/async-storage";

export async function _storeData(key, dict) {
    try {
        const value = await AsyncStorage.getItem(key);
        
        if(value === null) {
            await AsyncStorage.setItem(key, JSON.stringify(dict));

            return true;
        }
    }
    catch(error){
        alert(error);
    }
}

export const _retrieveAllData = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        
        let data = [];

        values.forEach(item => {
            data.push(JSON.parse(item[1]));
        })
        
        return data;
    }
    catch(error) {
        alert(error);
    }        
}

export async function _consultData(key) {
    try {
        const value = await AsyncStorage.getItem(key);

        if(value !== null) {
            return true;
        }
        else {
            return false
        }
    }
    catch(error) {
        alert(error);
    }
}

export async function _removeItem(key) {
    try {
        await AsyncStorage.removeItem(key);
    }
    catch(error) {
        alert(error);
    }
}