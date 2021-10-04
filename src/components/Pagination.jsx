import {React, useState} from 'react'

const Pagination = ( {getOffset, offset} ) => {

    const [page, setPage] = useState(0);

    function nextPage() {
        getOffset(prev => prev + 12);
        setPage(prev => prev + 1);
    }

    function prevPage() {
        getOffset(prev => prev - 12);
        setPage(prev => prev - 1);
    }

    return (
        <div className="pagination">
            <button 
                className={offset-12 > -1 ? "prev" : "prev disable"} 
                onClick={offset-12 > -1 ? prevPage : null} >Prev
            </button>

            <button className="page">{page}</button>

            <button
                className={offset+12 < 60 ? "next" : "next disable"} 
                onClick={offset+12 < 60 ? nextPage : null} >Next
            </button>
        </div>
    )
}

export default Pagination
