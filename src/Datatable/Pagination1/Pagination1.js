import React, { useEffect, useMemo, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
const Pagination1 = ({
  Total = 0,
  ItemsPerPage = 10,
  CurrentPage = 1,
  onPageChange,
}) => {
  const [TotalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (Total > 0 && ItemsPerPage > 0)
      setTotalPages(Math.ceil(Total / ItemsPerPage));
  }, [Total, ItemsPerPage]);
  const paginationItems = useMemo(() => {
    const pages = [];
    for (let i = 1; i <= TotalPages; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === CurrentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pages;
  }, [TotalPages, CurrentPage]);
  if (TotalPages === 0) return null;
  return (
    <>
    <div className="container "> <Pagination>
      <Pagination.Prev
        onClick={() => onPageChange(CurrentPage - 1)}
        disabled={CurrentPage === 1}
      />
      {paginationItems}

      <Pagination.Next
        onClick={() => onPageChange(CurrentPage + 1)}
        disabled={CurrentPage === TotalPages}
      />
    </Pagination></div>
     
    </>
  
  );
};

export default Pagination1;
