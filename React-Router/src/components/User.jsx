import React from 'react'
import { useParams } from 'react-router'

const User = () => {
    const {userId} = useParams();
  return (
        <div className='flex justify-center items-center p-8 bg-gray-700 text-white text-3xl'>
            Username : {userId}
        </div>
  )
}

export default User