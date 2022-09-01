import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, input, Button, Input } from 'react-native-elements';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    return (<View style={styles.container}>
        <Text h1> Sign up for tracker  </Text>
        <Input
            label='Email'
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
        />
        <Input
            label='Password'
            value={Password}
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setPassword} />

        <Button title="Sign Up" />

    </View>)
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        paddingBottom: 300,
        paddingTop: 100

    }
});

export default SignupScreen;