import { Image, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import React, {useState} from 'react';

const SearchBar = () => {
    
    const [textItem, setTextItem] = useState("")
    const [itemList, setItemList] = useState([])
    const [searchResult, setSearchResult] = useState(false)
  
    const onHandlerChangeItem = (t) => {
      setTextItem(t)
    }
    
    const getItem = async () => {
      if (textItem) {
        const response = await fetch(
        `https://www.omdbapi.com/?s=${textItem}&apikey=296659c4`
        );
        const item = await response.json();
        if (item.Response === "False") {        
          setSearchResult(true)
        }else if (item.Response === "True") {      
          setSearchResult(false)
          setItemList([...item.Search]);
        };  
      }else {setItemList([])  }  
    };
  
    const addItem = () => {    
      getItem();
      setTextItem("")
      Keyboard.dismiss()
    };

    return(
        <View>
            <View style={styles.searchBar}>
                <TextInput 
                    style={styles.input} 
                    value={textItem} 
                    placeholder="  Ingresa tu Pelicula o Serie" 
                    onChangeText={onHandlerChangeItem}
                />
                <TouchableHighlight style={styles.button} onPress={addItem}>
                    <Text style={styles.buttonText}>Buscar</Text>
                </TouchableHighlight>
            </View>  
            <ScrollView>
                {itemList && searchResult == false ? (itemList.map(item =>
                    <View style={styles.item} key={item.imdbID}>
                        <View style={styles.itemImage}>
                            <Image style={styles.image} source={{uri: item.Poster}} />
                            <Text>{item.Title}</Text>
                        </View>
                        <View style={styles.selectMenu}>
                            <TouchableHighlight style={styles.selectButton}>
                                <Text style={styles.buttonText}>Ya la ví</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={styles.selectButton}>
                                <Text style={styles.buttonText}>La quiero ver</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                )) : (
                <View>
                    <Text>No encontramos nada</Text>
                </View>
                )}
            </ScrollView>
        </View>
    )    
};

export default SearchBar;

const styles = StyleSheet.create ({    
    searchBar: {
        flexDirection: "row",
        marginTop: 10,
        alignSelf: "center",
        paddingVertical: 5,
    },
    input: {          
        borderRadius: 10,
        backgroundColor: 'gray',
        height: 40,
        width: 250,
        color: 'white',
    },
    button: {
        backgroundColor: '#2196F3',
        borderRadius: 10,  
        marginLeft: 10,
        width: 70,
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    item: {
        flexDirection: "row", 
        marginTop: 20,
        justifyContent: "space-around",
        marginHorizontal: 30,
    },
    itemText: {
        flexDirection: "column",
        width: 250,
        backgroundColor: 'lightgray',   
        textAlignVertical: 'center',
    },
    image: {
        width: 120,
        height: 170,
        alignSelf: "center",
    },
    itemImage: {
        backgroundColor: "lightgray",        
        borderRadius: 10,
        width: "50%",
        alignSelf: "center",
        alignItems: "center"
    }, 
    selectMenu: {        
        flexDirection: "column", 
        alignSelf: "center",
        width: "40%",
    },
    selectButton: {
        backgroundColor: '#2196F3',
        borderRadius: 10,  
        margin: 10,
        padding: 15,
        justifyContent: 'center',
    }
})