function ProjectSummary() {
  return (
    <div className="flex-1 mx-6 shadow-xl rounded-lg p-2 bg-white hover:bg-gray-100 transition-all duration-300">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">UCEVA IoT</h1>
      {}
      <dl className="list-disc list-inside space-y-20 text-gray-700">
        <div>
          <dt className="text-lg font-semibold">Visualización de Datos</dt>
          <dd className="ml-2">Herramientas intuitivas para visualizar datos en tiempo real, facilitando el análisis y comprensión.</dd>
        </div>
        <div>
          <dt className="text-lg font-semibold">Integración de Dispositivos IoT</dt>
          <dd className="ml-2">Capacidad para conectar y gestionar una variedad de dispositivos, superando desafíos de interoperabilidad.</dd>
        </div>
        <div>
          <dt className="text-lg font-semibold">Enfoque Educativo</dt>
          <dd className="ml-2">Diseñada específicamente para entornos académicos, mejorando la enseñanza de conceptos complejos.</dd>
        </div>
        <div>
          <dt className="text-lg font-semibold">Interactividad y Análisis</dt>
          <dd className="ml-2">Proporciona herramientas para el análisis crítico y el desarrollo de habilidades en el manejo de datos.</dd>
        </div>
      </dl>
    </div>
  );
}

export default ProjectSummary;
