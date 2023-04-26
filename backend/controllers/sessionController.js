const asyncHandler = require('express-async-handler');

const Session = require('../models/sessionModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getSessions = asyncHandler(async (req, res) => {
  const sessions = await Session.find()

  res.status(200).json(sessions)
})

// @desc Set goal
// @route POST /api/goals
// @access Private
const setSession = asyncHandler(async (req, res) => {

  // console.log('session req', req.body.hero)

  if (!req.body) {
    res.status(400)
    throw new Error('Please set session')
  }

  const session = await Session.create({
    hero: req.body.hero,
    villain: req.body.villain,
    HStack: req.body.HStack,
    VStack: req.body.VStack
  })

  res.status(200).json(session)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
// const updateSession = asyncHandler(async (req, res) => {

//   console.log('REQ', req)

  // const session = await Session.findById(req.params.id)

  // if (!session) {
  //   res.status(400)
  //   throw new Error('Session not found')
  // }

  // const updatedSession = await Session.findByIdAndUpdate(req.params.id, req.body, {
  //   new: true,
  // })

  // res.status(200).json(updatedSession)
// })

// @desc Delete goal
// @route DELETE /api/:id
// @access Private
const deleteSession = asyncHandler(async (req, res) => {
  const session = await Goal.findById(req.params.id)

  if (!session) {
    res.status(400)
    throw new Error('Session not found')
  }

  await session.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getSessions,
  setSession,
  // updateSession,
  deleteSession,
}