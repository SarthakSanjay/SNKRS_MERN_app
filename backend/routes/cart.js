const express = require("express");
const router = express.Router();
const {
  getCartItems,
  deleteAllCartItems,
  deleteCartItem,
  addToCart,
  updateCartQuantity,
  getSpecificCartItem
} = require("../controllers/cartController");
router.route("/").get(getCartItems);
router.route("/add").post(addToCart);
router.route("/deleteAll").delete(deleteAllCartItems);
router.route("/:id").delete(deleteCartItem).patch(updateCartQuantity).get(getSpecificCartItem);

module.exports = router;
