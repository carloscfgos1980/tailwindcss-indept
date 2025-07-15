import React from 'react'
import Header from '../components/page'

function Backgroungs() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>BACKGROUNDS</h1>
        <div className="backgrounds_attachment max-w-xl mx-auto">
        <Header subject="background-attachment" description="Fixing the background image. Use the bg-fixed utility to fix the background image relative to the viewport:"/>
        <div className='w-5/6 h-72 overflow-auto'>
            <div className="bg-[url(/pics/mountains.jpeg)] bg-fixed bg-contain w-full h-96 mb-3">
            </div>
            <div>
                <h1>My trip to the summit</h1>
                <p>November 16, 2021 · 4 min read</p>
                <p>Maybe we can live without libraries, people like you and me. Maybe. Sure, we&apos;re too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn&apos;t HE deserve better?</p>
                Look. If you think this is about overdue fines and missing books, you&apos;d better think again. This is about that kid&apos;s right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that&apos;s how y&apos;get your kicks. You and your good-time buddies.
            </div>
        </div>
        </div>
        <div className="backgrounds_attachment_scroll_container max-w-xl mx-auto">
        <Header subject="background-attachment. scroll with the container" description="Scrolling with the container: Use the bg-local utility to scroll the background image with the container and the viewport"/>
            <div className='w-5/6 h-60 overflow-auto'>
                <div className="bg-[url(/pics/mountains.jpeg)] bg-local bg-contain w-full h-80 relative">
                <div className='absolute inset-x-0 bottom-0  bg-indigo-600/25'>
                    <p className='text-xl text-black '>Because the mail never stops. It just keeps coming and coming and coming, there&apos;s never a let-up. It&apos;s relentless. Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps coming in. And then the barcode reader breaks and it&apos;s Publisher&apos;s Clearing House day.</p>
                        <p className=' text-black'>--— Newman</p>
                </div>
                </div>
            </div>
        </div>
        <div className="backgrounds_attachment_scroll_viewpoint max-w-xl mx-auto">
            <Header subject="background-attachment. scroll the view point" description="Scrolling with the viewport: Use the bg-scroll utility to scroll the background image with the viewport, but not with the container:"/>
            <div className="bg-[url(/pics/mountains.jpeg)] bg-scroll bg-contain overflow-auto m-2 h-72 w-80">
                    <div className='h-96 w-80 pt-40'>
                        <p className='text-xl text-black '>Because the mail never stops. It just keeps coming and coming and coming, there&apos;s never a let-up. It&apos;s relentless. Every day it piles up more and more and more. And you gotta get it out but the more you get it out the more it keeps coming in. And then the barcode reader breaks and it&apos;s Publisher&apos;s Clearing House day.</p>
                            <p className=' text-black'>--— Newman</p>
                    </div>
            </div>
        </div>
        <div className="background_clip_cropping max-w-xl mx-auto">
            <Header subject="backgroundclip" description="Cropping to text: Use the bg-clip-text utility to crop an element's background to match the shape of the text:"/>
            <p className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent text-center">Hello world</p>
        </div>
        <div className="background_linear_gradient max-w-xl mx-auto">
            <Header subject="background linear gradient" description="Adding a linear gradient: Use utilities like bg-linear-to-r and bg-linear-<angle> with the color stop utilities to add a linear gradient to an element:"/>
            <div className='*:my-3'>
                <div className="h-14 bg-linear-to-r from-cyan-500 to-blue-500"></div>
                <div className="h-14 bg-linear-to-t from-sky-500 to-indigo-500"></div>
                <div className="h-14 bg-linear-to-bl from-violet-500 to-fuchsia-500"></div>
                <div className="h-14 bg-linear-65 from-purple-500 to-pink-500"></div>
            </div>
        </div>
        <div className="background_radiar_gradient max-w-xl mx-auto">
            <Header subject="background Conic Radial gradient" description="Adding a radial gradient: Use the bg-radial and bg-radial-[<position>] utilities with the color stop utilities to add a radial gradient to an element:"/>
            <div className='flex justify-center *:mx-3'>
            <div className="size-24 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
            <div className="size-24 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
            <div className="size-24 rounded-full bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%"></div>
            </div>
        </div>
        <div className="background_conic_gradient max-w-xl mx-auto">
            <Header subject="background Conic gradient" description="Use the bg-conic and bg-conic-<angle> utilities with the color stop utilities to add a conic gradient to an element:"/>
            <div className='flex justify-center *:mx-3'>
            <div className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50%"></div>
            <div className="size-24 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
            <div className="size-24 rounded-full bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700"></div>
            </div>
        </div>
        <div className="background_gradient_colors max-w-xl mx-auto">
            <Header subject="background Image. Setting gradient color stops" description="Setting gradient color stops: Use utilities like from-indigo-500, via-purple-500, and to-pink-500 to set the colors of the gradient stops:"/>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-8 rounded-xl"></div>
        </div>
        <div className="background_conic_gradient_stop max-w-xl mx-auto">
            <Header subject="background Image. Setting gradient stop positions" description="Use utilities like from-10%, via-30%, and to-90% to set more precise positions for the gradient color stops:"/>
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-8 rounded-xl"></div>
        </div>
        <div className="background_interpolarization_mode max-w-xl mx-auto">
            <Header subject="background Image. Changing interpolation mode" description="Use the interpolation modifier to control the interpolation mode of a gradient:"/>
            <div className='*:my-3 *:rounded-2xl *:h-8'>
            <div className="bg-linear-to-r/srgb from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/hsl from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/oklab from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/oklch from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/longer from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/shorter from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/increasing from-indigo-500 to-teal-400"></div>
            <div className="bg-linear-to-r/decreasing from-indigo-500 to-teal-400"></div>
            </div>
        </div>
    </div>
  )
}

export default Backgroungs