import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddBus from './components/AddBus';
import BusList from './components/BusList';
import UpdateBus from './components/UpdateBus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<BusList />} />
          <Route path='/' element={<BusList />} />
          <Route path='/busList' element={<BusList />} />
          <Route path='/addBus' element={<AddBus />} />
          <Route path='/editBus/:id' element={<UpdateBus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
