import Footer from "./commons/footer/Footer";
import Navbar from "./commons/navbar/Navbar";

export default function Layouts({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
