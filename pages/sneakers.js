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
        console.log(JSON.stringify(sneaker));
    };
    return (
    <>
        <div>
        <div className='grid justify-items-center grid-cols-4 ' >
        {snkrs.map(sneaker=>(
            <div onClick={() =>{b(sneaker)}} style={{width: '350px'}} className='border m-5 cursor-pointer' >
            <img src={sneaker.original_picture_url} alt="" width={250} style={{margin: "auto"}} />
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
        console.log(sneakers);
        return{
            props: {
                snkrs: sneakers,
            },
        };
    }