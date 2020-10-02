import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const ListItem = ({item, deleteItem}) =>{
    return (
        <TouchableOpacity>
        <View style={styles.container}>
            <Text style={styles.text}>{item.item}</Text>
            <Button onPress={() => deleteItem(item)} style={styles.button} title="delete" />
        </View>
        </TouchableOpacity>
    )
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: "rgba(222, 222, 222, 0.1)",
            padding: 10,
            margin: 0,
            flexDirection: "row",
            justifyContent: "space-between",
            shadowColor: "#000",
            shadowOffset: {width: 3, height: 3},
            shadowOpacity: 100,
            shadowRadius: 20,
            elevation: 1,
            borderBottomWidth: 1,
            borderColor: "lightgray"
        },
        text:{
            color: "#333",
            fontSize: 20,
            fontFamily: "serif"
        },
        button: {
            
        }

    });
export default ListItem
