import React, { cloneElement, useEffect, useState } from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import useAuth from "../auth/useAuth";
import Firebase from "../config/firebase";
import ActivityIndicator from "../components/ActivityIndicator";
import TouchableCard from "../components/TouchableCard";
import Screen from "../components/Screen";

const Home = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout, userData } = useAuth();
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
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View
        style={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            width: "100%",
          }}
        >
          <View style={{ width: "50%" }}>
            <Text
              style={{
                fontSize: 28,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Hey, {userData.name}
            </Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => logout()}>
              <Image
                source={{ uri: userData.Images[0] }}
                style={{
                  height: 60,
                  width: 60,
                  marginTop: 25,
                  borderRadius: 50,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          paddingVertical: 8,
          paddingHorizontal: 20,
          marginHorizontal: 20,
          borderRadius: 15,
          marginTop: 10,
          elevation: 2,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Search for doctors, labs, etc."
          placeholderTextColor="#b1e5d3"
          style={{
            fontWeight: "bold",
            fontSize: 18,
            width: 260,
          }}
        />
        <Ionicons
          style={styles.searchIcon}
          name="ios-search"
          size={20}
          color="#000"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <View style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#000",
            }}
          >
            Services
          </Text>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 1 }}
      >
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
            width: 160,
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <Entypo
              style={styles.searchIcon}
              name="old-phone"
              size={40}
              color="#000"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 5,
              paddingHorizontal: 25,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Consultations
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 100,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <MaterialCommunityIcons
              style={styles.searchIcon}
              name="pill"
              size={40}
              color="#000"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 5,
              paddingHorizontal: 35,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Medicines
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 100,
            elevation: 2,
            backgroundColor: "#FFF",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}
        >
          <View
            style={{
              alignItems: "center",
              paddingHorizontal: 20,
              paddingTop: 5,
            }}
          >
            <Fontisto
              style={styles.searchIcon}
              name="laboratory"
              size={40}
              color="#000"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 5,
              paddingHorizontal: 30,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Laboratories
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#000",
            }}
          >
            Upcoming Appointments
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: -100 }}
      >
        {appointments.length ? (
          appointments.map((Appointment) => (
            <TouchableCard
              key={Appointment.id}
              name={Appointment.name}
              contact_no={Appointment.contact_no}
              specialisation={Appointment.specialisation}
              date={Appointment.date}
              time={Appointment.time}
              navigation={navigation}
            />
          ))
        ) : (
          <Text style={styles.text}>No Appointment found</Text>
        )}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 17,
              color: "#000",
            }}
          >
            Discounts
          </Text>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: -100 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 150,
            elevation: 2,
            backgroundColor: "#ff6600",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 15,
            marginBottom: 10,
            width: 370,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              color: "#FFF",
            }}
          >
            Comprehensive cardiological examination
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFF",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons
                style={{ padding: 2 }}
                name="mortar-pestle-plus"
                size={20}
                color="#ff6600"
              />
              <Text
                style={{
                  color: "#3cdfff",
                }}
              >
                VIVA
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#000",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                -20%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 150,
            elevation: 2,
            backgroundColor: "#ff6600",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 15,
            marginBottom: 10,
            width: 370,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              color: "#FFF",
            }}
          >
            Comprehensive cardiological examination
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFF",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons
                style={{ padding: 2 }}
                name="mortar-pestle-plus"
                size={20}
                color="#ff6600"
              />
              <Text
                style={{
                  color: "#3cdfff",
                }}
              >
                VIVA
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#000",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                -20%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
          style={{
            height: 150,
            elevation: 2,
            backgroundColor: "#ff6600",
            marginLeft: 20,
            marginTop: 10,
            borderRadius: 15,
            marginBottom: 10,
            width: 370,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              padding: 10,
              color: "#FFF",
            }}
          >
            Comprehensive cardiological examination
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#FFF",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <MaterialCommunityIcons
                style={{ padding: 2 }}
                name="mortar-pestle-plus"
                size={20}
                color="#ff6600"
              />
              <Text
                style={{
                  color: "#3cdfff",
                }}
              >
                VIVA
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#000",
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                -20%
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    </View>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

export default Home;
