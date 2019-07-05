import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'CEP',
        headerTintColor: '#ffffe9',
        headerStyle: {
            backgroundColor: '#f77f00'
        },
        headerTitleStyle: {
            color: '#ffffe9',
            fontSize: 30
        }
    }
    visibleAddrs() {
        return this.props.addrs.filter(
            (cur) => {
                return cur.show === true;
            }
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.visibleAddrs()[0].city}</Text>
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

function mapStateToProps(state) {
    return {
        addrs: state.addrs
    };
}

export default connect(mapStateToProps)(Detail);