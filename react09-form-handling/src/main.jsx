import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Form1 } from './Components/Form1'
import { Form2 } from "./Components/Form2"
import { ReactHookForm } from './Components/ReactHookForm'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Form1/> */}
    {/* <Form2/> */}
    <ReactHookForm/>
  </StrictMode>,
)