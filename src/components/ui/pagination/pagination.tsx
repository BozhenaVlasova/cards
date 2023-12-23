import { FC } from 'react'

import classNames from 'classnames'

import s from './pagination.module.scss'

export type PaginationProps = {
  page: number
  totalPages: number
  handlePagination: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ page, totalPages, handlePagination }) => {
  return (
    <div className={s.pagination}>
      <div className={s.paginationWrapper}>
        {page !== 1 && (
          <button
            onClick={() => handlePagination(page - 1)}
            type="button"
            className={classNames([s.pageItem, s.sides].join(' '))}
          >
            &lt;
          </button>
        )}

        <button
          onClick={() => handlePagination(1)}
          type="button"
          className={classNames(s.pageItem, {
            [s.active]: page === 1,
          })}
        >
          {1}
        </button>

        {page > 3 && <div className={s.separator}>...</div>}

        {page === totalPages && totalPages > 3 && (
          <button onClick={() => handlePagination(page - 2)} type="button" className={s.pageItem}>
            {page - 2}
          </button>
        )}

        {page > 2 && (
          <button onClick={() => handlePagination(page - 1)} type="button" className={s.pageItem}>
            {page - 1}
          </button>
        )}

        {page !== 1 && page !== totalPages && (
          <button
            onClick={() => handlePagination(page)}
            type="button"
            className={[s.pageItem, s.active].join(' ')}
          >
            {page}
          </button>
        )}

        {page < totalPages - 1 && (
          <button onClick={() => handlePagination(page + 1)} type="button" className={s.pageItem}>
            {page + 1}
          </button>
        )}

        {page === 1 && totalPages > 3 && (
          <button onClick={() => handlePagination(page + 2)} type="button" className={s.pageItem}>
            {page + 2}
          </button>
        )}

        {page < totalPages - 2 && <div className={s.separator}>...</div>}

        <button
          onClick={() => handlePagination(totalPages)}
          type="button"
          className={classNames(s.pageItem, {
            [s.active]: page === totalPages,
          })}
        >
          {totalPages}
        </button>

        {page !== totalPages && (
          <button
            onClick={() => handlePagination(page + 1)}
            type="button"
            className={[s.pageItem, s.sides].join(' ')}
          >
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}
