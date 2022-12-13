import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function TouchableCard({
  name,
  contact_no,
  specialisation,
  date,
  time,
  navigation,
}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ConsultationBooking")}
      style={{
        height: 100,
        elevation: 2,
        backgroundColor: "#FFF",
        marginLeft: 20,
        marginTop: 10,
        borderRadius: 15,
        marginBottom: 10,
        width: 370,
        flexDirection: "row",
      }}
    >
      <Image
        source={require("../assets/doctor.png")}
        style={{
          height: 70,
          width: 70,
          marginTop: 20,
          marginHorizontal: 20,
        }}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          paddingTop: 10,
          paddingHorizontal: 10,
          // justifyContent: "flex-start",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            color: "#00a46c",
            paddingLeft: 35,
          }}
        >
          {specialisation}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              height: 20,
              width: 80,
              backgroundColor: "#000",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <Entypo
              style={{ padding: 2 }}
              name="calendar"
              size={15}
              color="#FFF"
            />
            <Text style={{ paddingLeft: 7, color: "#FFF" }}>{date}</Text>
          </View>
          <View
            style={{
              height: 20,
              width: 80,
              backgroundColor: "#000",
              flexDirection: "row",
              borderRadius: 5,
            }}
          >
            <Fontisto
              style={{ padding: 2 }}
              name="clock"
              size={15}
              color="#FFF"
            />
            <Text style={{ paddingLeft: 7, color: "#FFF" }}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
