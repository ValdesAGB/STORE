import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LoadingContext,
  UpdateProductContext,
  ViewMoreContent,
} from '../untils/Context'
import { Loader } from '../untils/Loader'
import DeleteConfirmModal from './Delete&ConfirmModal'

function View() {
  const { product } = useContext(ViewMoreContent)
  const { isDataLoading } = useContext(LoadingContext)
  const { setIsDataLoading } = useContext(LoadingContext)
  const { toggleUpdateMessage, toggleDeleteMessage } =
    useContext(UpdateProductContext)

  useEffect(() => {
    toggleUpdateMessage(' ')
  })

  function deleteProduct() {
    fetch(`http://localhost:3001/api/product/${product.product._id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        toggleDeleteMessage(res)
        setIsDataLoading(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <React.Fragment>
      <div className="row mt-5 justify-content-center">
        {isDataLoading ? (
          <div className="position-absolute top-50  col-1">
            <Loader />
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-4 border me-2">
              <img
                src={product.product.cover}
                alt={`${product.product.name} - cover`}
                className="w-100 p-1"
              />
            </div>
            <div className="col-4">
              <div>
                <h2>{product.product.name}</h2>
                <div>
                  <p className="fs-5 fw-light">
                    <span className="me-4 text-decoration-underline">
                      Description:
                    </span>
                    {product.product.description}
                  </p>
                  <span className="fs-4 fw-light">
                    <span className="fs-5 me-4 text-decoration-underline">
                      Price:
                    </span>
                    {product.product.price} €
                  </span>
                </div>
              </div>
              <div className="row my-5">
                <div className="col-4">
                  <Link
                    to={`/update/product/${product.product._id}`}
                    className="btn btn-primary text-white fw-bold"
                  >
                    Modifier
                  </Link>
                </div>
                <div className="col">
                  <button
                    className="btn btn-danger text-white fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal-1"
                  >
                    Supprimer
                  </button>
                  <DeleteConfirmModal
                    fonction={deleteProduct}
                    product={product}
                    id={`deleteModal`}
                    to={`/`}
                    warningMessage={`Attention : Cette action est irréversible.`}
                    modal1BodyText={`Voulez-vous vraiment supprimer le produit : ${product.product.name} .?`}
                    warningMessage2={`Supression effectuée.`}
                    firstModalButton={'Supprimé'}
                    firstModalButtonClassName={`btn btn-danger`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default View
