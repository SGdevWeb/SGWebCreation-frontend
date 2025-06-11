import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si l'utilisateur a déjà vu l'animation et est sur "/", redirige vers la HomePage
    if (localStorage.getItem("hasSeenAnimation") && location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [location.pathname, navigate]);

  const shouldUseLayout = location.pathname !== "/";

  return (
    <div className={styles.container}>
      {shouldUseLayout ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default App;
