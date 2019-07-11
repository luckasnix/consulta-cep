import React, { Component } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import InfoCell from '../components/InfoCell';

class Detail extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Endereço',
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
                <View style={styles.infoContainer}>
                    <InfoCell title={this.visibleAddr().cep}/>
                    <InfoCell title={this.visibleAddr().street}/>
                    <InfoCell title={this.visibleAddr().district}/>
                    <InfoCell title={this.visibleAddr().city}/>
                    <InfoCell title={this.visibleAddr().state}/>
                    <InfoCell title={this.visibleAddr().ddd}/>
                </View>
                <View style={styles.mapContainer}>
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: parseFloat(this.visibleAddr().lat),
                            longitude: parseFloat(this.visibleAddr().lng),
                            latitudeDelta: 0.0122,
                            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122

                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffe9'
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    mapContainer: {
        flex: 1
    },
    map: {
        flex: 1
    } 
});

function mapStateToProps(state) {
    return {
        addrs: state.addrs
    };
}

export default connect(mapStateToProps)(Detail);