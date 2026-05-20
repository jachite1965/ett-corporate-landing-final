import logoEtt from './assets/logo-ett-optimizado.webp';
import heroImage from './assets/hero-canva-v2-optimizado.webp';
import './App.css';
import teamHeart from './assets/equipo-corazon.png.png'
const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Quiénes somos', href: '#quienes-somos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Contacto', href: '#contacto' },
];

const services = [
  {
    title: 'Consultoría turística y cultural',
    text: 'Diseño de estrategias para destinos, rutas, productos turísticos, experiencias culturales y modelos de desarrollo territorial.',
  },
  {
    title: 'Desarrollo de plataformas digitales',
    text: 'Creación de sitios web, aplicaciones, sistemas informativos, herramientas interactivas y soluciones digitales para instituciones y empresas.',
  },
  {
    title: 'Inteligencia artificial aplicada al turismo y la cultura',
    text: 'Asistentes inteligentes, automatización, análisis de información, experiencias personalizadas y herramientas de orientación para visitantes y usuarios.',
  },
  {
    title: 'Producción de contenidos, audioguías y narrativas culturales',
    text: 'Guiones, recorridos, locuciones, contenidos educativos, productos sonoros, storytelling patrimonial y experiencias interpretativas.',
  },
  {
    title: 'Cursos de capacitación empresarial e institucional',
    text: 'Diseño e impartición de cursos, talleres y programas formativos para empresas, instituciones públicas, equipos de trabajo, prestadores de servicios y personal operativo.',
  },
  {
    title: 'Team building y experiencias de integración',
    text: 'Actividades de integración empresarial, dinámicas colaborativas, recorridos vivenciales y experiencias culturales orientadas a fortalecer equipos.',
  },
  {
    title: 'Programas vacacionales masivos para empresas y gobierno',
    text: 'Diseño, operación y coordinación de programas recreativos, culturales, educativos y de bienestar para hijos de trabajadores, derechohabientes, familias, sindicatos, instituciones públicas y grandes corporativos.',
  },
  {
    title: 'Programas de bienestar, educación y cultura',
    text: 'Proyectos orientados a comunidades, trabajadores, familias e instituciones, integrando recreación, aprendizaje, cultura, convivencia y bienestar.',
  },
  {
    title: 'Estrategia, datos y transformación digital',
    text: 'Diagnóstico, planeación, análisis de información, innovación tecnológica y modelos de implementación para toma de decisiones.',
  },
];

const projects = [
  {
    tag: 'Turismo cultural digital',
    title: 'Audioguías a la Mexicana',
    text: 'Plataforma de recorridos audioguiados para descubrir México a través de historias, cultura, territorio y tecnología.',
  },
  {
    tag: 'IA aplicada al turismo',
    title: 'Concierge ET&T',
    text: 'Asistente inteligente diseñado para acompañar al usuario con información útil, orientación y respuestas durante y después de su experiencia.',
  },
  {
    tag: 'Inteligencia territorial',
    title: 'CÓDICE',
    text: 'Modelo de información turística, cultural y territorial para fortalecer destinos, rutas, prestadores de servicios y toma de decisiones.',
  },
  {
    tag: 'Programa institucional de bienestar',
    title: 'COATLI',
    text: 'Programa vacacional, cultural y educativo diseñado para hijos de trabajadores de instituciones públicas, sindicatos, empresas y organismos de gran escala.',
  },
  {
    tag: 'Turismo, cultura y evento internacional',
    title: 'XochiFest Mundial FIFA 2026',
    text: 'Concepto de experiencia turística, cultural y festiva vinculada a la proyección internacional de México durante el Mundial FIFA 2026.',
  },
  {
    tag: 'Experiencia cultural inmersiva',
    title: 'Museo Vivo Amimitl',
    text: 'Experiencia viva en Xochimilco que integra tradición, chinampas, memoria histórica, cultura lacustre y turismo responsable.',
  },
  {
    tag: 'Experiencias corporativas culturales',
    title: 'HALMA hecho a la mexicana',
    text: 'Propuesta premium de cena-espectáculo corporativa basada en el patrimonio cultural, gastronómico y escénico de México.',
  },
];

const impactStats = [
  { number: '+30', label: 'Años de experiencia' },
  { number: '+80', label: 'Proyectos desarrollados' },
  { number: '+30', label: 'Destinos impactados' },
  { number: '+200', label: 'Profesionales formados' },
];

