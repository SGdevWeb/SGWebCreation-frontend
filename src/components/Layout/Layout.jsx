import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
