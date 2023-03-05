import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmModal from '../../components/Delete&ConfirmModal';
import {
  LoadingContext,
  UpdateProductContext,
  ViewMoreContent,
} from '../../untils/Context';

function Update() {
  const {
    ProductUpdate,
    inStockUpdateProduct,
    setNameUpdateProduct,
    setDescriptionUpdateProduct,
    setPriceUpdateProduct,
    setCoverUpdateProduct,
    setInStockUpdateProduct,
    toggleUpdateMessage,
    toggleDeleteMessage,
  } = useContext(UpdateProductContext);
  const { product } = useContext(ViewMoreContent);
  const { setIsDataLoading } = useContext(LoadingContext);
  const Stock =
    inStockUpdateProduct !== undefined
      ? inStockUpdateProduct
      : product.product.inStock;

  useEffect(() => {
    toggleDeleteMessage(' ');
    setNameUpdateProduct(product.product.name);
    setDescriptionUpdateProduct(product.product.description);
    setPriceUpdateProduct(product.product.price);
    setCoverUpdateProduct(product.product.cover);
    setInStockUpdateProduct(product.product.inStock);
  }, [product]);

  function UpdateProduct() {
    setIsDataLoading(true);
    fetch(`http://localhost:3001/api/product/${product.product._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ProductUpdate),
    })
      .then((response) => response.json())
      .then((res) => {
        toggleUpdateMessage(res);
        setIsDataLoading(false);
      })
      .catch((error) => console.log(error));
  }

  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <form className="fs-5 fw-light fst-normal text-dark col-6">
          <div className="mb-3">
            <label htmlFor="nameUpdate" className="form-label">
              Nom du produit
            </label>
            <input
              type="text"
              className="form-control"
              id="nameUpdate"
              defaultValue={product.product.name}
              onChange={(e) => setNameUpdateProduct(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="descriptionUpdate" className="form-label">
              Description du produit
            </label>
            <input
              type="text"
              className="form-control"
              id="descriptionUpdate"
              defaultValue={product.product.description}
              onChange={(e) => setDescriptionUpdateProduct(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="priceUpdate" className="form-label">
              Prix du produit
            </label>
            <input
              type="number"
              className="form-control"
              id="priceUpdate"
              defaultValue={product.product.price}
              onChange={(e) => setPriceUpdateProduct(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="coverUpdate" className="form-label">
              Image du produit
            </label>
            <input
              type="text"
              className="form-control"
              id="coverUpdate"
              defaultValue={product.product.cover}
              onChange={(e) => setCoverUpdateProduct(e.target.value)}
            />
          </div>

          <div className="mb-3 row">
            <div className="form-check form-switch col-8">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="onStockUpdate"
                defaultChecked={product.product.inStock}
                onChange={(e) => setInStockUpdateProduct(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="onStockUpdate">
                En stock actuellement ?
              </label>
            </div>
            <div className="col">
              <span>{Stock ? 'Oui 😊.' : 'Non 😪'}</span>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <Link
              to={`/viewMore/${product.product.id}`}
              className="btn btn-primary text-white fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#confirmModal-1"
            >
              Modifié
            </Link>
          </div>
        </form>
        <DeleteConfirmModal
          fonction={UpdateProduct}
          product={product}
          id={`confirmModal`}
          to={`/`}
          warningMessage={`Attention : Cette action est irréversible.`}
          warningMessage2={`Modification effectuée.`}
          modal1BodyText={`Appliquer les modifications au produit .?`}
          firstModalButton={`Modifié`}
          firstModalButtonClassName={`btn btn-success`}
        />
      </div>
    </React.Fragment>
  );
}

export default Update;
