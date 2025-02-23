import styles from "./Pagination.module.css"

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? styles.active : ""}>
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination

