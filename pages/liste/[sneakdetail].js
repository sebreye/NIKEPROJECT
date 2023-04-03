import React from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '@component/redux/reducers/panierSlice'
import { useState } from 'react'
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
            <button onClick={() => panier(snk)} className=' bg-black text-white m-4' style={{width: 150, height: 50, borderRadius: 50}}>Acheter</button>
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
