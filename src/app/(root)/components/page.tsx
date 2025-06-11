import React from 'react'
type HeaderData = {
    subject: string;
    description: string;
}
function Header(headerData:HeaderData) {
  return (
    <div className='mt-5'>
            <h1 className='text-fuchsia-800 font-bold text-center'>{headerData.subject}</h1>
            <h5 className='bg-black text-amber-100 p-3'>{headerData.description}</h5>
            <br/>
    </div>
  )
}

export default Header