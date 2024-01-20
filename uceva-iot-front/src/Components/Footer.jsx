function Footer() {
  return (
    <footer className="flex justify-between fixed bottom-0 w-full bg-green-600 text-white p-1 text-center">
      <p className="text-sm">
        Proyecto creado por Juan Alejandro Londoño López y Jaime Eduardo Díaz Tobón
      </p>
      <p className="text-sm">
        UCEVA
      </p>
      <p className="text-xs">© {new Date().getFullYear()} Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;