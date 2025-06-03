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
    </div>
  )
}

export default Grid_component