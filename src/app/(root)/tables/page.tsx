import React from 'react'
import Header from '../components/page'

export default function Tables() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>TABLES</h1>
        <div className="table_border_collapse max-w-xl mx-auto">
            <Header subject="Tables. Collapsing the borders" description="Collapsing table borders: Use the border-collapse utility to combine adjacent cell borders into a single border when possible:"/>
            <table className="border-collapse border border-gray-400 mx-auto **:ps-2 **:text-start">
                <thead>
                    <tr>
                        <th className="border border-gray-300 w-32">State</th>
                        <th className="border border-gray-300 w-32">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 ...">Indiana</td>
                        <td className="border border-gray-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Ohio</td>
                        <td className="border border-gray-300 ...">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Michigan</td>
                        <td className="border border-gray-300 ...">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="table_border_separated max-w-xl mx-auto">
            <Header subject="Separating table borders" description="Use the border-separate utility to force each cell to display its own separate borders:"/>
            <table className="border-separate border border-gray-400 mx-auto **:ps-2 **:text-start">
                <thead>
                    <tr>
                        <th className="border border-gray-300 w-32">State</th>
                        <th className="border border-gray-300 w-32">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 ...">Indiana</td>
                        <td className="border border-gray-300 ...">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Ohio</td>
                        <td className="border border-gray-300 ...">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 ...">Michigan</td>
                        <td className="border border-gray-300 ...">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="table_border_spacing max-w-xl mx-auto">
            <Header subject="Table. Border spcing" description="Use border-spacing-<number> utilities like border-spacing-2 and border-spacing-x-3 to control the space between the borders of table cells with separate borders:"/>
            <table className="border-separate border-spacing-2 border border-gray-400 dark:border-gray-500 mx-auto **:ps-2 **:text-start">
                <thead>
                    <tr>
                        <th className="border border-gray-300 dark:border-gray-600 w-32">State</th>
                        <th className="border border-gray-300 dark:border-gray-600 w-32">City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700">Indiana</td>
                        <td className="border border-gray-300 dark:border-gray-700">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700">Ohio</td>
                        <td className="border border-gray-300 dark:border-gray-700">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 dark:border-gray-700">Michigan</td>
                        <td className="border border-gray-300 dark:border-gray-700">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="table_layout_fized_size max-w-xl mx-auto">
            <Header subject="Sizing columns automatically" description="Use the table-auto utility to automatically size table columns to fit the contents of its cells:"/>
            <table className="table-auto border-collapse border border-gray-400 **:border **:border-gray-300 **:p-2">
                <thead>
                    <tr>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="table_layout_automatic_size max-w-xl mx-auto">
            <Header subject="Using fixed column widths" description="Use the table-fixed utility to ignore the content of the table cells and use fixed widths for each column:"/>
            <table className="table-fixed border-collapse border border-gray-400 **:border **:border-gray-300 **:p-2 **:text-center">
                <thead>
                    <tr className='*:w-64'>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                    </tr>
                    <tr>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="caption_aside_top max-w-xl mx-auto">
            <Header subject="Placing caption at top of table" description="Use the caption-top utility to position a caption element at the top of a table:"/>
            <div className='border-4 border-blue-700 rounded-3xl shadow-lg shadow-cyan-500/50 mx-auto **:ps-2 **:p-2'>
                <table className='mx-auto m-3'>
                    <caption className="caption-top py-2">
                        Table 3.1: Professional wrestlers and their signature moves.
                    </caption>
                    <thead>
                        <tr className='bg-gray-400 **:text-start **:border **:border-black'>
                            <th>Wrestler</th>
                            <th>Signature Move(s)</th>
                        </tr>
                    </thead>
                    <tbody className='**:text-start **:border **:border-black'>
                        <tr>
                            <td>&quot;Stone Cold&quot; Steve Austin</td>
                            <td>Stone Cold Stunner, Lou Thesz Press</td>
                        </tr>
                        <tr>
                            <td>Bret &quot;The Hitman&quot; Hart</td>
                            <td>The Sharpshooter</td>
                        </tr>
                        <tr>
                            <td>Razor Ramon</td>
                            <td>Razor&quot;s Edge, Fallaway Slam</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="caption_aside_botton max-w-xl mx-auto">
            <Header subject="Placing caption at top of table" description="Use the caption-bottom utility to position a caption element at the bottom of a table:"/>
            <div className='border-4 border-blue-700 rounded-3xl shadow-lg shadow-cyan-500/50 mx-auto **:ps-2 **:p-2'>
                <table className='mx-auto m-3'>
                    <caption className="caption-bottom py-2">
                        Table 3.1: Professional wrestlers and their signature moves.
                    </caption>
                    <thead>
                        <tr className='bg-gray-400 **:text-start **:border **:border-black'>
                            <th>Wrestler</th>
                            <th>Signature Move(s)</th>
                        </tr>
                    </thead>
                    <tbody className='**:text-start **:border **:border-black'>
                        <tr>
                            <td>&quot;Stone Cold&quot; Steve Austin</td>
                            <td>Stone Cold Stunner, Lou Thesz Press</td>
                        </tr>
                        <tr>
                            <td>Bret &quot;The Hitman&quot; Hart</td>
                            <td>The Sharpshooter</td>
                        </tr>
                        <tr>
                            <td>Razor Ramon</td>
                            <td>Razor&quot;s Edge, Fallaway Slam</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
