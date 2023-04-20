import React from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'


function Table() {

  const dispatch = useDispatch()

  const text = 'TESTING'

  dispatch(createGoal({text}))




  return (
    <div >Table</div>
  )
}

export default Table