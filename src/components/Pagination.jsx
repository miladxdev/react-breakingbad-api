import React from 'react'

const Pagination = ( {getOffset, offset} ) => {


    function nextPage() {
        getOffset(prev => prev + 12);
    }

    function prevPage() {
        getOffset(prev => prev - 12);
    }

    return (
        <div className="pagination">
            <button 
                className={offset-12 > -1 ? "prev" : "prev disable"} 
                onClick={offset-12 > -1 ? prevPage : null} >Prev
            </button>

            <button className="page">{(offset/12)+1}</button>

            <button
                className={offset+12 < 60 ? "next" : "next disable"} 
                onClick={offset+12 < 60 ? nextPage : null} >Next
            </button>
        </div>
    )
}

export default Pagination
