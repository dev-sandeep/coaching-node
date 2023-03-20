const { responseCreator } = require("../../utils/responseCreator");
const { fetchCustomerID } = require("../../utils/getID");
const { Orders } = require("../../../model/Orders");
const {
  ORDER_LIST_RETRIEVED,
  EMPTY_ORDERS_LIST,
  BAD_REQUEST,
  ERROR_FETCHING_DATA,
} = require("../../utils/constants.json");

exports.getOrders = async (request, response) => {
  //if token is presents, fetches the customer id from DB
  const customerData = await fetchCustomerID(request.header("token"));
  const customerID = customerData !== undefined ? customerData.id : undefined;

  if (customerID !== undefined) {
    try {
      const aggregate = await Orders.aggregate([
        { $match: { cid: customerID } },
        { $unwind: { path: "$items" } },
        {
          $lookup: {
            from: "items",
            localField: "items.itemId",
            foreignField: "id",
            as: "items",
          },
        },
        {
          $group: {
            _id: "$_id",
            items: {
              $push: {
                id: "$items.id",
                name: "$items.name",
                price: "$items.price",
              },
            },
          },
        },
        {
          $lookup: {
            from: "orders",
            localField: "_id",
            foreignField: "_id",
            as: "orders",
          },
        },
        {
          $unwind: {
            path: "$orders",
          },
        },
        {
          $addFields: {
            "orders.itemList": "$items",
          },
        },
        {
          $replaceRoot: {
            newRoot: "$orders",
          },
        },
        {
          $project: {
            _id: 0,
            cid: 0,
            aid: 0,
            status: 0,
            __v: 0,
          },
        },
      ]).sort({ ts: 1 });
      // const aggregate = await Orders.find({ cid: customerID });
      if (aggregate !== undefined) {
        response
          .status(200)
          .send(responseCreator(ORDER_LIST_RETRIEVED, aggregate));
      } else {
        response.status(200).send(responseCreator(EMPTY_ORDERS_LIST));
      }
    } catch (error) {
      console.log(error);
      response.status(500).send(responseCreator(ERROR_FETCHING_DATA));
    }
  } else {
    response.status(400).send(responseCreator(BAD_REQUEST));
  }
};
