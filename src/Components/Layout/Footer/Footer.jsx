// Components
import ReactPaginate from "react-paginate";
import SocialIcons from "../../Sub_Components/Social/SocialIcons";
import SocialInfo from "../../Sub_Components/Social/SocialInfo";
// context
import { useContext, useEffect, useState } from "react";
import { PaginationContext } from "../../Contexts/PaginationProvider";
import { ActiveContext } from "../../Contexts/ActiveProvider";

// Icons
const ArrowLeft = (
  <svg
    className="arrow"
    width="33"
    height="8"
    viewBox="0 0 33 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.646446 3.64645C0.451183 3.84171 0.451183 4.15829 0.646446 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53553 7.53553C4.7308 7.34027 4.7308 7.02369 4.53553 6.82843L1.70711 4L4.53553 1.17157C4.7308 0.976311 4.7308 0.659728 4.53553 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.646446 3.64645ZM33 3.5L1 3.5V4.5L33 4.5V3.5Z" />
  </svg>
);
const ArrowRight = (
  <svg
    className="arrow"
    width="33"
    height="8"
    viewBox="0 0 33 8"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M32.3536 4.35355C32.5488 4.15829 32.5488 3.84171 32.3536 3.64645L29.1716 0.464466C28.9763 0.269204 28.6597 0.269204 28.4645 0.464466C28.2692 0.659728 28.2692 0.976311 28.4645 1.17157L31.2929 4L28.4645 6.82843C28.2692 7.02369 28.2692 7.34027 28.4645 7.53553C28.6597 7.7308 28.9763 7.7308 29.1716 7.53553L32.3536 4.35355ZM0 4.5H32V3.5H0V4.5Z" />
  </svg>
);

export default function Footer() {
  const { pageCount, handlePageClick, currentPage } =
    useContext(PaginationContext);
  const { active } = useContext(ActiveContext);
  const [currentWindow, setCurrentWindow] = useState(window.innerWidth);

  function handleResize() {
    setCurrentWindow(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="col-span-4 flex flex-col-reverse md:flex-row gap-3 md:gap-0 ">
      {currentWindow < 768 && active === "work" ? null : <SocialIcons />}

      {active === "work" ? (
        <ReactPaginate
          previousLabel={ArrowLeft}
          breakLabel="..."
          pageRangeDisplayed={5}
          marginPagesDisplayed={0}
          nextLabel={ArrowRight}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName={"pagination-prev"}
          nextLinkClassName={"pagination-next"}
          disabledClassName={"pagination-disabled"}
          activeClassName={"pagination-active"}
          pageLinkClassName={"pagination-link"}
          pageClassName={"pagination-page"}
          forcePage={currentPage}
        />
      ) : (
        <SocialInfo />
      )}
    </footer>
  );
}
