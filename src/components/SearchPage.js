import React, { useContext, useEffect } from 'react'
import Product from './Product'
import { LoadingContext, SearchContext } from '../untils/Context'
import { Loader } from '../untils/Loader'

function SearchPage() {
  const { isDataLoading, setIsDataLoading } = useContext(LoadingContext)
  const { findMessageError } = useContext(SearchContext)
  const {
    search,
    toggleSearch,
    toggleProductsFind,
    productsFind,
    toggleFindMessageError,
  } = useContext(SearchContext)

  const findMessage = ` Oups... Le produit que vous essayez de rechercher n'existe pas
sur ce site ou a peut-être déjà été supprimé. Veuillez
réssayez ou vérifier si vous avez bien entré le nom du produit
que vous recherché.`

  useEffect(() => {
    localStorage.setItem('searchWord', JSON.stringify(search))
    if (search !== '') {
      setIsDataLoading(true)
      fetch(`http://localhost:3001/api/products/${search}`)
        .then((promise) => promise.json())
        .then((prod) => {
          toggleProductsFind(prod)
          localStorage.setItem('searchResult', JSON.stringify(prod))
          setIsDataLoading(false)
        })
        .catch((error) => toggleFindMessageError({ error }))
    }
  }, [search])

  return (
    <React.Fragment>
      <span className="row justify-content-end">
        <div className="col-2 mx-5">
          <input
            id="inputSearch"
            className="form-control"
            type="search"
            placeholder="Type to search..."
            defaultValue={search}
            onChange={(e) => toggleSearch(e.target.value)}
          />
        </div>
      </span>

      {search !== '' ? (
        <div className="fs-2">
          {productsFind.product.length} résultat(s) trouvé(s) pour "{search}"
        </div>
      ) : null}
      <div className="row justify-content-center">
        {isDataLoading ? (
          <span className="position-absolute top-50  col-1">
            <Loader />
          </span>
        ) : (
          productsFind.product &&
          (productsFind.product.length === 0 ? (
            <div className=" row  justify-content-center position-absolute top-50 fw-light ">
              <span className="fs-5 col-6 text-center">
                <i className="bi bi-emoji-frown fs-1 text-primary"></i>
                <div className="text-center">
                  {findMessageError ? productsFind.Message : findMessage}
                </div>
              </span>
            </div>
          ) : (
            productsFind.product.map(
              ({ _id, name, description, price, cover, inStock }, index) => (
                <span key={_id} className="col-2 mx-3 my-4">
                  <Product
                    id={_id}
                    name={name}
                    description={description}
                    price={price}
                    cover={cover}
                    inStock={inStock}
                  />
                </span>
              )
            )
          ))
        )}
      </div>
    </React.Fragment>
  )
}

export default SearchPage
