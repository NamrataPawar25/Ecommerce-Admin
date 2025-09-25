import React, { useEffect, useState } from "react";
import { getAllBrand } from "../api/brandApi";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBrands = async () => {
    try {
      const response = await getAllBrand();
      setBrands(response.data.brands);
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  if (loading) return <p>Loading brands...</p>;

  return (
    <div className="container mt-4">
      <h2>Brands</h2>
      <ul className="list-group">
        {brands.length === 0 && <li className="list-group-item">No brands yet</li>}
        {brands.map((b) => (
          <li key={b.id} className="list-group-item">
            {b.bName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandList;
