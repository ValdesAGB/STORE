import React, { useContext, useEffect } from 'react'
import { LoadingContext, ProductsListContext } from '../untils/Context'
import { Loader } from '../untils/Loader'
import Product from './Product'

function ShowAllProducts() {
  const { products, toggleProductList, toggleErrorMessage } =
    useContext(ProductsListContext)

  const { isDataLoading, setIsDataLoading } = useContext(LoadingContext)

  // pour le tableau de dépendance de useEffect, on reviendra y mettre toggleProductList avec le deployement du  : c'était ce qui était prévu. Mais avec ça le chargement de la page se fait de façon infinie et même quand on enlève le tableau de dépendance vide, le résultat est pareil donc j'ai préféré le laisser comme ça.
  useEffect(() => {
    setIsDataLoading(true)
    fetch(`http://localhost:3001/api/products`)
      .then((promise) => promise.json())
      .then((response) => {
        toggleProductList(response)
        setIsDataLoading(false)
      })
      .catch((error) => toggleErrorMessage(error))
  }, [])

  //console.log(products[1].userID)
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        {isDataLoading ? (
          <span className="position-absolute top-50  col-1">
            <Loader />
          </span>
        ) : products && products.length === 0 ? (
          <span className="fs-5 fw-light position-absolute top-50  col-4">
            "Aucun produit n'est disponible pour le moment"
          </span>
        ) : (
          products &&
          products.map(
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
        )}
      </div>
    </React.Fragment>
  )
}

export default ShowAllProducts
