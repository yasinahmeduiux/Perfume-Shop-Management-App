const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true }, sku: { type: String, required: true, unique: true, uppercase: true }, category: { type: String, default: 'Eau de Parfum' },
  price: { type: Number, required: true, min: 0 }, cost: { type: Number, default: 0, min: 0 }, quantity: { type: Number, default: 0, min: 0 }, lowStockThreshold: { type: Number, default: 5 },
  barcode: String, description: String, imageUrl: String, stockHistory: [{ type: { type: String, enum: ['in', 'out', 'adjustment'] }, quantity: Number, note: String, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, createdAt: { type: Date, default: Date.now } }]
}, { timestamps: true });
module.exports = mongoose.model('Product', productSchema);
