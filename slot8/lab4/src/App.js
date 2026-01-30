
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import OrderProcessModal2 from './Component/OderProcessModal2';
import ProductQuantity2 from './Component/ProductQuantity2';
import ProductForm2 from './Component/ProductForm2';
import TodoList2 from './Component/TodoList2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/ex1" element={<ProductQuantity2/>} />
        <Route path="/ex2" element={<OrderProcessModal2/>} />
        <Route path="/ex3" element={<ProductForm2 />} />
        <Route path="/ex4" element={<TodoList2/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
