import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrand } from "../api/brandApi";

const CreateBrand = () => {
  const [brand, setBrand] = useState({ bName: "" }); // match backend
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setBrand({ ...brand, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Submitting brand:", brand);
      const response = await createBrand(brand); // API expects { bName: "..." }
      console.log("Response:", response.data);
      setMessage(response.data.msg || "Brand created successfully");
      setBrand({ bName: "" }); // reset correctly
    } catch (err) {
      console.error("API error:", err.response?.data || err.message);
      setMessage(err.response?.data?.msg || "Error creating brand");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Create Brand</h2>
      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">Brand Name</label>
          <input
            type="text"
            name="bName" // must match state and backend
            value={brand.bName}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter brand name"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Adding..." : "Add Brand"}
        </button>
      </form>
    </div>
  );
};

export default CreateBrand;
