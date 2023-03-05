import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoadingContext, ViewMoreContent } from '../untils/Context'

function Product({ id, name, price, cover, inStock }) {
  const ImgWrapper = styled.img`
    width: 15em;
    height: 10em;
  `
  const { toggleProduct } = useContext(ViewMoreContent)
  const { setIsDataLoading } = useContext(LoadingContext)

  function ViewMore() {
    setIsDataLoading(true)
    fetch(`http://localhost:3001/api/product/${id}`)
      .then((promise) => promise.json())
      .then((product) => {
        localStorage.setItem('savedProductViewMore', JSON.stringify(product))
        toggleProduct(product)
        setIsDataLoading(false)
      })
      .catch((error) => console.log(error))
  }
  return (
    <React.Fragment>
      <div className="card ">
        <ImgWrapper
          src={cover}
          className="card-img-top w-100 p-1"
          alt={`${name} - cover`}
        />
        <hr className="mx-1"></hr>
        <div className=" px-2 pb-1 row align-items-center">
          <div className="col-9 fw-bold">
            {name}

            <p className="card-text fw-light">{price} €</p>
          </div>

          <div className="col">
            <Link
              to={`/viewmore/product/${id}`}
              title="Voir plus"
              onClick={() => ViewMore()}
            >
              <i className="fs-5 text-dark bi-eye-fill"></i>
            </Link>
            {inStock ? (
              <div>
                <i
                  title={`"${name}" disponible.`}
                  className="fs-5 text-success bi  bi-check-circle-fill"
                ></i>
              </div>
            ) : (
              <div>
                <i
                  title={`"${name}" n'est pas disponible actuellement mais revient bientôt.`}
                  className="fs-5 text-secondary bi bi-emoji-frown-fill"
                ></i>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Product
