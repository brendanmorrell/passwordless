import React from 'react'
import firebase from '../firebase'

const useEmailSignIn = () => {
  const [emailSent, setEmailSent] = React.useState(false)
  const actionCodeSettings = {
    handleCodeInApp: true,
    url: `${window.location.origin}/signin`,
  }

  const email = 'brendanmorrell@gmail.com'
  async function sendEmail() {
    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function () {
        setEmailSent(true)
        window.localStorage.setItem('email', email)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return [sendEmail, emailSent]
}

function App() {
  const [sendEmail, emailSent] = useEmailSignIn()
  return (
    <div>
      {emailSent ? (
        'email sent. check your inbox you bitch'
      ) : (
        <>
          get magic link
          <div>
            <button onClick={sendEmail}>sign in</button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
