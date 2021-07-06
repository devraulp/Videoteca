import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

import Header from "../components/Header";
import Menu from "../components/Menu";
import React from 'react';
import SearchBar from "../components/SearchBar";

export default function Inicio() {
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
      <View>
        <Header/>
        <Menu/>
        <SearchBar/>
      </View>
    </TouchableWithoutFeedback>
  );
}