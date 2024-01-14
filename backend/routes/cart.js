const express = require("express");
const router = express.Router();
const {
  getCartItems,
  deleteAllCartItems,
  addToCart,
  getAllCartItems,
  cartItemQuantity,
  decreaseCartItem,
  deleteFromCart
} = require("../controllers/cartController");
router.route("/").get(getCartItems);
router.route('/all').get(getAllCartItems)
router.route("/add").post(addToCart);
router.route("/deleteAll").delete(deleteAllCartItems);
router.route("/delete").delete(decreaseCartItem)
router.route('/quantity').get(cartItemQuantity)
router.route('/remove').delete(deleteFromCart)
module.exports = router;
