import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePayment from './Create';
import Receive from './Receive';


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePayment />} />
        <Route path="/create" element={<CreatePayment />} />
        <Route path="/receive/:amount/:address" element={<Receive />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App;

