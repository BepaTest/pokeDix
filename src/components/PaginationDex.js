import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationDex({
  gotoNextPage,
  gotoPrevPage,
  pageNumber,
}) {
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
