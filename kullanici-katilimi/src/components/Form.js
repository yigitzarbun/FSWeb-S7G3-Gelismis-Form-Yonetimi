export default function Form(props) {
  const { handleChange, handleSubmit, formData } = props;
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
          />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </label>
      </p>
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
      <p>
        <label htmlFor="submit">
          <input type="submit" id="submit" />
        </label>
      </p>
    </form>
  );
}
