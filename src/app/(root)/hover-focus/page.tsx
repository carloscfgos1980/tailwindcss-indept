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
        <div className="before_after">
            <Header subject="Pseudo classes: Before & After" description="Style the ::before and ::after pseudo-elements using the before and after variants:"/>  
            <label>
            <span className="text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">Email</span>
            <input type="email" name="email" className="..." placeholder="you@example.com" />
            </label> 
            <blockquote className="mt-5 text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
            When you look
            <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500">
                <span className="relative text-white dark:text-gray-950">annoyed</span>
            </span>
            all the time, people think that you`re busy.
            </blockquote>          
        </div>
        <div className="marker mt-5">
            <Header subject="::Marker" description="Style the counters or bullets in lists using the marker variant:"/>
            <ul role="list" className="list-disc marker:text-sky-400 ...">
                <li>5 cups chopped Porcini mushrooms</li>
                <li>1/2 cup of olive oil</li>
                <li>3lb of celery</li>
            </ul>
        </div>
        <div className="selection">
            <Header subject="::selection" description="Style the active text selection using the selection variant:"/>
            <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
                <p>
                    So I started to walk into the water. I wont lie to you boys, I was terrified. But I pressed on, and as I made my
                    way past the breakers a strange calm came over me. I dont know if it was divine intervention or the kinship of all
                    living things but I tell you Jerry at that moment, I <em>was</em> a marine biologist.
                </p>
            </div>
        </div>
        <div className="firsLetter mt-5">
            <Header subject="First Letter" description="Style the first line in a block of content using the first-line variant, and the first letter using the first-letter variant:"/>   
            <div className="text-gray-700">
                <p
                    className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-line:tracking-widest first-line:uppercase"
                >
                    Well, let me tell you something, funny boy. Y know that little stamp, the one that says  New York Public Library?
                </p>
                <p className="mt-6">Well that may not mean anything to you, but that means a lot to me. One whole hell of a lot.</p>
            </div>
        </div>
        <div className="prefered_reduced_motion mt-5">
            <Header subject="prefered reduce motion" description="Style the first line in a block of content using the first-line variant, and the first letter using the first-letter variant:"/>  
            {/* the svg is not working! */}
            <button type="button" className="bg-indigo-500 ..." disabled>
            <svg className="animate-spin motion-reduce:hidden ..." viewBox="0 0 24 24"></svg>
            Processing...
            </button>
            <button className="transition hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 bg-indigo-500 mx-3 p-3 rounded-xl">
            Save changes
            </button>

            <button className="motion-safe:transition motion-safe:hover:-translate-x-0.5 bg-indigo-500 mx-3 p-3 rounded-xl">Save changes</button>
        </div>
        <div className="child_selector mt-3">
            <Header subject="prefered reduce motion" description="Style the first line in a block of content using the first-line variant, and the first letter using the first-letter variant:"/> 
            <div>
            <h2>Categories</h2>
            <ul className=" flex flex-wrap *:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 *:m-3">
                <li>Sales</li>
                <li>Marketing</li>
                <li>SEO</li>
                <li>Analytics</li>
                <li>Design</li>
                <li>Strategy</li>
                <li>Security</li>
                <li>Growth</li>
                <li>Mobile</li>
                <li>UX/UI</li>
            </ul>
            </div>            
        </div>
    </div>
  )
}

export default HoverFocus