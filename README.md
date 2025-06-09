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

4/06/2025
src/app/(root)/page.tsx

# Pseudo classes: Hover & focus
src/app/(root)/hover-focus/page.tsx

# Pseudo classes: first, last. DElimnate padding from first and last li
src/app/(root)/hover-focus/page.tsx

* Here I also implemented to fetch a dummy data in order to loop over and display a list

# Pseudo classes: odd, even. Give a different background color to the even li
src/app/(root)/hover-focus/page.tsx

# before & after to use cool styling

5/06/2025
src/app/(root)/hover-focus/page.tsx

# Marker. Style the dots of a list


# Selection. Style the maker when we select a text

# First Letter. Newspaper style making the first letter bigger

# Motion to the buttons
The svg is not working

# Child selector. Give style to the shild elements

* There are a bunch of styling tricks here. I might need to come back to this sections

# responsive design
src/app/(root)/responsive/page.tsx

# columns layout
9/06/2025
src/app/(root)/responsive/page.tsx

I can also use aspet ratio to custumize the pics, not really need cuz with width and height i can solve that also.

# break after, before and inside. This helps to organize the items by columns and decide how it will be distribute
src/app/(root)/responsive/page.tsx

# Box decoration.

* This has some cool design to gradiant color background

# display: inline, block
This is useful to display paraphs in certain order

# float elements.

Here I could use eiter float-right or float-start. Or the opposite: float-right or float-end

There is also the examnle using <clear> utility. I don't think I will be using that so I sip it. Just in case, here is the URL explanation:

https://tailwindcss.com/docs/clear

# Onjecto fit

It is an utility to resize the image. I don't think I will use it but is handy to know it exists. Here is the explanation

https://tailwindcss.com/docs/object-fit

# Object position

* This one does not want to work. Nevertheless, thre are other way to solve this

# Overflow
src/app/(root)/overflow/page.tsx

- overflow Visible
In order to make the imahe to go further the parent element. I need to set th high bigger than the high of the parent element and use the utility of <overflow-visible>

- overflow -not visible

Same as boven but with the utility <overflow-hidden>

- Scrolling if need is a very good example coz I need to loop thru a list to display text and image. I also need to set the parent element smaller than the children to create the scrolling effect. Also set the right utility: <overflow-auto>

- I can create this effect horizontally, using this utility: <overflow-x-auto>
- I can create this effect vertically, using this utility: <overflow-y-auto>
