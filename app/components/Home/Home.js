import React, {PropTypes} from 'react'
import { fromJS } from 'immutable'

import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import * as MUITheme from 'redux-auth/material-ui-theme'

// material ui theme
import { EmailSignUpForm } from "redux-auth/material-ui-theme"

// material ui theme
import { EmailSignInForm } from "redux-auth/material-ui-theme"

// material ui theme
import { OAuthSignInButton } from "redux-auth/material-ui-theme"

// material ui theme
import { SignOutButton } from "redux-auth/material-ui-theme"

// material ui theme
import { DestroyAccountButton } from "redux-auth/material-ui-theme"

 // import
import {RequestPasswordResetForm} from "redux-auth/material-ui-theme"

// material ui theme
import { UpdatePasswordForm } from "redux-auth/material-ui-theme"

export default function Home ({title}) {
  return (
    <div>
      <EmailSignUpForm />
      <EmailSignInForm />
      <SignOutButton />
      <DestroyAccountButton />
      <OAuthSignInButton provider="github" />
      <OAuthSignInButton provider="facebook">Facebook</OAuthSignInButton>
      <RequestPasswordResetForm />
      <UpdatePasswordForm />
    </div>
  )
}
