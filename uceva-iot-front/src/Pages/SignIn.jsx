import { useState, useRef } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UcevaIotContext } from "../Context/UcevaIotContext";

function SignIn() {
  const { setUser } = useContext(UcevaIotContext);
  const formRef = useRef(null);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorCredential, setErrorCredential] = useState('');
  const [redirectTo, setRedirectTo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorEmail('');
    setErrorPassword('');
    setErrorCredential('');

    const formData = new FormData(formRef.current);
    let email = formData.get("email");
    let password = formData.get("password");

    email = sanitizeInput(email);
    password = sanitizeInput(password);

    if (!email.endsWith('@uceva.edu.co')) {
      setErrorEmail('Correo electrónico de la Uceva.');
      return;
    }

    if (password.length < 5) {
      setErrorPassword('Contraseña muy corta.');
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    // ----- Send to API and Validate

    setUser(email);
    setRedirectTo("/work-place")
  };

  const sanitizeInput = (input) => {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  };

  if (redirectTo) {
    return <Navigate replace to={redirectTo} />;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="email"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {errorEmail &&
        <div className="text-red-500 text-sm mb-2">
          {errorEmail}
        </div>}
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          autoComplete="current-password"
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      {errorPassword &&
        <div className="text-red-500 text-sm mb-2">
          {errorPassword}
        </div>}
      <button
        type="submit"
        className="w-full p-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Iniciar sesión
      </button>
      {errorCredential &&
        <div className="text-red-500 text-sm mb-2">
          {errorCredential}
        </div>}
    </form>
  );
}

export default SignIn;