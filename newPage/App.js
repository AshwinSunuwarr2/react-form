import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        This is Home page.
      </Text>
      <Button title="About Page" onPress={() => { navigation.navigate('About') }} />
      <Button title="Contact Page" onPress={() => { navigation.navigate('Contact') }} />
    </View>
  )
}
const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        This is About page.
      </Text>
      <Button title="Home Page" onPress={() => { navigation.navigate('Home') }} />
      <Button title="Contact Page" onPress={() => { navigation.navigate('Contact') }} />
    </View>
  )
}
const ContactScreen = ({ navigation }) => {
  return (
    <View>
      <Text>
        This is Contact page.
      </Text>
      <Button title="About Page" onPress={() => { navigation.navigate('About') }} />
      <Button title="Home Page" onPress={() => { navigation.navigate('Home') }} />
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
