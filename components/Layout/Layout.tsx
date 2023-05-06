import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default Layout;
