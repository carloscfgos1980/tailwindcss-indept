import React from 'react'
import Header from '../components/page'

function Grid_component() {
  const blueRounded:string = 'bg-blue-800 text-amber-50 p-3 rounded-xl w-24 text-center'
  return (
    <div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96'>Grid_component</h1>
        <div className="inline_grid px-4">
          <Header subject="Inline Grid" description="Use the inline-grid utility to create an inline grid container:"/>
            <span className="inline-grid grid-cols-3 gap-4 mx-4">
              <span className={blueRounded}>01</span>
              <span className={blueRounded}>02</span>
              <span className={blueRounded}>03</span>
              <span className={blueRounded}>04</span>
              <span className={blueRounded}>05</span>
              <span className={blueRounded}>06</span>
            </span>
            <span className="inline-grid grid-cols-3 gap-4 mx-4">
              <span className={blueRounded}>01</span>
              <span className={blueRounded}>02</span>
              <span className={blueRounded}>03</span>
              <span className={blueRounded}>04</span>
              <span className={blueRounded}>05</span>
              <span className={blueRounded}>06</span>
            </span>
        </div>
        <div className="inline_grid px-4 w-xl mx-auto my-3">
          <Header subject="Table" description="Use the table, table-row, table-cell, table-caption, table-column, table-column-group, table-header-group, table-row-group, and table-footer-group utilities to create elements that behave like their respective table elements:"/>
              <div className="table w-full">
                <div className="table-header-group">
                  <div className="table-row">
                    <div className="table-cell text-left">Song</div>
                    <div className="table-cell text-left">Artist</div>
                    <div className="table-cell text-left">Year</div>
                  </div>
                </div>
                <div className="table-row-group">
                  <div className="table-row">
                    <div className="table-cell">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
                    <div className="table-cell">Malcolm Lockyer</div>
                    <div className="table-cell">1961</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Witchy Woman</div>
                    <div className="table-cell">The Eagles</div>
                    <div className="table-cell">1972</div>
                  </div>
                  <div className="table-row">
                    <div className="table-cell">Shining Star</div>
                    <div className="table-cell">Earth, Wind, and Fire</div>
                    <div className="table-cell">1975</div>
                  </div>
        </div>
      </div>

        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 mt-5'>grid-template-columns</h1>
        <div className="grid_column_amount max-w-lg mx-auto">
            <Header subject="Specifying the grid columns" description="Use the order-first and order-last utilities to render flex and grid items first or last:"/>
            <div className="grid grid-cols-4 gap-4 *:rounded-lg *:bg-orange-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
                <div className="flex items-center justify-center">07</div>
                <div className="flex items-center justify-center">08</div>
                <div className="flex items-center justify-center">09</div>
            </div>
        </div>
        <div className="subgrip max-w-lg mx-auto">
            <Header subject="Implementing a subgrid columns" description="Use the grid-cols-subgrid utility to adopt the column tracks defined by the item's parent:"/>
            <div className="grid grid-cols-4 gap-4 *:rounded-lg *:bg-orange-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="col-span-3 grid grid-cols-subgrid gap-4">
                  <div className="flex items-center justify-center col-start-2 bg-fuchsia-700">06</div>
                </div>
            </div>
        </div>
        <div className="spanning_column max-w-lg mx-auto">
            <Header subject="Spanning columns" description="Use col-span-<number> utilities like col-span-2 and col-span-4 to make an element span n columns:"/>
            <div className="grid grid-cols-3 gap-4 *:rounded-lg *:bg-blue-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="col-span-2 flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
                <div className="col-span-2 flex items-center justify-center">07</div>
            </div>
        </div>
        <div className="start_end_lines max-w-lg mx-auto">
            <Header subject="Starting and ending lines" description="Use col-start-<number> or col-end-<number> utilities like col-start-2 and col-end-3 to make an element start or end at the nth grid line:"/>
            <div className="grid grid-cols-6 gap-4 *:rounded-lg *:bg-violet-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="col-span-4 col-start-2 flex items-center justify-center ">01</div>
                <div className="col-start-1 col-end-3 flex items-center justify-center ">02</div>
                <div className="col-span-2 col-end-7 flex items-center justify-center">03</div>
                <div className="col-start-1 col-end-7 col-span-2 flex items-center justify-center">04</div>

            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 mt-5'>grid-template-rows</h1>
        <div className="grid_rows_amount max-w-lg mx-auto">
            <Header subject="Specifying the grid rows" description="Use grid-rows-<number> utilities like grid-rows-2 and grid-rows-4 to create grids with n equally sized rows:"/>
            <div className="grid grid-flow-col grid-rows-4 gap-4 *:rounded-lg *:bg-orange-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
                <div className="flex items-center justify-center">07</div>
                <div className="flex items-center justify-center">08</div>
                <div className="flex items-center justify-center">09</div>
            </div>
        </div>
        <div className="subgrip_row max-w-lg mx-auto">
            <Header subject="Implementing a subgrid" description="Use the grid-rows-subgrid utility to adopt the row tracks defined by the item's parent:"/>
            <div className="grid grid-flow-col grid-rows-4 gap-4 **:rounded-lg *:bg-indigo-700 *:text-amber-50 *:h-16 bg-gray-400 p-3">
                <div className="flex items-center justify-center ">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="row-span-3 grid grid-rows-subgrid gap-4">
                  <div className="row-start-1 flex items-center justify-center bg-green-700">06</div>
                </div>
                <div className="flex items-center justify-center">07</div>
                <div className="flex items-center justify-center">08</div>
                <div className="flex items-center justify-center">09</div>
            </div>
        </div>
        <div className="spanning_row max-w-lg mx-auto **:rounded-lg">
            <Header subject="Spanning rows" description="Use row-span-<number> utilities like row-span-2 and row-span-4 to make an element span n rows:"/>
            <div className="grid grid-flow-col grid-rows-3 gap-4  *:bg-fuchsia-700 *:text-amber-50 bg-gray-400 p-3">
                <div className="row-span-3 flex items-center justify-center">01</div>
                <div className="col-span-2 flex items-center justify-center ">02</div>
                <div className="col-span-2 row-span-2 flex items-center justify-center">03</div>

            </div>
        </div>
        <div className="grid_end_start max-w-lg mx-auto **:rounded-lg">
            <Header subject="Starting and ending lines" description="Use row-start-<number> or row-end-<number> utilities like row-start-2 and row-end-3 to make an element start or end at the nth grid line:"/>
            <div className="grid grid-flow-col grid-rows-3 gap-4  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 h-56">
                <div className="row-span-2 row-start-2  flex items-center justify-center">01</div>
                <div className="row-span-2 row-end-3 flex items-center justify-center ">02</div>
                <div className="row-start-1 row-end-4 flex items-center justify-center">03</div>

            </div>
        </div>
        <div className="grid-auto-flow max-w-lg mx-auto **:rounded-lg">
            <Header subject="grid auto flow" description="Use utilities like grid-flow-col and grid-flow-row-dense to control how the auto-placement algorithm works for a grid layout:"/>
            <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 h-56">
                <div className="col-span-2 flex items-center justify-center">01</div>
                <div className="col-span-2 flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
                <div className="flex items-center justify-center">07</div>
            </div>
        </div>
        <div className="grid-auto-columns max-w-lg mx-auto **:rounded-lg">
            <Header subject="grid auto Columns" description="Use utilities like auto-cols-min and auto-cols-max to control the size of implicitly-created grid columns:"/>
            <div className="grid auto-cols-max grid-flow-col gap-4  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>

            </div>
        </div>
        <div className="grid-auto-row max-w-lg mx-auto **:rounded-lg">
            <Header subject="grid auto Rows" description="Utilities for controlling the size of implicitly-created grid rows."/>
            <div className="grid grid-flow-row auto-rows-max gap-4  *:bg-violet-700 *:text-amber-50 bg-gray-400 p-3">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center ">02</div>
                <div className="flex items-center justify-center">03</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 mt-5'>Gap</h1>
        <div className="gap_classic max-w-lg mx-auto **:rounded-lg">
            <Header subject="Gap classic" description="Use gap-<number> utilities like gap-2 and gap-4 to change the gap between both rows and columns in grid and flexbox layouts:"/>
            <div className="grid grid-cols-2 gap-4  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 *:h-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
            </div>
        </div>
        <div className="gap_row_columns max-w-lg mx-auto **:rounded-lg">
            <Header subject="Changing row and column gaps independently" description="Use gap-x-<number> or gap-y-<number> utilities like gap-x-8 and gap-y-4 to change the gap between columns and rows independently:"/>
            <div className="grid grid-cols-3 gap-x-8 gap-y-4  *:bg-green-700 *:text-amber-50 bg-gray-400 p-3 *:h-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
            </div>
        </div>
        <h1 className='text-center text-red-600 bg-amber-200 p-3 rounded-xl text-3xl mx-auto w-96 mt-5'>Justify Items</h1>
        <div className="justify_items_start max-w-lg mx-auto **:rounded-lg">
            <Header subject="Justify Items Start" description="Use the justify-items-start utility to justify grid items against the start of their inline axis:"/>
            <div className="grid grid-cols-3 gap-y-2  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 *:size-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
            </div>
        </div>
        <div className="justify_items_end max-w-lg mx-auto **:rounded-lg">
            <Header subject="Justify Items End" description="Use the justify-items-end or justify-items-end-safe utilities to justify grid items against the end of their inline axis:"/>
            <div className="grid grid-flow-col justify-items-end *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 **:size-16 mb-2">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
            </div>
            <div className="grid grid-flow-col justify-items-end-safe *:bg-violet-700 *:text-amber-50 bg-gray-400 p-3 *:size-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
            </div>
            <h5 className='bg-black text-amber-100 p-3'>When there is not enough space available, the justify-items-end-safe utility will align items to the start of the container instead of the end.</h5>
        </div>
        <div className="justify_items_center max-w-lg mx-auto **:rounded-lg">
            <Header subject="Justify Items Center" description="Use the justify-items-center or justify-items-center-safe utilities to justify grid items against the end of their inline axis:"/>
            <div className="grid grid-flow-col justify-items-center *:bg-green-700 *:text-amber-50 bg-gray-400 p-3 **:size-16 mb-2">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
            </div>
            <div className="grid grid-flow-col justify-items-center-safe *:bg-amber-700 *:text-amber-50 bg-gray-400 p-3 *:size-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
            </div>
            <h5 className='bg-black text-amber-100 p-3'>When there is not enough space available, the justify-items-center-safe utility will align items to the start of the container instead of the center.</h5>
        </div>
        <div className="justify_items_strech max-w-lg mx-auto **:rounded-lg">
            <Header subject="Justify Items Strech" description="Use the justify-items-stretch utility to stretch items along their inline axis:"/>
            <div className="grid grid-cols-3 justify-items-stretch gap-4  *:bg-blue-700 *:text-amber-50 bg-gray-400 p-3 *:h-16">
                <div className="flex items-center justify-center">01</div>
                <div className="flex items-center justify-center">02</div>
                <div className="flex items-center justify-center">03</div>
                <div className="flex items-center justify-center">04</div>
                <div className="flex items-center justify-center">05</div>
                <div className="flex items-center justify-center">06</div>
            </div>
        </div>
    </div>
  )
}

export default Grid_component