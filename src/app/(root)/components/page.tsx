import React from 'react'
type HeaderData = {
    subject: string;
    description: string;
}
function Header(headerData:HeaderData) {
  return (
    <div className='my-5'>
            <h1 className='text-amber-300'>{headerData.subject}</h1>
            <h5>{headerData.description}</h5>
    </div>
  )
}

export default Header