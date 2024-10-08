import React from 'react'
import Link from 'next/link'

const Header = () => {
  return(
     <div className='flex bg-slate-200 gap-3 p-3'>
        <Link href="contact"className='pl-3 pr-3'>contact</Link>
        <Link href="home"className='pl-3 pr-3'>home</Link>
        <Link href="about"className='pl-3 pr-3'>about</Link>
     </div>
  )
}

export default Header