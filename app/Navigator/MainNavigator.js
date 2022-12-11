import { createStackNavigator } from "@react-navigation/stack";
// import AppointmentHistory from "../Screens/AppointmentHistory";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import LoginScreen from "../Screens/LoginScreen";
import ConsultationBooking from "../Screens/ConsultationBooking";
import LabTests from "../Screens/LabTests";
import MedicineDelivery from "../Screens/MedicineDelivery";
import AboutUs from "../Screens/Aboutus";

const Stack = createStackNavigator();

export default MainNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="ConsultationBooking" component={ConsultationBooking} />
    <Stack.Screen name="LabTests" component={LabTests} />
    <Stack.Screen name="MedicineDelivery" component={MedicineDelivery} />
    {/* <Stack.Screen name="Aboutus" component={AboutUs} /> */}
  </Stack.Navigator>
);
