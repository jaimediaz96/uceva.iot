import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-green-600 text-white p-4 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6">
        {}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/LogoB.png"
            alt="Logo UCEVA"
            className="h-12 mb-4"
          />
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/ucevacol/?locale=es_LA" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="h-6 w-6 hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/ucevacol/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/school/universidad-central-del-valle-del-cauca/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="h-6 w-6 hover:text-gray-400" />
            </a>
          </div>
        </div>

        {}
        <div className="text-left">
          <p className="font-semibold">Contáctenos</p>
          <p>PBX: 602-2317222</p>
          <p>Email: info@uceva.edu.co</p>
          <p>Línea Nacional Gratuita: 018000 96 46 00</p>
          <p>Sede Principal: Carrera 27 A No. 48 -144 Kilómetro 1 Salida Sur.</p>
          <p>Tuluá – Valle del Cauca – Colombia.</p>
          <p>Horario de Atención: Lunes a viernes 8:00AM a 12:00M y 2:30 PM a 6:30PM</p>
        </div>
      </div>

      {}
      <hr className="border-white" />

      {}
      <div className="text-xs text-center mt-4">
        © {new Date().getFullYear()} Unidad Central del Valle del Cauca. Todos los derechos reservados.
        <br />
        Proyecto creado por Juan Alejandro Londoño López y Jaime Eduardo Díaz Tobón.
      </div>
    </footer>
  );
}

export default Footer;
