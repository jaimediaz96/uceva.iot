function About() {
  return (
    <div className="p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Acerca del Proyecto</h1>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Descripción del Proyecto</h2>
        <p className="text-gray-600">Plataforma de visualización de datos IoT para la UCEVA, se enfoca en desarrollar una plataforma para integrar y visualizar datos de dispositivos IoT en un entorno académico. El proyecto tiene como objetivo principal implementar una herramienta que facilite la visualización y control de datos en tiempo real, provenientes de diversos dispositivos IoT. Esto permitirá mejorar la calidad del aprendizaje en la universidad, proporcionando a los estudiantes y profesores una herramienta interactiva para el análisis de datos. La plataforma busca adaptarse a las necesidades específicas del entorno educativo.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Características del Proyecto</h2>
        <dl className="list-disc list-inside space-y-3 text-gray-700">
          <dt className="text-lg font-semibold">Integración de Dispositivos IoT</dt>
          <dd className="ml-4">Permite la integración fluida de diversos tipos de dispositivos IoT, superando los retos de interoperabilidad.</dd>

          <dt className="text-lg font-semibold">Visualización de Datos en Tiempo Real</dt>
          <dd className="ml-4">Ofrece herramientas para visualizar datos de sensores en tiempo real, utilizando gráficos y tablas para una interpretación más accesible.</dd>

          <dt className="text-lg font-semibold">Módulo de Gestión de Usuarios</dt>
          <dd className="ml-4">Incluye un módulo para el registro y administración de usuarios como estudiantes y profesores.</dd>

          <dt className="text-lg font-semibold">Módulo de Registro y Análisis de Actividades</dt>
          <dd className="ml-4">Facilita el seguimiento de trabajos y proyectos realizados en la plataforma.</dd>

          <dt className="text-lg font-semibold">Enfoque Educativo</dt>
          <dd className="ml-4">Diseñada específicamente para el ámbito educativo, facilitando la enseñanza y el aprendizaje en campos relacionados con IoT.</dd>
        </dl>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Universidad</h2>
        <p className="text-gray-600">La Unidad Central del Valle del Cauca (UCEVA), fundada en 1971, es una institución universitaria pública en Tuluá, Colombia, con una amplia oferta de programas académicos. Se distingue por su compromiso con la calidad educativa, la investigación, y el desarrollo regional y nacional. Su misión se centra en formar profesionales integrales y contribuir al desarrollo humano y social de la región y del país, enfocándose en la equidad, autonomía universitaria, libertad académica y responsabilidad social.</p>
        <p className="text-gray-600 mt-2">Uceva.iot se alinea estrechamente con los objetivos y principios de la UCEVA. Este proyecto busca innovar en el campo tecnológico, específicamente en el uso y aplicación de tecnologías IoT en el entorno educativo. Al integrar estas tecnologías en el proceso de aprendizaje, el proyecto no solo enriquece la oferta académica de la UCEVA, sino que también abre nuevas vías de investigación y colaboración. Asimismo, al centrarse en aplicaciones prácticas de la tecnología IoT, contribuye a la formación de profesionales capaces de responder a las necesidades del sector productivo y de la sociedad, manteniendo el compromiso de UCEVA con la responsabilidad social y el desarrollo regional.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Definición del Problema</h2>
        <p className="text-gray-600">El proyecto de tesis aborda el desafío de integrar y visualizar datos de dispositivos IoT en un entorno educativo. El problema central radica en la diversidad de protocolos, sistemas operativos y formatos de datos de los dispositivos IoT, lo que dificulta su integración fluida y gestión eficiente. Además, la falta de herramientas asequibles y adaptadas a las necesidades educativas en universidades, como la UCEVA, limita la capacidad de enseñar y aprender conceptos complejos relacionados con IoT. Este proyecto propone desarrollar una plataforma de visualización y control de datos IoT que sea segura, personalizable y asequible, respondiendo así a las necesidades específicas de un entorno académico y mejorando la calidad de la educación y la investigación en la UCEVA.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Justificación de la Solución</h2>
        <p className="text-gray-600">Este proyecto de tesis proporciona una solución efectiva al problema de la integración y gestión de dispositivos IoT en un entorno educativo. Al desarrollar una plataforma que permite la visualización y control de datos de estos dispositivos de manera integrada y en tiempo real, se superan los desafíos de interoperabilidad y complejidad. Esta solución es especialmente beneficiosa para la UCEVA, ya que mejora el aprendizaje y la enseñanza en áreas relacionadas con IoT. Además se adapta a las necesidades específicas del entorno educativo, potenciando la innovación y la investigación académica en este campo.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Equipo de Desarrollo</h2>
        <ul>
          <li className="text-gray-600">Juan Alejandro Londoño López - Estudiante de Ingeniería en Sistemas</li>
          <li className="text-gray-600">Jaime Eduardo Díaz Tobón - Estudiante de Ingeniería en Sistemas</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Tecnologías Utilizadas</h2>
        <dl className="list-disc list-inside space-y-3 text-gray-700">
          <dt className="text-lg font-semibold">HTML, CSS y JavaScript</dt>
          <dd className="ml-4">Estas tecnologías básicas para el desarrollo web se utilizan para la interfaz de usuario, asegurando una presentación eficaz y una interacción intuitiva.</dd>

          <dt className="text-lg font-semibold">React</dt>
          <dd className="ml-4">Este framework de desarrollo es seleccionado para la construcción de aplicaciones web, gracias a su eficiencia en la creación de aplicaciones de página única (SPA) y su enfoque en componentes.</dd>

          <dt className="text-lg font-semibold">Java y Spring Boot</dt>
          <dd className="ml-4">Se eligió Java por ser un lenguaje robusto y orientado a objetos, ideal para aplicaciones empresariales. Spring Boot, un framework de Java, se utiliza por su facilidad de configuración y capacidad para crear aplicaciones independientes.</dd>

          <dt className="text-lg font-semibold">JPA y Hibernate</dt>
          <dd className="ml-4">Se emplean para el mapeo objeto-relacional, facilitando la integración y manejo de datos entre la aplicación y la base de datos.</dd>

          <dt className="text-lg font-semibold">MongoDB</dt>
          <dd className="ml-4">Se utiliza como sistema de base de datos por su flexibilidad y eficiencia en el manejo de grandes volúmenes de datos, lo cual es crucial para la gestión de datos IoT.</dd>
        </dl>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Objetivos y Beneficios</h2>
        <p className="text-gray-600">Mejorar la experiencia educativa y de investigación en UCEVA, beneficiando a estudiantes y profesores.</p>
      </section>

      <section className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Directores</h2>
        <p className="text-gray-600">Edgar De Jesús Sandoval Arboleda - Ingeniero de Sistemas</p>
      </section>
    </div>
  );
}

export default About;