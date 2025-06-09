import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from './styles/global'
import Home from './pages/Home'
import RestaurantDetail from './pages/Restaurant'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurante/:id" element={<RestaurantDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App 