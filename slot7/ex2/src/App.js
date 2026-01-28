import logo from './logo.svg';
import './App.css';
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import ProductQuantity from './Component/ProductQuantity';
import OrderProcessModal from './Component/OrderProcessModal';

function App() {
  return (
    <div className="App">
      <ProductQuantity />
      <h3>--------------------------</h3>
      <OrderProcessModal />
    </div>
  );
}

export default App;
