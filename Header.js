import React from 'react'
import {Text, StyleSheet, View} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "rgba(10, 10, 200, 0.59)",
        padding: 30,
        alignItems: "center",
    },
    text: {
        marginTop: 20,
        color: "white",
        fontSize: 30,
        fontFamily:"serif"
    }
});
export default Header
