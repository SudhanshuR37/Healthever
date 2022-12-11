import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import useAuth from "../auth/useAuth";
import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton,
  FormPicker as Picker,
  FormImagePicker,
  ErrorMessage,
} from "../components/Forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import ActivityIndicator from "../components/ActivityIndicator";
import Firebase, { createAppointment } from "../config/firebase";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";

// const categories = [
//   {
//     label: "karad",
//     value: 1,
//   },
//   {
//     label: "Satara",
//     value: 2,
//   },
//   {
//     label: "Phaltan",
//     value: 3,
//   },
//   {
//     label: "Patan",
//     value: 4,
//   },
//   {
//     label: "Khatav",
//     value: 5,
//   },
//   {
//     label: "Koregoan",
//     value: 6,
//   },
//   {
//     label: "Man",
//     value: 8,
//   },
//   {
//     label: "Wai",
//     value: 9,
//   },
//   {
//     label: "Khandala",
//     value: 10,
//   },
//   {
//     label: "Jaoli",
//     value: 11,
//   },
//   {
//     label: "Mahabaleshwar",
//     value: 12,
//   },
// ];

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  Contact_No: Yup.number().required().min(10).label("Contact no."),
  specialisation: Yup.string().required().label("Specialisation"),
  //   Taluka: Yup.object().required().nullable().label("Taluka"),
  //   images: Yup.array().min(1, "Please Select Atleast on Image"),
  //   password: Yup.string().required().min(4).label("Password"),
  date: Yup.string().required().label("Date"),
  time: Yup.string().required().label("Time"),
});

export default function ProfileScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //   const db = Firebase.firestore();

  const { userData, logout } = useAuth();

  //Handle Submit
  const HandleSubmit = async ({
    name,
    Contact_No,
    specialisation,
    date,
    time,
  }) => {
    try {
      setLoading(true);
      //   const { user } = await Firebase.auth().createUserWithEmailAndPassword(
      //     email,
      //     password
      //   );
      await createAppointment(
        userData.id,
        name,
        Contact_No,
        specialisation,
        date,
        time
      );
      //   auth.logIn(user);
      setLoading(false);
    } catch (error) {
      setError("An unexprected error occured");
      console.log(error);
      setLoading(false);
      return;
    }
  };

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <ScrollView>
          {/* <Image
            style={styles.logo}
            source={require("../assets/favicon.png")}
          /> */}
          <Form
            initialValues={{
              name: "",
              Contact_No: "",
              Specialisation: "",
              //   Taluka: null,
              //   images: [],
              date: "",
              time: "",
            }}
            onSubmit={HandleSubmit}
            validationSchema={validationSchema}
          >
            {/* <FormImagePicker name="images" /> */}
            <ErrorMessage error={error} />
            <FormField maxLength={255} name="name" placeholder="Name" />
            {/* <FormField maxLength={255} name="email" placeholder="Email" /> */}
            <FormField
              keyboardType="numeric"
              maxLength={10}
              name="Contact_No"
              placeholder="Contact No."
            />
            <FormField
              maxLength={255}
              name="specialisation"
              placeholder="Specialisation"
            />
            <FormField maxLength={255} name="date" placeholder="Date" />
            <FormField maxLength={255} name="time" placeholder="Time" />
            {/* <Picker
              items={categories}
              name="Taluka"
              placeholder="Taluka"
              PickerItemComponent={CategoryPickerItem}
            /> */}

            {/* <FormField multiline name="Address" placeholder="Address" /> */}
            {/* <FormField
              name="password"
              placeholder="Password"
              secureTextEntry={true}
            /> */}
            <SubmitButton title="Add Appointment" />
            <Button title={"Logout"} onPress={() => logout()}></Button>
          </Form>
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
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    backgroundColor: colors.gray,
  },
  logo: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
});
