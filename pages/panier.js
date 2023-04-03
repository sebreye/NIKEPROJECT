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
    <h1 className='text-3xl font-bold text-center'>Votre Panier</h1>
        <div>
            <ul>
                {paniers.map((snk, index)  => (
                    <li className='flex' key={index}>
                        <img src={snk.original_picture_url}
                        alt="" width={300} />
                        <p>{snk.name}</p>
                        <p>Taille: {snk.selectedSize}</p>
                        <button onClick={() => supp(snk)}>supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default panierNike