import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoadingPage from './pages/LoadingPage';
import HomePage from "./pages/HomePage"
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
