const router = require("express-promise-router")();
const pasienController = require("../controllers/pasien.controller");

router.post("/pasien", pasienController.createPasien);

module.exports = router;
