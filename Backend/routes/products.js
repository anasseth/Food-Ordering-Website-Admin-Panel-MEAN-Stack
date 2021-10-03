const express = require("express");
var router = express.Router();
const Product = require("../models/product");
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
  Product.find({}).then((products) => {
    response.json(products);
  });
});

router.post("/", (request, response) => {
  const body = request.body;

  if (body.name === undefined || body.price === undefined) {
    return response.status(400).json({ error: "Name or Price is Missing" });
  }

  const product = new Product({
    name: body.name,
    desc: body.desc,
    cal: body.cal,
    price: body.price,
  });

  product.save().then((savedProduct) => {
    response.json(savedProduct);
  });
});

router.get("/:id", (request, response, next) => {
  Product.findById(request.params.id)
    .then((product) => {
      if (product) {
        response.json(product);
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
  Product.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

router.put("/:id", (request, response, next) => {
  const body = request.body;

  const product = {
    name: body.name,
    desc: body.desc,
    cal: body.cal,
    price: body.price,
  };

  Product.findByIdAndUpdate(request.params.id, product, { new: true })
    .then((updatedProduct) => {
      response.json(updatedProduct);
    })
    .catch((error) => next(error));
});

module.exports = router;
