import { Navbar, Footer } from "..";

function HeaderAndFooter(props) {
  return (
    <div className="Contact">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default HeaderAndFooter;
