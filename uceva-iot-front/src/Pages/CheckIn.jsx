import { useContext, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UcevaIotContext } from '../Context/UcevaIotContext';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function CheckIn() {
  const { setUser } = useContext(UcevaIotContext);
  const formRef = useRef(null);
  const [errorCredential, setErrorCredential] = useState("");
  const [redirectTo, setRedirectTo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorCredential("")

    const formData = new FormData(formRef.current);
    const data = {
      firstName: sanitizeInputXSS(formData.get("firstName").trim()),
      lastName: sanitizeInputXSS(formData.get("lastName").trim()),
      code: sanitizeInputXSS(formData.get("code").trim()),
      email: sanitizeInputXSS(formData.get("email").trim()),
      career: sanitizeInputXSS(formData.get("career").trim()),
      subject: sanitizeInputXSS(formData.get("subject").trim()),
      semestre: sanitizeInputXSS(formData.get("semestre")),
      rol: sanitizeInputXSS(formData.get("rol")),
      password: sanitizeInputXSS(formData.get("password"))
    };

    if (Object.values(data).some(val => val.trim() === '')) {
      setErrorCredential("Por favor llene todos los campos.");
      return;
    }

    if (validateRegex(data.firstName, /^[A-Za-z\s]+$/) ||
      validateRegex(data.lastName, /^[A-Za-z\s]+$/) ||
      validateRegex(data.career, /^[A-Za-z\s]+$/) ||
      validateRegex(data.subject, /^[A-Za-z\s]+$/)) {
      setErrorCredential("No usar caracteres especiales. Ni números, los números son solo validos en semestre y código");
      return;
    }

    if (validateRegex(data.code, /^[0-9]+$/)) {
      setErrorCredential("Solo números en el código.");
      return;
    }

    if (validateRegex(data.email, /^[a-z]+\.[a-z]+[0-9]+@uceva\.edu\.co$/)) {
      setErrorCredential("Por favor colocar correo electrónico de la Uceva.");
      return;
    }

    if (data.semestre < 1 || data.semestre > 10 || isNaN(data.semestre)) {
      setErrorCredential("El semestre es incorrecto.");
      return;
    }

    if (!data.rol) {
      setErrorCredential("Escoja un rol.");
      return;
    }

    if (data.rol === "profesor" && data.code.startsWith('230')) {
      setErrorCredential("Ingrese un código correcto.");
      return;
    }

    if (data.password.length < 5) {
      setErrorCredential("Contraseña muy corta.");
      return;
    }

    // ----- Send to API and Validate
    console.log("Datos del formulario:", data);

    setUser(data);
    setRedirectTo("/work-place");
  };

  function sanitizeInputXSS(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML;
  }

  function validateRegex(data, regex) {
    return !regex.test(data);
  }

  if (redirectTo) {
    return <Navigate replace to={redirectTo} />;
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-white mt-20 p-3">
      <div className="flex items-center mb-4 gap-3">
        <label
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold">
          Nombre:
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Nombre"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="given-name" />
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold">
          Apellido:
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Apellido"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="family-name" />
      </div>
      <div className="flex items-center  mb-4 gap-3">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold min-w-fit">
          Correo electrónico de la Uceva:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Correo electrónico de la Uceva"
          className="shadow appearance-none border rounded w-80 ml-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="email" />
      </div>
      <div className="flex items-center mb-4 gap-3">
        <label
          htmlFor="career"
          className="block text-gray-700 text-sm font-bold">
          Carrera:
        </label>
        <input
          type="text"
          name="career"
          id="career"
          placeholder="Carrera"
          className="shadow appearance-none border rounded w-full mr-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="off" />
        <label
          htmlFor="subject"
          className="block text-gray-700 text-sm font-bold">
          Materia:
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Materia"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="off" />
      </div>
      <div className="flex items-center mb-4 gap-3">
        <label
          htmlFor="semestre"
          className="block text-gray-700 text-sm font-bold">
          Semestre:
        </label>
        <input
          type="number"
          name="semestre"
          id="semestre"
          placeholder=""
          className="shadow appearance-none border rounded w-16 mr-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          min="1"
          max="10"
          autoComplete="off" />
        <label
          htmlFor="rol"
          className="block text-gray-700 text-sm font-bold">
          Ocupación:
        </label>
        <div className='relative'>
          <select
            name="rol"
            id="rol"
            className="shadow appearance-none border rounded w-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            autoComplete="off">
            <option value="">Selecciona un rol</option>
            <option value="profesor">Profesor</option>
            <option value="estudiante">Estudiante</option>
          </select>
          <ChevronDownIcon className="absolute top-3 right-0 mx-3 h-4 w-4 text-black" />
        </div>
      </div>
      <div className="flex items-center mb-4 gap-3">
        <label
          htmlFor="code"
          className="block text-gray-700 text-sm font-bold">
          Código:
        </label>
        <input
          type="text"
          name="code"
          id="code"
          placeholder="Código"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="username" />
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold">
          Contraseña:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Contraseña"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
          autoComplete="new-password" />
      </div>
      <button
        type="submit"
        className="w-44 my-5 p-3 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-300">
        Registrarse
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

export default CheckIn;