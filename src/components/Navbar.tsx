import { useState } from "react";
import "./Navbar.css"; // Ensure styles are in your CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={closeNav}>
        <img src="assets/uparrow.png" alt="->" />
        </button>
        <a href="#">My Work</a>
        <a href="https://www.threads.net/@y4mi_xo">Threads</a>
        <a href="http://www.linkedin.com/in/niroshank/">Linked In</a>
        <a href="#">Contact</a>
      </div>

      <button onClick={openNav} className="open-btn"><img src="assets/sidearrow.png" alt="->" /></button>
    </>
  );
};

export default Navbar;
