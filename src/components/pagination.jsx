import React from 'react';
import _ from 'lodash';

const Pagination = ({ numPages, pageSize, currentPage, handlePagination }) => {
    if (!numPages) return null;

    let pageCnt = Math.ceil(numPages / pageSize);
    const pages = _.range(1, pageCnt + 1);

    if (pages.length === 1) return null;

    return (

        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pages.map(page => <li key={page}
                        className={currentPage === page ? 'page-item Ponter active' : 'page-item Ponter'}>
                        <a className="page-link"
                            onClick={() => handlePagination(page)}>
                            {page}
                        </a></li>)
                }

            </ul>
        </nav>
    )

}

export default Pagination;