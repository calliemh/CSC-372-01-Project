"use strict";
const model = require("../models/model");

function getAll(req, res, next) {
  try {
    res.json(model.getAll());
  } catch (err) {
    console.error("Error while getting products ", err.message);
    next(err);
  }
}

function getAllByOneAttribute(req, res, next) {
  let attribute = req.query.attribute;
  let value = req.query.value;
  if (attribute && value) {
    try {
      res.json(model.getAllByOneAttribute(attribute, value));
    } catch (err) {
      console.error("Error while getting products: ", err.message);
      next(err);
    }
  }
  else {
    res.status(400).send("Invalid Request");
  }
}

function getOneById(req, res, next) {
  try {
    res.json(model.getOneById(req.params.id));
  } catch (err) {
    console.error("Error while getting products: ", err.message);
    next(err);
  }
}

function deleteProduct(req, res, next) {
  try {
    model.deleteProduct(req.params.id);
    res.json(model.getAll());
  } catch (err) {
    console.error("Error while getting products: ", err.message);
    next(err);
  }
}

function createNewProduct(req, res, next) {
  let product_name = req.body.product_name;
  let product_descr = req.body.product_descr;
  let img_url = parseInt(req.body.img_url);
  let price = req.body.price;
  let promotion = req.body.promotion;
  let latest_offer = req.body.latest_offer;
  let product_category_id = req.body.product_category_id;

  if (product_name && product_descr && img_url && price && promotion && latest_offer && product_category_id) {
    let params = [product_name, product_descr, img_url, price, promotion, latest_offer, product_category_id];
    try {
      res.json(model.createNew(params));
    } catch (err) {
      console.error("Error while creating product: ", err.message);
      next(err);
    }
  }
  else {
    res.status(400).send("Invalid Request");
  }
}

module.exports = {
  getAll,
  getAllByOneAttribute,
  getOneById,
  deleteProduct,
  createNewProduct
};
