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
  {
    request: {
      type: "GET",
      url: "/address-management:hash",
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

  //Shreyas/ Prem - Address Management
  {
    request: {
      type: "POST",
      url: "/address-management-save?hash=useridhash",
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
      url: "/yourorder:hash",
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

  //sakshi - Cart Page
  {
    request: {
      type: "POST",
      url: "/orderinformation:hash",
      body: {
        reqType: 1,
        CouponCode: "",
        name: "", //name check
        address: { add: "addressdetails" }, //address check
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

  //Shreyas - Cart checkout - can be reused for Orders page
  {
    request: {
      type: "GET",
      url: "/checkout:hash",
    },
    response: {
      code: 200,
      status: "success",
      message: "customer orders retrieved",
      data: [
        {
          itemName: "",
          itemQty: "",
          itemPrice: "",
        },
        {
          itemName: "",
          itemQty: "",
          itemPrice: "",
        },
      ],
    },
    response: {
      code: 500,
      status: "failed",
      message: "customer orders could not be retrieved",
    },
  },

  {
    request: {
      type: "POST",
      url: "/confirm-order:hash",
    },
    response: {
      code: 200,
      status: "success",
      message: "order confirmed",
      data: [
        {
          itemName: "",
          itemQty: "",
          itemPrice: "",
        },
        {
          itemName: "",
          itemQty: "",
          itemPrice: "",
        },
      ],
    },
    response: {
      code: 500,
      status: "failed",
      message: "order data could not be confirmed",
    },
  },
];
