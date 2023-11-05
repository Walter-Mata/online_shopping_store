import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { store } from './store'

import Home from './pages/home'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },

      // 3. We can add a new visual variant
      variants: {
        'with-shadow': {
          boxShadow: '0 0 2px 2px #efdfde',
          color: 'teal.100',
        },
        // 4. We can override existing variants
        solid: () => ({
          bg: 'teal', //props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },

  colors,
})

let persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Router basename="/">
            <Routes>
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
