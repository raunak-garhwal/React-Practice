import React, { useEffect, useState } from 'react'

function Github() {

const [data, setData] = useState({})

  useEffect(() => {
    fetch("https://api.github.com/users/raunak-garhwal")
    .then(response => response.json())
    .then(data => setData(data))
  }, [])
  
  return (
    <div className='text-orange-700 font-bold text-3xl m-5 flex flex-col items-center justify-center gap-5'>
        <img  src={data.avatar_url} alt="Github-profile-pic" width={300} /> 
        Github-Followers : {data.followers}
    </div>
  )
}

export default Github