import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '@component/redux/reducers/panierSlice'
import { useState } from 'react'
import Image from 'next/image'
import qrCode from '../../public/qrcode2.png'
const sneakdetail = ({snk}) => {
  const dispatch = useDispatch()
const panier = snk =>{
  dispatch(addTask({ ...snk, selectedSize }))
} 
const [selectedSize, setSelectedSize] = useState("");
const handleSizeSelect = (size) => {
  setSelectedSize(size);
}
  return (
    <div>
        <div>
          <div className='flex justify-around'>
            <div className=''>
            <img src={snk.original_picture_url} alt="" style={{backgroundColor: '#dddada'}} width={1000} />
            </div>
            <div className='flex-col  bg-white my-auto p-5' style={{width: 650}}>
            <p className='text-3xl my-5'>{snk.name}</p>
            <p className='my-5'>{snk.details}</p>
            <div className='grid grid-cols-5 my-5 ' style={{width: 300}}>
            {snk.size_range.map((size) =>{
              return <div>
                <button className='bg-white  text-black w-full h-full focus:bg-black focus:text-white' style={{border: '1px solid black', margin: 5}}
                onClick={() =>handleSizeSelect(size)}>
                  {size}</button></div>
            }
              
            )}
            </div>
            <p className='text-center text-xl font-bold'>{snk.story_html}</p>
            <div className='flex justify-center'>
              {snk.vente === 'shop'?<button onClick={() => panier(snk)} className=' bg-black text-white m-4' style={{width: 150, height: 50, borderRadius: 50}}>Acheter</button>:snk.vente === "coming" ? <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block bg-black text-white m-4" style={{width: 150, height: 50, borderRadius: 50}} type="button">
  me prévenir
</button>
 : '' }
            </div>
            
            </div>
            
          </div>
        </div>
        <div  id="defaultModal" tabindex="-1" aria-hidden="true" className="fixed bg-black/70 top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <div className=''>
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Nike-SNKRS-app-logo-900x900.png" alt="" width={100}/>
                <h1 className='text-3xl'>GET THE DROP</h1>
                <img src={snk.original_picture_url} alt="" width={350} />
                </div>
                <div >
                  <button style={{display: 'flex'}} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span></button>
                <div>
                  <Image src={qrCode} width={350} height={350}/>
                  {/* <img src="https://qrcg-free-editor.qr-code-generator.com/main/assets/images/websiteQRCode_noFrame.png" alt="" width={300}/> */}
                </div>
                </div>
            </div>

        </div>
    </div>
</div>
    </div>
  )
}

export default sneakdetail;


export async function getServerSideProps(context) {
  const { query } = context

  const snk = JSON.parse(query.result)

  return {
      props: {
          snk
      }
  }
}
