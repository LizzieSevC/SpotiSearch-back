const router = require("express").Router();
const controllerSearches = require("../controller/searches");

router.get("/getallsearches", controllerSearches.getSongs);
router.get("/get-searches/:_id", controllerSearches.getSong);

module.exports = router;