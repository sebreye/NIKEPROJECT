import React from 'react'
import { useRouter } from 'next/router'
const sneakers = ({snkrs}) => {
    const router = useRouter()
    const b = (sneaker) =>{
        router.push({
        pathname: `/liste/${sneaker.name}`,
        query:{
            result: JSON.stringify(sneaker)
        },
    })
    };
    return (
    <>
        <div>
        <div className='grid justify-items-center grid-cols-4 ' >
        {snkrs.map(sneaker=>(
            <div  onClick={() =>{b(sneaker)}} style={{width: '350px'}} className='border m-5 cursor-pointer bg-white hover:border-0   hover:duration-300 relative front' >
            <img src={sneaker.original_picture_url} alt="" width={250} style={{margin: "auto"}} />
            <div className='absolute w-full items-end back text-center pb-5 justify-center -z-20 flex h-full bg-gray-300/20 top-0'>
               <div className='bg-white rounded-full border border-red-500' style={{width: 100}}>
                {sneaker.prix} €
               </div>
            </div>
            </div>
        ))}
        </div>
        </div>
    </>
    )
}

export default sneakers;
export async function getStaticProps(){
    const {sneakers} = await import ('/data/data.json')
        return{
            props: {
                snkrs: sneakers,
            },
        };
    }