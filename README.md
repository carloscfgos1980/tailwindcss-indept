## Learning in deep tailwindcss

3/06/2025

# Flex
src/app/(roo)/flex.tsx

1. inline
2. inline-block
3. flex
4. inline-flex

# Grids & Header component
3/06/2025
src/app/(roo)/flex.tsx

- Grids
1. Inline Grid
2. Table

- Header component
src/app/(root)/components/Header.tsx

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

*******

* I had a bug due typescript. I need to create a type. After that everything went smooth. I call this component several time in the route flex and grids. I refresh knowledge about component and how to pass arguments.

# responsive_style & Dark mode

src/app/(root)/page.tsx


