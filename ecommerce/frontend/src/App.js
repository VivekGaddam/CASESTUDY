import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    prize: '',
    description: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3000/');
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/', formData);
      const res = await axios.get('http://localhost:3000/');
      setProducts(res.data);
      setFormData({ name: '', prize: '', description: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <h2>{product.productName}</h2>
            <p>Price: ₹{product.price || product.prize}</p>
            <p>{product.description}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Product Name" 
          value={formData.name} 
          onChange={handleChange}
          required
        />
        <input 
          type="number" 
          name="prize" 
          placeholder="Price" 
          value={formData.prize} 
          onChange={handleChange}
          required
        />
        <textarea 
          name="description" 
          placeholder="Description" 
          value={formData.description} 
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;
