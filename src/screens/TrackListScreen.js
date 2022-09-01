import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return (<><Text> TrackListScreen </Text>
        <Button title="Go to TrackDetail" onPress={() => navigation.navigate("TrackDetails")} />
    </>)
};

const styles = StyleSheet.create({});

export default TrackListScreen;