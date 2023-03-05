import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <React.Fragment>
      <span className="row justify-content-end">
        <Link
          to="/search"
          className="text-dark col-1"
          title="Cliquez pour rechercher"
        >
          <i className="bi bi-search fs-4" id="searchIcone"></i>
        </Link>
      </span>
    </React.Fragment>
  )
}

export default Search
