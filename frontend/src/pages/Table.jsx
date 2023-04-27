import React from 'react'
import { useDispatch } from 'react-redux'
import { createSession } from '../features/sessions/sessionSlice'


function Table() {

  const dispatch = useDispatch()



  // dispatch(createSession({text}))




  return (
    <div className='table'>
      
      <div></div>
    </div>
  )
}

export default Table