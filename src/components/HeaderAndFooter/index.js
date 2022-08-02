import "./HeaderAndFooter.css";
import { Navbar, Footer } from "..";

function HeaderAndFooter(props) {
  return (
    <div className="HeaderAndFooter">
      <Navbar />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
}

export default HeaderAndFooter;
