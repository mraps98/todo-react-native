import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "./Header";
import ListItem from "./ListItem";
import AddItem from "./AddItem";
export default function App() {
  const [items, setItems] = useState(
    [
      {id: Math.random()*10000, item: "Build react native app"}, 
      {id: Math.random()*10000, item: "Organic tarkari"},
      {id: Math.random()*10000, item: "Go to wallmart"},
      {id: Math.random()*10000, item: "Go to University center"},
      {id: Math.random()*10000, item: "Go to sleep now"},
      {id: Math.random()*10000, item: "Dummy data"}, 
      {id: Math.random()*10000, item: "Lorem Ipsumrkari"},
      {id: Math.random()*10000, item: "Go to wallmart"},
      {id: Math.random()*10000, item: "Study react native"},
      {id: Math.random()*10000, item: "Go to sleep now"},
      {id: Math.random()*10000, item: "Build react native app"}, 
      {id: Math.random()*10000, item: "Organic tarkari"},
      {id: Math.random()*10000, item: "Go to wallmart"},
      {id: Math.random()*10000, item: "Celebrate Dashain"},
      {id: Math.random()*10000, item: "Go to sleep now"},
    ]
    );

  const addItem = (item) => {
    if(item!==""){
      setItems([...items, {id: Math.random()*10000, item: item}]);
    }
  }

  const deleteItem = (item) => {
    setItems(items.filter(i=>i.id!=item.id));
  }
  return (
    <SafeAreaView style={styles.root}>
      <View className="header">
        <Header />
      </View>
      <View className="body" style={styles.body}>
        <FlatList 
          data={items}
          renderItem={({item})=>(<ListItem key={item.id} item={item} deleteItem={deleteItem}/>)}
          keyExtractor={(item)=>(item.id)}
          />
        <AddItem addItem={addItem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root:{
    flex: 1
  },
  body: {
    flex: 1
  }
});


