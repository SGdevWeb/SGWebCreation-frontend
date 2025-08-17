import { Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";

const App = () => {
  const location = useLocation();

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
