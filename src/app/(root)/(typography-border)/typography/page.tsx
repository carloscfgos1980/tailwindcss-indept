import React from 'react'
import Header from '../../components/page'

function Typography() {
  return (
    <div className=' **:rounded-lg'>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Typography</h1>
        <div className="width_basic max-w-lg mx-auto **:rounded-lg">
            <Header subject="Width Basic" description="Use w-<number> utilities like w-24 and w-64 to set an element to a fixed width based on the spacing scale:"/>
            <div className="flex flex-col justify-center space-y-2 *:bg-fuchsia-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-96">w-96</div>
                <div className="flex items-center justify-center w-80">w-80</div>
                <div className="flex items-center justify-center w-64">w-64</div>
                <div className="flex items-center justify-center w-48">w-48</div>
                <div className="flex items-center justify-center w-40">w-40</div>
                <div className="flex items-center justify-center w-32">w-32</div>
                <div className="flex items-center justify-center w-24">w-24</div>
            </div>
        </div>
        <div className="width_using_percentage max-w-lg mx-auto **:rounded-lg **:my-2">
            <Header subject="Width Using a percentage" description="Use w-full or w-<fraction> utilities like w-1/2 and w-2/5 to give an element a percentage-based width:"/>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-1/2">1/2</div>
                <div className="flex items-center justify-center w-1/2">1/2</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-2/5">w-2/5</div>
                <div className="flex items-center justify-center w-3/5">w-3/5</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-1/3">w-1/3</div>
                <div className="flex items-center justify-center w-2/3">w-2/3</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-1/4">w-1/4</div>
                <div className="flex items-center justify-center w-3/4">w-3/4</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-1/5">w-1/5</div>
                <div className="flex items-center justify-center w-4/5">w-4/5</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-1/6">w-1/6</div>
                <div className="flex items-center justify-center w-5/6">w-5/6</div>
            </div>
            <div className="flex justify-center space-x-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-full">w-full</div>
            </div>
        </div>
        <div className="width_container_scale max-w-6/12 mx-auto **:rounded-lg">
            <Header subject="Width Using Container Scale" description="Use utilities like w-sm and w-xl to set an element to a fixed width based on the container scale:"/>
            <div className="flex flex-col justify-center space-y-2 *:bg-fuchsia-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-xl">w-xl</div>
                <div className="flex items-center justify-center w-lg">w-lg</div>
                <div className="flex items-center justify-center w-md">w-md</div>
                <div className="flex items-center justify-center w-sm">w-sm</div>
                <div className="flex items-center justify-center w-xs">w-xs</div>
                <div className="flex items-center justify-center w-2xs">w-2xs</div>
                <div className="flex items-center justify-center w-3xs">w-3xs</div>
            </div>
        </div>
    </div>
  )
}

export default Typography