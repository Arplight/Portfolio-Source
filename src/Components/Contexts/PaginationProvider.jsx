// Hooks
import { createContext, useEffect, useState } from "react";

// Projects data
import { projects } from "../../Data/Work_Data";

// Context
export const PaginationContext = createContext(null);
export default function PaginationProvider(Props) {
  const [data] = useState(projects);
  const [currentPage, setCurrentPage] = useState(
    Number(sessionStorage.getItem("pagination"))
  );
  const perPage = 1;
  const offset = currentPage * perPage;
  const currentPageData = data.slice(offset, offset + perPage);
  const pageCount = data.length / perPage;

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  useEffect(() => {
    sessionStorage.setItem("pagination", currentPage);
  }, [currentPage]);

  return (
    <PaginationContext.Provider
      value={{ currentPage, pageCount, handlePageClick, currentPageData }}
    >
      {Props.children}
    </PaginationContext.Provider>
  );
}
