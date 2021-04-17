import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { getAllCoinMarketCap } from '../actios/entities';
import Loading from '../components/Loading';

class HomeScreen extends Component {
    state = { };

    componentDidMount(){
        this.props.getAllCoinMarketCap(3);
    }

    render() {
        if(this.props.coins.lenght === 0){
            return <Loading />
        }
        return (
            <View>
                <Text> Home screen 6 </Text>
            </View>
        )
    }
}

export default connect(({entities}) => ({coins: entities.coins}), {getAllCoinMarketCap})(HomeScreen);

