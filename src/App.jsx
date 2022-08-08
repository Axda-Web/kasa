import React from 'react'
import StyledApp from './App.styled'
import { ThemeProvider } from 'styled-components'
import theme from './style/theme'
import GlobalStyles from './style/Global.styled'

import Router from './router'
import HousingArea from './context'


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledApp>
        <HousingArea>
          <Router />
        </HousingArea>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
