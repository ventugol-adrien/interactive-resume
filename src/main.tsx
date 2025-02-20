import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

document.title = `Adrien - Interactive Resume`
createRoot(document.getElementById('root')!).render(
    <App />
)
