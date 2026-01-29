
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import OrderProcessModal from './Component/OrderProcessModal';
import ProductQuantity from './Component/ProductQuantity';
import ProductForm from './Component/ProductForm';
import TodoList from './Component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/ex1" element={<OrderProcessModal/>} />
        <Route path="/ex2" element={<ProductQuantity/>} />
        <Route path="/ex3" element={<ProductForm />} />
        <Route path="/ex4" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
