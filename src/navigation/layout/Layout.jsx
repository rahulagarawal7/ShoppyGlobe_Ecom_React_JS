import { Outlet } from "react-router-dom";
import Header from "../../components//header/Header";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
