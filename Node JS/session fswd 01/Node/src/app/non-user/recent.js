const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Products } = require("../../../model/Products");

exports.recent = async (request, response) => {
  const searchTerm = request.query.q;
  // const data = await Products.find({}).sort({ts: -1});
  const aggregate = await Products.aggregate([
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
      $project: {
        chid: 0,
        imgid: 0,
        "images._id": 0,
        "images.id": 0,
        "images.itid": 0,
        imgs: 0,
      },
    },
  ]).sort({ ts: -1 });
  if (aggregate.length > 0) {
    response.send(responseCreator(SUCCESS_REQUEST, { data: aggregate }));
  } else {
    response.status(500).send(responseCreator("No data found"));
  }
};
