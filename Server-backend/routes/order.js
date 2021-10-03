const express = require("express");
var router = express.Router();
const Order = require("../models/order");
router.use(express.static("build"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

router.use(requestLogger);

router.get("/", (request, response) => {
  Order.find({}).then((order) => {
    response.json(order);
  });
});

router.post("/", (request, response) => {
  const body = request.body;
  console.log(request.body);
  if (body.name == undefined) {
    return response.status(400).json({ error: "content missing" });
  }
  const order = new Order({
    name: body.name,
    price: body.price,
    desc: body.desc,
    cal: body.cal,
    qty: body.qty,
    firstName: body.firstName,
    lastName: body.lastName,
    address: body.address,
    phoneNumber: body.phoneNumber,
    paypal: body.paypal,
    creditCard: body.creditCard,
    creditCardNumber: body.creditCardNumber,
    status: body.status,
  });

  console.log(body);
  console.log(order);

  order.save().then((savedOrder) => {
    response.json(savedOrder);
  });
});

router.get("/:id", (request, response, next) => {
  Order.findById(request.params.id)
    .then((order) => {
      if (order) {
        response.json(order);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      console.log("WAT IS THIS");
      next(error);
    });
});

router.delete("/:id", (request, response, next) => {
  Order.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

module.exports = router;
