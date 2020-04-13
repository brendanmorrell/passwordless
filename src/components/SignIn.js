import React from 'react'
import firebase from '../firebase'
import { Redirect } from 'react-router-dom'
import { useAppState } from '..'

const useCheckSignIn = () => {
  const [success, setSuccess] = React.useState(false)
  const { setState } = useAppState()
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    ;(async () => {
      try {
        if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
          var email = window.localStorage.getItem('email')
          if (!email) {
            email = window.prompt('Please provide your email for confirmation')
          }
          await new Promise((resolve) => setTimeout(resolve, 3000))
          // The client SDK will parse the code from the link for you.
          const res = await firebase.auth().signInWithEmailLink(email, window.location.href)
          setState((s) => ({ ...s, user: { email, ...res }, signedIn: true }))
          setSuccess(true)
          window.localStorage.removeItem('email')
        }
      } catch (error) {
        setError(`ERROR: ${JSON.stringify(error)}`)
        alert('this error threw')
      } finally {
        setLoading(false)
      }
    })()
  }, [setState])

  return { loading, error, success }
}
export default function SignIn() {
  const { loading, error, success } = useCheckSignIn()

  if (success) return <Redirect to="/dashboard" />

  return (
    <h1>
      {loading && 'verifying email sign in....'}
      {error && <>there was an error: {error}</>}
      {success && 'sign in successful. redirecting to dashboard...'}
      {!loading && !error && !success && <Redirect to="/" />}
    </h1>
  )
}
