import { useState } from 'react'

import './App.css'
import { useRoutes } from 'react-router-dom'
import {routes} from './routes.jsx'

function App() {

  useRoutes(routes)

  return  useRoutes(routes)
}

export default App
