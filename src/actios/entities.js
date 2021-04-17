// @flow

import { CoinMarket } from '../utils/api';
import CoinMarketCapData from '../types';
import { GET_ALL_COIN_MARKET, GET_ALL_COIN_MARKET_SUCCESS, GET_ALL_COIN_MARKET_ERROR } from './entitesTypes';

function getAllCoinMarketCapSuccess(data: CoinMarketCapData){
    return {
        type: GET_ALL_COIN_MARKET_SUCCESS,
        data
    }
}

function getAllCoinMarketCapError(error: Error){
    return {
        type: GET_ALL_COIN_MARKET_ERROR,
        error
    }
}

export function getAllCoinMarketCap(limit){
    return async (dispatch)=>{
        dispatch({type: GET_ALL_COIN_MARKET});
        try{
            const { data } = await CoinMarket.getAll(limit);
            return dispatch(getAllCoinMarketCapSuccess(data));
        }catch(error){
            return dispatch(getAllCoinMarketCapError(error));
        }
    }
}