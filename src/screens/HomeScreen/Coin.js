import React, { Component } from 'react';
import styled from 'styled-components/native';
import type { CoinMarketCapData } from '../../types';

const Root = styled.View`
    flex: 1;
`;

const Title = styled.Text``;

type Props = {
    data: CoinMarketCapData
}

export default class Coin extends Component {
    props: Props;
    render() {
        return (
            <Root>
                <Title>{this.props.data.name}</Title>
            </Root>
        )
    }
}
