import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import CEPConsult from '../components/CEPConsult';

// Primary color: #f77f00
// Secondary color: #eae2b7

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }
    static navigationOptions = {
        header: null
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Ubuntu-Regular': require('../assets/fonts/Ubuntu-Regular.ttf'),
            'Ubuntu-Light': require('../assets/fonts/Ubuntu-Light.ttf'),
            'Ubuntu-Bold': require('../assets/fonts/Ubuntu-Bold.ttf'),
            'Ubuntu-Italic': require('../assets/fonts/Ubuntu-Italic.ttf')
        });
        this.setState({
            fontLoaded: true
        });
    }
    renderHome() {
        if (this.state.fontLoaded) {
            return <CEPConsult navigate={
                () => {
                    this.props.navigation.navigate('detail');
                }
        }/>;
        } else {
            return <ActivityIndicator size='large' color='#f77f00'/>;
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderHome()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffe9'
    }
});

export default Home;