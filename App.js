import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from './views/LoginView';
import { Accueil } from "./views/Acceuil";
import { StyleSheet, Text, View } from 'react-native';
import { AuthProvider } from './providers/AuthProvider';
import { Logout } from "./components/Logout";
import { MyTabs } from "./components/MyTabs";


const Stack = createStackNavigator();


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MyTabs"
            component={MyTabs}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Login View"
            component={LoginView}
            options={{ title: "Page de connection" }}
          />
          <Stack.Screen
            name="Accueil"
            component={Accueil}
            options={{ title: "Page d'accueil" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
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
