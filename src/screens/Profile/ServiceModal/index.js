import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    Image
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Hr from "../../../components/Hr";
import styles from "./styles";

const weekDays = ["Seg", "Ter", "Qua", "Qui", "Sex"];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const getDays = () => {
    let days = [];
    const now = new Date();

    for (let i = 0; i < 7 && days.length < 5; i++) {
        let day = now.getDay();

        if (day !== 0 && day !== 6) {
            days.push({
                WeekDay: day,
                Day: now.getDate() < 10 ? "0" + now.getDate() : now.getDate(),
            });
        }

        now.setDate(now.getDate() + 1);
    }

    return days;
};

export default function ServiceModal({ service, price, hours, duration, modalVisible, setModalVisible }) {
    const days = useMemo(() => getDays(), []);

    const closeModal = useCallback(
        () => setModalVisible(!modalVisible),
        [modalVisible, setModalVisible]
    );

    const [selectedDay, setSelectedDay] = useState(days[0]);
    const [selectedHour, setSelectedHour] = useState(null);
    const [isDisabled, setDisabled] = useState(false);
    const [confirmModal, setConfirmModal] = useState(false);

    const closeAllModal = useCallback(
        () => {
            setConfirmModal(!confirmModal);
            setModalVisible(!modalVisible);
            setSelectedDay(days[0]);
            setSelectedHour(null);
        },
        [confirmModal, setConfirmModal, modalVisible, setModalVisible]
    );
    

    useEffect( () => {
        setDisabled(selectedDay == null || selectedHour == null);
    }, [selectedDay, selectedHour])

    const makeSchedule = (day, completeHour) => {
        let year = new Date().getFullYear();
        let month = new Date().getMonth();

        let hour = completeHour[0];
        let min = completeHour[1]
        
        let date = new Date(Date.UTC(year, month, day.Day, hour, min));

        // colocar no bd

        setConfirmModal(!confirmModal);
    }

    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            statusBarTranslucent={true}
            onRequestClose={closeModal}
        >
            <View style={styles.overlay}>
                <View style={styles.modalView}>
                    <View style={{ width: 50 }}>
                        <TouchableOpacity onPress={closeModal}>
                            <Feather
                                name="chevron-down"
                                size={40}
                                color="#3C3C3A"
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.details}>
                        <View>
                            <Text style={styles.serviceName}>{service}</Text>
                            <Text style={styles.serviceDuration}>
                                Duração (Aprox): {duration}
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.servicePrice}>R$ {price}</Text>
                        </View>
                    </View>

                    <Hr />

                    <View style={{ marginBottom: 25 }}>
                        <Text style={styles.title}>Escolha um Dia</Text>

                        <View style={styles.list}>
                            <Text style={styles.month}>
                                {months[new Date().getMonth()]}
                            </Text>

                            <FlatList
                                data={days}
                                horizontal
                                contentContainerStyle={styles.listContainer}
                                renderItem={({ item }) => {
                                    const isSelected =
                                        selectedDay?.Day === item.Day;

                                    return (
                                        <TouchableOpacity
                                            style={[
                                                styles.dateContainer,
                                                {
                                                    backgroundColor: isSelected
                                                        ? "#3C3C3A"
                                                        : "transparent",
                                                },
                                            ]}
                                            onPress={() => setSelectedDay(item)}
                                        >
                                            <Text
                                                style={[
                                                    styles.date,
                                                    {
                                                        color: isSelected
                                                            ? "#F9F9F9"
                                                            : "#3C3C3A",
                                                    },
                                                ]}
                                            >
                                                {weekDays[item.WeekDay - 1]}
                                                {"\n"}
                                                {item.Day}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                }}
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={styles.title}>Escolha um Horário</Text>

                        <FlatList
                            data={hours}
                            contentContainerStyle={styles.listContainer}
                            renderItem={({ item }) => {
                                return (
                                    <View style={styles.hoursContainer}>
                                        <TouchableOpacity
                                            style={styles.hourBtn}
                                            onPress={() =>
                                                setSelectedHour(item)
                                            }
                                        >
                                            <Text style={styles.hours}>
                                                {item}
                                            </Text>
                                            <Feather
                                                name={
                                                    selectedHour === item
                                                        ? "check-circle"
                                                        : "circle"
                                                }
                                                size={20}
                                                color={"#909090"}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                );
                            }}
                        />
                    </View>

                    <View style={{ marginTop: 25 }}>
                        <TouchableOpacity
                            style={[
                                styles.confirmBtn,
                                {
                                    backgroundColor: isDisabled
                                        ? "#A0A0A0"
                                        : "#3C3C3A",
                                },
                            ]}
                            disabled={isDisabled}
                            onPress={() =>
                                makeSchedule(
                                    selectedDay,
                                    selectedHour.split(":")
                                )
                            }
                        >
                            <Text style={styles.confirmBtnText}>
                                Confirmar Agendamento
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={confirmModal}
                        statusBarTranslucent={true}
                        onRequestClose={closeAllModal}
                    >
                        <View style={styles.confirmBox}>
                            <Image
                                source={require("../../../../assets/images/correct.png")}
                                style={styles.correctImg}
                            />
                            <Text style={ styles.confirmText }>Agendamento Feito com Sucesso!</Text>

                            <TouchableOpacity style={ styles.returnHomeBtn } onPress={closeAllModal}>
                                <Text style={ styles.returnHomeBtnText}>Ir para a Página Inicial</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </View>
        </Modal>
    );
}

