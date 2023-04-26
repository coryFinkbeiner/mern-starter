const mongoose = require('mongoose')

const handSchema = mongoose.Schema(
  {
    session: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Session'
    },
    HHole: {
      type: String,
      required: [true, 'Please add a text value']
    },
    VHole: {
      type: String,
      required: [true, 'Please add a text value']
    },
    board: {
      type: String,
      required: [true, 'Please add a text value']
    },
    HSwing: {
      type: Number,
      required: [true, 'Please add a number value']
    },
    VSwing: {
      type: Number,
      required: [true, 'Please add a number value']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Hand', handSchema)
