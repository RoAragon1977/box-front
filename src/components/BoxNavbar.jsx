import Navega from "./navega";

const BoxNavbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <div className="flex justify-between items-center bg-blue-950 h-14">
            <div className="flex justify-start">
              <Navega to="/" text="Inicio" />
              <Navega to="/administracion" text="Administracion" />
              <Navega to="/nosotros" text="Nosotros" />
              <Navega to="/favoritos" text="Favoritos" />
            </div>
            <div className="flex justify-end">
              <Navega to="/login" text="Login" />
              <Navega to="/registro" text="Registrate" />
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default BoxNavbar;
