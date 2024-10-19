//css imports
import styles from "../../styles/industrias.module.css";

//next js imports
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

//img
import MineriaPrincipal from "./industrias/mineria/mineria_principal.png";
import Mineria1 from "./img/mineria/minieria1.png";
import Mineria2 from "./img/mineria/minieria2.png";
import Mineria3 from "./img/mineria/minieria3.png";
import Mineria4 from "./img/mineria/mineria4.png";
import Mineria5 from "./img/mineria/mineria5.png";
import Mineria6 from "./img/mineria/minieria1.png";
import Capacitacion1 from "./img/mineria/capacitacion1.jpg";
import Capacitacion2 from "./img/mineria/capacitacion2.jpg";
import Capacitacion3 from "./img/mineria/capacitacion3.jpg";
import Capacitacion4 from "./img/mineria/capacitacion4.jpg";

import InteligenciaPrincipal from "./img/inteligenciaNegocios/titulo.jpg";
import Inteligencia1 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";
import Inteligencia2 from "./img/inteligenciaNegocios/inteligenciaNegocios2.png";
import Inteligencia3 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";

import Inteligencia4 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";
import Inteligencia5 from "./img/inteligenciaNegocios/inteligenciaNegocios2.png";
import Inteligencia6 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";

import Inteligencia7 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";
import Inteligencia8 from "./img/inteligenciaNegocios/inteligenciaNegocios2.png";
import Inteligencia9 from "./img/inteligenciaNegocios/inteligenciaNegocios1.png";

import TecnologiaPrincipal from "./industrias/tecnologia/tecnologia_principal.png";
import Tecnologia1 from "./industrias/tecnologia/tecnologia_1.png";
import Tecnologia2 from "./industrias/tecnologia/tecnologia_2.png";
import Tecnologia3 from "./industrias/tecnologia/tecnologia_3.png";

import Tecnologia4 from "./industrias/tecnologia/tecnologia_1.png";
import Tecnologia5 from "./industrias/tecnologia/tecnologia_2.png";
import Tecnologia6 from "./industrias/tecnologia/tecnologia_3.png";

import Tecnologia7 from "./industrias/tecnologia/tecnologia_1.png";
import Tecnologia8 from "./industrias/tecnologia/tecnologia_2.png";
import Tecnologia9 from "./industrias/tecnologia/tecnologia_3.png";

//icons
import { BsGraphUpArrow } from "react-icons/bs";
import { BsRecycle } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import Accordion from "./components/accordion";

const cardsMineria = [
  {
    images: [Mineria1, Mineria2, Mineria3],
    tittle: "Diagnóstico de potencialidades productivas  –  Raura",
    texto:
      "El diagnóstico abarcó 43,616 hectáreas, con 1,536 habitantes distribuidos en 3 regiones del Perú. Incluyó un análisis socioeconómico, evaluación de actividades productivas, pecuarias y agrícolas, condiciones de las tierras, fuentes de agua, entre otros. Además, se formuló proyectos acorde a sus potencialidades.",
  },
  {
    images: [Mineria4, Mineria5, Mineria6],
    tittle: 'PLAN DE PREVENCIÓN DE FENÓMENO DE "EL NIÑO" ',
    texto:
      "Ante una posible afectación del aparato productivo de los sectores, dada por la probabilidad de ocurrencia del fenómeno de El Niño en el 2023, se analizó la base de datos climatológica y modeló los posibles escenarios a enfrentar",
  },
  {
    images: [Capacitacion1, Capacitacion2, Capacitacion3, Capacitacion4],
    tittle: "Capacitacion ganadera y promocion de productos ganadero",
    texto:
      "El cobre, uno de los metales más fundamentales necesarios en la transición energética, está adquido",
  },
];

const cardsTecnologia = [
  {
    images: [Tecnologia1, Tecnologia2, Tecnologia3],
    tittle: "Programas Intensivos de Aprendizaje",
    texto:
      "Experiencia de aprendizaje inmersiva y de alto impacto, que proporciona las habilidades y conceptos esenciales en un corto período e impulsa el desarrollo personal y profesional.",
  },
  {
    images: [Tecnologia4, Tecnologia5, Tecnologia6],
    tittle: "Entrenamiento para Data Engineers jr.",
    texto:
      "Desarrollamos diagnósticos de potenciales productivas y articulación comercial en zonas de influencia minera, derivando en el análisis de la viabilidad de cadenas.",
  },
  {
    images: [Tecnologia7, Tecnologia8, Tecnologia9],
    tittle: "Outsourcing especializado",
    texto:
      "Confía en Grupo Llyrod para obtener soluciones de outsourcing especializado. Nuestro enfoque se centra en brindarte servicios personalizados que optimizan tus operaciones y te permiten concentrarte en lo que realmente importa.",
  },
];

const cardsBi = [
  {
    images: [Inteligencia1, Inteligencia2, Inteligencia3],
    tittle: "Análisis Predictivo",
    texto:
      "Descubriendo oportunidades ocultas y anticipando cambios en la industria a través de análisis avanzados que ayudarán a tomar desiciones.",
  },
  {
    images: [Inteligencia4, Inteligencia5, Inteligencia6],
    tittle: "Desarrollo de Soluciones",
    texto:
      "Desarrollando soluciones informadas a medida para abordar los desafíos únicos de nuestros clientes y fomentar su éxito.",
  },
  {
    images: [Inteligencia7, Inteligencia8, Inteligencia9],
    tittle: "Cloud Computing",
    texto:
      "Utilizando tecnologías de vanguardia para impulsar la evolución de los negocios hacia un futuro más prometedor.",
  },
];

