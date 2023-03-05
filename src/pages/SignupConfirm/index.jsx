import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import SignupConfirmCard from '../../components/SignupConfirmCard'

function SignupConfirm() {
  /* useEffect(() =>{
        fetch()
    })*/

  // let { confirmCode } = useParams()
  // console.log(confirmCode)
  return (
    <React.Fragment>
      <SignupConfirmCard />
    </React.Fragment>
  )
}

export default SignupConfirm
