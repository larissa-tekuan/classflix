import React from "react";
import Logo from "../../assets/img/classflix.png";
import "./Menu.css";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Classfix Logo" />
      </a>

      <Button className="ButtonLink" href="/">
        Nova publicação
      </Button>
    </nav>
  );
}
export default Menu;
