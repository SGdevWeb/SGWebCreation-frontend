import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
};

export default App;
