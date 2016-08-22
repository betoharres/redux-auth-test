import React, {PropTypes} from 'react'
import { fromJS } from 'immutable'

import { Theme } from 'constants'

export default function Home ({title}) {
  return (
    <div>
      <Theme.EmailSignUpForm />
      <Theme.EmailSignInForm />
      <Theme.SignOutButton />
      <Theme.DestroyAccountButton />
      <Theme.OAuthSignInButton provider="github">Github</Theme.OAuthSignInButton>
      <Theme.OAuthSignInButton provider="facebook">Facebook</Theme.OAuthSignInButton>
      <Theme.RequestPasswordResetForm />
      <Theme.UpdatePasswordForm />
    </div>
  )
}
