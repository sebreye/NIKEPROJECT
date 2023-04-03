import React from 'react'

const raffle = () => {
  return (
    <div>
      <div className='flex justify-around mt-20' style={{height: 700}}>
        <div className='relative '>
        <img src="https://www.lesitedelasneaker.com/wp-content/images/2022/03/comment-cop-application-nike-snkrs-pic04.jpg" alt="" width={270} className='mx-auto'  />
        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-landing-page-blank-png-22.png" alt=""  width={300} className='' style={{position: 'relative', top: -550, }}/>
        </div>
        
        <div className='' style={{width: 350}}>
        <h1 className='text-3xl font-bold my-5 text-center'>WHAT'S RAFFLE</h1>
        <p className='text-xl text-center'>A raffle on SNKRS is a way for users to have a chance to purchase limited edition or highly sought after sneakers. Rather than a traditional first-come, first-served model, a raffle is a random selection process that gives everyone who enters an equal chance of winning the opportunity to purchase the shoe. This helps to eliminate the need for users to have lightning-fast reflexes or bots that can purchase shoes faster than a human. Raffles can have different entry requirements, and some may require users to complete a task or answer a question before entering. Winners of the raffle are selected at random, and those who are selected are given the opportunity to purchase the shoe.</p>
        </div>
        
      </div>
      <div className='flex justify-around ' style={{height: 750}} >
        <div style={{width: 350}}>
        <h1 className='text-3xl font-bold my-5 '>How can you participate</h1>
        <p className='text-xl text-center'>To participate in the raffle on SNKRS, she should first have a SNKRS account and be located in a country where the raffle is available. Once logged in, she should select the desired shoe and follow the instructions to enter the raffle. This typically involves answering a few questions or completing a task to verify her identity and increase her chances of winning. She should also make sure to enter before the raffle deadline and keep an eye out for notifications regarding the raffle results. It's important to note that winning a raffle is never guaranteed, so she should keep trying and be patient.</p>
        </div>
        <div className='relative m-0' >
        <img src="https://ujasntkfphywizsdaapi.supabase.co/storage/v1/object/public/content/app_screens/23d4608a-7574-4906-b478-74bf26e65717.png" className='relative' alt="" width={300} style={{borderRadius: 20, margin: 'auto'}} />
        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-landing-page-blank-png-22.png" alt="" className='relative'  width={345} style={{position: 'relative', top: -670, }}/>
        
        </div>

      </div>
    </div>
  )
}

export default raffle