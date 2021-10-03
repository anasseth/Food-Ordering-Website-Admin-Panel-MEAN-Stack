const express = require("express");
var router = express.Router();
const AdminCredentials = require("../models/password");
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
  AdminCredentials.find({}).then((object) => {
    response.json(object);
  });
});

router.post("/", (request, response) => {
  const body = request.body;

  if (body.name == undefined || body.password == undefined) {
    return response.status(400).json({ error: "Name or Price is Missing" });
  }

  const adminCredentials = adminCredentials({
    name: body.name,
    password: body.password,
  });

  AdminCredentials.save().then((object) => {
    response.json(object);
  });
});

router.get("/:id", (request, response, next) => {
  AdminCredentials.findById(request.params.id)
    .then((object) => {
      if (object) {
        response.json(object);
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
  AdminCredentials.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

router.put("/:id", (request, response, next) => {
  const body = request.body;

  const adminCredentials = {
    name: body.name,
    password: body.password,
  };

  AdminCredentials.findByIdAndUpdate(request.params.id, adminCredentials, {
    new: true,
  })
    .then((updatedObject) => {
      response.json(updatedObject);
    })
    .catch((error) => next(error));
});

module.exports = router;
