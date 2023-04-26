const express = require('express')
const router = express.Router()
const {
  getHands,
  setHand,
  updateHand,
  deleteHand,
} = require('../controllers/handController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getHands).post(protect, setHand)
router.route('/:id').delete(protect, deleteHand).put(protect, updateHand)

module.exports = router