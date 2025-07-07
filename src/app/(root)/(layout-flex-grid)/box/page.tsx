import React from 'react'
import Header from '../../components/page'
import Image from 'next/image'

export default function BoxComponents() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Responsive Desing</h1>
        <div className="box_break_decoration max-w-72 mx-auto">
            <Header subject="box decoration break" description="Use the box-decoration-slice and box-decoration-clone utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks:"/>
            <div className="flex *:m-3 *:text-5xl">
                <span className="box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
                Hello<br />World
                </span>
                <span className="box-decoration-clone bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white ...">
                Hello<br />World
                </span>
            </div>
        </div>
        <div className="display max-w-md mx-auto">
            <Header subject="Display" description="Use the inline, inline-block, and block utilities to control the flow of text and elements:"/>
            <div className='*:my-3'>
                <p>
                When controlling the flow of text, using the CSS property <span className="inline">display: inline</span> will cause the
                text inside the element to wrap normally.
                </p>
                <p>
                While using the property <span className="inline-block">display: inline-block</span> will wrap the element to prevent the
                text inside from extending beyond its parent.
                </p>
                <p>
                Lastly, using the property <span className="block">display: block</span> will put the element on its own line and fill its
                parent.
                </p>
            </div>
        </div>
        <div className="float_elements max-w-md mx-auto">
            <Header subject="Floating elements to the right" description="Use the float-right utility to float an element to the right of its container:"/>
            <article>
                <Image className="float-left mr-3 mb-3" 
                src="/pics/flaki.jpeg" alt="Flaki"
                width={80} 
                height={80}
                />
                <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we&apos;re too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn&apos;t HE deserve better? Look. If you think this is about overdue fines and missing books, you&apos;d better think again. This is about that kid&apos;s right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that&apos;s how y&apos;get your kicks. You and your good-time buddies.</p>
            </article>
        </div>
            <div className="column_layout_width mx-auto max-w-10/12 px-5">
                <Header subject="Object position" description="Use utilities like columns-xs and columns-sm to set the ideal column width for the content within an element:"/>
                <div className='*:my-3'>
                    <Image 
                    className="object-top-left" 
                    src="/chitchat.jpeg" alt="chitchat" 
                    width={200}
                    height={2000}
                    />
                    <Image 
                    className="object-top" 
                    src="/pics/building.jpg" alt="building" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="object-top-right" 
                    src="/pics/flaki.jpeg" alt="flaki" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="object-center" 
                    src="/pics/mami.jpeg" alt="mami" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="object-bottom-right" 
                    src="/pics/kyra.jpeg" alt="kyra" 
                    width={200}
                    height={200}
                    />
                </div>
            </div>
    </div>
  )
}
