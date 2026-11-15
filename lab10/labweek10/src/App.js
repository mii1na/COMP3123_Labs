import React, { useState } from "react";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    setSubmittedData(Object.fromEntries(formData.entries()));
  };

  return (
    <>
      <div className="container">
        <h1>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email"
                placeholder="Enter email" required />
            </div>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text"
                placeholder="Full Name" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input id="address" name="address" type="text"
              placeholder="1234 Main St" required />
          </div>

          <div className="form-group">
            <label htmlFor="address2">Address 2</label>
            <input id="address2" name="address2" type="text"
              placeholder="Apartment, studio, or floor" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="province">Province</label>
              <select id="province" name="province" defaultValue="" required>
                <option value="">Choose...</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input id="postalCode" name="postalCode"
                type="text" required />
            </div>
          </div>

          <div className="terms">
            <label>
              <input type="checkbox" required />
              {" "}Agree Terms & Conditions?
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      {submittedData && (
        <div className="result">
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.name}</p>
          <p>
            <strong>Address:</strong> {submittedData.address}
            {submittedData.address2 && `, ${submittedData.address2}`}
          </p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </>
  );
}

export default App;
