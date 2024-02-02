import { useState, useRef, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UcevaIotContext } from "../Context/UcevaIotContext";

function SignIn() {
  const { setUser } = useContext(UcevaIotContext);
  const formRef = useRef(null);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorCredential, setErrorCredential] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorEmail("");
    setErrorPassword("");
    setErrorCredential("");

    const formData = new FormData(formRef.current);
    let email = formData.get("email");
    let password = formData.get("password");

    email = sanitizeInputXSS(email);
    password = sanitizeInputXSS(password);

    const emailRegex = /^[a-z]+\.[a-z]+[0-9]+@uceva\.edu\.co$/;

    if (!emailRegex.test(email)) {
      setErrorEmail("Correo electrónico de la Uceva.");
      return;
    }

    if (password.length < 5) {
      setErrorPassword("Contraseña muy corta.");
      return;
    }

    // ----- Send to API and Validate
    console.log("Email:", email);
    console.log("Password:", password);

    setUser({ email });
    setRedirectTo("/work-place");
  };

  function sanitizeInputXSS(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  }

  if (redirectTo) {
    return <Navigate replace to={redirectTo} />;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center h-[70vh]">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700">
          Correo electrónico
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
      {
        errorEmail &&
        <div className="text-red-500 text-sm mb-2">
          {errorEmail}
        </div>
      }
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700">
          Contraseña
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
      {
        errorPassword &&
        <div className="text-red-500 text-sm mb-2">
          {errorPassword}
        </div>
      }
      <button
        type="submit"
        className="w-full p-3 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-300">
        Iniciar sesión
      </button>
      {
        errorCredential &&
        <div className="text-red-500 text-sm">
          {errorCredential}
        </div>
      }
    </form>
  );
}

export default SignIn;