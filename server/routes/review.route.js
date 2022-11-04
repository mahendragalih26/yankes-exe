const router = require("express-promise-router")();
const reviewController = require("../controllers/review.controller");

router.post("/review", reviewController.createReview);
router.get("/review", reviewController.getReview);

module.exports = router;
