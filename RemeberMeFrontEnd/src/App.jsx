import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import LoadingPage from './pages/LoadingPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
