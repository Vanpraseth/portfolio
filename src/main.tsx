import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const canonical = document.querySelector<HTMLLinkElement>('#canonical-url')
if (canonical) canonical.href = `${window.location.origin}${window.location.pathname}`

document.querySelectorAll<HTMLMetaElement>('meta[property="og:image"], meta[name="twitter:image"]').forEach((meta) => {
  meta.content = `${window.location.origin}/og-image.png`
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

