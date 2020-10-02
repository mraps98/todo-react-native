import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";

const AddItem = ({addItem}) =>{
    
    const [input, setInput] = useState("");
    return(
        <View style={styles.container}>
            <TextInput placeholder="add todo..." value={input} onChangeText={text=>setInput(text)} style={styles.input} multiline={true}/>

            <TouchableOpacity style={styles.button} onPress={()=>{addItem(input); setInput("")}}>
                <Text style={styles.text}>ADD</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 50,
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        backgroundColor: "#fff",
        borderColor: "#ddd",
        borderWidth: 1,
        flex: 0.9,
        height: 40,
        margin: 5,
        borderRadius: 50,
        padding: 10
    },
    button: {
        backgroundColor: "rgba(0, 23, 265, 0.7)",
        marginRight: 10,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    text: {
        color: "#fff",
    }
});

export default AddItem;