const db = require("../config/database.js");
const ResponseClass = require("../model/response"); // opsionalconst getPasien = (request, response) => {

const getReview = (request, response) => {
  var responseReturn = new ResponseClass();
  db.query("SELECT * FROM review ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    responseReturn.status = true;
    responseReturn.code = 200;
    responseReturn.message = "Success";
    responseReturn.data = results.rows;
    response.status(200).json(responseReturn);
  });
};

const createReview = async (request, response) => {
  const { rate } = request.body;
  await db.query("INSERT INTO review  (rate) VALUES ($1)", [rate]);

  response.status(201).send({
    message: "Rate added successfully!",
    body: {
      rate,
    },
  });
};

module.exports = {
  getReview,
  createReview,
};
