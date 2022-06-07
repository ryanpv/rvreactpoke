import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
        { gotoNextPage && <button onClick={gotoNextPage}>Next</button> }
        {/* tricky way in react to check if first statement is true before running next statement */}
        { gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button> }
    </div>
  )
}
