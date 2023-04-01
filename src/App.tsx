import { ThemeProvider } from 'styled-components'
import { TransactionProvider } from './contexts/TransactionContext'
import { Transations } from './pages/Transations'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transations />
      </TransactionProvider>
    </ThemeProvider>
  )
}
