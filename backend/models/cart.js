const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    shoes: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SHOES'
  }],

  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'USER' 
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("CART", cartSchema);
