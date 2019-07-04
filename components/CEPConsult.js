import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addAddress } from '../actions/addrsActions';

function CEPConsult(props) {
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
            <TouchableOpacity
                style={styles.button}
                onPress={
                    () => {
                        props.addAddress({
                            cep: '68741050',
                            street: 'Alameda Índio Betan',
                            district: 'Saudade I',
                            city: 'Castanhal',
                            state: 'PA',
                            lat: '-1.2989911',
                            lng: '-47.9383571',
                            ddd: '91'
                        });
                    }
                }>
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

function mapDispatchToProps(dispatch) {
    return {
        addAddress: (addr) => {dispatch(addAddress(addr))}
    };
}

export default connect(null,mapDispatchToProps)(CEPConsult);