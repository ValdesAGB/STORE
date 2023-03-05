import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function SignupConfirmCard() {
  //useEffect()
  return (
    <React.Fragment>
      <span className="row justify-content-center mt-5">
        <div className="card col-4 mt-5">
          <div className="card-body">
            <h5 className="card-title">Utilisateur confirmé ✔✔</h5>
            <p className="card-text">Votre compte a été activé avec succès.</p>
            <Link to="/">Page d'acceuil</Link>
          </div>
        </div>
      </span>
    </React.Fragment>
  )
}

export default SignupConfirmCard
