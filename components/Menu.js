import { Button, StyleSheet, View } from 'react-native';

import React from 'react';

const Menu = ({ navigation }) => {
  return (
    <View style={styles.menu}>
        <Button title="Mis Peliculas"
            onPress={() => navigation.navigate("MisPeliculas")}
        />
        <Button title="Mis Series"
            onPress={() => navigation.navigate("MisSeries")}
        />
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
    menu: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 2,
        marginHorizontal: 25
    }
});