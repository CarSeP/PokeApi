interface props {
  changePage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

function PaginationButtons({ changePage, currentPage, totalPages }: props) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        ← Previous
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => changePage(i + 1)}
          className={`px-3 py-1 border rounded ${
            currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
}

export default PaginationButtons;
