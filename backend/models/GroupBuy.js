const mongoose = require('mongoose');

const groupBuySchema = new mongoose.Schema({
  productId: String,
  requiredCount: Number,
  currentUsers: [String],
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date,
  isUnlocked: { type: Boolean, default: false },
  referralCode: String
});

module.exports = mongoose.model('GroupBuy', groupBuySchema);
