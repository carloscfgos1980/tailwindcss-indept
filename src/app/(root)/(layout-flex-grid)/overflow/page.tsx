import React from 'react'
import Header from '../../components/page'
import Image from 'next/image'
import dummyData, { Person } from '../../components/data'

function OverFlow() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Overflow</h1>
        <div className="overflow">
            <div className="Show_Overflow py-5 max-w-6/12 mx-auto">
            <Header subject="Showing content that overflows" description="Use the overflow-visible utility to prevent content within an element from being clipped:"/>
            <div className="inline-flex gap-2 h-24 overflow-visible bg-amber-50 rounded-xl max-w-sm mx-auto pb-5 ">
                <Image 
                className="mx-auto rounded-full h-24 self-center m-3" 
                src="/pics/yo.jpeg" alt="yo" 
                width={500}
                height={200} 
                />
            <div className="space-y-2 text-center sm:text-left p-5">
                <div className="space-y-0.5">
                <p className="text-lg font-semibold text-black">Carlos Infante</p>
                <p className="font-medium text-gray-500">Product Engineer mbmbmbmbmbmbmbmbmbmbmbmbmbmb</p>
                </div>
                </div>
            </div>
            </div>
            <div className="Not Show_Overflow py-5 max-w-6/12 mx-auto">
                <Header subject="Not Showing content that overflows" description="Use the overflow-hidden utility to clip any content within an element that overflows the bounds of that element:"/>
                <div className="inline-flex gap-2 h-24 overflow-hidden bg-amber-50 rounded-xl max-w-sm mx-auto pb-5 ">
                    <Image 
                    className="mx-auto rounded-full h-24 self-center m-3" 
                    src="/pics/yo.jpeg" alt="yo" 
                    width={500}
                    height={200} 
                    />
                <div className="space-y-2 text-center sm:text-left p-5">
                    <div className="space-y-0.5">
                    <p className="text-lg font-semibold text-black">Carlos Infante</p>
                    <p className="font-medium text-gray-500">Product Engineer mbmbmbmbmbmbmbmbmbmbmbmbmbmb</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="scrolling_if_needed max-w-md mx-auto">
                <Header subject="Scrolling if needed" description="Use the overflow-auto utility to add scrollbars to an element in the event that its content overflows the bounds of that element:"/>
                <div className="h-40 overflow-auto">
                    <ul role='list h-80'>
                    {dummyData.map((person: Person) =>{
                        return (
                            <li className="flex p-4 border-2 border-amber-700" key={person.id}>
                            <Image 
                            className="h-10 w-10 rounded-full" 
                            src={person.imagePath} alt="" 
                            width={100}
                            height={80}
                            />
                            <div className="ml-3 overflow-hidden">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
                            </div>
                        </li>
                        )
                    })
                }
                    </ul> 
                </div>
            </div>
            <div className="scrolling_horizontally max-w-md mx-auto">
                <Header subject="Scrolling horizontally" description="Use the overflow-x-auto utility to allow horizontal scrolling if needed:"/>
                <div className="flex w-md overflow-x-auto">
                    {dummyData.map((person: Person) =>{
                        return (
                            <div className="flex flex-colum p-4 border-2 border-amber-700" key={person.id}>
                            <Image 
                            className="h-10 w-10 rounded-full" 
                            src={person.imagePath} alt="" 
                            width={100}
                            height={80}
                            />
                            <div className="ml-3 overflow-hidden">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{person.name}</p>
                                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{person.email}</p>
                            </div>
                        </div>
                        )
                    })}

                </div>
            </div>
        </div>
    </div>
  )
}

export default OverFlow