import React, { useContext } from 'react'
import { LoadingContext, SignupContext } from '../untils/Context'

function SignupForm() {
  const {
    email,
    password,
    showPassword,
    Identifiant,
    toggleShowPassword,
    setEmail,
    setPassword,
    toggleSignupMessage,
    toggleCheck,
  } = useContext(SignupContext)
  const { setIsDataLoading } = useContext(LoadingContext)

  function Register(e) {
    e.preventDefault()
    toggleSignupMessage(' ')
    toggleCheck(' ')
    if (email !== '' && password !== '') {
      setIsDataLoading(true)
      fetch(`http://localhost:3001/api/auth/signup/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Identifiant),
      })
        .then((promise) => promise.json())
        .then((sign) => {
          toggleSignupMessage(sign)
          setIsDataLoading(false)
        })
        .catch((error) => console.log(error))
    } else {
      toggleCheck('Veuillez remplir tous les champs.')
    }
  }

  return (
    <React.Fragment>
      <form
        className="row g-3 needs-validation justify-content-center"
        noValidate
      >
        <div className="col-6 mt-5">
          <div className="col">
            <div className="input-group has-validation">
              <input
                type="email"
                className="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                placeholder="Entrez une adresse mail"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="col mt-4">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Mot de passe"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 mt-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="showPassword"
                onChange={(e) => toggleShowPassword(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="showPassword">
                Afficher le mot de passe
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary my-2"
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
              onClick={(e) => Register(e)}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}

export default SignupForm
