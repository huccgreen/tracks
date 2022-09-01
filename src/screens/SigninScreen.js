import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SigninScreen = ({ navigation }) => {
    return (<>
        <Text> SigninScreen </Text>
        <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
    </>)
};

const styles = StyleSheet.create({});

export default SigninScreen;