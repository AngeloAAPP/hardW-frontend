import React from 'react';
import Routes from './routes'
import GlobalStyles from './styles/globalstyles'
import AuthProvider from './contexts/Auth'

const App = () => {
  if(window.location.href.substring(0,5) === "http:")
  { 
      window.location.href = "https:" + window.location.href.substring(5)
  }

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