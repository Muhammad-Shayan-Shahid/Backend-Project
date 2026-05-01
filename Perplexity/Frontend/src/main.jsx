import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import store from './app/app.stores.js'
import Provider from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
