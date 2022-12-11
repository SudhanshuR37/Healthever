import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../auth/useAuth";
import Firebase from "../config/firebase";
import ActivityIndicator from "../components/ActivityIndicator";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import Card from "../components/Card";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function ConsultationBooking({ navigation }) {
  const [appointments, setAppointments] = useState([]);
  //   const [loading, setLoading] = useState(false);
  const { userData } = useAuth();
  const db = Firebase.firestore();

  useEffect(() => {
    // setLoading(true);
    db.collection("hospitals")
      .doc(userData.id)
      .collection("Appointments")
      .onSnapshot((snapshot) => {
        setAppointments(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            name: doc.data().Name,
            contact_no: doc.data().contact_No,
            specialisation: doc.data().Specialisation,
            date: doc.data().Date,
            time: doc.data().Time,
            // image: doc.data().Image,
          }))
        );
      });

    // setLoading(false);
  }, []);

  return (
    <Screen style={styles.container}>
      <ScrollView style={styles.scroll}>
        {appointments.length ? (
          appointments.map((Appointment) => (
            <Card
              key={Appointment.id}
              //   id={Appointment.id}
              //   image={Appointment.image}
              name={Appointment.name}
              contact_no={Appointment.contact_no}
              specialisation={Appointment.specialisation}
              date={Appointment.date}
              time={Appointment.time}
              //   email={Appointment.email}
              //   disease={Appointment.disease}
              //   phone_no={Appointment.contact_no}
              //   navigation={navigation}
            />
          ))
        ) : (
          <AppText style={styles.text}>No Appointment found</AppText>
        )}
      </ScrollView>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.profileButton}
      >
        <AntDesign name="user" size={30} color="white" />
      </TouchableOpacity> */}
      <View
        style={{
          height: 50,
          elevation: 2,
          backgroundColor: "#fff",
          marginLeft: 20,
          // marginTop: 10,
          borderRadius: 15,
          marginBottom: 10,
          width: 370,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <View style={{ padding: 10 }}>
            <Ionicons
              style={{ padding: 2 }}
              name="home-outline"
              size={25}
              color="#000"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ConsultationBooking")}
        >
          <View style={{ padding: 10 }}>
            <Feather
              style={{ padding: 2 }}
              name="calendar"
              size={25}
              color="#000"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("MedicineDelivery")}
        >
          <View style={{ padding: 10 }}>
            <Feather
              style={{ padding: 2 }}
              name="message-circle"
              size={25}
              color="#000"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LabTests")}>
          <View style={{ padding: 10 }}>
            <Fontisto
              style={{ padding: 2 }}
              name="laboratory"
              size={25}
              color="#000"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={{ padding: 10 }}>
            <Ionicons
              style={{ padding: 2 }}
              name="person-outline"
              size={25}
              color="#000"
            />
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({});
