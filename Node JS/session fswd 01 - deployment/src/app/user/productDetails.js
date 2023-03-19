const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Items } = require("../../../model/Items");

exports.productDetails = async (request, response) => {
  try {
    // creating pipeline for mongodb data json
    const aggregate = await Items.aggregate([
      { $match: { id: parseInt(request.params.item_id) } },
      { $unwind: { path: "$imgs" } },
      {
        $lookup: {
          from: "images",
          localField: "imgs.imgid",
          foreignField: "id",
          as: "images",
        },
      },
      {
        $group: {
          _id: "$_id",
          images: {
            $push: "$images.url",
          },
        },
      },
      {
        $lookup: {
          from: "items",
          localField: "_id",
          foreignField: "_id",
          as: "itemDetails",
        },
      },
      {
        $unwind: {
          path: "$itemDetails",
        },
      },
      {
        $addFields: {
          "itemDetails.images": "$images",
        },
      },
      {
        $replaceRoot: {
          newRoot: "$itemDetails",
        },
      },
      {
        $lookup: {
          from: "chefs",
          localField: "chid",
          foreignField: "id",
          as: "chef_details",
        },
      },
      {
        $project: {
          chid: 0,
          imgid: 0,
          "chef_details._id": 0,
          "chef_details.email": 0,
          "chef_details.token": 0,
          "chef_details.password": 0,
          "chef_details.aid": 0,
          "images._id": 0,
          "images.id": 0,
          "images.itid": 0,
          imgs: 0,
        },
      },
    ]);
    //sending the json data as a response
    response
      .status(200)
      .send(responseCreator(SUCCESS_REQUEST, { details: aggregate }));
  } catch (err) {
    console.log(err);
  }
};
