"use client";

import React, { useState } from "react";

export default function LoginForm() {
  const initialData = {
    username: "",
    password: "",
    city: ""
  };

  const [data, setData] = useState(initialData);
  const [submittedData, setSubmittedData] = useState(null);

  const cityOptions = [
    { value: "", label: "--Select a city--" },
    { value: "Toronto", label: "Toronto" },
    { value: "Montreal", label: "Montreal" },
    { value: "Vancouver", label: "Vancouver" },
    { value: "Ottawa", label: "Ottawa" }
  ];

  const onChangeValue = (event) => {
    const { name, value } = event.target;

    setData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setSubmittedData({
      ...data,
      password: "********"
    });
  };

  const onResetForm = () => {
    setData(initialData);
    setSubmittedData(null);
  };

  return (
    <div>
      <h3 className="text-2xl font-bold underline">
        Login
      </h3>

      <form onSubmit={onSubmitForm} onReset={onResetForm}>
        <label htmlFor="username" className="block mb-2">
          Username:
        </label>

        <input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={onChangeValue}
          placeholder="Enter your username"
          className="border border-gray-300 rounded-md p-2"
          required
        />

        <br />

        <label htmlFor="password" className="block mb-2">
          Password:
        </label>

        <input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={onChangeValue}
          placeholder="Enter your password"
          className="border border-gray-300 rounded-md p-2"
          required
        />

        <br />

        <label htmlFor="city" className="block mb-2">
          City:
        </label>

        <select
          id="city"
          name="city"
          value={data.city}
          onChange={onChangeValue}
          className="border border-gray-300 rounded-md p-2"
          required
        >
          {cityOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <br />

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>

        <button
          type="reset"
          className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 ml-2"
        >
          Reset
        </button>
      </form>

      {submittedData && (
        <div className="text-center mt-4">
          <h4 className="bg-blue-500 text-white p-2">
            Form Data:
          </h4>

          <p className="text-sm">
            Username: {submittedData.username}
          </p>

          <p className="text-sm">
            Password: {submittedData.password}
          </p>

          <p className="text-sm">
            City: {submittedData.city}
          </p>
        </div>
      )}
    </div>
  );
}
