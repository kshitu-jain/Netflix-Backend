const route = require("express").Router();
const { browse, showsById, showlistImage } = require("../controller/appController");

route.get("/browse", browse);
route.get("/browseShows", showlistImage);
route.get("/browse/:id", showsById);
module.exports = route;
