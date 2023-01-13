import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { formSchema } from "./validations/FormValidation";
import Form from "./components/Form";

function App() {
  // .......................................DEFINE STATES....................................

  // form data state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  // new user state
  const [newUser, setNewUser] = useState(null);

  // error state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  // disabled state
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // .......................................HANDLE STATES....................................

  //handle change
  const handleChange = async (event) => {
    const { name, value, type, checked } = event.target;
    let newValue = value;

    if (type === "checkbox") {
      newValue = checked;
    }

    checkFormErrors(name, newValue);
    setFormData({ ...formData, [name]: newValue });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (buttonDisabled === false) {
      axios
        .post("https://reqres.in/api/users", formData)
        .then((response) => {
          setNewUser(response.data);
          setFormData({
            name: "",
            email: "",
            password: "",
            terms: false,
          });
          setTimeout(() => {
            document.querySelector("#success-message").textContent = "";
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // handle button disabled

  useEffect(() => {
    formSchema.isValid(formData).then((result) => setButtonDisabled(!result));
  }, [formData]);

  // .......................................DATA VALIDATION....................................

  // check errors
  function checkFormErrors(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }
  // .......................................RETURN UI....................................

  //return UI
  return (
    <div className="App">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        newUser={newUser}
        errors={errors}
        buttonDisabled={buttonDisabled}
      />
      {newUser && (
        <div id="success-message">
          <h2>Registration Successfull!</h2>
          <p>
            {newUser.name} was added with ID no: {newUser.id}.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
