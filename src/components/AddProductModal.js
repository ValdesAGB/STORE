import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AddProductMessageContext, LoadingContext } from '../untils/Context'
import { Loader } from '../untils/Loader'

function AddProductModal({ modalId }) {
  const modalTitle = 'Nouveau produit'
  const { isDataLoading } = useContext(LoadingContext)
  const { message } = useContext(AddProductMessageContext)

  return (
    <React.Fragment>
      <div
        className="modal fade"
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {modalTitle}
              </h1>
              <Link to="/">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </Link>
            </div>

            <div className="modal-body">
              {isDataLoading && (
                <span className=" row justify-content-center">
                  <Loader />
                </span>
              )}
              {message && message.error}
              {message && message.Message}
            </div>
            <div className="modal-footer">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  OK
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddProductModal
