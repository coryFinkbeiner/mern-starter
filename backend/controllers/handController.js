const asyncHandler = require('express-async-handler');

const Hand = require('../models/handModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getHands = asyncHandler(async (req, res) => {
  const hands = await Hand.find()

  res.status(200).json(hands)
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setHand = asyncHandler(async (req, res) => {

  // console.log('session req', req.body.hero)

  if (!req.body) {
    res.status(400)
    throw new Error('Please set hand')
  }

  const hand = await Hand.create({
    session: req.body.session,
    HHole: req.body.HHole,
    VHole: req.body.VHole,
    board: req.body.board,
    HSwing: req.body.HSwing,
    VSwing: req.body.VSwing
  })

  res.status(200).json(hand)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateHand = asyncHandler(async (req, res) => {

  // console.log('REQ', req)

  const hand = await Hand.findById(req.params.id)

  if (!hand) {
    res.status(400)
    throw new Error('Hand not found')
  }

  const updatedHand = await Hand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedSession)
})

// @desc Delete goal
// @route DELETE /api/:id
// @access Private
const deleteHand = asyncHandler(async (req, res) => {
  const hand = await Hand.findById(req.params.id)

  if (!hand) {
    res.status(400)
    throw new Error('Hand not found')
  }

  await hand.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getHands,
  setHand,
  updateHand,
  deleteHand,
}