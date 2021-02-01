import React from 'react';
import Routes from './routes'
import GlobalStyles from './styles/globalstyles'
import AuthProvider from './contexts/Auth'

const App = () => {

  return (
    <>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
      <GlobalStyles/>
    </>
  )
}

export default App