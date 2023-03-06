const apis = [
    //login API
    {
        request: {
            type: 'POST',
            url: '/login',
            body: {
                type: 1,//1-user, 2-chef
                email: '',
                passwd: ''
            },
        },
        response: {
            code: 500,//200
            status: 'fail',//success
            message: 'error message'//success message
        }
    },
    //signup api
    {
        request: {
            type: 'POST',
            url: '/signup',
            body: {
                type: 1,//1-user, 2-chef
                name: '',// name of the uset
                email: '',//validate email
                passwd: ''//min 6 character, with special character
            },
        },
        response: {
            code: 500,//200
            status: 'fail',//success
            message: 'error message'//success message
        }
    },
    //Home Page: Search API
    {
        request: {
            type: 'GET',
            url: '/saerch?query=aloo+paratha',
        },
        response: {
            code: 200,//200
            status: 'success',
            message: 'data is loaded',
            data: [{
                image: ['url1','url2'],
                title: '',
                price: '',
                chef: ''
            },{
                image: ['url1','url2'],
                title: '',
                price: '',
                chef: ''
            }]
        }
    },
    //Admin: your menu
    {
        request: {
            type: 'GET',
            url: '/admin-menu',
            body: {
                token: ''//user token
            },
        },
        response: {
            code: 200,
            status: 'success',
            message: 'success message',
            data: [{
                image: ['url1','url2'],
                title: '',
                price: '',
                chef: ''
            },{
                image: ['url1','url2'],
                title: '',
                price: '',
                chef: ''
            }]
        }
    },
]