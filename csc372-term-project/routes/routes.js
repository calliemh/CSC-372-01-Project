"use strict";
const express = require("express");
const router = express.Router();
const cors = require('cors');

 const corsOptions = {
   origin: 'http://localhost:3001', // frontend URL
   methods: 'GET,POST,PUT,DELETE',
   credentials: true // Allow cookies and authentication headers
 };

 router.use(cors(corsOptions));

const gamesController = require("../controllers/games.controller");

//http://localhost:3000/products/all
router.get("/all", controller.getAll);

//http://localhost:3000/products?attribute=?
router.get("/", controller.getAllByOneAttribute);

//http://localhost:3000/products/1
router.get("/:id", controller.getOneById);

//http://localhost:3000/products/delete/1
router.delete("/delete/:id", controller.deleteProduct);

//http://localhost:3000/products/add
router.post("/add", controller.createNew);

//http://localhost:3000/products/update
router.put("/update", controller.updateProduct);

module.exports = router;
