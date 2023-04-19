const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema(
  {
    hero: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    villain: {
      type: String,
      required: [true, 'Please add a text value']
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Session', sessionSchema)
const mongoose = require('mongoose')

const sessionSchema = mongoose.Schema(
  {
    hero: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    villain: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    HStack: {
      type: Number,
      required: [true]
    },
    HStack: {
      type: Number,
      required: [true]
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Session', goalSchema)
