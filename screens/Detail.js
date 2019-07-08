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
    visibleAddr() {
        return this.props.addrs.filter(
            (cur) => {
                return cur.show === true;
            }
        )[0];
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.item}>{this.visibleAddr().cep}</Text>
                <Text style={styles.item}>{this.visibleAddr().street}</Text>
                <Text style={styles.item}>{this.visibleAddr().district}</Text>
                <Text style={styles.item}>{this.visibleAddr().city}</Text>
                <Text style={styles.item}>{this.visibleAddr().state}</Text>
                <Text style={styles.item}>{this.visibleAddr().ddd}</Text>
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
    },
    item: {
        fontSize: 20,
        fontFamily: 'Ubuntu-Regular',
        color: '#f77f00'
    }
});

function mapStateToProps(state) {
    return {
        addrs: state.addrs
    };
}

export default connect(mapStateToProps)(Detail);