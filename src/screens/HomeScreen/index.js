import React, { Component } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { getAllCoinMarketCap } from '../../actios/entities';
import Loading from '../../components/Loading';
import Coin from './Coin';
import type { CoinMarketCapData } from '../../types';

const Root = styled.View`flex: 1;`;

class HomeScreen extends Component {
    state = { };

    componentDidMount(){
        this.props.getAllCoinMarketCap(10);
    }

    _renderItem = ({item}: {item: CoinMarketCapData}) => <Coin data={item} />;

    render() {
        if(this.props.coins.data.lenght === 0){
            return <Loading />
        }
        return (
            <Root>
                <FlatList
                    contentContainerStyle={{alignSelf: 'stretch'}}
                    data={this.props.coins.data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}
                />
            </Root>
        )
    }
}

export default connect(({entities}) => ({coins: entities.coins}), {getAllCoinMarketCap})(HomeScreen);

