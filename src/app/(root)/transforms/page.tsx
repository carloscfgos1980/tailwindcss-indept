import React from 'react'
import Header from '../components/page'
import Image from 'next/image'

export default function Transforms() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>TRANSITION ANIMATION</h1>
        <div className="backface_visibility max-w-xl mx-auto">
            <Header subject="Backface visibility. Basic example" description="Use the backface-visible utility to show the backface of an element, like a cube, even when it's rotated away from view:"/>
            {/* example switching the card and back invisible*/}
            <div className="flex space-x-5">
                <div className="perspective-800 group">
                    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow">
                    <h5 className="mb-2 text-2xl font-semibold text-gray-900">backface-visible</h5>
                    <p>Default is backface visible</p>
                    </div>
                </div>
                <div className="perspective-800 group ">
                    <div className="transform transition group-hover:rotate-y-180 p-6 bg-white border border-gray-400 rounded-lg shadow backface-hidden">
                    <h5 className="mb-2 text-2xl font-semibold text-gray-900">backface-hidden</h5>
                    <p>Backface Visibility Hidden</p>
                    </div>
                </div>
            </div>
            {/* example switching the card and have a different content in the back*/}
            <div className="group w-[250px] h-[350px] perspective-800 group" >
                <div className="backface-hidden transform transition duration-[1.5s] group-hover:rotate-y-180 
                rounded-lg shadow-lg absolute t-0">
                    <Image 
                    className="p-3 mx-auto" 
                    src="/pics/flaki.jpeg" alt="flaki" 
                    width={100}
                    height={100} 
                    />
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-semibold text-gray-900">Front Side</h5>
                    <p>Hover on this card and see the backside</p>
                </div>
                </div>    
                <div className="backface-hidden transform transition duration-[1.5s] -rotate-y-180 group-hover:rotate-y-0 
                rounded-lg shadow-lg absolute t-0">        
                    <Image 
                    className="p-3 mx-auto" 
                    src="/pics/yo.jpeg" alt="yo" 
                    width={100}
                    height={100} 
                    />
                <div className="p-6">
                    <h5 className="mb-2 text-2xl font-semibold text-gray-900">Back Side</h5>
                    <p>How are you? Go ahead and implement a card.</p>
                </div>
                </div>
            </div>
        </div>
        <div className="perspective mx-auto max-w-xl">
            <Header subject="Perspective. Basic example" description="Utilities for controlling an element's perspective when placed in 3D space"/>
            <div className="flex space-x-2">
                <div className="perspective-normal">
                    <div className="transform rotate-y-30 border-2 border-black rounded-2xl text-center p-3">
                    🎁
                    <p className='text-xl'>perspective-normal</p>
                    <p>transform rotate-y-30</p>
                    </div>
                </div>
                <div className="perspective-midrange transform rotate-y-30">
                    <div className="  border-2 border-black rounded-2xl text-center p-3">
                    🎁
                    <p className='text-xl'>perspective-midrange</p>
                    <p>transform rotate-y-30</p>
                    </div>
                </div>
                <div className="perspective-dramatic">
                    <div className="transform rotate-y-30  border-2 border-black rounded-2xl text-center p-3">
                    🎁
                    <p className='text-xl'>perspective-dramatic</p>
                    <p>transform rotate-y-30</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
