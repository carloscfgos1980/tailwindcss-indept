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
                height={80} />
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
        
    </div>
  )
}

export default FlexComponent