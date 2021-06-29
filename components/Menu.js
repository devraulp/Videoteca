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
        paddingTop: 2,
        marginHorizontal: 25
    },
    button: {
        backgroundColor: '#2196F3',
        width: "49%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 25,
        color: "white",
        textAlign: 'center',
    }
});