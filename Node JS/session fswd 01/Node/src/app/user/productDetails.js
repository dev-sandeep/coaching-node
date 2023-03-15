const { SUCCESS_REQUEST } = require("../../utils/constants.json");
const { responseCreator } = require("../../utils/responseCreator");
const { Items } = require("../../../model/Items");

exports.productDetails = async (request, response) => {
  try {
    const aggregate = await Items.aggregate([
      { $match: { id: parseInt(request.params.item_id) } },
      {
        $lookup: {
          from: "chefs",
          localField: "chid",
          foreignField: "id",
          as: "chef_details",
        },
      },
      {
        $lookup: {
          from: "images",
          localField: "imgid",
          foreignField: "id",
          as: "images",
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
        },
      },
    ]);
    response.send(responseCreator(SUCCESS_REQUEST, { details: aggregate }));
  } catch (err) {
    console.log(err);
  }
};

//Success response needs to send
// response: {
//   code: 200, //200
//   status: "success",
//   message: "data is loaded",
//   data: {
//     image: ["url1", "url2"],
//     title: "",
//     price: "",
//     chef: "",
//     chef_dp: '',
//     chef_desc: ""
//   },
// }
