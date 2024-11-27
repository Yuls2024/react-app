import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header'

import { useState } from 'react';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Laptop',
      price: 1200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Car',
      price: 1200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Tshirt',
      price: 1200,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      name: 'Table',
      price: 1200,
      image: 'https://via.placeholder.com/150'
    }
    

  ])

  return (
    <div className="flex min-h-screen">
      <Header />
      <div className='flex-1 flex flex-col'>
        <Main products={products} />
        <Footer />
      </div>

    </div>
  );
}


export default App;
