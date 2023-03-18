import axios from 'axios';

/**
 * a cenetral place which would be responsible for handling all the API
 */
export const postCall = ({headers, body, url})=>{
    return new Promise((resolve, reject)=>{
        axios.post(url, body, { headers }).then((resp)=>{
            resolve(resp);
        }, (err)=>{
            reject(err);
        })  
    })
}

/**
 * responsible for the get call
 */
export const getCall = ({headers, url})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, { headers }).then((resp)=>{
            resolve(resp);
        }, (err)=>{
            reject(err);
        })  
    })
}