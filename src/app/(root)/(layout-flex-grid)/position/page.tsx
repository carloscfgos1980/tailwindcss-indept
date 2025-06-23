import React from 'react'
import Header from '../../components/page'


export default function Position() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Position</h1>
        <div className="static_position_elements max-w-md mx-auto bg-emerald-400 p-5">
            <Header subject="Static Position Elements" description="Use the static utility to position an element according to the normal flow of the document:"/>
            <div className='max-h-80'>
                <div className="static bg-blue-200 p-5">
                    <p className='text-black'>Static parent</p>
                <div className="absolute bottom-0 left-0 bg-blue-500">
                    <p>Absolute child</p>
                </div>
                </div>
            </div>
        </div>
        <div className="relative_position_elements max-w-md mx-auto bg-emerald-400 p-5 my-5">
            <Header subject="Relative Position Elements" description="Use the static utility to position an element according to the normal flow of the document:"/>
            <div className='max-h-80'>
                <div className="static bg-blue-200 m-2">
                    <p className='text-black'>Static parent</p>
                <div className="relative bottom-0 left-0 bg-blue-500 mt-2">
                    <p>Absolute child</p>
                </div>
                </div>
            </div>
        </div>
        <div className="top_left_button_right max-w-md mx-auto">
            <Header subject="Top left button right" description="Use top-<number>, right-<number>, bottom-<number>, left-<number>, and inset-<number> utilities like top-0 and bottom-4 to set the horizontal or vertical position of a positioned element:"/>           
            <div className="grid grid-cols-3 gap-4 *:rounded-xl">           
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                        <div className="absolute top-0 left-0 size-16  bg-blue-600 text-amber-300">01</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute inset-x-0 top-0 h-16 bg-blue-600 text-amber-300">02</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute top-0 right-0 size-16  bg-blue-600 text-amber-300">03</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute inset-y-0 left-0 w-16  bg-blue-600 text-amber-300">04</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute inset-0  bg-blue-600 text-amber-300">05</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute inset-y-0 right-0 w-16  bg-blue-600 text-amber-300">06</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute bottom-0 left-0 size-16  bg-blue-600 text-amber-300">07</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute inset-x-0 bottom-0 h-16  bg-blue-600 text-amber-300">08</div>
                </div>
                <div className="relative size-32 mt-1 bg-fuchsia-400 *:rounded-xl">
                    <div className="absolute right-0 bottom-0 size-16  bg-blue-600 text-amber-300">09</div>
                </div>
            </div>
        </div>
        <div className="negative_values max-w-lg mx-auto">
            <Header subject="Negative values" description="To use a negative top/right/bottom/left value, prefix the class name with a dash to convert it to a negative value:"/> 
            <div className="relative bg-fuchsia-400 size-32 *:rounded-xl *:*:rounded-xl">
                <div className="absolute -top-4 -left-4 size-20 bg-blue-600 text-amber-300 flex items-center justify-center">negative</div>
            </div>   
        </div>
        <div className="using_logical max-w-lg mx-auto">
            <Header subject="Using logical properties" description="Use start-<number> or end-<number> utilities like start-0 and end-4 to set the inset-inline-start and inset-inline-end logical properties, which map to either the left or right side based on the text direction:"/> 
            <div dir="ltr">
                <div className="relative bg-fuchsia-400 size-32 rounded-xl *:rounded-xl">
                    <div className="absolute start-0 top-0 size-14 bg-blue-600 text-amber-300">start</div>
                </div>
                <div>
                <div dir="rtl">
                <div className="relative size-32 bg-fuchsia-400 size-32 rounded-xl *:rounded-xl">
                    <div className="absolute start-0 top-0 size-14 bg-blue-600 text-amber-300">end</div>
                </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="stacking_3d max-w-lg mx-auto">
          <Header subject="Stacking 3D" description="Using postion (relative and absolute) to create a 3D effect"/> 
          <div className="relative *:absolute *:border-4 *border-black  *:size-16 *:bg-fuchsia-400 *:rounded-full *:text-center *:py-5 *:m-1">
            <div className="left-40">05</div>
            <div className="left-30">04</div>
            <div className="left-20">03</div>
            <div className="left-10">02</div>
            <div className="left-0">01</div>
          </div>
        </div>
        <h1 className='margin_negative_value text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Margin</h1>
        <div className="stacking_3d max-w-lg mx-auto">
            <Header subject="Margin negative Value" description="To use a negative margin value, prefix the class name with a dash to convert it to a negative value:"/>
            <div className='mx-auto text-center'>
                <div className="h-16 w-36 bg-sky-400 opacity-20"></div>
                <div className="-mt-8 bg-sky-300 size-16 ">-mt-8</div>
            </div>
        </div>
    </div>
  )
}
