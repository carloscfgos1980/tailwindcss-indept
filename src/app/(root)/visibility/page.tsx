import React from 'react'
import Header from '../components/page'

export default function Visibility() {
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Visibility</h1>
        <div className="invisible_elements max-w-lg mx-auto">
            <Header subject="Invisible elements" description="Use the invisible utility to hide an element, but still maintain its place in the document, affecting the layout of other elements:"/> 
            <div className="grid grid-cols-3 gap-4 *:bg-blue-600 *:text-amber-300 *:text-center">
                <div>01</div>
                <div className="invisible">02</div>
                <div>03</div>
            </div>
        </div>
        <div className="colapsing_elements max-w-lg mx-auto">
          <Header subject="Colapsing" description="Use the collapse utility to hide table rows, row groups, columns, and column groups as if they were set to display: none, but without impacting the size of other rows and columns:"/> 
          <table>
            <thead>
              <tr>
                <th>Invoice #</th>
                <th>Client</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#100</td>
                <td>Pendant Publishing</td>
                <td>$2,000.00</td>
              </tr>
              <tr className="collapse">
                <td>#101</td>
                <td>Kruger Industrial Smoothing</td>
                <td>$545.00</td>
              </tr>
              <tr>
                <td>#102</td>
                <td>J. Peterman</td>
                <td>$10,000.25</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-2xl mx-auto w-96 mb-5'>Z Index</h1>
        <div className="z-index_basic max-w-lg mx-auto">
          <Header subject="Z Index Basic" description="Use the collapse utility to hide table rows, row groups, columns, and column groups as if they were set to display: none, but without impacting the size of other rows and columns:"/> 
          <div className="flex">
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-50"> z-50</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-8 z-40"> z-40</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-16 z-30"> z-30</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-24 z-20"> z-20</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-32 z-10"> z-10</p>
          </div>
        </div>
        <div className="z_index_negative_values max-w-lg mx-auto">
          <Header subject="Using negative values" description="To use a negative z-index value, prefix the class name with a dash to convert it to a negative value:"/>
          <div className="flex">
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 z-50"> z-50</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-8 z-40"> z-40</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-16 -z-30"> z-30</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-24 z-20"> z-20</p>
            <p className="w-24 h-24 rounded-full border border-white bg-indigo-600 flex items-center justify-center text-white text-base font-medium relative shadow-md shadow-black/45 -translate-x-32 z-10"> z-10</p>
          </div>
        </div>
    </div>
  )
}
