import React from 'react'
import Link from 'next/link'

const Header = () => {
  return(
     <div>
        <Link href="contact">contact</Link>
        <Link href="home">about</Link>
        <Link href="about">contact</Link>
     </div>
  )
}

export default Header