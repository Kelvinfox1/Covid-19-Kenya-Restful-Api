const mongoose = require('mongoose');

const casesSchema = mongoose.Schema({
    data: {
        summary:{
            _id: mongoose.Schema.Types.ObjectId,
            total: Number,
            confirmedCasesKenyan: Number,
            confirmedCasesForeign: Number,
            discharged: Number,
            death: Number,
            awaitingConfirmation: Number,
            date: { type: Date, default: Date.now }
        }
    }
});

module.exports = mongoose.model('cases', casesSchema);