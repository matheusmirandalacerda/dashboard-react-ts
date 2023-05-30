import InfoBox from "../../components/common/InfoBox";
import { Experiencia, getExperienciasByTipo } from "../../services/experienciaService";
import { useEffect, useState } from "react";
import { Portfolio, getPortfolios } from "../../services/experienciaPortfolio";
import styles from "./Home.module.css";
import React from "react";

const Home = () => {
   const [experienciasAcademicas, setExperienciasAcademicas] = useState<Experiencia[]>([]);
   const [experienciasProfissionais, setExperienciasProfissionais] = useState<Experiencia[]>([]);
   const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

   const fetchExperienciasAcademicas = async () => {
      try {
         const response = await getExperienciasByTipo("academico");
         setExperienciasAcademicas(response);
      } catch (error) {
         console.log(error);
      }
   };

   const fetchExperienciasProfissionais = async () => {
      try {
         const response = await getExperienciasByTipo("profissional");
         setExperienciasProfissionais(response);
      } catch (error) {
         console.log(error);
      }
   };

   const fetchPortfolio = async () => {
      try {
         const response = await getPortfolios();
         setPortfolio(response);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchExperienciasAcademicas();
      fetchExperienciasProfissionais();
      fetchPortfolio();
   }, []);

   return (
      <main className={styles.container}>
         <h1>Bem-vindo ao nosso site!</h1>
         <p>Este é o Dashboard do site onde você encontra algumas estatísticas de cadastro.</p>

         <div className={styles.infoBoxContainer}>
            <InfoBox
               title="Experiências Acadêmicas"
               value={experienciasAcademicas.length}
               //icon={<FaGraduationCap size={65} />}
            />
            <InfoBox
               title="Experiências Profissionais"
               value={experienciasProfissionais.length}
               //icon={<FaBriefcase />}
            />
            <InfoBox title="Projetos no Portfolio" value={portfolio.length} /*icon={<FaFolder />}*/ />
         </div>
      </main>
   );
};

export default Home;

/*import React from 'react';

const Home = () => {
    return (
        <main>
            <h1>Bem-Vindo ao nosso site!</h1>
            <p>Este é o Dashboard do site onde você encontra algumas estatísticas de cadastro.</p>
        </main>
    );
};

export default Home;*/
