import { useState, useRef, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UcevaIotContext } from "../Context/UcevaIotContext";
import { FaUserAlt, FaLock } from 'react-icons/fa';

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

    const emailRegex = /^[a-z]+\.[a-z]+[0-9]+@uceva\.edu\.co$/;

    if (!emailRegex.test(email)) {
      setErrorEmail("Correo electrónico de la Uceva.");
      return;
    }

    if (password.length < 5) {
      setErrorPassword("Contraseña muy corta.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    setUser({ email });
    setRedirectTo("/work-place");
  };

  if (redirectTo) {
    return <Navigate replace to={redirectTo} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-[url('/path-to-your-background-image.jpg')]">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <div className="flex items-center border-b border-teal-500 py-2">
            <FaUserAlt className="text-gray-500 mr-2" />
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="email"
              placeholder="Correo electrónico"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          {errorEmail && <p className="text-red-500 text-xs italic">{errorEmail}</p>}
        </div>
        <div className="mb-6">
          <div className="flex items-center border-b border-teal-500 py-2">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type="password"
              name="password"
              id="password"
              required
              autoComplete="current-password"
              placeholder="Contraseña"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
          </div>
          {errorPassword && <p className="text-red-500 text-xs italic">{errorPassword}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
          <Link
            to="/forgot-password"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        {errorCredential && <p className="text-red-500 text-xs italic">{errorCredential}</p>}
        <div className="text-center mt-4">
          <p>
            ¿Nuevo en Uceva.IoT?
            <Link
              to="/check-in"
              className="text-blue-500 hover:text-blue-800"
            >
              Crea una cuenta
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
