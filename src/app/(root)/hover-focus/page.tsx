import React from 'react'
import Header from '../components/page';
import dummyData from '../components/data';
import { Person } from '../components/data';
import Image from 'next/image';
import peopleData, { Worker } from '../components/peopleData';
 
function HoverFocus() {
    console.log("dummyData:", dummyData);
  return (
    <div className='px-4 w-xl mx-auto my-3'>
        <div className="hover">
            <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96'>Hover, focus, and other states</h1>
            <Header subject="Hover" description="Every utility class in Tailwind can be applied conditionally by adding a variant to the beginning of the class name that describes the condition you want to target."/>
            <button className="bg-sky-500 hover:bg-sky-700 hover:text-amber-50 p-2 rounded-xl">Save changes</button>
        </div>
        <div className="hover-responsive">
        <Header subject="Hover and responsive" description="These variants can even be stacked to target more specific situations, for example changing the background color in dark mode, at the medium breakpoint, on hover:"/>
        <button className="dark:md:hover:bg-fuchsia-600 hover:text-amber-50 p-2 rounded-xl">Save changes</button>           
        </div>
        <div className="pseudo clases">
        <Header subject="Pseudo clases" description="Style elements on hover, focus, and active using the hover, focus, and active variants:"/>
        <button className="bg-violet-500 hover:bg-green-500 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 p-2 rounded-xl">
        Save changes</button>        
        </div>
        <div className="first_last border-4 rounded-lg border-amber-900 py-3 px-5 mt-5">
            <Header subject="Hover" description="Style an element when it is the first-child or last-child using the first and last variants:"/>   
            <ul role='list'>
                {dummyData.map((person: Person) =>{
                    return (
                        <li className="flex p-4 border-2 border-amber-700 first:pt-0 last:pb-0 " key={person.id}>
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
        <div className="odd_even max-w-7xl">
            <Header subject="Odd & Even" description="You can also style an element when it's an odd or even child using the odd and even variants:"/>     
            <table className='table-autoborder-collapse border border-gray-40'>
                <thead>
                    <tr>
                        <th className='border border-gray-300'>Name</th>
                        <th className='border border-gray-300'>Title</th>
                        <th className='border border-gray-300'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {peopleData.map((person: Worker) => {
                        return(
                            <tr key={person.id} className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-900/50 dark:even:bg-gray-950">
                            <td className='border border-gray-300 px-3'>{person.name}</td>
                            <td className='border border-gray-300 px-3'>{person.title}</td>
                            <td className='border border-gray-300 px-3'>{person.email}</td>
                          </tr>
                        )
                    })}
                </tbody>
                </table>      
        </div>
        
    </div>
  )
}

export default HoverFocus