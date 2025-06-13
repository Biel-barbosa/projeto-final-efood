import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { GlobalStyle, theme } from './styles/global'
import Home from './pages/Home'
import RestaurantDetail from './pages/Restaurant'
import Cart from './components/Cart'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurante/:id" element={<RestaurantDetail />} />
          </Routes>
          <Cart />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App 