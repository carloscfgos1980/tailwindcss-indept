import React from 'react'
import Header from '../../components/page'

function Size() {
  return (
    <div className=' **:rounded-lg'>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Sizing</h1>
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
        <div className="width_minimum max-w-6/12 mx-auto **:rounded-lg">
            <Header subject="Minimum width" description="Use min-w-<number> utilities like min-w-24 and min-w-64 to set an element to a fixed minimum width based on the spacing scale:"/>
            <div className="w-20 *:bg-blue-700 *:text-amber-50 *:my-2 *:h-8 ">
                <div className="flex items-center justify-center min-w-80">min-w-80</div>
                <div className="flex items-center justify-center min-w-64">min-w-64</div>
                <div className="flex items-center justify-center min-w-48">min-w-48</div>
                <div className="flex items-center justify-center min-w-32">min-w-32</div>
                <div className="flex items-center justify-center min-w-24">min-w-24</div>
            </div>
        </div>
        <div className="width_min_percentage max-w-6/12 mx-auto **:rounded-lg">
            <Header subject="Percentage width" description="Use min-w-full or min-w-<fraction> utilities like min-w-1/2 and min-w-2/5 to give an element a percentage-based minimum width:"/>
            <div className="flex space-x-2 *:bg-green-700 *:text-amber-50 *:my-2 *:h-8 ">
                <div className="flex items-center justify-center min-w-3/4">min-w-3/4</div>
                <div className="flex items-center justify-center w-full">w-full</div>
            </div>
        </div>
        <div className="width_min_container_scale max-w-6/12 mx-auto **:rounded-lg">
            <Header subject="Width Minimum Using Container Scale" description="Use utilities like min-w-sm and min-w-xl to set an element to a fixed minimum width based on the container scale:"/>
            <div className="w-40 *:bg-fuchsia-700 *:text-amber-50 *:my-2">
                <div className="flex items-center justify-center min-w-xl">min-w-xl</div>
                <div className="flex items-center justify-center min-w-lg">min-w-lg</div>
                <div className="flex items-center justify-center min-w-md">min-w-md</div>
                <div className="flex items-center justify-center min-w-sm">min-w-sm</div>
                <div className="flex items-center justify-center min-w-xs">min-w-xs</div>
                <div className="flex items-center justify-center min-w-2xs">min-w-2xs</div>
                <div className="flex items-center justify-center min-w-3xs">min-w-3xs</div>
            </div>
        </div>
        <div className="width_maximum max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Width Maximum" description="Use max-w-<number> utilities like max-w-24 and max-w-64 to set an element to a fixed maximum width based on the spacing scale:"/>
            <div className="flex flex-col justify-center space-y-2 *:bg-blue-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-full max-w-96">max-w-96</div>
                <div className="flex items-center justify-center w-full max-w-80">max-w-80</div>
                <div className="flex items-center justify-center w-full max-w-64">max-w-64</div>
                <div className="flex items-center justify-center w-full max-w-48">max-w-48</div>
                <div className="flex items-center justify-center w-full max-w-40">max-w-40</div>
                <div className="flex items-center justify-center w-full max-w-32">max-w-32</div>
                <div className="flex items-center justify-center w-full max-w-24">max-w-24</div>
            </div>
        </div>
        <div className="width_maximum_percentage max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Width Maximum Percentage" description="Use max-w-<number> utilities like max-w-24 and max-w-64 to set an element to a fixed maximum width based on the spacing scale:"/>
            <div className="flex flex-col justify-center space-y-2 *:bg-green-700 *:text-amber-50 ">
                <div className="flex items-center justify-center w-full max-w-9/10">max-w-9/10</div>
                <div className="flex items-center justify-center w-full max-w-3/4">max-w-3/4</div>
                <div className="flex items-center justify-center w-full max-w-1/2">max-w-1/2</div>
                <div className="flex items-center justify-center w-full max-w-1/3 ">max-w-1/3</div>
            </div>
        </div>
        <div className="height_basic max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Height Basic" description="Use h-<number> utilities like h-24 and h-64 to set an element to a fixed height based on the spacing scale:"/>
            <div className="flex items-end justify-center *:bg-blue-700 *:text-amber-50 space-x-2 *:px-1">
                <div className="flex items-center justify-center h-96">h-96</div>
                <div className="flex items-center justify-center h-80">h-80</div>
                <div className="flex items-center justify-center h-64">h-64</div>
                <div className="flex items-center justify-center h-48">h-48</div>
                <div className="flex items-center justify-center h-40">h-40</div>
                <div className="flex items-center justify-center h-32">h-32</div>
                <div className="flex items-center justify-center h-24">h-24</div>
            </div>
        </div>
        <div className="height_percentage max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Height Percentage" description="Use h-full or h-<fraction> utilities like h-1/2 and h-2/5 to give an element a percentage-based height:"/>
            <div className="flex items-end justify-center space-x-2 *:bg-green-700 *:text-amber-50 *:px-1 h-60">
            <div className="flex items-center justify-center h-full">h-full</div>
                <div className="flex items-center justify-center h-9/10">h-9/10</div>
                <div className="flex items-center justify-center h-3/4">h-3/4</div>
                <div className="flex items-center justify-center h-1/2">h-1/2</div>
                <div className="flex items-center justify-center h-1/3 ">h-1/3</div>
            </div>
        </div>
        <div className="height_minimum max-w-6/12 mx-auto **:rounded-lg">
            <Header subject="Minimum height" description="Use min-h-<number> utilities like min-h-24 and min-h-64 to set an element to a fixed minimum height based on the spacing scale:"/>
            <div className="flex items-end justify-center space-x-2 *:bg-blue-700 *:text-amber-50 *:my-2 *:h-8 ">
                <div className="flex items-center justify-center min-h-96"><p className='rotate-270'>min-w-96</p></div>
                <div className="flex items-end justify-center min-h-80"><p className='[writing-mode:vertical-lr]'>min-h-80</p></div>
                <div className="flex items-end justify-center min-h-64"><p className='[writing-mode:vertical-rl]'>min-h-64</p></div>
                <div className="flex items-center justify-center min-h-48">min-h-48</div>
                <div className="flex items-center justify-center min-h-32">min-h-32</div>
                <div className="flex items-center justify-center min-h-24">min-h-24</div>
            </div>
        </div>
        <div className="height_min_percentage max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Height Percentage" description="Use min-h-full or min-h-<fraction> utilities like min-h-1/2, and min-h-2/5 to give an element a percentage-based minimum height:"/>
            <div className="flex items-end justify-center space-x-2 *:bg-green-700 *:text-amber-50 *:px-1 h-60">
            <div className="flex items-center justify-center min-h-full"><p className='[writing-mode:vertical-rl]'>min-h-full</p></div>
                <div className="flex items-center justify-center min-h-9/10"><p className='[writing-mode:vertical-rl]'>min-h-9/10</p></div>
                <div className="flex items-center justify-center min-h-3/4"><p className='[writing-mode:vertical-rl]'>min-h-3/4</p></div>
                <div className="flex items-center justify-center min-h-1/2"><p className='[writing-mode:vertical-rl]'>min-h-1/2</p></div>
                <div className="flex items-center justify-center min-h-1/3 "><p className='[writing-mode:vertical-rl]'>min-h-1/2</p></div>
            </div>
        </div>
        <div className="height_max_classic max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Height MAximum Classic" description="Use max-h-<number> utilities like max-h-24 and max-h-64 to set an element to a fixed maximum height based on the spacing scale:"/>
            <div className="flex items-end justify-center space-x-2 *:bg-blue-700 *:text-amber-50 *:px-1 h-100">
            <div className="flex items-center justify-center min-h-full"><p className='[writing-mode:vertical-rl]'>min-h-full</p></div>
                <div className="flex items-center justify-center h-full max-h-80"><p className='[writing-mode:vertical-rl]'>max-h-80</p></div>
                <div className="flex items-center justify-center h-full max-h-64"><p className='[writing-mode:vertical-rl]'>max-h-64</p></div>
                <div className="flex items-center justify-center h-full max-h-48"><p className='[writing-mode:vertical-rl]'>max-h-48</p></div>
                <div className="flex items-center justify-center h-full max-h-32 "><p className='[writing-mode:vertical-rl]'>max-h-32</p></div>
                <div className="flex items-center justify-center h-full max-h-24 "><p className='[writing-mode:vertical-rl]'>max-h-24</p></div>
            </div>
        </div>
        <div className="height_max_percentage max-w-8/12 mx-auto **:rounded-lg">
            <Header subject="Height Maximum PErcentage" description="Use max-h-<number> utilities like max-h-24 and max-h-64 to set an element to a fixed maximum height based on the spacing scale:"/>
            <div className="flex items-end justify-center space-x-2 *:bg-fuchsia-700 *:text-amber-50 *:px-1 h-100">
                <div className="flex items-center justify-center h-full max-h-full"><p className='[writing-mode:vertical-rl]'>max-h-full</p></div>
                <div className="flex items-center justify-center h-full max-h-9/10"><p className='[writing-mode:vertical-rl]'>max-h-9/10</p></div>
                <div className="flex items-center justify-center h-full max-h-3/4"><p className='[writing-mode:vertical-rl]'>max-h-3/4</p></div>
                <div className="flex items-center justify-center h-full max-h-1/2"><p className='[writing-mode:vertical-rl]'>max-h-1/2</p></div>
                <div className="flex items-center justify-center h-full max-h-1/4"><p className='[writing-mode:vertical-rl]'>max-h-1/4</p></div>
            </div>
        </div>
    </div>
  )
}

export default Size;