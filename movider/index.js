const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const encodedParams = new URLSearchParams();

encodedParams.set('api_key', process.env.API_KEY);
encodedParams.set('api_secret', process.env.API_SECRET);

const url = process.env.MOVIDER_URL;

const options = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: encodedParams
};

exports.getBalance = async () => {
    const res = await fetch(url, options)
    const movider = await res.json()
    return movider
}