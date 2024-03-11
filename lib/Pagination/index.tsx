import { PaginationButton } from "../PaginationButton";
import { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import type {
  CSSProperties,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";

export interface PaginationProps {
  /**
   * Total number of pages.
   */
  pageLength: number;
  /**
   * Currently active page. The pages are 1 based index i.e. it should start with 1.
   */
  currentPage: number;
  /**
   * setState function to update set current page.
   */
  setCurrentPage: Dispatch<SetStateAction<number>>;
  /**
   * Style provided to the active pagination button.
   */
  activeButtonStyle?: CSSProperties;
  /**
   * Style provided to the in-active pagination button.
   */
  normalButtonStyle?: CSSProperties;
}

/**
 * Component to add pagination buttons to a component. It should be used paginate large data.
 */
export function Pagination({
  pageLength,
  currentPage,
  setCurrentPage,
  activeButtonStyle,
  normalButtonStyle,
}: PaginationProps): JSX.Element {
  const handlePageSelect: MouseEventHandler<HTMLButtonElement> = (e) => {
    const page = e.currentTarget.getAttribute("data-page");
    const parsedPage = Number.parseInt(page ?? "", 10);
    if (Number.isFinite(parsedPage)) {
      setCurrentPage(parsedPage);
    }
  };

  const handleNextClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPage((prev) => (prev === pageLength ? prev : prev + 1));
  };

  const handlePrevClick: MouseEventHandler<HTMLButtonElement> = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const pages = useMemo(() => {
    let output: (number | "...")[] = [];
    if (pageLength <= 7) {
      output = [...new Array(pageLength).keys()].map((ele) => ele + 1);
    } else if (currentPage <= 5) {
      output = [1, 2, 3, 4, 5, "...", pageLength];
    } else if (pageLength - currentPage < 5) {
      output = [
        1,
        "...",
        pageLength - 4,
        pageLength - 3,
        pageLength - 2,
        pageLength - 1,
        pageLength,
      ];
    } else {
      output = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        pageLength,
      ];
    }
    return output;
  }, [currentPage, pageLength]);

  return (
    <div className="gb-flex gb-flex-row gb-items-center md:gb-gap-2 gb-gap-1">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="disabled:gb-cursor-not-allowed"
      >
        <ChevronLeftIcon className="gb-h-6 gb-text-slate-500" />
      </button>
      {pages.map((page) =>
        typeof page === "number" ? (
          // eslint-disable-next-line react/jsx-key
          <PaginationButton
            active={currentPage === page}
            onClick={handlePageSelect}
            data-page={page}
            style={currentPage === page ? activeButtonStyle : normalButtonStyle}
          >
            {page}
          </PaginationButton>
        ) : (
          // eslint-disable-next-line react/jsx-key
          <PaginationButton active={false} className="gb-border-none">
            {page}
          </PaginationButton>
          // PaginationButton has been used to make sure the size of the ... remains same as number buttons
        ),
      )}
      <button
        onClick={handleNextClick}
        disabled={currentPage === pageLength}
        className="disabled:gb-cursor-not-allowed"
      >
        <ChevronRightIcon className="gb-h-6 gb-text-slate-500" />
      </button>
    </div>
  );
}
