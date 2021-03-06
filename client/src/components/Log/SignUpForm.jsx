import React, { useState } from "react";
import axios from "axios";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const terms = document.getElementById("terms");
    const termsError = document.querySelector(".terms.error");

    pseudoError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";
    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== controlPassword || !terms.checked) {
      if (password !== controlPassword)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}/api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {formSubmit ? (
        <>
          <SignInForm />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          {/* <div className="logo1">
            <img src="./img/icons/Logo1.png" alt="logo" width="150px" />
          </div> */}
          {/* <label htmlFor="pseudo">Nom d'utilisateur</label> */}
          <input
            type="text"
            name="pseudo"
            id="pseudo"
            placeholder="Nom d'utilisateur"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
          {/* <label htmlFor="email">Email</label> */}

          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          {/* <label htmlFor="password">Mot de passe</label> */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
          {/* <label htmlFor="password-conf">Confirmer mot de passe</label> */}

          <input
            type="password"
            name="password"
            id="password-conf"
            placeholder="Confirmer votre mot de passe"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
          <div className="conditions-generales">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" id="check">
              Acceptez nos{" "}
              <a href="/" target="_blank" rel="noopener noreferrer">
                conditions générales
              </a>
            </label>
          </div>
          <div className="terms error"></div>
          <input type="submit" value="SOUMETTRE" id="soumettre" />
        </form>
      )}
    </>
  );
};

export default SignUpForm;
