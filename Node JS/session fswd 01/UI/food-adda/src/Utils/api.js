import axios from 'axios';

/**
 * a cenetral place which would be responsible for handling all the API
 */
export const postCall = ({headers, body, url, type})=>{
    return new Promise((resolve, reject)=>{
        axios.post(url, body, { headers }).then((resp)=>{
            resolve(resp);
        }, (err)=>{
            reject(err);
        })  
    })
}