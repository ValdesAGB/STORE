import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoadingContext, UpdateProductContext } from '../untils/Context'
import { Loader } from '../untils/Loader'

function DeleteConfirmModal({
  fonction,
  id,
  to,
  modal1BodyText,
  warningMessage,
  warningMessage2,
  firstModalButton,
  firstModalButtonClassName,
}) {
  const { isDataLoading } = useContext(LoadingContext)
  const { messageUpdate } = useContext(UpdateProductContext)
  const { messageDelete } = useContext(UpdateProductContext)
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id={`${id}-1`}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                {warningMessage}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{modal1BodyText}</div>
            <div className="modal-footer">
              <button
                className={firstModalButtonClassName}
                data-bs-target={`#${id}-2`}
                data-bs-toggle="modal"
                onClick={() => fonction()}
              >
                {firstModalButton}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id={`${id}-2`}
        aria-hidden="true"
        aria-labelledby="staticBackdropLabel"
        data-bs-keyboard="false"
        data-bs-backdrop="static"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {warningMessage2}
              </h1>
              <Link to={to}>
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
              {messageUpdate && messageUpdate.Message}
              {messageUpdate && messageUpdate.error}
              {messageDelete && messageDelete.Message}
              {messageDelete && messageDelete.error}
            </div>
            <div className="modal-footer">
              <Link to={to}>
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

export default DeleteConfirmModal
