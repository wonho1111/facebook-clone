/*
lee wonho
facebook clone project Login component
2022 08 15
*/

import { signIn } from 'next-auth/react'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Image 
        src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-700x394.png"
        height={240}
        width={240}
        />
        <a onClick={signIn} className='px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white'>Login</a>
    </div>
  )
}

export default Login