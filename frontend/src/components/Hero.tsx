export function Hero() {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Maestría en Big Data y Analítica</p>
        <h1>Portafolio académico profesional</h1>
        <p>
          Un sitio frontend, rápido y mantenible para centralizar materias cursadas, actividades,
          aprendizajes y resultados relevantes.
        </p>
        <nav className="hero__actions" aria-label="Navegación principal">
          <a href="#materias">Materias</a>
          <a href="#logros">Logros</a>
          <a href="#trayectoria">Trayectoria</a>
        </nav>
      </div>
    </header>
  );
}
