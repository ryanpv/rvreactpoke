import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) { // passed in props from App.js
  return (
    <div>
        { gotoNextPage && <button onClick={gotoNextPage}>Next</button> } 
        {/* tricky way in react to check if first statement is true before running next statement (returns first value, and if true, will return next value) */}
        {/* basically says if there is a next page, go to the next page (updated state, which essentially becomes state variable nextPageUrl) */}
        {/* in App component, setUpdatedState is set to object property of next (results.next), and if there is no more data it will return null  */}
        { gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button> } 
    </div>
  )
}
