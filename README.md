## Learning in deep tailwindcss

3/06/2025
http://localhost:3000/

1. overview
2. responsive style
3. dark mode

# Flex
src/app/(roo)/flex.tsx
http://localhost:3000/flex

1. inline
2. inline-block
3. flex
4. inline-flex

# Grids & Header component

3/06/2025
src/app/(roo)/grid.tsx
http://localhost:3000/grid

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


# Pseudo classes: Hover & focus
src/app/(root)/hover-focus/page.tsx
http://localhost:3000/hover-focus

1. Pseudo classes: first, last. 
* Elimnate padding from first and last li
src/app/(root)/hover-focus/page.tsx

* Here I also implemented to fetch a dummy data in order to loop over and display a list

Pseudo classes: odd, even. Give a different background color to the even li
src/app/(root)/hover-focus/page.tsx

2. before & after to use cool styling

5/06/2025
src/app/(root)/hover-focus/page.tsx

3. Marker. Style the dots of a list

4. Selection. Style the maker when we select a text

5. First Letter. Newspaper style making the first letter bigger

6. Motion to the buttons
The svg is not working

7. Child selector. Give style to the child elements

* There are a bunch of styling tricks here. I might need to come back to this sections

# responsive design
src/app/(root)/responsive/page.tsx
http://localhost:3000/responsive

1. responsive design
2. Columns layout amount columns
3. Size of the columns
9/06/2025

I can also use aspet ratio to custumize the pics, not really need cuz with width and height i can solve that also.

4. break after, before and inside. This helps to organize the items by columns and decide how it will be distribute

# Box decoration
src/app/(root)/box/page.tsx
http://localhost:3000/box

1. Box decoration

* This has some cool design to gradiant color background

2. display: inline, block
This is useful to display paraphs in certain order

3. float elements.

Here I could use eiter float-right or float-start. Or the opposite: float-right or float-end

There is also the examnle using <clear> utility. I don't think I will be using that so I sip it. Just in case, here is the URL explanation:

https://tailwindcss.com/docs/clear

* Onject fit

It is an utility to resize the image. I don't think I will use it but is handy to know it exists. Here is the explanation

https://tailwindcss.com/docs/object-fit

4. Object position

* This one does not want to work. Nevertheless, thre are other way to solve this

# Overflow
src/app/(root)/overflow/page.tsx

1. overflow Visible
In order to make the image to go further the parent element. I need to set th high bigger than the high of the parent element and use the utility of <overflow-visible>

2. overflow -not visible

Same as boven but with the utility <overflow-hidden>

3. Scrolling if need is a very good example coz I need to loop thru a list to display text and image. I also need to set the parent element smaller than the children to create the scrolling effect. Also set the right utility: <overflow-auto>

- I can create this effect horizontally, using this utility: <overflow-x-auto>
- I can create this effect vertically, using this utility: <overflow-y-auto>

# position

src/app/(root)/position/page.tsx
http://localhost:3000/position

* I recreate 2 examples. When it is absoluto, the element get the coordeates froom the screen and it does not stick in the parent element
1. Static position
2. Relative position

Another uses of <position>
<Absolutely positioning elements>
Use the absolute utility to position an element outside of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist:
<Fixed positioning elements>
Use the fixed utility to position an element relative to the browser window:
Scroll this element to see the fixed positioning in action
<Sticky positioning elements>
Use the sticky utility to position an element as relative until it crosses a specified threshold, then treat it as fixed until its parent is off screen:

3. top_left_button_right
* This is using the grids. It is very useful to distribute elements in the DOM

4. Using negative values

11/06/2025

* This place the element outside of the parent element

5. Using logical properties

* This works ok but some some the left (start) element psition on the top and the right (end) element position on the button

6. Stacking 3D

# Visibility & Z Index
src/app/(root)/visibility/page.tsx
http://localhost:3000/visibility

