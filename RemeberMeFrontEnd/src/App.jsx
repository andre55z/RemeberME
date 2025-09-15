import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoadingPage from './pages/LoadingPage';
import HomePage from "./pages/HomePage"
import RegisterPage from './pages/RegisterPage';
import ListPage from './pages/ListPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/listpage" element={<ListPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
