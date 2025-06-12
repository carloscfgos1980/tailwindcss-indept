import Image from 'next/image'
import React from 'react'
import Header from '../components/page'

function Responsive() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Responsive Desing</h1>
        <div className="mx-autooverflow-hidden rounded-xl bg-white shadow-md ">
            <div className="Responsive design mx-auto md:max-w-2xl">
                <Header subject="Responsive Desing" description="Create different layout depending of the screen size: media query"/>
                <div className="md:flex md:shrink-0">
                <Image
                    className="h-48 w-48 object-cover md:h-full md:w-48"
                    src="/pics/building.jpg"
                    alt="Modern building architecture"
                    width={100}
                    height={100}
                />
                </div>
                <div className="p-8">
                <div className="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                <a href="#" className="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                    Incredible accommodation for your team
                </a>
                <p className="mt-2 text-gray-500">
                    Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                    places to do just that.
                </p>
                </div>
            </div>
            <div className="column_layout_number max-w-lg mx-auto px-5">
                <Header subject="columns" description="Use columns-<number> utilities like columns-3 to set the number of columns that should be created for the content within an element:"/>
                <div className='columns-3 gap-3 *:my-3'>
                    <Image 
                    className="" 
                    src="/chitchat.jpeg" alt="chitchat" 
                    width={100}
                    height={80}
                    />
                    <Image 
                    className="aspect-3/2" 
                    src="/pics/building.jpg" alt="building" 
                    width={100}
                    height={80}
                    />
                    <Image 
                    className="aspect-square" 
                    src="/pics/flaki.jpeg" alt="flaki" 
                    width={100}
                    height={80}
                    />
                    <Image 
                    className="" 
                    src="/pics/mami.jpeg" alt="mami" 
                    width={100}
                    height={80}
                    />
                    <Image 
                    className="" 
                    src="/pics/kyra.jpeg" alt="kyra" 
                    width={80}
                    height={80}
                    />
                </div>
            </div>
            <div className="column_layout_width mx-auto px-5">
                <Header subject="colum Setting by width" description="Use utilities like columns-xs and columns-sm to set the ideal column width for the content within an element:"/>
                <div className='columns-3xs gap-3 *:my-3'>
                    <Image 
                    className="" 
                    src="/chitchat.jpeg" alt="chitchat" 
                    width={200}
                    height={2000}
                    />
                    <Image 
                    className="" 
                    src="/pics/building.jpg" alt="building" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="" 
                    src="/pics/flaki.jpeg" alt="flaki" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="" 
                    src="/pics/mami.jpeg" alt="mami" 
                    width={200}
                    height={200}
                    />
                    <Image 
                    className="" 
                    src="/pics/kyra.jpeg" alt="kyra" 
                    width={200}
                    height={200}
                    />
                </div>
            </div>
            <div className="after_break max-w-lg mx-auto">
                <Header subject="After Break" description="Use utilities like break-after-column and break-after-page to control how a column or page break should behave after an element:"/>
                <div className="columns-2 *:m-4 bg-blue-500 *:text-amber-100">
                    <p>Well, let me tell you something, ...</p>
                    <p className="break-after-column">Sure, go ahead, laugh...</p>
                    <p>Maybe we can live without...</p>
                    <p>Look. If you think this is...</p>
                    </div>
            </div>
            <div className="before_break  max-w-lg mx-auto">
                <Header subject="Before Break" description="Use utilities like break-before-column and break-before-page to control how a column or page break should behave before an element:"/>
                <div className="columns-2 *:m-4 bg-blue-500 *:text-amber-100">
                    <p>Well, let me tell you something, ...</p>
                    <p className="break-before-column">Sure, go ahead, laugh...</p>
                    <p>Maybe we can live without...</p>
                    <p>Look. If you think this is...</p>
                    </div>
            </div>
            <div className="Inside_break max-w-lg mx-auto">
                <Header subject="Inside Break" description="Use utilities like break-inside-column and break-inside-avoid-page to control how a column or page break should behave within an element:"/>
                <div className="columns-2 *:m-4 bg-blue-500 *:text-amber-100">
                    <p>Well, let me tell you something, ...</p>
                    <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
                    <p>Maybe we can live without...</p>
                    <p>Look. If you think this is...</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Responsive