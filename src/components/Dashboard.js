import React from 'react'
import { useAppState } from '..'
import { Redirect } from 'react-router'

export default function Dashboard() {
  const { state } = useAppState()
  if (!state.signedIn) return <Redirect to="/signin" />
  return <div>welcome back {state.user.email}!</div>
}
