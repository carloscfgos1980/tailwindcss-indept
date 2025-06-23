import Image from 'next/image';
import Header from './components/page';



export default function Home() {

  return (
    <div className='px-4 w-xl mx-auto my-3'>
      <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96'>tailwindcss tutorial</h1>
      <div className="general">
        <Header subject="Overview" description="You style things with Tailwind by combining many single-purpose presentational classes (utility classes) directly in your markup"/>
        <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <Image 
          className="size-12 shrink-0" 
          src="/chitchat.jpeg" alt="ChitChat Logo"
          width={1000}
          height={500} 
        />
        <div>
          <div className="text-xl font-medium text-black dark:text-white">ChitChat</div>
          <p className="text-gray-500 dark:text-gray-400">You have a new message!</p>
        </div>
      </div>
      </div>
      <div className="responsive_style py-5">
        <Header subject="Responsive styyle and pseudo classes: hover button" description="This component is fully responsive and includes a button with hover and active styles, and is built entirely with utility classes:"/>
          <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-50 rounded-xl max-w-sm mx-auto">
            <Image 
            className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" 
            src="/pics/yo.jpeg" alt="yo" 
            width={80}
            height={500} 
            />
          <div className="space-y-2 text-center sm:text-left">
            <div className="space-y-0.5">
              <p className="text-lg font-semibold text-black">Carlos Infante</p>
              <p className="font-medium text-gray-500">Product Engineer</p>
            </div>
              <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                Message
              </button>
            </div>
          </div>
      </div>
      <div className="dark_mode">
        <Header subject="Dark mode" description="Styling an element in dark mode is just a matter of adding the dark: prefix to any utility you want to apply when dark mode is active:"/>
        <div className="bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
              </svg>
            </span>
          </div>
          <h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight ">Writes upside-down</h3>
          <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm ">
            The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}
