import { NavLink, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="row">
      <div className="col-lg-2">
        <h5>Categorias</h5>
        <div className="nav flex-column nav-pills">
          <NavLink aria-current="page" className="nav-link" to="/">
            Todos
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/animais-terrestres">
            Terrestres
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/animais-aereos">
            Aéreos
          </NavLink>
          <NavLink aria-current="page" className="nav-link" to="/animais-marinhos">
            Marinhos
          </NavLink>
        </div>
      </div>
      <div className="col-lg-10">
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
