import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function CEPConsult() {
    const [CEPInput, setCEPInput] = React.useState('');
    return (
        <View>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                maxLength={8}
                value={CEPInput}
                onChangeText={(text) => {setCEPInput(text)}}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Consultar CEP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 300,
        height: 45,
        margin: 10,
        borderRadius: 50,
        textAlign: 'center',
        backgroundColor: '#eae2b7',
        fontSize: 20,
        fontFamily: 'Ubuntu-Bold',
        color: '#b7b087'
    },
    button: {
        width: 300,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 50,
        backgroundColor: '#f77f00'
    },
    buttonTitle: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Regular',
        color: '#ffffe9'
    }
});

export default CEPConsult;