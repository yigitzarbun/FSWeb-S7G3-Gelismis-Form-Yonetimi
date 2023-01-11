import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";

function App() {
  // state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  //handle change
  const handleChange = (event) => {
    //const name = event.target.name;
    //const value = event.target.value;
    const { name, value } = event.target;
    let newValue = value;

    if (event.target.type === "checkbox") {
      newValue = event.target.checked;
    }
    setFormData({ ...formData, [name]: newValue });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  //return UI
  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
    </div>
  );
}

export default App;
