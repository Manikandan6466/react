import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    
    alert("Name must be filled out");
    return false;
  };

  function validateForm() {
    alert("Name must be filled out");
    return false;
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