const Industrias = () => {
  return (
    <>
      <div className="">
        <section className={styles.photoSection} id="mineria">
          <div className={styles.degradadoPortafolioTop1}></div>
          <div className={styles.photoContainer}>
            <div className={styles.subtittleContainer}>
              <h2 className={styles.tittlePrincipalIndustrias}>
                Minería & <br></br>Gestión Social
              </h2>
              <div className={styles.textIndustrias}>
                <h2 className={styles.textPrincipalIndustrias}>
                  Desarrollamos estudios especializados y proyectos destinados a
                  atender la zona de influencia directa e indirecta de mina.
                  Nuestros estandares secundan las politicas corporativas de
                  alto nivel. Orientamos el desarrollo de nuestros proyectos e
                  intervenciones bajo un enfoque ESG: Enviromental, Social and
                  Governance.
                </h2>
              </div>
            </div>
          </div>

          <img
            className={styles.photo}
            src={MineriaPrincipal.src}
            alt="Minería"
          />
        </section>

        <section className={styles.cardsSection}>
          <span className={styles.quehacemos}>nuestros desarrollos y soluciones </span>
          <div className={styles.cardsContainer}>
            {cardsMineria.map((card, index) => {
              const cardStyle = index % 2 === 0 ? styles.card : styles.cardPar;
              const cardStyletext =
                index % 2 === 0 ? styles.cardTittle : styles.cardTittlePar;

              return (
                <div className={cardStyle} key={index}>
                  <div
                    className={styles.imageContainer}
                    style={{ "--totalDuration": `${card.images.length * 2}s` }}
                  >
                    {card.images.map((image, imageIndex) => (
                      <img
                        className={styles.cardImage}
                        src={image.src}
                        alt={card.tittle}
                        key={imageIndex}
                        style={{
                          animationDelay: `${
                            imageIndex * (100 / card.images.length)
                          }%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className={styles.cardcontexttext}>
                    <span className={cardStyletext}>{card.tittle}</span>
                    <span className={styles.cardTexto}>{card.texto}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="">
        <section className={styles.photoSection} id="due_diligence">
          <div className={styles.degradadoPortafolioTop1}></div>
          <img
            className={styles.photo}
            src={InteligenciaPrincipal.src}
            alt="Due Diligence"
          />
          <div className={styles.photoContainerPar}>
            <div className={styles.subtittleContainer}>
              <h2 className={styles.tittlePrincipalIndustriasPar}>
              Due diligence

              </h2>
              <br /><br />
              <div className={styles.textIndustrias}>
                <h2 className={styles.textPrincipalIndustrias}>
                  En medio de una industria que está experimentando un cambio
                  fundamental, ofrecemos ideas para ayudar a remodelar el
                  negocio para el futuro.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cardsSection}>
          <span className={styles.quehacemos}>nuestros desarrollos y soluciones </span>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsContainer}>
              {cardsBi.map((card, index) => {
                const cardStyle =
                  index % 2 === 0 ? styles.card : styles.cardPar;
                const cardStyletext =
                  index % 2 === 0 ? styles.cardTittle : styles.cardTittlePar;

                return (
                  <div className={cardStyle} key={index}>
                    <div
                      className={styles.imageContainer}
                      style={{
                        "--totalDuration": `${card.images.length * 2}s`,
                      }}
                    >
                      {card.images.map((image, imageIndex) => (
                        <img
                          className={styles.cardImage}
                          src={image.src}
                          alt={card.tittle}
                          key={imageIndex}
                          style={{
                            animationDelay: `${
                              imageIndex * (100 / card.images.length)
                            }%`,
                          }}
                        />
                      ))}
                    </div>
                    <div className={styles.cardcontexttext}>
                      <span className={cardStyletext}>{card.tittle}</span>
                      <span className={styles.cardTexto}>{card.texto}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className={styles.photoSection} id="tecnologia">
          <div className={styles.degradadoPortafolioTop1}></div>
          <img
            className={styles.photo}
            src={TecnologiaPrincipal.src}
            alt="Tecnología"
          />
          <div className={styles.photoContainer}>
            <div className={styles.subtittleContainer}>
              <h2 className={styles.tittlePrincipalIndustrias}>
                Transformación digital <br></br> e Inteligencia Artificial
              </h2>
              <div className={styles.textIndustrias}>
                <h2 className={styles.textPrincipalIndustrias}>
                  Facilitamos la transición hacia la digitalización
                  democratizando el uso de nuevas tecnologías. Nuestro enfoque
                  responde a la aplicación concreta de nuevas herramientas y
                  posterior escalamiento hacia nuevos modelos de negocio
                  adaptados a la era digital.
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cardsSection}>
          <span className={styles.quehacemos}>Nuestros desarrollos y soluciones </span>
          <div className={styles.cardsContainer}>
            {cardsTecnologia.map((card, index) => {
              const cardStyle = index % 2 === 0 ? styles.card : styles.cardPar;
              const cardStyletext =
                index % 2 === 0 ? styles.cardTittle : styles.cardTittlePar;

              return (
                <div className={cardStyle} key={index}>
                  <div
                    className={styles.imageContainer}
                    style={{ "--totalDuration": `${card.images.length * 2}s` }}
                  >
                    {card.images.map((image, imageIndex) => (
                      <img
                        className={styles.cardImage}
                        src={image.src}
                        alt={card.tittle}
                        key={imageIndex}
                        style={{
                          animationDelay: `${
                            imageIndex * (100 / card.images.length)
                          }%`,
                        }}
                      />
                    ))}
                  </div>
                  <div className={styles.cardcontexttext}>
                    <span className={cardStyletext}>{card.tittle}</span>
                    <span className={styles.cardTexto}>{card.texto}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Industrias;
