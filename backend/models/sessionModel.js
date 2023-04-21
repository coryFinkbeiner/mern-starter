const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema(
  {
    hero: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User'
    },
    villain: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User'
    },
    HStack: {
      type: Number,
      required: [true]
    },
    VStack: {
      type: Number,
      required: [true]
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Session', sessionSchema)
