import React, {useState} from "react";
import {StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";


export function LoginView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Links");
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Trying sign in with user: " + email);
    try {
      await signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign in: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  const onPressSignUp = async () => {
    console.log("Trying signup with user: " + email);
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign up: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

  return (
    <View>
      <Text>Signup or Signin:</Text>
      <View>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="email"
            style={styles.inputStyle}
            autoCapitalize="none"
          />
        </View>
        <View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="password"
              style={styles.inputStyle}
              secureTextEntry
            />
          </View>
          <Button title="Sign In" />
          <Button title="Sign Up" />
          <Button onPress={onPressSignIn} title="Sign In" />
          <Button onPress={onPressSignUp} title="Sign Up" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  }
});