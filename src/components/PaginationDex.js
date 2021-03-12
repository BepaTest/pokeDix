import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationDex({
  gotoNextPage,
  gotoPrevPage,
  pageNumber,
}) {
  console.log('Page:', pageNumber)
  return (
    <div>
      <Pagination>
        {gotoPrevPage && <Pagination.Prev onClick={gotoPrevPage} />}
        <Pagination.Item active>{pageNumber}</Pagination.Item>
        {gotoNextPage && <Pagination.Next onClick={gotoNextPage} />}
      </Pagination>
    </div>
  )
}
