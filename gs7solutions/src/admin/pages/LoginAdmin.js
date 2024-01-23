import React  from "react";
import "../styles/login.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logo from "../../assets/img/logo.jpg";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import * as Yup from "yup";

const LoginAdmin = () => {

  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  axios.defaults.withCredentials = true;
  const onSubmit = (data) => {
    axios.post("http://localhost:3030/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else if (response.data.Login) {
        console.log("connexion reussi");

        console.log(response.data);
        navigate("/auth/admin-section");
      }
    });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("champ obligatoire"),
    password: Yup.string().required("champ obligatoire"),
  });

  return (
    <div className="login-wrapper">
      <img src={logo} alt="logo" />

      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="login-form">
            <h2>connexion</h2>
            <label>identifiant :</label>
            <ErrorMessage
              name="username"
              component="span"
              className="span-error"
            />
            <Field id="inputField" name="username" placeholder="identifiant" />

            <label>mot de passe :</label>
            <ErrorMessage
              name="password"
              component="span"
              className="span-error"
            />

            <Field
              id="inputField"
              name="password"
              type="password"
              placeholder="mot de passe"
            />

            <button type="submit" className="btn-login">
              se connecter
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginAdmin;
