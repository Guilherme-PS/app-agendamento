import React, { useState, useEffect, useCallback, useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSchedulesDatabase } from "../../db/useSchedulesDatabase";
import { useLogin } from "../Login/LoginProvider";
import Services from "../../data/Serviços/Services.json";
import styles from "./styles";
import Container from "../../components/Container";
import { useIsFocused } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function Schedules() {
    const { User } = useLogin();
    const schedulesDatabase = useSchedulesDatabase();
    const isFocused = useIsFocused();

    const [allSchedules, setAllSchedules] = useState([]);
    const [hasFetched, setHasFetched] = useState(false);

    const servicesMap = useMemo(() => {
        const map = {};

        Services.forEach((service) => {
            map[service.id] = {
                service: service.service,
                price: service.price,
                serviceId: service.id
            };
        });

        return map;
    }, []);

    const memoizedLoadSchedules = useCallback(async () => {
        try {
            const schedules = await schedulesDatabase.getAllSchedules(User);

            const data = schedules.map((element) => {
                const schedule =
                    typeof element.agendamentos === "string"
                        ? JSON.parse(element.agendamentos)
                        : element.agendamentos;

                const serviceInfo = servicesMap[schedule.id];

                serviceInfo["id"] = element.id

                if (serviceInfo) {
                    schedule.serviceName = serviceInfo.service;
                    schedule.price = serviceInfo.price;
                    schedule.serviceId = serviceInfo.serviceId
                    schedule.id = serviceInfo.id
                } else {
                    schedule.serviceName = "Serviço não encontrado";
                    schedule.price = "Preço não encontrado";
                }

                return schedule;
            });

            setAllSchedules(data);
            setHasFetched(true);
        } 
        catch (error) {
            console.error("Erro ao carregar agendamentos:", error);
        }
    }, [User, schedulesDatabase, servicesMap]);

    useEffect(() => {
        if (isFocused && !hasFetched) {
            memoizedLoadSchedules();
        }

        if (!isFocused) {
            setHasFetched(false);
        }
    }, [isFocused, hasFetched, memoizedLoadSchedules]);

    const handleDelete = async (scheduleId) => {
        const result = await schedulesDatabase.removeSchedule(scheduleId);

        if(result) {
            memoizedLoadSchedules();
        }
    }

    return (
        <Container>
            <View style={styles.listContainer}>
                {allSchedules.length === 0 ? (
                    <Text style={ styles.noScheduleTitle }>Você Não Possui Agendamentos!</Text>
                ) : (
                    <FlatList
                        data={allSchedules}
                        renderItem={({ item }) => {
                            let date = new Date(item.date);

                            return (
                                <View style={styles.schedulesContainer}>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                        }}
                                    >
                                        <View style={styles.dateContainer}>
                                            <Text style={styles.date}>
                                                {("0" + date.getDate()).slice(
                                                    -2
                                                ) +
                                                    "/" +
                                                    (
                                                        "0" +
                                                        (date.getMonth() + 1)
                                                    ).slice(-2)}
                                            </Text>
                                            <Text style={styles.hour}>
                                                {String(
                                                    date.getUTCHours()
                                                ).padStart(2, "0") + ":00"}
                                            </Text>
                                        </View>

                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>
                                                {item.serviceName}
                                            </Text>
                                            <Text style={styles.price}>
                                                R$ {item.price}
                                            </Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity
                                        style={{ padding: 25 }}
                                        onPress={() => handleDelete(item.id)}
                                    >
                                        <Feather
                                            name="trash"
                                            size={20}
                                            color="#191919"
                                        />
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                )}
            </View>
        </Container>
    );
}
