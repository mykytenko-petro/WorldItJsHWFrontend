import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { baseApi } from './api/base-api.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={baseApi}>
      <App />
    </ApiProvider>
  </StrictMode>
)
