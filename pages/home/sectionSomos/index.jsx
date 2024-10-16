import styles from "../../../styles/sectionNosotros.module.css";

const cards = [
  {
    title: "ENFOQUE HUMANO",
    icon: "<i class='far fa-window-restore'></i>",
    description:
      "Ponemos a las personas en el centro de todo lo que hacemos, comprendiendo las necesidades de nuestros clientes y las comunidades.",

    //icon: Layers,
  },
  {
    title: "EXPERIENCIA Y PASIÓN",
    icon: '<i class="far fa-edit"></i>',
    description:
      "Combinamos conocimiento técnico con pasión por la innovación, ofreciendo soluciones creativas y efectivas.",
    //icon: Pen,
  },
  {
    title: "COMPROMISO CON LA EXCELENCIA",
    icon: '<i class="far fa-object-group"></i>',
    description:
      "Nos esforzamos por superar las expectativas, entregando resultados de alta calidad y estableciendo relaciones duraderas basadas en la confianza.",
    //icon: Code,
  },
  {
    title: "VISIÓN SOSTENIBLE",
    icon: '<i class="far fa-chart-bar"></i>',
    description:
      "Nos alineamos con prácticas responsables y sostenibles, contribuyendo al bienestar de las generaciones presentes y futuras.",
    //icon: Bike,
  },
];

const SectionSomos = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>¿Quienes somos ?</h2>
          <p className={styles.description}>
            Somos una consultora que transforma organizaciones y revoluciona
            industrias con innovación y tecnología. Nos especializamos en
            generar impacto positivo en el sector minero e industrial,
            enfocándonos en la gestión social, el enfoque multicultural y la
            transformación digital. Alineamos nuestros proyectos con los
            Objetivos de Desarrollo Sostenible (ODS) y los principios ESG,
            mejorando el bienestar comunitario y la eficiencia operativa
            mediante tecnologías avanzadas.
          </p>
          <div className={styles.cardGrid}>
            {cards.map((card, index) => (
              <div key={index} className={styles.card}>
                <i
                  className={styles.icon}
                  dangerouslySetInnerHTML={{ __html: card.icon }}
                ></i>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>

                {/* <button className={styles.button}>GET STARTED</button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSomos;
