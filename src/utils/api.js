// @flow

import axios from 'axios';

class CoinMarketCapApi {
    constructor(){
        this.baseUrl = 'https://pro-api.coinmarketcap.com/v1'
    }

    async getAll(limit = 10){
        return axios.get(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=USD`, {
            headers: { 'X-CMC_PRO_API_KEY': '5cd1ca8d-549d-465a-868e-6f9b885853be' }
        });
    }
}

export const CoinMarket = new CoinMarketCapApi();