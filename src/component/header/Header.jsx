import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <>
      <header style={{display: 'flex', justifyContent:'space-between'}}>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Nike-SNKRS-app-logo.png" alt="" width={100} />
      <nav style={{margin:"auto"}} >
        <Link href='/'  style={{margin: '10px', textDecoration: 'none', fontWeight: 'bolder', fontSize:'large'}}><span className='text-red-600 hover:underline underline-offset-2'>HOME</span></Link>
        <Link href="/sneakers"  style={{margin: '10px', textDecoration: 'none', fontWeight: 'bolder', fontSize:'large'}}><span className='text-red-600 hover:underline underline-offset-2'>SNEAKERS</span></Link>
        <Link href="/about"  style={{margin: '10px', textDecoration: 'none', fontWeight: 'bolder', fontSize:'large'}}><span className='text-red-600 hover:underline underline-offset-2'>ABOUT</span></Link>
        <Link href='/raffle'  style={{margin: '10px', textDecoration: 'none', fontWeight: 'bolder', fontSize:'large'}}><span className='text-red-600 hover:underline underline-offset-2'>RAFFLE</span></Link>
      </nav>
      <Link href='/panier'  >
      <img src="https://cdn.icon-icons.com/icons2/1458/PNG/512/shoppingstorecart_99691.png" alt="" width={50} height={50} className='my-auto'/>
      </Link>
      
    </header>
    <hr />
    </>
  )
}

export default Header