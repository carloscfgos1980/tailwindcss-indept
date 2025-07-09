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
        <Header subject="List Align" description="Utilities for controlling the alignment of text."/>
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
        <div className="color">
            <Header subject="Color Basic" description="Use utilities like text-blue-600 and text-sky-400 to control the text color of an element:"/>
            <p className="text-blue-600 dark:text-sky-400">The quick brown fox...</p>
            <Header subject="Changing the opacity" description="Use the color opacity modifier to control the text color opacity of an element:"/>
            <p className="text-blue-600/100 dark:text-sky-400/100">The quick brown fox...</p>
            <p className="text-blue-600/75 dark:text-sky-400/75">The quick brown fox...</p>
            <p className="text-blue-600/50 dark:text-sky-400/50">The quick brown fox...</p>
            <p className="text-blue-600/25 dark:text-sky-400/25">The quick brown fox...</p>
            <Header subject="Applying on hover" description="Prefix a color utility with a variant like hover:* to only apply the utility in that state:"/>
            <p className="...">
            Oh I gotta get on that 
            <a className="underline hover:text-blue-600 dark:hover:text-blue-400" href="https://en.wikipedia.org/wiki/Internet"> internet</a>,
            I&apos;m late on everything!
            </p>
        </div>
        <div className="text_line_decoration">
            <Header subject="Applying on hover" description="Prefix a color utility with a variant like hover:* to only apply the utility in that state:"/>
            <div className=' **:my-3'>
                <div className='text_underline'>
                    <p>underline text</p>
                    <p className='text-xl underline'>The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className='text_overline'>
                    <p>overline text</p>
                    <p className='text-xl overline'>The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className='text_linethru'>
                    <p>line-through</p>
                    <p className='text-xl line-through'>The quick brown fox jumps over the lazy dog.</p>
                </div>
                <div className='applying_on_hover'>
                    <p>applying on hover</p>
                    <p>The <a href="..." className="no-underline hover:underline text-blue-600">quick brown fox</a> jumps over the lazy dog.</p>
                </div>
            </div>
        </div>
        <div className="text_decoration_color">
            <Header subject="Text Decoration style Basic" description="Use utilities like decoration-sky-500 and decoration-pink-500 to change the text decoration color of an element:"/>
            <div className='max-w-sm mx-auto'>
                <p>I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
                at <a className="underline decoration-sky-500">My Company, Inc</a>. Outside
                of work, I like to <a className="underline decoration-pink-500">watch pod-racing</a>
                and have <a className="underline decoration-indigo-500">light-saber</a> fights.
                </p>
            </div>
            <Header subject="Text Decoration style. Changing the opacity" description="Use the color opacity modifier to control the text decoration color opacity of an element:"/>
            <div className='max-w-sm mx-auto'>
                <p>
                I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
                at <a className="underline decoration-sky-500/30">My Company, Inc</a>. Outside
                of work, I like to <a className="underline decoration-pink-500/30">watch pod-racing</a>
                and have <a className="underline decoration-indigo-500/30">light-saber</a> fights.
                </p>
            </div>
            <Header subject="Text Decoration style. Applying on hover" description="Prefix a text-decoration-color utility with a variant like hover:* to only apply the utility in that state:"/>
            <div className='max-w-sm mx-auto'>
            <p>The <a href="..." className="underline hover:decoration-pink-500 ...">quick brown fox</a> jumps over the lazy dog.</p>
            </div>
        </div>
        <div className="text_decoration_style">
            <Header subject="Text Decoration style Basic" description="Use utilities like decoration-sky-500 and decoration-pink-500 to change the text decoration color of an element:"/>
            <div className='*:my-3 max-w-sm mx-auto'>
                <p className="underline decoration-solid">The quick brown fox...</p>
                <p className="underline decoration-double">The quick brown fox...</p>
                <p className="underline decoration-dotted">The quick brown fox...</p>
                <p className="underline decoration-dashed">The quick brown fox...</p>
                <p className="underline decoration-wavy">The quick brown fox...</p>
            </div>
        </div>
        <div className="text_decoration_thickness">
            <Header subject="Text Decoration style Thickness" description="Use utilities like decoration-sky-500 and decoration-pink-500 to change the text decoration color of an element:"/>
            <div className='*:my-3 max-w-sm mx-auto'>
                <p className="underline decoration-1">The quick brown fox...</p>
                <p className="underline decoration-2">The quick brown fox...</p>
                <p className="underline decoration-4">The quick brown fox...</p>
            </div>
        </div>
        <div className="text_underline_offset">
            <Header subject="text-underline-offset" description="Use underline-offset-<number> utilities like underline-offset-2 and underline-offset-4 to change the offset of a text underline:"/>
            <div className='*:my-3 max-w-sm mx-auto'>
                <p className="underline underline-offset-1">The quick brown fox...</p>
                <p className="underline underline-offset-2">The quick brown fox...</p>
                <p className="underline underline-offset-4">The quick brown fox...</p>
                <p className="underline underline-offset-8">The quick brown fox...</p>
            </div>
        </div>
        <div className="text_transform">
        <Header subject="text-underline-offset" description="Utilities for controlling the capitalization of text"/>
            <div className="text_uppercase *:my-3">
                <p>Uppercasing text: Use the uppercase utility to uppercase the text of an element:</p>
                <p className="uppercase txt-xl">The quick brown fox ...</p>
            </div>
            <div className="text_lowercasing *:my-3">
                <p>Lowercasing text: Use the lowercase utility to lowercase the text of an element:</p>
                <p className="lowercase text-xl">The quick brown fox ...</p>
            </div>
            <div className="capitalizing_text *:my-3">
                <p>Capitalizing text: Use the capitalize utility to capitalize text of an element:</p>
                <p className="capitalize text-xl">The quick brown fox ...</p>
            </div>
        </div>
        <div className="text_overflow">
            <Header subject="text-underline-offset" description="Utilities for controlling the capitalization of text"/>
            <div className="truncating_text max-w-sm mx-auto *:my-3">
                <p>Truncating text: Use the truncate utility to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed:</p>
                <p className='truncate text-xl'>The longest word in any of the major English language dictionaries is</p>
            </div>
            <div className='h-2 rounded-xl bg-black'></div>
            <div className="text_ellipsis max-w-sm mx-auto *:my-3">
                <p>Adding an ellipsis: Use the text-ellipsis utility to truncate overflowing text with an ellipsis (…) if needed:</p>
                <p className='overflow-hidden text-ellipsis text-xl'>The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
            </div>
            <div className='h-2 rounded-xl bg-black'></div>
            <div className="clipping_text max-w-sm mx-auto *:my-3">
                <p>Clipping text: Use the text-clip utility to truncate the text at the limit of the content area:</p>
                <p className='overflow-hidden text-clip text-xl'>The longest word in any of the major English language dictionaries is pneumonoultramicroscopicsilicovolcanoconiosis, a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
            </div>
        </div>
        <div className="text_wrap">
            <Header subject="Text Wrap" description="Utilities for controlling how text wraps within an element."/>
            <div className="basic_wrap">
                <article className="text-wrap max-w-sm mx-auto">
                    <p className='mb-5'>Allowing text to wrap: Use the text-wrap utility to wrap overflowing text onto multiple lines at logical points in the text:</p>
                    <h1 className='font-bold'>Beloved Manhattan soup stand closes</h1>
                    <p>New Yorkers are facing the winter chill with less warmth this year as the city&apos;s most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
                </article>
            </div>
            <div className='h-1 rounded-xl bg-black'></div>
            <div className="no_wrap">
                <article className="max-w-sm mx-auto">
                    <p className='mb-5'>Preventing text from wrapping: Use the text-nowrap utility to prevent text from wrapping, allowing it to overflow if necessary:</p>
                    <h1 className='font-bold'>Beloved Manhattan soup stand closes</h1>
                    <p className='text-nowrap'>New Yorkers are facing the winter chill with less warmth this year as the city&apos;s most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
                </article>
            </div>
            <div className='h-1 rounded-xl bg-black'></div>
            <div className="balanced_text_wrapping">
                <article className="max-w-sm mx-auto">
                    <p className='mb-5'>Balanced text wrapping: Use the text-balance utility to distribute the text evenly across each line:</p>
                    <h1 className='font-bold'>Beloved Manhattan soup stand closes</h1>
                    <p className='text-balance'>New Yorkers are facing the winter chill with less warmth this year as the city&apos;s most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
                </article>
            </div>
            <div className='h-1 rounded-xl bg-black'></div>
            <div className="pretty_wrapping">
                <article className="max-w-sm mx-auto">
                    <p className='mb-5'>Pretty text wrapping: Use the text-pretty utility to prevent orphans (a single word on its own line) at the end of a text block:</p>
                    <h1 className='font-bold'>Beloved Manhattan soup stand closes</h1>
                    <p className='text-pretty'>New Yorkers are facing the winter chill with less warmth this year as the city&apos;s most revered soup stand unexpectedly shutters, following a series of events that have left the community puzzled.</p>
                </article>
            </div>
        </div>
    </div>
  )
}

export default Typography