const mongoose = require('mongoose');
module.exports = mongoose.model('Activity', new mongoose.Schema({ action: String, entity: String, entityId: mongoose.Schema.Types.ObjectId, user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, metadata: mongoose.Schema.Types.Mixed }, { timestamps: true }));
