import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
      <header style={{display: 'flex', justifyContent:'space-between'}}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Nike-SNKRS-app-logo.png" alt="" width={100} />
      <nav style={{margin:"auto"}} >
        <Link href='/' style={{margin: '10px', textDecoration: 'none'}}>Home</Link>
        <Link href="/sneakers" style={{margin: '10px', textDecoration: 'none'}}>sneakers</Link>
        <Link href="/about" style={{margin: '10px', textDecoration: 'none'}}>about</Link>
        <Link href='/raffle' style={{margin: '10px', textDecoration: 'none'}}>raffle</Link>
      </nav>
      <img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/shoppingstorecart_99691.png" alt="" width={50} height={50} className='my-auto'/>
    </header>
    <hr />
    </>
  )
}

export default Header