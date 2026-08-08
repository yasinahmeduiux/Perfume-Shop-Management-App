const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, unique: true }, customer: { name: String, phone: String, email: String },
  items: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, name: String, quantity: { type: Number, min: 1 }, price: Number }],
  subtotal: { type: Number, default: 0 }, discount: { type: Number, default: 0 }, total: { type: Number, default: 0 },
  status: { type: String, enum: ['processing', 'ready', 'delivery', 'completed', 'cancelled'], default: 'processing' }, paymentStatus: { type: String, enum: ['pending', 'paid', 'refunded'], default: 'pending' }, createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
orderSchema.pre('validate', function () { if (!this.orderNumber) this.orderNumber = `SC-${Date.now().toString().slice(-6)}`; });
module.exports = mongoose.model('Order', orderSchema);
