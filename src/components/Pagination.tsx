import { Icons } from './Icons'
import { Fragment, FC } from 'react'

interface IPagination {
  currentPage: number
  total: number
  perPage: number
  onPageChange: (currentPage: number) => void
  visiblePages?: number // Optional prop to specify the number of visible pages
  className?: string
}

export const Pagination: FC<IPagination> = ({
  currentPage,
  total,
  onPageChange,
  perPage,
  visiblePages = 4, // Default number of visible pages
  className,
}) => {
  const totalPages = Math.ceil(total / perPage)
  const halfVisiblePages = Math.floor(visiblePages / 2)

  const getPageNumbers = () => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    } else {
      const firstPage = Math.max(1, currentPage - halfVisiblePages)
      const lastPage = Math.min(totalPages, firstPage + visiblePages - 1)
      const pages = Array.from(
        { length: lastPage - firstPage + 1 },
        (_, i) => i + firstPage
      )

      if (firstPage > 1) pages.unshift(1)
      if (lastPage < totalPages) pages.push(totalPages)

      return pages
    }
  }

  const next = () => {
    if (currentPage === totalPages) return
    onPageChange(currentPage + 1)
  }

  const prev = () => {
    if (currentPage === 1) return
    onPageChange(currentPage - 1)
  }

  const getItemProps = (page: number) => ({
    variant: currentPage === page ? 'filled' : 'text',
    className: `${
      currentPage === page && 'bg-gray-700 !text-white hover:bg-gray-700'
    } w-8 h-8 rounded-md hover:bg-gray-700/10 dark:text-gray-500`,
    onClick: () => onPageChange(page),
  })

  const renderPageButtons = () => {
    const pageNumbers = getPageNumbers()

    return pageNumbers.map((page, index) => (
      <Fragment key={index}>
        {index > 0 && pageNumbers[index - 1] !== page - 1 && <span>...</span>}
        <button {...getItemProps(page)}>{page}</button>
      </Fragment>
    ))
  }

  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center gap-2 disabled:opacity-60 dark:text-gray-300"
          onClick={prev}
          disabled={currentPage === 1}>
          <Icons icon="ArrowLeftIcon" className="w-4 h-4" /> Previous
        </button>
        <div className="flex items-center gap-2 mx-2">
          {renderPageButtons()}
        </div>
        <button
          className="flex items-center gap-2 disabled:opacity-60 dark:text-gray-300"
          onClick={next}
          disabled={currentPage === totalPages}>
          Next <Icons icon="ArrowRightIcon" className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
