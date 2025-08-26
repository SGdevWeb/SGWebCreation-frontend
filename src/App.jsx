import { Outlet, useLocation } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";
import { ToastContainer } from "react-toastify";

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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  );
};

export default App;
