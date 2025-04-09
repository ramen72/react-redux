import { Route, Routes } from 'react-router-dom'
import './assets/css/tailwind.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="step-2" element={<StepTwo />} /> */}
      </Routes>
    </>
  )
}

export default App
