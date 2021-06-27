import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, {useState} from 'react';

export default function Header() {

  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])

  const onHandlerChangeItem = (t) => setTextItem(t)

  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems, {id: Math.random().toString(), value:textItem}
    ])
    setTextItem("")
  }
  const deleteItem = (id) => {
    const items = itemList.filter((i) => i.id !== id)
    setItemList(items)
  }
  
  return (
    <View>
      <View style={styles.screen}>
        <Text style={styles.title}>Videoteca</Text>
        <View style={styles.searchBar}>
          <TextInput 
            style={styles.input} 
            value={textItem} 
            placeholder="  Ingresa tu Pelicula" 
            onChangeText={onHandlerChangeItem}
          />
          <Button title="Ingresar" onPress={addItem} />
        </View>      
      </View>
      <View>
        {itemList.map(item => 
        <View style={styles.item}>
          <Text style={styles.itemText} key={item.id} id={item.id}>
            {item.value}
          </Text>
          <Button title="X" onPress={deleteItem.bind(this, item.id)} />
        </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'black',
    padding: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: 'white',
  },
  searchBar: {
    flexDirection: "row",
    marginTop: 20,
  },
  input: {
    backgroundColor: 'gray',
    height: 40,
    width: 250,
    color: 'white',
  },
  item: {
    flexDirection: "row", 
    justifyContent: "space-around",   
    marginTop: 20,
  },
  itemText: {
    width: 250,
    backgroundColor: 'lightgray',   
    textAlignVertical: 'center',
  }
});