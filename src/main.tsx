import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('App is rendering')
createRoot(document.getElementById('root')!).render(
    <App />
)
