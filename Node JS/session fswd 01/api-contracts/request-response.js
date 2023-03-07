const apis = [
  //login API
  {
    request: {
      type: "POST",
      url: "/login",
      body: {
        type: 1, //1-user, 2-chef
        email: "",
        passwd: "",
      },
    },
    response: {
      code: 500, //200
      status: "fail", //success
      message: "error message", //success message
    },
  },
  //signup api
  {
    request: {
      type: "POST",
      url: "/signup",
      body: {
        type: 1, //1-user, 2-chef
        name: "", // name of the uset
        email: "", //validate email
        passwd: "", //min 6 character, with special character
      },
    },
    response: {
      code: 500, //200
      status: "fail", //success
      message: "error message", //success message
    },
  },
  //Home Page: Search API
  {
    request: {
      type: "GET",
      url: "/saerch?query=aloo+paratha",
    },
    response: {
      code: 200, //200
      status: "success",
      message: "data is loaded",
      data: [
        {
          image: ["url1", "url2"],
          title: "",
          price: "",
          chef: "",
        },
        {
          image: ["url1", "url2"],
          title: "",
          price: "",
          chef: "",
        },
      ],
    },
  },
  //Admin: your menu
  {
    request: {
      type: "GET",
      url: "/admin-menu",
      body: {
        token: "", //user token
      },
    },
    response: {
      code: 200,
      status: "success",
      message: "success message",
      data: [
        {
          image: ["url1", "url2"],
          title: "",
          price: "",
          chef: "",
        },
        {
          image: ["url1", "url2"],
          title: "",
          price: "",
          chef: "",
        },
      ],
    },
  },
  //Address management: one address
  {
    request: {
      type: "GET",
      url: "/address/:hash",
      headers:{
        token: ''
      }
    },
    response: {
      code: 200,
      status: "success",
      message: "customer address retrieved",
      data: {
          name: "",
          address: "",
          city: "",
          state: "",
        }
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address does not exist for the Id",
    },
  },
  //Address management: all addresses
  {
    request: {
      type: "GET",
      url: "/address",
      headers:{
        token: ''
      }
    },
    response: {
      code: 200,
      status: "success",
      message: "customer address retrieved",
      data: [
        {
          name: "",
          address: "",
          city: "",
          state: "",
        },
        {
          name: "",
          address: "",
          city: "",
          state: "",
        },
      ],
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address does not exist for the Id",
    },
  },

  //Address Save
  {
    request: {
      type: "POST",
      url: "/address",
      headers: {
        token: ''//will be used to fetch user id in back end
      },
      body: {
        name: "", //name check
        address: "", // address check
        city: "", // city check
        state: "", // state check
      },
    },
    response: {
      code: 200, //200
      status: "success",
      message: "customer address saved",
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address could not be saved - Address missing",
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address could not be saved - City Missing",
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address could not be saved - State Missing",
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer address could not be saved - Name missing",
    },
  },

  //harsh - your orders
  {
    request: {
      type: "GET",
      url: "/orders",
      headers: {
        token: ''//will be used to validate and fetch user id in back end
      },
    },
    response: {
      code: 200,
      status: "success",
      message: "order data is confirmed",
      data: [
        {
          orderid: ",",
          ordertime: "date",
          orderitems: [
            { item: "", qty: "", price: "" },
            { item: "", qty: "", price: "" },
          ],
        },
      ],
    },
    response: {
      code: 500,
      status: "failed",
      message: "order data is not confirmed",
      data: "",
    },
  },

  //sakshi - Checkout 
  {
    request: {
      type: "POST",
      url: "/order",
      body: {
        reqType: 1,
        CouponCode: "",
        items: [//List of items and their qty
            {
                itemId: 2,
                qty: 1
            },
            {
                itemId: 3,
                qty: 2
            }
        ],
        name: "", //name check
        address: { add: "addressdetails" }, //address check
        paymentMode: 1 //1 - COD
      },
      response: {
        code: 200,
        status: "success",
        message: "order success",
      },
      response: {
        code: 500,
        status: "failed",
        message: "order failed",
      },
    },
  },
];
