import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTask } from '@component/redux/reducers/panierSlice'
const panierNike = () => {
    const dispatch = useDispatch()
    const paniers = useSelector(state => state.paniersnk.panier)
    const supp = snk =>{
        dispatch(removeTask(snk))
    }

  return (
    <>
    <h1 className='text-3xl font-bold'>Votre Panier</h1>
        <div>
            <div>
                {paniers.map((snk, index)  => (
                    <div className='flex border m-2' key={index} style={{width
                    : 650}}>
                        <div style={{width: 400}} >
                        <img src={snk.original_picture_url}
                        alt=""  style={{backgroundColor: '#d6d3d3'}} />
                        </div>
                        <div style={{display: 'flex',flexDirection:'column',  justifyContent: 'space-between', padding: 10}}>
                        <p>{snk.name}</p>
                        <p>Taille: {snk.selectedSize}</p>
                        </div>
                        <button style={{height: 20}} onClick={() => supp(snk)}><svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default panierNike