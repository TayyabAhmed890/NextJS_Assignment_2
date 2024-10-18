import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex justify-between p-5 text-xl bg-green-600 font-semibold text-white'>
        <div className='flex gap-6 '>

        <Link href="/">Home</Link>
        <Link href="/country">Countries</Link>

        </div>
    </nav>
    </>
  )
}

export default Navbar