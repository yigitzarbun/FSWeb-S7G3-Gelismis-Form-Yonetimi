import React, { Component } from "react";
import styled from "styled-components";

export default function Form(props) {
  const { handleChange, handleSubmit, formData, errors, buttonDisabled } =
    props;

  return (
    <form onSubmit={handleSubmit} data-cy="form-field">
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
            data-cy="name-field"
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
            data-cy="email-field"
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
            data-cy="password-field"
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
          data-cy="terms-box"
        />
        <label htmlFor="terms">I accept Terms of Service</label>
      </p>
      <p>{errors.terms}</p>
      <p>
        <label htmlFor="submit">
          <input
            type="submit"
            id="submit"
            disabled={buttonDisabled}
            data-cy="submit-button"
          />
        </label>
      </p>
    </form>
  );
}
