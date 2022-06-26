import React from 'react'
import { ThemeProvider } from '@emotion/react'

const theme = {
  backgroundColor: 'white',
  color: 'black'
}

const Theme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme