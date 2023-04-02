import React from 'react'
const sneakdetail = ({data}) => {

  return (
    <div>
      
        <div>
          <div>
            <img src={data.original_picture_url} alt="" width={150} />
            <p>{data.details}</p>
            <p>{data.name}</p>
            <p>{data.story_html}</p>
          </div>
        </div>
    </div>
  )
}

export default sneakdetail;


export async function getServerSideProps(context) {
  const { query } = context

  const data = JSON.parse(query.result)

  return {
      props: {
          data
      }
  }
}
