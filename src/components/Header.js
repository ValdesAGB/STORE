import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  let title = 'Bienvenu sur notre app'

  return (
    <React.Fragment>
      <div className="row border border-1 rounded rounded-4 my-2 align-items-center">
        <div className="col-9">
          <Link to="/" className="text-decoration-none text-dark">
            <h1 className="fw-light">{title}</h1>
          </Link>
        </div>
        <div className="col">
          <Link to="/newproduct">
            <button type="button" className="btn btn-primary">
              Ajouter un nouveau produit
            </button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header
