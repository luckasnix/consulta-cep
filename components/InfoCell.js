import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function InfoCell(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 50,
        backgroundColor: '#eae2b7'
    },
    content: {
        fontSize: 15,
        fontFamily: 'Ubuntu-Bold',
        color: '#b7b087'
    }
})

export default InfoCell