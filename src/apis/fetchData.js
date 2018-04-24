import fetch from 'node-fetch';
import Bluebird from 'bluebird';
//require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch'


//const baseAddress = "https://hc-server.herokuapp.com/";
const baseAddress = "http://localhost:8081/";
fetch.Promise = Bluebird;

export function postJson(url, json, method='POST') {
  return fetchData(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
}


export function fetchData(url, opt={}) {
  url = `${baseAddress}${url}`;
  return fetch(opt.query ? makeUrl(url, opt.query) : url, {
    ...opt,
    // 'same-origin'  or 'include'
    credentials: 'include'
  }).then(res => {
    const contentType = res.headers.get('Content-Type')
    const isJson = contentType.indexOf('json') >= 0
    const dataPromise = isJson ? res.json() : res.text()
    return res.status >= 400 ? 
    dataPromise.then(data => {
      console.log(data)
      Promise.reject({status: res.status, data: data})
    }) : 
    dataPromise
  })
}


export const makeUrl = (url, params) =>
  url + (params && Object.keys(params).length ? '?' + queryStringify(params) : '')

export const queryStringify = (params) => Object.keys(params)
  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
  .join('&')
  .replace(/%20/g, '+')
