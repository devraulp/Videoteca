import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import React from 'react';

export default function Menu() {
  return (
    <View style={styles.menu}>
        <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}> Mis Peliculas </Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}> Mis Series </Text>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 20,
    },
    button: {
        backgroundColor: '#2196F3',
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        paddingHorizontal: 20,
        fontSize: 25,
        color: "white",
        textAlign: 'center',
    }
});