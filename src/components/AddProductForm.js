import React, { useContext, useEffect } from 'react'
import {
  AddProductMessageContext,
  LoadingContext,
  NewProductContext,
} from '../untils/Context'
import AddProductModal from './AddProductModal'

function AddProductForm() {
  const {
    ProductModel,
    inStockProduct,
    setNameProduct,
    setDescriptionProduct,
    setPriceProduct,
    setCoverProduct,
    setInStockProduct,
  } = useContext(NewProductContext)
  const { toggleAddProductMessage } = useContext(AddProductMessageContext)
  const { setIsDataLoading } = useContext(LoadingContext)

  useEffect(() => {
    setInStockProduct(false)
  }, [])

  function NewProduct() {
    setIsDataLoading(true)
    fetch(`http://localhost:3001/api/products`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ProductModel),
    })
      .then((response) => response.json())
      .then((res) => {
        toggleAddProductMessage(res)
        setIsDataLoading(false)
      })
      .catch((error) => console.log(error))
  }

  return (
    <React.Fragment>
      <form className="fs-5 fw-light fst-normal text-dark col-6">
        <div className="mb-3">
          <label htmlFor="nameProduct" className="form-label">
            Nom du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="nameProduct"
            onChange={(e) => setNameProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descriptionProduct" className="form-label">
            Description du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionProduct"
            onChange={(e) => setDescriptionProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="priceProduct" className="form-label">
            Prix du produit
          </label>
          <input
            type="number"
            className="form-control"
            id="priceProduct"
            onChange={(e) => setPriceProduct(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coverProduct" className="form-label">
            Image du produit
          </label>
          <input
            type="text"
            className="form-control"
            id="coverProduct"
            onChange={(e) => setCoverProduct(e.target.value)}
          />
        </div>
        <div className="mb-3 row">
          <div className="form-check form-switch col-8">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="onStock"
              onChange={(e) => setInStockProduct(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="onStock">
              En stock actuellement ?
            </label>
          </div>
          <div className="col">
            <span>{inStockProduct ? 'Oui 😊.' : 'Non 😪'}</span>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary"
            id="addProductButton"
            data-bs-toggle="modal"
            data-bs-target="#addModal"
            onClick={() => NewProduct()}
          >
            Ajouté produit
          </button>
        </div>
      </form>
      <AddProductModal modalId={'addModal'} />
    </React.Fragment>
  )
}

export default AddProductForm
