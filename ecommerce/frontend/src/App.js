import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    description: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000", formData);
      const res = await axios.get("http://localhost:5000");
      setProducts(res.data);
      setFormData({ productName: "", price: "", description: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Products</h1>

      {/* list */}
      {products.length ? (
        products.map((p) => (
          <div key={p._id}>
            <h2>{p.productName}</h2>
            <p>Price: ₹{p.price}</p>
            <p>{p.description}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}

      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default App;

