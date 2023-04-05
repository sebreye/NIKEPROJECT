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
                        <button onClick={() => supp(snk)}>supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default panierNike