1. Making element invisible
2. Collapsing elements
* This is another way to hide and element
3. Index basic
* This is took me a bit of time to figure out cuz the example does not show all the needed codes. It was essenctial to use the utility <translate> so the elements will stack on each other and create de 3D effect
4. Z index negative value

# Flex Basis & Flex Direction

src/app/(root)/flex/page.tsx
http://localhost:3000/flex
 <Flex Basis>
1. flex Basis
2. Flex: Using the container scale
3. Flex: Using Percentages
4. Flex: Responsive designs

<Flex Direction>
1. Flex Row Reversed
2. Flex Column Reversed

# Flex Wrap, Flex, Flex Growing & Flex shrink

<Flex Wrapc>
1. Flex Wrap
2. Flex Wrap Reversed
* This feature will take more than one row if the sume of the items if larfer than the parent container

<Flex>
1. Flex basis
2. Flex Auto
3. Flex None

<Flex Growing>
1. Flex Grow
2. Growing items based on factor
3. Preventing items from growing

<Flex Shrink>
1. Allowing flex items to shrink
2. Preventing items from shrinking

# Order (flex)
16/06/2025
<order>
src/app/(root)/flex/page.tsx
http://localhost:3000/flex

- Explicitly setting a sort order
- Ordering items first or last

* This is to change the order of the elements, using flex

# Grid Column
src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>


- Specifying the grid columns
- Implementing a subgrid columns: This expand the amount of colums of certain element and what position the element is placed
- Spanning columns. Make the element bigger (more thabn one column)
- Starting and ending lines: utilities like col-start-2 and col-end-3 to make an element start or end at the nth grid line

# Grid row

- Specifying the grid rows
- Implementing a subgrid. Same explanation like colums but row direction
- Spanning rows
- Grid. Starting and ending lines

# Grid flow
- grid auto flow
- grid auto Columns
- grid auto Row

# 19/06/2025
# Gap
src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>

- Gap classic
- Gap giving different aalues to x (columns) and y (rows)

# Justify Content
* This is to use with <flex>

src/app/(root)/flex/page.tsx
<http://localhost:3000/flex>

- Justify Content Start
- Justify Content Center
- Justify Content End
- Justify Content Between
- Justify Content Around
- Justify Content Space Evenly
- Justify Content Stretch

# Justify Items
* This is to use with <grid>

src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>

- Justify Items Start
- Justify Items Center
- Justify Items End
- Justify Items Stretch

# Justify-self
https://tailwindcss.com/docs/justify-self

I didn't develop this example. They are way too specific. I won't be use those utilites that often. Nevertheless I will copy the explanation

justify-self
Utilities for controlling how an individual grid item is aligned along its inline axis.

Auto
Use the justify-self-auto utility to align an item based on the value of the grid's justify-items property:

Start
Use the justify-self-start utility to align a grid item to the start of its inline axis:

Center
Use the justify-self-center or justify-self-center-safe utilities to align a grid item along the center of its inline axis:

End
Use the justify-self-end or justify-self-end-safe utilities to align a grid item to the end of its inline axis:

Stretch
Use the justify-self-stretch utility to stretch a grid item to fill the grid area on its inline axis:

# Align Content
src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>

- Align Content Start
- Align Content Center
- Align Content End
- Align Content Between
- Align Content Around
- Align Content Evenly
- Align Content Stretch

# Align items

src/app/(root)/flex/page.tsx
<http://localhost:3000/flex>

- Align Items Stretch
- Align Items Start
- Align Items Center
- Align Items End
- Align Items Baseline
- Last Items baseline
* This last one is done woth grid instead of flex
src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>

# align-self
https://tailwindcss.com/docs/align-self

Auto
Use the self-auto utility to align an item based on the value of the container's align-items property:

Use the self-start utility to align an item to the start of the container's cross axis, despite the container's align-items value:

Center
Use the self-center utility to align an item along the center of the container's cross axis, despite the container's align-items value:

