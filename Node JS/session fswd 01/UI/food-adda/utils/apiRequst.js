import axios from "axios";


export const backendApiURI = 'https://foodaddabackend.com/api';

export const backendApiRequest = async (payload) => {

    return await axios({
        method: payload.method,
        url: backendApiURI + payload.uri,
        data: payload?.data
    }).then(response => response.json()).catch(error => error);

}

/*
backend api reuqest: https://foodaddabackend.com/api/users

in pages:
async function onSubmit() {
    let respond = await backendApiRequest({method: 'get/post', uri: '/users', data: {}});
    console.log(respond)
}


*/