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
// import AppText from "./AppText";
// import ActivityIndicator from "../components/ActivityIndicator";
// import AuthNavigator from "../Navigator/AuthNavigator";

const Home = ({ navigation }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { logout, userData } = useAuth();
  // const { name, Images } = userData;
  // const { userData } = useAuth();
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

  // const signOutUser = async () => {
  //   try {
  //     await Firebase.auth().signOut();
  //     navigation.navigate("Login");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <View
      style={{
        backgroundColor: "#FFF",
        flex: 1,
      }}
    >
      <View
        style={{
          // backgroundColor: "#ff6600",
          // height: "23%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        {/* <Image
          source={{ uri: userData.Images[0] }}
          style={{
            height: 10,
            width: 20,
            marginTop: 50,
          }}
        /> */}
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
            {/* <Image
              // source={require("../images/g.png")}
              style={{ height: 60, width: 60 }}
            /> */}
          </View>
        </View>
      </View>
      {/* <LinearGradient
        colors={["rgba(0,164,109,0.4)", "transparent"]}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}
      > */}
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
        {/* <Image
            source={require("../assets/favicon.png")}
            style={{ height: 20, width: 20 }}
          /> */}
      </View>

      {/* <View style={styles.searchSection}>
          <Icon
            style={styles.searchIcon}
            name="ios-search"
            size={20}
            color="#000"
          />
          <TextInput
            style={styles.input}
            placeholder="User Nickname"
            onChangeText={(searchString) => {
              this.setState({ searchString });
            }}
            underlineColorAndroid="transparent"
          />
        </View> */}
      {/* </LinearGradient> */}

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
          {/* <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -5,
            }}
          ></View> */}
        </View>
        {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View> */}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 1 }}
      >
        {/* <LinearGradient
          colors={["rgba(0,164,109,0.09)", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 50,
            marginTop: 220,
            top: 0,
          }}
        /> */}
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
          {/* <Image source={require("../images/4.png")} /> */}
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
            {/* <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              $400
            </Text> */}
          </View>
          {/* <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#b1e5d3",
              paddingTop: 3,
            }}
          >
            RUSSIA
          </Text> */}
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
          {/* <Image source={require("../images/4.png")} /> */}
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
            {/* <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              $400
            </Text> */}
          </View>
          {/* <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#b1e5d3",
              paddingTop: 3,
            }}
          >
            RUSSIA
          </Text> */}
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
          {/* <Image source={require("../images/4.png")} /> */}
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
            {/* <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              $400
            </Text> */}
          </View>
          {/* <Text
            style={{
              paddingHorizontal: 10,
              fontWeight: "bold",
              color: "#b1e5d3",
              paddingTop: 3,
            }}
          >
            RUSSIA
          </Text> */}
        </TouchableOpacity>
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          // marginTop: -80,
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
          {/* <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -5,
            }}
          ></View> */}
        </View>
        {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View> */}
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
              //   id={Appointment.id}
              //   image={Appointment.image}
              name={Appointment.name}
              contact_no={Appointment.contact_no}
              specialisation={Appointment.specialisation}
              date={Appointment.date}
              time={Appointment.time}
              navigation={navigation}
              //   email={Appointment.email}
              //   disease={Appointment.disease}
              //   phone_no={Appointment.contact_no}
              //   navigation={navigation}
            />
          ))
        ) : (
          <Text style={styles.text}>No Appointment found</Text>
        )}

        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
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
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Dr. Albert Flores
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              Cardiologist
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
                <Text style={{ paddingLeft: 7, color: "#FFF" }}>17 Aug</Text>
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
                <Text style={{ paddingLeft: 7, color: "#FFF" }}>14:30</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          onPress={() => navigation.navigate("Detail")}
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
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              Dr. Albert Flores
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                color: "#00a46c",
                paddingLeft: 35,
              }}
            >
              Cardiologist
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
                <Text style={{ paddingLeft: 7, color: "#FFF" }}>17 Aug</Text>
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
                <Text style={{ paddingLeft: 7, color: "#FFF" }}>14:30</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* <Image
          // source={require("../images/18.png")}
          style={{ marginTop: 20, marginHorizontal: 20 }}
        />
        <Image
          // source={require("../images/19.png")}
          style={{ marginTop: 20, borderRadius: 10 }}
        /> */}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          // marginTop: -80,
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
          {/* <View
            style={{
              height: 4,
              backgroundColor: "#b1e5d3",
              width: 115,
              marginTop: -5,
            }}
          ></View> */}
        </View>
        {/* <View style={{ width: "50%", alignItems: "flex-end" }}>
          <View
            style={{
              backgroundColor: "#00a46c",
              paddingHorizontal: 20,
              paddingVertical: 5,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 13,
                color: "#FFF",
              }}
            >
              More
            </Text>
          </View>
        </View> */}
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

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