End
Use the self-end utility to align an item to the end of the container's cross axis, despite the container's align-items value:

Stretch
Use the self-stretch utility to stretch an item to fill the container's cross axis, despite the container's align-items value:

Baseline
Use the self-baseline utility to align an item such that its baseline aligns with the baseline of the flex container's cross axis:

Last baseline
Use the self-baseline-last utility to align an item along the container's cross axis such that its baseline aligns with the last baseline in the container:

# Place content

src/app/(root)/grid/page.tsx
<http://localhost:3000/grid>

* This is not working as supposed but also I won;t waste more time with it cuz it is not very useful

- Plcae Content Start
- Plcae Content Center
- Plcae Content End
- Plcae Content Between
- Plcae Content Around
- Plcae Content Evenly
- Plcae Content Stretch

# 23/06/2025

# padding
https://tailwindcss.com/docs/padding

Using logical properties
Use ps-<number> or pe-<number> utilities like ps-4 and pe-8 to set the padding-inline-start and padding-inline-end logical properties, which map to either the left or right side based on the text direction:

<div>
  <div dir="ltr">
    <div class="ps-8 ...">ps-8</div>
    <div class="pe-8 ...">pe-8</div>
  </div>
  <div dir="rtl">
    <div class="ps-8 ...">ps-8</div>
    <div class="pe-8 ...">pe-8</div>
  </div>
</div>

# margin
https://tailwindcss.com/docs/margin

- Using negative values

src/app/(root)/(layout-flex-grid)/position/page.tsx
<http://localhost:3000/position>

# width

src/app/(root)/(layout-fl)/typography/page.tsx
<http://localhost:3000/typography>

- Basic
- Width Using a percentage
- Using Container Scale

# 25/06/2025

#  Width
- Width min classic
- Width min percentage

# Height
- Height classic
- Height percentage
- Height min classic
- Height min percentage
- Height max
- Height max percentage

* It was difficult to swith the text direction. I finally did it but only from top to botton

# 7/07/25
<Tyography>

- font-family
- font-size
- font-smoothing
- font-style
- font-weight
- font-stretch
- letter-spacing
- line-clamp (limit the amount of lines that are shown)
- line-height
- list-style-type
- text-align

# 9/07/25

- Color
- Text Line Decoration Basic
- Text Line Decoration Color
- Text Line Decoration Style
- Text Line Decoration Thickness
- Underline offset (distance between the line and the text)
- Text transform ( to lowercase or to uppercase)
- Text overflow
- Text wrap

# 15/07/25
- Backgrounds-attachment. scroll text over the image
- Backgrounds-attachment. scroll text over and the image
- Backgrounds-attachment. Image fixed and scroll text
- Backgrounds gradient. Cool colors effect

# 16/07/25

- Borders. This is simple so I didn't do the examples, just read them.
- there is a gay to great border without <border> utility:

<div className="grid grid-cols-3 divide-x-4 divide-gray-200">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>

- Applying on focus
Prefix a border-color utility with a variant like focus:* to only apply the utility in that state

<input className="border-2 border-gray-700 focus:border-pink-600 ..." />

- Shadow. Those are nice 3D effects. I wont't coy the examples coz they are very simple.

- Mix blend mode. I added at the end of backgrounds route. It is cool eefect, using <space> with negative value, I create a stacking effect

- filters. this is like using photoshop

* This lessons (filters and effects) were pretty boring. It is just about styling images which It is easier to do with photoshop
- THE END

# 22/07/25
- Transition & Animations

src/(root)/trans-anim/page.tsx

- Transition property
- Transition behavior
- Transition Duration
- Transition Timing Function
- Transition Delay
- Adding a spin animation
- Adding a ping animation
- Adding Pulse animation

* Cool animation that I can use later!

# 23/07/25
- Transform

src/(root)/transforms.page.tsx

- backface-visibility
- perspective

# 24/07/25

- rotate
- skew
- transform
- translate
