import { StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react';

export default function Header() {

  return (
    <View>
      <View style={styles.screen}>
        <Text style={styles.title}>Videoteca</Text>    
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    paddingTop: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
  }
});