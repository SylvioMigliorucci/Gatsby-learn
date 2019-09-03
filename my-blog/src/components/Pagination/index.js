import React from 'react'

import * as S from './styles'
import { Link } from 'gatsby';
import propTypes from 'prop-types'

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage}) => (
    <S.PaginationWrapper>
        {!isFirst &&
            <Link to={prevPage}>   - Página Anterior </Link>
        }

      
            <p> {currentPage} de {numPages} </p>
        

        {!isLast &&
            <Link to={nextPage}> - Próxima Página </Link>
        }

    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    nextPage: propTypes.string,
    prevPage: propTypes.string,
}

export default Pagination