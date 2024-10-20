import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
import { BrowserRouter } from 'react-router-dom'

//import Context from './Project1/Context.jsx'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux'

import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Context>
    <BrowserRouter>
    <App/>
    <ToastContainer />
    </BrowserRouter>
    </Context> */}
    {/* <Provider store={Store1}>
      <BrowserRouter>
      <App/>
     </BrowserRouter>
    </Provider> */}
    <BrowserRouter>
    <App/>
    <ToastContainer />
    </BrowserRouter>
  </StrictMode>,
)
