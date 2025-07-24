import React from 'react'
import Header from '../components/page'

export default function transistionAnimation() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>TRANSITION ANIMATION</h1>
        <div className="transition_property max-w-xl mx-auto">
            <Header subject="Transition Property. Basic example" description="Use utilities like transition and transition-colors to specify which properties should transition when they change:"/>
            <div className='flex justify-center'>
                <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">
                Save Changes
                </button>
            </div>
        </div>
        <div className="transition_behavior max-w-xl mx-auto">
            <Header subject="Transition Behavior. Basic example" description="Use the transition-discrete utility to start transitions when changing properties with a discrete set of values, such as elements that change from hidden to block:"/>
            <div className='flex justify-center'>
                <button
                className="transition-opacity duration-1000 ease-out opacity-100 hover:opacity-0 bg-pink-500 text-white font-bold py-2 px-4 rounded-lg items-center">
                    Vanish Slowly 💨
                </button>
            </div>
        </div>
        <div className="transtion_duration max-w-xl mx-auto">
            <Header subject="Transition Duration. Basic example" description="Use utilities like duration-150 and duration-700 to set the transition duration of an element in milliseconds:"/>
            <div className="flex justify-around">
            <button className="bg-blue-500 transition delay-150 duration-150 ease-in-out hover:-translate-x-1 hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">Button A - 150</button>
            <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-x-1 hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">Button B -300</button>
            <button className="bg-blue-500 transition delay-150 duration-700 ease-in-out hover:-translate-x-1 hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">Button C -700</button>
            </div>
        </div>
        <div className="transtion_timing_
        function max-w-xl mx-auto">
            <Header subject="Transition Timing Function" description="Use utilities like ease-in and ease-out to control the easing curve of an element's transition:"/>
            <div className="flex justify-around">
            <button className="bg-blue-500 transition delay-150 duration-300 ease-in hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-in</button>
            <button className="bg-blue-500 transition delay-150 duration-300 ease-out hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-out</button>
            <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-in-out</button>
            </div>
        </div>
        <div className="transtion_delay max-w-xl mx-auto">
            <Header subject="Transition Delay" description="Use utilities like delay-150 and delay-700 to set the transition delay of an element in milliseconds:"/>
            <div className="flex justify-around">
            <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-in</button>
            <button className="bg-blue-500 transition delay-300 duration-300 ease-in-out hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-out</button>
            <button className="bg-blue-500 transition delay-700 duration-300 ease-in-out hover:scale-150 hover:bg-indigo-500 rounded-xl p-2 text-white">ease-in-out</button>
            </div>
        </div>
        <div className="animation max-w-xl mx-auto">
        <Header subject="Adding a spin animation" description="Use the animate-spin utility to add a linear spin animation to elements like loading indicators:"/>
        <div className='flex justify-center'>
            <button type="button" className="bg-indigo-500 rounded-xl p-2 text-white flex" disabled>
                <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-current me-3" />
                Processing…
            </button>
        </div>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24">
            <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-gray-900">
            </path>
            </svg>
        </div>
        </div>
        <div className="ping_animation_ping max-w-xl mx-auto">
            <Header subject="Adding a ping animation" description="Use the animate-ping utility to make an element scale and fade like a radar ping or ripple of water—useful for things like notification badges:"/>
            <div className='flex justify-center'>
                <div className='relative h-16 w-32 border-2 rounded-xl border-blue-600 text-blue-600'>
                    <p className='p-2 text-center'>Transactions</p>
                    <div className='absolute top-0 right-0 translate-x-1 -translate-y-1'>
                        <span className="relative flex size-3">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                        </span>
                    </div>

                </div>

            </div>
        </div>
        <div className="pulse_animation max-w-xl mx-auto">
            <Header subject="Adding Pulse animation" description="Use the animate-pulse utility to make an element gently fade in and out—useful for things like skeleton loaders:"/>
            <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
            <div className="flex animate-pulse space-x-4">
                <div className="size-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-6 py-1">
                <div className="h-2 rounded bg-gray-200"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                        <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                    </div>
                    <div className="h-2 rounded bg-gray-200"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="bounced_animation max-w-xl mx-auto">
            <Header subject="Adding a bounce animation" description="Use the animate-bounce utility to make an element bounce up and down—useful for things like "/>
            <div className='flex justify-center'>
                <div className="animate-bounce h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
                    👆
                </div>
            </div>
        </div>
    </div>  
  )
}
