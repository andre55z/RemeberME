import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoadingPage from './pages/LoadingPage';
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
