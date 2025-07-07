import React from 'react'
import Header from '../../components/page'
import Image from 'next/image'

function Typography() {
  return (
    <div className='max-w-8/12 mx-auto'>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Typography</h1>
        <div className="font_family_basic *:my-3">
            <Header subject="Font Family Basic" description="Use utilities like font-sans and font-mono to set the font family of an element:"/>
            <div className='*:text-3xl'>
                <p className="font-sans ">The quick brown fox ... (sans)</p>
                <p className="font-serif text-3xl">The quick brown fox ... (serif)</p>
                <p className="font-mono text-3xl">The quick brown fox ... (mono)</p>
            </div>
        </div>
        <div className="font_size *:my-3">
            <Header subject="Fon size Basic" description="Use utilities like text-sm and text-lg to set the font size of an element:"/>
            <div>
                <p className="text-sm">The quick brown fox ... (sm)</p>
                <p className="text-base">The quick brown fox ... (base)</p>
                <p className="text-xl">The quick brown fox ... (xl)</p>
                <p className="text-2xl">The quick brown fox ... (2xl)</p>
            </div>
        </div>
        <div className="font_line_height *:my-3">
            <Header subject="Font Line Height" description="Use utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:"/>
            <div className='*:my-3'>
                <p className="text-sm/6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className="fon_size *:my-3">
            <Header subject="Fon size Basic" description="Use utilities like text-sm and text-lg to set the font size of an element:"/>
            <div>
                <p>Use the antialiased utility to render text using grayscale antialiasing:</p>
                <p className="antialiased text-3xl">The quick brown fox jumps over the lazy dog.</p>
                <p>Use the subpixel-antialiased utility to render text using subpixel antialiasing:</p>
                <p className="subpixel-antialiased text-3xl">The quick brown fox jumps over the lazy dog.</p>
            </div>
            </div>
        </div>
        <div className="font_line_height *:my-3">
            <Header subject="Font Line Height" description="Use utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:"/>
            <div className='*:my-3'>
                <p className="text-sm/6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className="fon_style *:my-3">
            <Header subject="Fon size Basic" description="Utilities for controlling the style of text."/>
            <div className=' bg-gray-400 border-2 rounded-xl **:m-5 **:rounded-xl'>
                <div className="italic">
                    <p>Use the italic utility to make text italic:</p>
                    <p className="antialiased text-3xl bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className="non_italic">
                    <p>Use the not-italic utility to display text normally:</p>
                    <p className="subpixel-antialiased text-3xl  bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                </div>
            </div>
            </div>
        </div>
        <div className="font_line_height *:my-3">
            <Header subject="Font Line Height" description="Use utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:"/>
            <div className='*:my-3'>
                <p className="text-sm/6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className="font_weight *:my-3">
            <Header subject="Font Weight" description="Utilities for controlling the font weight of an element."/>
                <div className=' bg-gray-400 border-2 rounded-xl **:m-3 **:rounded-xl'>
                    <div className="font-light">
                        <p>font-light:</p>
                        <p className="font-light bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="font-normal">
                        <p>font-normal:</p>
                        <p className="font-normal bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="font-medium">
                        <p>font-medium:</p>
                        <p className="font-medium bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="font-semibold">
                        <p>font-semibold:</p>
                        <p className="font-semibold bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="font-bold">
                        <p>font-bold:</p>
                        <p className="font-bold bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="font_line_height *:my-3">
            <Header subject="Font Line Height" description="Use utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:"/>
            <div className='*:my-3'>
                <p className="text-sm/6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm/8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className="fon_strecht *:my-3">
            <Header subject="letter-spacing" description="Utilities for controlling the tracking, or letter spacing, of an element."/>
                <div className=' bg-gray-400 border-2 rounded-xl **:m-3 **:rounded-xl'>
                    <div className="">
                        <p>tracking-tight:</p>
                        <p className="tracking-tight bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="font-stretch-expanded">
                        <p>tracking-normal:</p>
                        <p className="tracking-normal bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                    <div className="tracking-wide">
                        <p>tracking-wide:</p>
                        <p className="tracking-wide bg-black text-amber-100 p-2">The quick brown fox jumps over the lazy dog.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="font_line_height *:my-3">
            <Header subject="Font Line Height" description="Use font size utilities like text-sm/6 and text-lg/7 to set the font size and line-height of an element at the same time:"/>
            <div className='*:my-3'>
                <p className="text-base/6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-base/7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-base/8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
        </div>
        <div className="font_line_height_independently *:my-3">
            <Header subject="Font Line Setting independently" description="Use leading-<number> utilities like leading-6 and leading-7 to set the line height of an element independent of the font-size:"/>
            <div className='*:my-3'>
                <p className="text-sm leading-6">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm leading-7">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
                <p className="text-sm leading-8">So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
        </div>
        <div className="line-clamp *:my-3">
            <Header subject="line-clamp" description="Utilities for clamping text to a specific number of lines."/>
            <article className='**:my-3'>
                <time>Mar 10, 2020</time>
                <h2>Boost your conversion rate</h2>
                <p className="line-clamp-3">
                    Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut
                    sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat
                    dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt
                    ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur
                    enim.
                </p>
                <div className='flex items-center *:m-3'>
                    <Image className="rounded-full" 
                    src="/pics/flaki.jpeg" alt="Flaki"
                    width={80} 
                    height={80}
                    />
                    <p className=''>Falkita Rica</p>
                    
                </div>
            </article>
        </div>
        <div className="list_style_type">
            <Header subject="list-style-type" description="Utilities for controlling the marker style of a list. Use utilities like list-disc and list-decimal to control the style of the markers in a list:"/>
            <div className='*:my-3'>
                <ul className="list-disc">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>And I&apos;d like to take a minute just sit right there</li>
                    <li>I&apos;ll tell you how I became the prince of a town called Bel-Air</li>
                </ul>
                <ul className="list-decimal">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>And I&apos;d like to take a minute just sit right there</li>
                    <li>I&apos;ll tell you how I became the prince of a town called Bel-Air</li>
                </ul>
                <ul className="list-none">
                    <li>Now this is a story all about how, my life got flipped-turned upside down</li>
                    <li>And I&apos;d like to take a minute just sit right there</li>
                    <li>I&apos;ll tell you how I became the prince of a town called Bel-Air</li>
                </ul>
            </div>
        </div>
        <div className="text_align">
        <Header subject="listalign" description="Utilities for controlling the alignment of text."/>
            <div className='text_left *:my-3'>
                <p>text left</p>
                <p className=' text-left text-xl '>So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className='text_right *:my-3'>
                <p>text right</p>
                <p className=' text-right text-xl '>So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className='text_center *:my-3'>
                <p>text center</p>
                <p className=' text-center text-xl '>So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
            <div className='text_justify *:my-3'>
                <p>text justify</p>
                <p className=' text-justify text-xl '>So I started to walk into the water. I won&apos;t lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don&apos;t know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
            </div>
        </div>
    </div>
  )
}

export default Typography