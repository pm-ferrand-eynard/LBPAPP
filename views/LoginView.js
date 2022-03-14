import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";
import { useAuth } from "../providers/AuthProvider";


export function LoginView({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signIn } = useAuth();

  useEffect(() => {
    // If there is a user logged in, go to the Projects page.
    if (user != null) {
      navigation.navigate("Accueil");
    }
  }, [user]);

  // The onPressSignIn method calls AuthProvider.signIn with the
  // email/password in state.
  const onPressSignIn = async () => {
    console.log("Trying sign in with user: " + email);
    try {
      await signIn(email, password);
      console.log("connecter", email )
    } catch (error) {
      const errorMessage = `Failed to sign in: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

  // The onPressSignUp method calls AuthProvider.signUp with the
  // email/password in state and then signs in.
  // const onPressSignUp = async () => {
  //   console.log("Trying signup with user: " + email);
  //   try {
  //     await signUp(email, password);
  //     signIn(email, password);
  //   } catch (error) {
  //     const errorMessage = `Failed to sign up: ${error.message}`;
  //     console.error(errorMessage);
  //     Alert.alert(errorMessage);
  //   }
  // };

  return (
    <View style={styles.mainLogin}>
      <Text style={styles.firstText}>Connection à votre restaurant</Text>
      <View>

        <View style={styles.inputContainer}>
          <Text style={styles.InputName}>Identifiant restaurant </Text>
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
            <Text style={styles.InputName}>Mot de passe restaurant </Text>

            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              placeholder="password"
              style={styles.inputStyle}
              secureTextEntry
            />
          </View>

        </View>
        <Button onPress={onPressSignIn} title="Se connecter" style={styles.inputButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLogin: {
    backgroundColor: "black",
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  },
  firstText: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    color: "white",
    fontSize: 50
  },
  InputName: {
    paddingBottom: 5,
    color: "white",
    fontSize: 20
  },
  inputContainer: {
    padding: 5,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center'
  },
  inputStyle: {
    width: 300,
    borderColor: "white",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
  },
  inputButton: {
    backgroundColor: "yellow"
  }

});