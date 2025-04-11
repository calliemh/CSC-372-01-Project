"use strict";
const db = require("./db-conn");

function getAll() {
  let sql = "SELECT * FROM Products;";
  const data = db.all(sql);
  return data;
}

function getAllByOneAttribute(attribute, value) {
  const validColumns = getColumnNames();
  if (validColumns.includes(attribute)) {
    let sql = "SELECT * FROM Products WHERE " + attribute + " =? ;";
    const data = db.all(sql, value);
    return data;
  }
}

function getOneById(id) {
  let sql = "SELECT * FROM Products WHERE product_id =? ;";
  const item = db.get(sql, id);
  return item;
}

function addToCart(id) {
 let sql = "INSERT INTO CartProducts " +
    "(product_id, product_quantity)" +
    "VALUES(?, ?)";
}

function deleteProduct(id){
  let sql = "DELETE FROM Products WHERE product_id =?; ";
const info = db.run(sql, id);
return info;
}

function createNew(params) {
  let sql = "INSERT INTO Products " +
    "(product_name, product_descr, img_url, price, promotion, latest_offer, product_category_id) " +
    "VALUES(?, ?, ?, ?, ?, ?, ?); ";
  const info = db.run(sql, params);
  return info;
}

function getColumnNames() {
  let sql = "select name from pragma_table_info('Products');";
  const columns = db.all(sql);
  let result = columns.map(a => a.name);
  return result;
}

function checkout(id) {
    let sql = "DELETE FROM CartProducts WHERE cart_products_id =?; ";
    const info = db.run(sql, id);
    return info;
}

module.exports = {
  getAll,
  getAllByOneAttribute,
  getOneById,
  addToCart,
  deleteProduct,
  createNew,
  checkout
};
