import React, { useEffect, useState } from "react";
import { getAllCategories } from "../api/categoryApi";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await getAllCategories();
      // Directly map cName → name for consistent display like brand
      const mappedCategories = response.data.categories.map(cat => ({
        id: cat.id,
        name: cat.cName // like bName in brand
      }));
      setCategories(mappedCategories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="container mt-4">
      <h2>Categories</h2>
      <ul className="list-group">
        {categories.length === 0 && <li className="list-group-item">No categories yet</li>}
        {categories.map((cat) => (
          <li key={cat.id} className="list-group-item">
            {cat.name} {/* behaves exactly like BrandList */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
