import React from 'react'
import Header from '../components/page'
import Image from 'next/image'

export default function Transforms() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>TRANSFORMS</h1>
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
        <div className="rotate mx-auto max-w-xl">
            <Header subject="Rotate. Basic example" description="Use rotate-<number> utilities like rotate-45 and rotate-90 to rotate an element by degrees:"/>
            <div className="flex">
            <Image 
                className="rotate-45 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                />
            <Image 
                className="rotate-90 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                />
            <Image 
                className="rotate-210 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                    />
            </div>
        </div>
        <div className="rotate_
        negative mx-auto max-w-xl">
            <Header subject="Rotate. Usage of negative numbers" description="Use -rotate-<number> utilities like -rotate-45 and -rotate-90 to rotate an element counterclockwise by degrees:"/>
            <div className="flex">
            <Image 
                className="-rotate-45 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                />
            <Image 
                className="-rotate-90 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                />
            <Image 
                className="-rotate-210 p-3 mx-auto" 
                src="/pics/flaki.jpeg" alt="flaki" 
                width={100}
                height={100} 
                    />
            </div>
        </div>
        <div className="rotate_3D mx-auto max-w-xl">
            <Header subject="Rotate. Usage of negative numbers" description="Use -rotate-<number> utilities like -rotate-45 and -rotate-90 to rotate an element counterclockwise by degrees:"/>
            <div className="flex">
            <Image 
                className="rotate-x-50 rotate-z-45 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="rotate-x-15 -rotate-y-30 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="rotate-y-25 rotate-z-30 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="skew mx-auto max-w-xl">
            <Header subject="Skew. Basic example" description="Use skew-<number> utilities like skew-4 and skew-10 to skew an element on both axes:"/>
            <div className="flex">
            <Image 
                className="skew-3 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="skew-6 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="skew-12 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="skew_negative mx-auto max-w-xl">
            <Header subject="Skew. Negative values" description="Use skew-<number> utilities like skew-4 and skew-10 to skew an element on both axes:"/>
            <div className="flex">
            <Image 
                className="-skew-3 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="-skew-6 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="-skew-12 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="translate mx-auto max-w-xl">
            <Header subject="Translate. Basic example" description="Use translate-<number> utilities like translate-2 and -translate-4 to translate an element on both axes based on the spacing scale:"/>
            <div className="flex">
            <Image 
                className="-translate-6 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-2 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-8 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="translate_x_axis mx-auto max-w-xl">
            <Header subject="Translate. on the x-axis" description="Use translate-x-<number> or translate-x-<fraction> utilities like translate-x-4 and translate-x-1/4 to translate an element on the x-axis:"/>
            <div className="flex">
            <Image 
                className="-translate-x-4 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-x-2 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-x-1/2 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="translate_y_axis mx-auto max-w-xl">
            <Header subject="Translate. on the y-axis" description="Use translate-y-<number> or translate-y-<fraction> utilities like translate-y-6 and translate-y-1/3 to translate an element on the y-axis:"/>
            <div className="flex">
            <Image 
                className="-translate-y-4 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-y-2 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-y-1/2 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
        <div className="translate_z_axis mx-auto max-w-xl">
            <Header subject="Translate. on the z-axis" description="Use translate-z-<number> utilities like translate-z-6 and -translate-z-12 to translate an element on the z-axis:"/>
            <div className="flex transform-3d">
            <Image 
                className="-translate-z-8 rotate-x-50 rotate-z-45 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-z-2 rotate-x-50 rotate-z-45 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                />
            <Image 
                className="translate-z-1/2 rotate-x-50 rotate-z-45 p-3 mx-auto" 
                src="/pics/mountains.jpeg" alt="flaki" 
                width={200}
                height={200} 
                    />
            </div>
        </div>
    </div>
  )
}
