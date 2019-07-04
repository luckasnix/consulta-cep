import React from 'react';
import { View, StyleSheet } from 'react-native';
import CEPConsult from '../components/CEPConsult';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={styles.container}>
                <CEPConsult/>
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