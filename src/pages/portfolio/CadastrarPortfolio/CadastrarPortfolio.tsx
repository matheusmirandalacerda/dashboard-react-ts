import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./CadastrarPortfolio.module.css";
import Input from "../../../components/forms/Input/Input";


import { Portfolio, createOrUpdatePortfolio } from "../../../services/portfolioService";

const CadastrarPortfolio: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const portfolio = location.state as Portfolio;

  const initialValues: Portfolio = {
    id: 0,
    link: "",
    image: "",
    titulo: ""
  };

  const validationSchema = Yup.object().shape({
    link: Yup.string().required("Campo obrigatório"),
    image: Yup.string().required("Campo obrigatório"),
    titulo: Yup.string().required("Campo obrigatório"),
  });

  const onSubmit = async (
    values: Portfolio,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await createOrUpdatePortfolio(values);
      console.log(values);
      resetForm();
      navigate("/portfolio/lista");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao enviar o formulário");
    }
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={portfolio || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.titulo}>Cadastro de Portfolio</h2>

            <Input
              label="Link"
              name="link"
              errors={errors.link}
              touched={touched.link}
            />
            <Input
              label="Imagem"
              name="image"
              errors={errors.image}
              touched={touched.image}
            />
            <Input
              label="Título"
              name="titulo"
              errors={errors.titulo}
              touched={touched.titulo}
            />

            <button type="submit" className={styles.button}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastrarPortfolio;


/*import React from "react";

import * as Yup from "yup";
import { Formik, Form } from "formik";

import styles from "./CadastrarPortfolio.module.css";
import Input from "../../../components/forms/Input/Input";

interface FormValues {
  link: string;
  image: string;
  titulo: string;
}

const initialValues: FormValues = {
  link: "",
  image: "",
  titulo: "",
};

const validationSchema = Yup.object().shape({
  link: Yup.string().required("Campo obrigatório"),
  image: Yup.string().required("Campo obrigatório"),
  titulo: Yup.string().required("Campo obrigatório"),
});

const CadastrarPortfolio = () => {
  const onSubmit = (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    // Lógica de envio para o backend
    console.log(values);
    resetForm();
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className={styles.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2 className={styles.titulo}>Cadastro de Portfolio</h2>

            <Input
              label="Link"
              name="link"
              errors={errors.link}
              touched={touched.link}
            />
            <Input
              label="Imagem"
              name="image"
              errors={errors.image}
              touched={touched.image}
            />
            <Input
              label="Título"
              name="titulo"
              errors={errors.titulo}
              touched={touched.titulo}
            />

            <button type="submit" className={styles.button}>Enviar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CadastrarPortfolio;*/


