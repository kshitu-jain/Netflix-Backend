const showsModel = require("../model/showDetails");
const showImages = require("../model/showImage");

module.exports.showlistImage = async (req, res) => {
  try {
    let showlistImages = await showImages.find();
    let sendData = {
      status: showlistImages.length === 0 ? false : true,
      showlistImages,
      count: showlistImages.length,
    };
    res.send(sendData);
  } catch (error) {
    let err = { status: false, error };
    res.send(err);
  }
};
module.exports.browse = async (req, res) => {
  try {
    let showDetails = await showsModel.find();
    let sendData = {
      status: showDetails.length === 0 ? false : true,
      showDetails,
      count: showDetails.length,
    };
    res.send(sendData);
  } catch (error) {
    let err = { status: false, error };
    res.send(err);
  }
};

module.exports.showsById = async (req, res) => {
  let { id } = req.params;
  try {
    let showDetails = await showsModel.findById(id);
    let showsData = {
      status: showDetails.length === 0 ? false : true,
      showDetails,
      count: showDetails.length,
    };
    res.status(200).send(showsData);
  } catch (error) {
    res.status(500).send({ status: false, error });
  }
};
