import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink to="/" end>

              <img src="./img/icons/Logo1.png" alt="icon"/>
              <h3>TEA TIME <br /> Le Thé En Asie</h3>
          </NavLink>
        </div>
        <div className="barre-de-recherche">
        {/* <img src="./img/icons/barre-de-recheche.png" alt="barre-de-recherche" /> */}
        <input type="text" className="barreDeRecherche"/>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink to="/" end>
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li>
              <img src="./img/icons/coeur-vide.png" alt="like" />
            </li>
            <li>
              <img src="./img/icons/partage.png" alt="partage" />
            </li>
            <li>
              <img src="./img/icons/email.png" alt="email" />
            </li>

            <li>
              <NavLink to="/profil" end>
                <img src="./img/icons/compte.png" alt="login" />
              </NavLink>
            </li>
            <li>
              <img src="./img/icons/Appel.png" alt="call" />
            </li>
            <li>
              <img src="./img/icons/Panier1.png" alt="panier" />
            </li>
          </ul>
        )}
        <div className="btn-container"> 
        <img src="./img/icons/menu-icon.svg" alt="menu_hamburger" /></div>
      </div>
    </nav>
  );
};

export default Navbar;
