import styles from "../../../../styles/sectionNosotros.module.css";

const cards = [
    {
      title: "ENFOQUE HUMANO",
      description: "Ponemos a las personas en el centro de todo lo que hacemos, comprendiendo las necesidades de nuestros clientes y las comunidades.",
      //icon: Layers,
    },
    {
      title: "EXPERIENCIA Y PASIÓN",
      description: "Combinamos conocimiento técnico con pasión por la innovación, ofreciendo soluciones creativas y efectivas.",
      //icon: Pen,
    },
    {
      title: "COMPROMISO CON LA EXCELENCIA",
      description: "Nos esforzamos por superar las expectativas, entregando resultados de alta calidad y estableciendo relaciones duraderas basadas en la confianza.",
      //icon: Code,
    },
    {
      title: "VISIÓN SOSTENIBLE",
      description: "Nos alineamos con prácticas responsables y sostenibles, contribuyendo al bienestar de las generaciones presentes y futuras.",
      //icon: Bike,
    },
  ]

const SectionSomos = () => {

    return (
        <>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              ¿En que podemos ayudarte?
            </h2>
            <p className={styles.description}>
              Nos enfocamos en las personas, combinando experiencia técnica con pasión por la innovación, y un
              compromiso con la excelencia y la sostenibilidad.
            </p>
            <div className={styles.cardGrid}>
              {cards.map((card, index) => (
                <div key={index} className={styles.card}>
                  {/* <card.icon className={styles.icon} /> */}
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <button className={styles.button}>
                    GET STARTED
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
    );
};

export default SectionSomos;





