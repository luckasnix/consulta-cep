import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { addAddress } from '../actions/addrsActions';

class CEPConsult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: '',
            searchLoading: false
        };
    }
    consult() {
        const url = 'https://cep.awesomeapi.com.br/json/' + this.state.textInput;
        axios.get(url)
            .then(
                (res) => {
                    const addr = res.data;
                    this.props.addAddress({
                        cep: addr.cep,
                        street: addr.address,
                        district: addr.district,
                        city: addr.city,
                        state: addr.state,
                        lat: addr.lat,
                        lng: addr.lng,
                        ddd: addr.ddd
                    });
                }
            )
            .catch(
                () => {
                    Alert.alert('CEP inválido!', 'Endereço não encontrado. Tente novamente.');
                }
            ).finally(
                () => {
                    this.setState({
                        textInput: '',
                        searchLoading: false
                    });
                }
            );
    }
    renderButtonTitle() {
        if (!this.state.searchLoading) {
            return <Text style={styles.buttonTitle}>Consultar CEP</Text>;
        } else {
            return <ActivityIndicator size='small' color='#ffffe9'/>
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    keyboardType='numeric'
                    maxLength={8}
                    value={this.state.textInput}
                    onChangeText={
                        (text) => {
                            this.setState({
                                textInput: text
                            });
                        }
                    }
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={
                        () => {
                            this.setState({
                                searchLoading: true
                            });
                            this.consult();
                        }
                    }>
                    {this.renderButtonTitle()}
                </TouchableOpacity>
            </View>
        );
    }
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