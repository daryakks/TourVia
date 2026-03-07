import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import {Box} from "@mui/material"
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme = {theme}>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <BrowserRouter>
  <Box sx={{ width: "100%"}}>
    <App />
    </Box>
  </BrowserRouter>
  </ClerkProvider>,
  </ThemeProvider>
)