function App() {
  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="ET&T inicio">
          <img
            src={logoEtt}
            alt="ET&T Estrategias Turísticas y Tecnológicas S.C."
          />
        </a>

        <nav className="nav-links" aria-label="Menú principal">
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contacto">
          Contáctanos
        </a>
      </header>

      <main>
        <section
          id="inicio"
          className="hero section"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="hero-overlay" />

          <div className="hero-copy">
            <p className="eyebrow">
              Estrategias Turísticas y Tecnológicas S.C.
            </p>

            <div className="red-line" />

            <h1>
              Estrategias que transforman territorios.
              <span> Tecnología que deja huella.</span>
            </h1>

            <p className="hero-text">
              En ET&T desarrollamos soluciones innovadoras para el turismo, la
              cultura, la educación y la transformación digital, integrando
              consultoría estratégica, contenidos especializados, inteligencia
              artificial y plataformas tecnológicas.
            </p>

            <div className="hero-actions">
              <a className="btn primary" href="#impacto">
                Descubre cómo dejamos huella <span>→</span>
              </a>

              <a className="btn secondary" href="#proyectos">
                Conoce nuestros proyectos <span>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="quienes-somos" className="section two-col">
          <div>
            <p className="section-label">Quiénes somos</p>
            <h2>Una empresa mexicana que convierte ideas en impacto real.</h2>
            <div className="red-line" />
            <p>
              Estrategias Turísticas y Tecnológicas S.C. es una empresa mexicana
              dedicada al diseño de soluciones estratégicas, culturales y
              tecnológicas para proyectos turísticos, educativos, sociales,
              institucionales y empresariales.
            </p>
            <p>
              Integramos análisis, creatividad, inteligencia artificial,
              contenidos especializados y plataformas digitales para convertir
              ideas en experiencias útiles, memorables y con impacto real.
            </p>
          </div>

          <div className="feature-stack">
            <article className="feature-card">
              <span>01</span>
              <h3>Estrategia</h3>
              <p>
                Convertimos ideas en modelos claros, viables y presentables.
              </p>
            </article>
            <article className="feature-card">
              <span>02</span>
              <h3>Innovación</h3>
              <p>
                Aplicamos tecnología, inteligencia artificial y herramientas
                digitales con propósito.
              </p>
            </article>
            <article className="feature-card">
              <span>03</span>
              <h3>Humanismo</h3>
              <p>
                Diseñamos proyectos que conectan con personas, comunidades,
                instituciones y territorios.
              </p>
            </article>
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-heading split">
            <div>
              <p className="section-label">Servicios</p>
              <h2>
                Soluciones integrales para instituciones, empresas y destinos.
              </h2>
              <div className="red-line" />
            </div>
            <p>
              Diseñamos soluciones integrales para instituciones públicas,
              empresas, hoteles, destinos turísticos, organizaciones culturales
              y proyectos sociales que buscan crecer, innovar y generar impacto.
            </p>
          </div>

          <div className="card-grid services-grid">
            {services.map((service, index) => (
              <article className="card" key={service.title}>
                <span className="card-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-heading">
            <p className="section-label">Proyectos destacados</p>
            <h2>
              Ideas convertidas en experiencias, plataformas y programas con
              impacto.
            </h2>
            <div className="red-line" />
            <p>
              Nuestros proyectos reflejan una visión integral: unir cultura,
              tecnología, turismo, educación, bienestar y desarrollo territorial
              en soluciones con identidad, propósito y capacidad de ejecución.
            </p>
          </div>

          <div className="card-grid projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <span>{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tecnologia" className="section two-col technology">
          <div>
            <p className="section-label">Tecnología</p>
            <h2>
              Tecnología aplicada al turismo, la cultura y la experiencia
              humana.
            </h2>
            <div className="red-line" />
            <p>
              Creemos en una tecnología con propósito: útil para el visitante,
              valiosa para las instituciones y sostenible para los territorios.
            </p>
            <p>
              Aplicamos inteligencia artificial, mapas digitales, audioguías,
              asistentes inteligentes, plataformas offline, automatización y
              análisis de datos para mejorar la forma en que las personas
              descubren, recorren, aprenden y se relacionan con los destinos.
            </p>
          </div>

          <div className="tech-list">
            <div>
              <span>01</span> IA + Cultura
            </div>
            <div>
              <span>02</span> Mapas + Territorio
            </div>
            <div>
              <span>03</span> Datos + Estrategia
            </div>
            <div>
              <span>04</span> Plataformas + Experiencias
            </div>
          </div>
        </section>

        <section id="impacto" className="section impact">
          <div className="section-heading centered">
            <p className="section-label">Impacto</p>
            <h2>Impacto social, cultural e institucional.</h2>
            <div className="red-line" />
            <p>
              Nuestros proyectos buscan generar valor más allá de la experiencia
              turística: fortalecen identidad cultural, educación, bienestar,
              territorio y sostenibilidad.
            </p>
          </div>

          <div className="stats-grid">
            {impactStats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>

          <div className="card-grid impact-grid">
            <article className="card">
              <h3>Cultura</h3>
              <p>
                Rescate, interpretación y difusión del patrimonio material e
                inmaterial.
              </p>
            </article>
            <article className="card">
              <h3>Educación</h3>
              <p>
                Contenidos, cursos y experiencias que enseñan de forma clara,
                emocional y significativa.
              </p>
            </article>
            <article className="card">
              <h3>Bienestar</h3>
              <p>
                Programas que conectan cultura, recreación, salud emocional,
                convivencia e integración.
              </p>
            </article>
          </div>
        </section>
        <section id="equipo" className="section team-heart">
  <img
    src={teamHeart}
    alt=""
    className="team-heart-bg"
    aria-hidden="true"
  />

  <div className="team-heart-overlay" />

  <div className="team-heart-copy">
    <p className="section-label">Equipo</p>

    <h2>Un equipo con gran corazón.</h2>

    <div className="red-line" />

    <p>
      ET&T está impulsada por personas que creen en las ideas, en el trabajo
      serio y en el valor humano de cada proyecto. Somos un equipo cercano,
      profesional y comprometido con transformar cultura, turismo y tecnología
      en soluciones con impacto real.
    </p>

    <div className="team-roles">
      <div className="team-role-card">
        <span>Relaciones Comerciales</span>
        <strong>Mario Galicia De Los Reyes</strong>
        <p>Director de Relaciones Comerciales</p>
      </div>

      <div className="team-role-card">
        <span>Administración y Finanzas</span>
        <strong>Verónica Chincoya Teutli</strong>
        <p>Directora de Administración y Finanzas</p>
      </div>

      <div className="team-role-card">
        <span>Análisis y Tecnología</span>
        <strong>Javier Chincoya Teutli</strong>
        <p>Director de Análisis de Negocios y Nuevas Tecnologías</p>
      </div>
    </div>
  </div>
</section>
        <section id="contacto" className="section contact">
          <div>
            <p className="section-label">Contacto</p>
            <h2>Hablemos de tu proyecto.</h2>
            <div className="red-line" />
            <p>
              Si representas a una institución, empresa, destino turístico,
              hotel, organización cultural o iniciativa social, en ET&T podemos
              ayudarte a convertir una idea en una solución estratégica,
              tecnológica y memorable.
            </p>

            <div className="contact-list">
              <a href="mailto:info@estrategiasturisticas.com">
                info@estrategiasturisticas.com
              </a>
              <a
                href="https://wa.me/525630701846"
                target="_blank"
                rel="noreferrer"
              >
                56 3070 1846
              </a>
              <span>
                Moctezuma 89, Colonia del Carmen, Coyoacán, C.P. 04100, Ciudad
                de México.
              </span>
            </div>
          </div>

          <form
  className="contact-form"
  action="https://formspree.io/f/mvzykwje"
  method="POST"
  target="_blank"
>
  <h3>Solicita una reunión estratégica</h3>

  <input
    type="hidden"
    name="_subject"
    value="Nuevo mensaje desde el sitio web de ET&T"
  />

  <div className="form-row">
    <input
      type="text"
      name="nombre"
      placeholder="Nombre"
      required
    />

    <input
      type="text"
      name="organizacion"
      placeholder="Empresa o institución"
    />
  </div>

  <input
    type="email"
    name="email"
    placeholder="Correo"
    required
  />

  <input
    type="tel"
    name="telefono"
    placeholder="Teléfono"
  />

  <textarea
    name="mensaje"
    placeholder="Mensaje"
    rows={5}
    required
  ></textarea>

  <button type="submit">Enviar mensaje →</button>
</form>
        </section>
      </main>

      <footer className="footer">
        <div>
          <img src={logoEtt} alt="ET&T" />
          <p>Turismo, cultura, tecnología e innovación con impacto.</p>
        </div>

        <div>
          <h4>Navegación</h4>
          {menuItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div>
          <h4>Enlaces de interés</h4>
          <a
            href="https://audioguiasmexicotour.com"
            target="_blank"
            rel="noreferrer"
          >
            Audioguías a la Mexicana
          </a>
          <a href="#proyectos">Proyectos destacados</a>
          <a href="#tecnologia">Tecnología aplicada</a>
          <a href="#contacto">Contacto corporativo</a>
        </div>

        <div>
          <h4>Contacto</h4>
          <a href="mailto:info@estrategiasturisticas.com">
            info@estrategiasturisticas.com
          </a>
          <a href="https://wa.me/525630701846" target="_blank" rel="noreferrer">
            56 3070 1846
          </a>
          <span>Ciudad de México, México</span>
        </div>

        <small>
          © 2026 Estrategias Turísticas y Tecnológicas S.C. Todos los derechos
          reservados.
        </small>
        </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/525630701846?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20ET%26T."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a ET&T por WhatsApp"
      >
        <span className="whatsapp-icon">✆</span>
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;