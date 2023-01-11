import React, { Component } from "react";
import styled from "styled-components";

export default function Form(props) {
  const { handleChange, handleSubmit, formData, errors, buttonDisabled } =
    props;

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={formData.name}
            name="name"
            onChange={handleChange}
            placeholder="Name..."
          />
        </label>
      </p>
      <p>{errors.name}</p>
      <p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="email@email.com"
          />
        </label>
      </p>
      <p>{errors.email}</p>
      <p>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            placeholder="password123"
          />
        </label>
      </p>
      <p>{errors.password}</p>
      <p>
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
        />
        <label htmlFor="terms">I accept Terms of Service</label>
      </p>
      <p>{errors.terms}</p>
      <p>
        <label htmlFor="submit">
          <input type="submit" id="submit" disabled={buttonDisabled} />
        </label>
      </p>
    </form>
  );
}
