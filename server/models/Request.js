const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// requestStatus validation will rely on grabbing pre-update requestStatus value and passing this in via the options object to updateOne (or similar)

// note: populated documents can be transformed and there are autopopulate pre save hooks/a plugin if desired

const requestSchema = new Schema({
    userEmail: {
      type: String,
      required: true,
    },
    userDetails: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // can populate specific fields here...(email, name, phoneNumber...possibly relevant-roles, rating)
    // set up for $geoNear functionality
    location: {
        type: {
            type: String,
            enum: ['Point'],
        },
        coordinates: [Number],
        required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    currentStatus: {
      type: String,
      enum: ['in progress', 'fulfilled', 'failed', 'cancelled'],
      /*validate: {
        validator: function(v) {
          if (this?.options?.previous === v) return false;
          return true;
        },
        message: () => `Request status must be different from previous value`
      },*/
    },
    requestedAt: {
      type: Date,
      required: true,
      default: new Date(),
    },
    assignedAt: Date,
    fulfilledAt: Date,
    fixerDetails: { type: Schema.Types.ObjectId, ref: 'Fixer' }, // can populate specific fields here...(name, phoneNumber, currentLocation, rating?)
});

module.exports = mongoose.model('Request', requestSchema);