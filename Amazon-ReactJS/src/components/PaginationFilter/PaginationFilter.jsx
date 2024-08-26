import { useState } from "react";
import ReactPaginate from "react-paginate"
import { Category } from './../../pages/category/category';

export const PaginationFilter=(props)=>{
// const [currentPage,setCurrentPage]=useState("")
   const handlePageClick=(data)=>{
        console.log(data.selected);
        setCurrentPage((data.selected)+1)
    }
    return(
        <>
        {/* <Items currentItems={currentItems} /> */}
        <ReactPaginate 
        currentPage={props.currentPage}
          breakLabel="..."
          nextLabel="next"
          onPageChange={handlePageClick}
          marginPagesDisplayed={2}
          pageRangeDisplayed={4}
          pageCount={props.pageCount}
          previousLabel="previous"
containerClassName="pagination justify-content-center"
pageClassName="page-item"
pageLinkClassName="page-link "
previousClassName="page-item"
nextClassName="page-item"
previousLinkClassName="page-link"
nextLinkClassName="page-link"
breakClassName="page-item"
breakLinkClassName="page-link"
activeClassName="active"

        //   renderOnZeroPageCount={null}
        />
      </>
    )
}