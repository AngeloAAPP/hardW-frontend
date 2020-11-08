import React from 'react';
import Routes from './routes'
import GlobalStyles from './styles/globalstyles'
import AuthProvider from './contexts/Auth'
import ProfileProvider from './contexts/Profile'

const App = () => {
  return (
    <>
      <AuthProvider>
      <ProfileProvider>
        <Routes/>
        </ProfileProvider>
      </AuthProvider>
      <GlobalStyles/>
    </>
  )
}

export default App