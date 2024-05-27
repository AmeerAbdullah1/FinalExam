import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './HomeScreen';
import MyPlans   from './MyPlans';
import MyCalendar from './MyCalender';


export default function App() {
  return (
    <View style = {styles.container}>
         <HomeScreen/>  
        {/* <MyCalendar/>   */}
       {/* <MyPlans/>  */}
      <StatusBar style="auto" />
    </View>
  );
}
;
const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take up the full screen
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: 'white', // Light grey background color
  },
});
