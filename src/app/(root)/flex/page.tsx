import Image from 'next/image'
import Header from '../components/page'

function FlexComponent() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96'>FlexComponent</h1>
        <div className="inline_block">
        <Header subject="Block and Inline" description="Use the inline, inline-block, and block utilities to control the flow of text and elements:"/>
            <div className="container max-w-dvh mx-auto px-4 inline-block">
                <div className='my-3'>
                    <p className='my-3'>
                    When controlling the flow of text, using the CSS property <span className="inline">display: inline</span> will cause the
                    text inside the element to wrap normally.
                    </p>
                    <p className='my-3'>
                    While using the property <span className="inline-block">display: inline-block</span> will wrap the element to prevent the
                    text inside from extending beyond its parent.
                    </p>
                    <p className='my-3'>
                    Lastly, using the property <span className="block">display: block</span> will put the element on its own line and fill its
                    parent.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex_general container max-w-96 mx-auto px-4'>
        <Header subject="Flex" description="Use the flex utility to create a block-level flex container:"/>
            <div className="flex items-center my-3">
                <Image 
                src="/chitchat.png" alt="ChitChat Logo"
                width={80}
                height={80} 
                />
                <div className='mx-2'>
                    <p>
                        <strong>Andrew Alfred</strong>
                    </p>
                    <p>
                    <span>Technical advisor</span>
                    </p>
                </div>
            </div>
        </div>
        <div className="inline_exampple container max-w-96 mx-auto px-4">
        <Header subject="Inline Flex" description="Use the inline-flex utility to create an inline flex container that flows with text:"/>
            <p className='my-5'>
                Today I spent most of the day researching ways to ...
                <span className="inline-flex items-baseline">
                    <Image 
                        className="mx-1 size-5 self-center rounded-full" 
                        src="/chitchat.png" alt="ChitChat Logo"
                        width={500}
                        height={500}
                    />
                    <span>Kramer</span>
                </span>
                keeps telling me there is no way to make it work, that he has run the numbers on every possible approach, but I just have to believe there s a way to make it work, there s simply too much opportunity here.
            </p>
        </div>
        <div className="flex_basis max-w-lg mx-auto">
            <Header subject="Flex Basis" description="Use basis-<number> utilities like basis-64 and basis-128 to set the initial size of flex items based on the spacing scale:"/>
            <div className="flex flex-row items-center justify-center gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16">
                <div className="flex items-center justify-center basis-64 text-center">01</div>
                <div className="flex items-center justify-center basis-64 text-center">02</div>
                <div className="flex items-center justify-center basis-128 text-center">03</div>
            </div>
        </div>
        <div className="using_the_container_scale max-w-lg mx-auto">
            <Header subject="Using the container scale" description="Use utilities like basis-xs and basis-sm to set the initial size of flex items based on the container scale:"/>
            <div className="flex flex-row items-center justify-center gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16">
                <div className="flex items-center justify-center basis-3xs text-center">01</div>
                <div className="flex items-center justify-center basis-2xs text-center">02</div>
                <div className="flex items-center justify-center basis-xs text-center">03</div>
                <div className="flex items-center justify-center basis-sm text-center">04</div>
            </div>
        </div>
        <div className="using_percentages max-w-lg mx-auto">
            <Header subject="Using Percentages" description="Use basis-<fraction> utilities like basis-1/2 and basis-2/3 to set the initial size of flex items:"/>
            <div className="flex flex-row items-center gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16">
                <div className="basis-1/3 text-center pt-2 flex items-center justify-center">01</div>
                <div className="basis-2/3 text-center pt-2 flex items-center justify-center">02</div>
            </div>
        </div>
        <div className="responsive_design max-w-lg mx-auto">
            <Header subject="Responsive designs" description="Prefix a flex-basis utility with a breakpoint variant like md: to only apply the utility at medium screen sizes and above:"/>
            <div className="flex flex-row items-center justify-center gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16">
                <div className="flex items-center justify-center basis-1/4 md:basis-1/3">01</div>
                <div className="flex items-center justify-center basis-1/4 md:basis-1/3">02</div>
                <div className="flex items-center justify-center basis-1/2 md:basis-1/3">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 my-5'>Flex Direction</h1>
        <div className="flex_row_riversed max-w-10/12 mx-auto">
            <Header subject="Flex Row Reversed" description="Use flex-row-reverse to position flex items horizontally in the opposite direction:"/>
            <div className="flex flex-row-reverse items-center gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:size-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_column_riversed max-w-10/12 mx-auto">
            <Header subject="Flex Column Reversed" description="Use flex-col-reverse to position flex items vertically in the opposite direction::"/>
            <div className="flex flex-col-reverse items-start gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16 *:w-32">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 my-5'>Flex Wrap</h1>
        <div className="flex_wrap max-w-lg mx-auto">
            <Header subject="Flex Wrap" description="Use flex-wrap to allow flex items to wrap:"/>
            <div className="flex flex-wrap gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16 *:w-48">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_wrap_reversed max-w-lg mx-auto">
            <Header subject="Flex Wrap Reversed" description="Use flex-wrap-reverse to wrap flex items in the reverse direction:"/>
            <div className="flex flex-wrap-reverse gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16 *:w-48">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 my-5'>Flex</h1> 
        <div className="flex_basis max-w-lg mx-auto">
            <Header subject="Flex Basis" description="Use flex-<number> utilities like flex-1 to allow a flex item to grow and shrink as needed, ignoring its initial size:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-red-700 *:text-amber-50 *:h-16">
                <div className="w-14 flex-none flex items-center justify-center ">01</div>
                <div className="w-64 flex-1 flex items-center justify-center ">02</div>
                <div className=" w-32 flex-1 flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_auto max-w-lg mx-auto">
            <Header subject="Flex Auto" description="Use flex-auto to allow a flex item to grow and shrink, taking into account its initial size:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16">
                <div className="w-14 flex-none flex items-center justify-center ">01</div>
                <div className="w-64 flex-auto flex items-center justify-center ">02</div>
                <div className=" w-32 flex-auto flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_none max-w-lg mx-auto">
            <Header subject="Flex None" description="Use flex-none to prevent a flex item from growing or shrinking:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16">
                <div className="w-14 flex-none flex items-center justify-center ">01</div>
                <div className="w-64 flex-auto flex items-center justify-center ">02</div>
                <div className=" w-32 flex-1 flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 my-5'>Flex Growing</h1> 
        <div className="flex_grow max-w-lg mx-auto">
            <Header subject="Flex Grow" description="Use grow to allow a flex item to grow to fill any available space:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-green-700 *:text-amber-50 *:h-16">
                <div className="w-14 flex-none flex items-center justify-center ">01</div>
                <div className="w-14 flex-grow flex items-center justify-center ">02</div>
                <div className=" w-14 flex-none flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_grow_factor max-w-lg mx-auto">
            <Header subject="Growing items based on factor" description="Use grow-<number> utilities like grow-3 to make flex items grow proportionally based on their growth factor, allowing them to fill the available space relative to each other:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16">
                <div className="w-14 grow-3 flex items-center justify-center ">01</div>
                <div className="w-14 grow-7 flex items-center justify-center ">02</div>
                <div className=" w-14 grow-3 flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_no_grow max-w-lg mx-auto">
            <Header subject="Preventing items from growing" description="Use grow-0 to prevent a flex item from growing:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-red-700 *:text-amber-50 *:h-16">
                <div className="w-14 grow flex items-center justify-center ">01</div>
                <div className="w-14 grow-0 flex items-center justify-center ">02</div>
                <div className=" w-14 grow flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 my-5'>Flex Shrink</h1> 
        <div className="flex_shrink max-w-lg mx-auto">
            <Header subject="Allowing flex items to shrink" description="Use shrink to allow a flex item to shrink if needed:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16">
                <div className="w-14 flex-none flex items-center justify-center ">01</div>
                <div className="w-64 flex-shrink flex items-center justify-center ">02</div>
                <div className=" w-14 flex-none flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="flex_no_shrink max-w-lg mx-auto">
            <Header subject="Preventing items from shrinking" description="Use shrink-0 to prevent a flex item from shrinking:"/>
            <div className="flex gap-3 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16">
                <div className="flex-1 flex items-center justify-center ">01</div>
                <div className="w-64 shrink-0 flex items-center justify-center ">02</div>
                <div className="flex-1 flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 mt-5'>Order</h1>
        <div className="order max-w-lg mx-auto">
            <Header subject="Explicitly setting a sort order" description="Use order-<number> utilities like order-1 and order-3 to render flex and grid items in a different order than they appear in the document:"/>
            <div className="flex justify-between *:rounded-lg *:bg-violet-700 *:text-amber-50 *:size-16 bg-gray-400 p-3">
                <div className="order-3 flex items-center justify-center ">01</div>
                <div className="order-1 flex items-center justify-center ">02</div>
                <div className="order-2 flex items-center justify-center">03</div>
            </div>
        </div>
        <div className="order max-w-lg mx-auto">
            <Header subject="Ordering items first or last" description="Use the order-first and order-last utilities to render flex and grid items first or last:"/>
            <div className="flex justify-between *:rounded-lg *:bg-blue-700 *:text-amber-50 *:size-16 bg-gray-400 p-3">
                <div className="order-last flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="order-first flex items-center justify-center">03</div>
            </div>
        </div>
    </div>
  )
}

export default FlexComponent