import Promise from 'bluebird';
//import { store } from '../redux/reduxConfig';
//import { logout } from '../redux/user/userActions';
import { List } from 'immutable';

// remove warnings in consle about a fetch didnt returned a value
Promise.config({
    warnings: false
})

const baseAddress = "http://localhost:8081/";

export const buildQuery = (url, parameters) => {
    let queryString = '';
    for (const key in parameters) {
        const value = parameters[key];
        if (value) {
            if (Array.isArray(value)) {
                for (const item in value) {
                    queryString += encodeURIComponent(key) + "=" + encodeURIComponent(value[item]) + "&";
                }
            }
            else if (List.isList(value)) {
                queryString += value.reduce((acc, item, index) =>
                    acc += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&")
            }
            else {
                queryString += encodeURIComponent(value) + "&";
            }
        }
    }
    if (queryString.length > 0) {
        queryString = queryString.substring(0, queryString.length - 1)
        url = url + "?" + queryString;
    }
    return url;
}

const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }
    else {
        const error = new Error(response.statusText);
        error.response = response;
        if (response.status === 406) {
            //store.dispatch(logout());
        }
        throw error;
    }
}

const parseJSON = (response) => {
    return response.json();
}

export function fetchPromise(url, reqOptions, reqHeaders, isJSON) {
    let promise;

    // default headers. 
    const defaultHeaders = {
        'Accept': isJSON ? 'application/json' : '*/*',
        'Content-Type': 'application/json',
        // cache: 'no-cache',
        // mode: 'cors'
    };

    // token header. 
    let tokenHeader;

    //const token = store.getState().user.get('token');
    //if (token) {
    //    tokenHeader = { 'Token': `Bearer ${token}` };
    //}

    const headers = Object.assign({}, defaultHeaders, tokenHeader || {}, reqHeaders || {});
    // default options. 
    const defaultOptions = {
        method: 'GET',
        credentials: 'include',
        headers
    }

    const options = Object.assign({}, defaultOptions, reqOptions || {});

    const f_url = baseAddress + url;
    // request. 
    //const request = new Request(f_url , options);
    
    const request = new Request(url, {
        method: 'POST', body: '{"name": "דין","lastName": "ווינצסטר","email": "","phoneNumber1": "","phoneNumber2": ""}'
    });

    // check http status code and serialize result to json. 
    promise = fetch(request);

    // turns the native promise to a bluebird promise 
    promise = Promise.resolve(promise);

    promise = promise.then(checkStatus);
    if (isJSON) {
        promise = promise.then(parseJSON);
    }
    return promise;
}