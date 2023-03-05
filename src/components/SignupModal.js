import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LoadingContext, SignupContext } from '../untils/Context'
import { Loader } from '../untils/Loader'

function SignupModal() {
  const { check, signupMessage } = useContext(SignupContext)
  const { isDataLoading } = useContext(LoadingContext)
  return (
    <React.Fragment>
      <div
        className="modal fade"
        id="signupModal"
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
                Inscription
              </h1>
              <Link to="/signup/register">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </Link>
            </div>
            <div className="modal-body">
              {isDataLoading ? (
                <span className=" row justify-content-center">
                  <Loader />
                </span>
              ) : (
                <div>
                  {signupMessage && signupMessage.error}
                  {signupMessage && signupMessage.Message}
                  {check}
                </div>
              )}
            </div>
            <Link to="/">
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  OK
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignupModal
