import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createCategory } from "../api/categoryApi";

const CreateCategory = ({ onCategoryAdded }) => {
  const [category, setCategory] = useState({ cName: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setCategory({ ...category, cName: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await createCategory(category);
      setMessage(response.data.msg || "Category created successfully");

      // Reset form
      setCategory({ cName: "" });

      // Notify parent to refresh the list
      if (onCategoryAdded) onCategoryAdded();
    } catch (err) {
      console.error("API error:", err.response?.data || err.message);
      setMessage(err.response?.data?.msg || "Error creating category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4 shadow mb-4">
      <h2 className="mb-3">Create Category</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Category Name</label>
          <input
            type="text"
            name="cName"
            value={category.cName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter category name"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
