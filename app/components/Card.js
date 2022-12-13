import {
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  Linking,
} from "react-native";
import React from "react";
import useAuth from "../auth/useAuth";
import AppText from "./AppText";
import IconButton from "./IconButton";
import Firebase from "../config/firebase";
import colors from "../config/colors";

export default function Card({ name, contact_no, specialisation, date, time }) {
  const { userData } = useAuth();

  return (
    <View style={styles.card}>
      <View style={styles.firstContainer}>
        <View style={styles.dataContainer}>
          <AppText style={styles.patientAppText}>Name :- {name}</AppText>
          <AppText style={styles.patientAppText}>
            Contact No :- {contact_no}
          </AppText>
          <AppText style={styles.patientAppText}>
            Specialisation :- {specialisation}.
          </AppText>
          <AppText style={styles.patientAppText}>Date :- {date}</AppText>
          <AppText style={styles.patientAppText}>Time :- {time}</AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    margin: 20,
    elevation: 10,
    overflow: "hidden",
  },
  firstContainer: {
    width: "100%",
    height: 200,
    flex: 1,
    flexDirection: "row",
  },
  image: {
    height: "90%",
    width: "90%",
    margin: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  ButtonContainer: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  LogoContainer: {
    width: "40%",
    height: "100%",
  },
  dataContainer: {
    flex: 1,
    justifyContent: "center",
  },
  patientAppText: {
    fontSize: 15,
    margin: 5,
  },
});
