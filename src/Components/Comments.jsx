import React from 'react'

const Comments = ({user, comment}) => {



  return (
    <div className='square border border-danger'>
      <p>{user}</p>
      <p>{comment}</p>
    </div>
  )
}

export default Comments