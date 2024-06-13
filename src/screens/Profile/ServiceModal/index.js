import React, { useState, useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
import Hr from "../../../components/Hr";
import DayPicker from "../DayPicker";
import HourPicker from "../HourPicker";
import styles from "./styles";
import { useSchedulesDatabase } from "../../../db/useSchedulesDatabase";
import { useLogin } from "../../Login/LoginProvider";
import { useNavigation } from "@react-navigation/native";

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

export default function ServiceModal({ id, service, price, hours, duration, modalVisible, setModalVisible, setCount }) {
    const navigation = useNavigation();

    const schedulesDatabase = useSchedulesDatabase();
    const { User } = useLogin();

    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);

    const toggleModal = useCallback(() => setModalVisible(!modalVisible), [modalVisible, setModalVisible]);

    const isDisabled = useMemo(() => !selectedDay || !selectedHour, [selectedDay, selectedHour]);

    const makeSchedule = useCallback(async () => {
        const [hour, min] = selectedHour.split(':').map(Number);
        const date = new Date(Date.UTC(currentYear, currentMonth, selectedDay.Day, hour, min));
        const response = await schedulesDatabase.toSchedule(User, { id, date });
        
        if(response) {
            setSelectedDay(null);
            setSelectedHour(null);
            toggleModal();
            setCount(await schedulesDatabase.countSchedules(User)) 
            
            navigation.navigate("ConfirmSchedule");
        }
    }, [selectedDay, selectedHour, User, schedulesDatabase, navigation, id]);    

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent
            statusBarTranslucent
            onRequestClose={toggleModal}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={toggleModal} style={{ width: 50 }}>
                        <Feather name="chevron-down" size={40} color="#3C3C3A" />
                    </TouchableOpacity>

                    <View style={styles.details}>
                        <View>
                            <Text style={styles.serviceName}>{service}</Text>
                            <Text style={styles.serviceDuration}>Duração (Aprox): {duration}</Text>
                        </View>
                        <View>
                            <Text style={styles.servicePrice}>R$ {price}</Text>
                        </View>
                    </View>

                    <Hr />

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.title}>Escolha um Dia</Text>
                        <View style={styles.list}>
                            <Text style={styles.month}>{months[currentMonth]}</Text>
                            <DayPicker selectedDay={selectedDay} onSelectDay={setSelectedDay} />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.title}>Escolha um Horário</Text>
                        <HourPicker hours={hours} selectedHour={selectedHour} onSelectHour={setSelectedHour} />
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <TouchableOpacity
                            style={[
                                styles.confirmBtn,
                                { backgroundColor: isDisabled ? "#A0A0A0" : "#3C3C3A" }
                            ]}
                            disabled={isDisabled}
                            onPress={makeSchedule}
                        >
                            <Text style={styles.confirmBtnText}>Confirmar Agendamento</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}