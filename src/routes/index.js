const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");

let routes = (app) => {
  router.post("/upload", controller.upload);
  router.get("/files", controller.getListFiles);
  router.get("/files/:name", controller.download);
  router.get("/delete/:name", controller.remove);
  //router.delete("/file/:name", controller.remove);
  app.use(router);
};

module.exports = routes;
