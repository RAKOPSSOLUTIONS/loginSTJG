import React, { useState } from 'react';
import './App.css';
import logo from './logo-stjg.png';

function App() {
  const [formData, setFormData] = useState({
    emailOrMatricule: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  return (
    <div className="app">
      <div className="water-effect">
        <div className="water-surface"></div>
        <div className="water-ripple"></div>
        <div className="water-ripple"></div>
        <div className="water-ripple"></div>
        <div className="water-ripple"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      <div className="background-animation">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
        <div className="floating-element element-4"></div>
      </div>
      
      <div className="login-container">
        <div className="login-card">
          <div className="logo-section">
            <div className="logo-container">
              <div className="logo-ring ring-1"></div>
              <div className="logo-ring ring-2"></div>
              <img src={logo} alt="STJGTrans" className="logo" />
            </div>

          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="emailOrMatricule" className="form-label">
                <span className="label-text">Email ou Matricule</span>
              </label>
              <div className="input-container">
                <div className="input-icon email-icon"></div>
                <input
                  type="text"
                  id="emailOrMatricule"
                  name="emailOrMatricule"
                  value={formData.emailOrMatricule}
                  onChange={handleInputChange}
                  placeholder="Email ou Matricule"
                  className="form-input"
                  required
                />
                <div className="input-focus-effect"></div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                <span className="label-text">Password</span>
              </label>
              <div className="input-container password-container">
                <div className="input-icon password-icon"></div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••••••"
                  className="form-input"
                  required
                />
                <div className="input-focus-effect"></div>
                <button
                  type="button"
                  className={`password-toggle ${showPassword ? 'hidden' : ''}`}
                  onClick={() => setShowPassword(!showPassword)}
                >
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="forgot-password" onClick={() => alert('Fonctionnalité à venir')}>
                Mot de passe oublié ?
              </button>
            </div>

            <button type="submit" className="submit-button">
              <span>Se Connecter</span>
              <div className="button-animation"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;