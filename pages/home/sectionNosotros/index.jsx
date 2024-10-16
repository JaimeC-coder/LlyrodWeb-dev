//css imports
import Image from "next/image";
import stylesSection from "../../../styles/sectionSomos.module.css";
import transformacionDigital from "../../assets/img/home/sectionSomos/rocks-8283171_1920.jpg";

const SectionNosotros = () => {

    return (
        <>
        <section className={stylesSection.solutionsSection}>
            {/* Título y Descripción de la sección */}
            <div className={stylesSection.title}>
                <h2>¿Nuestras Soluciones?</h2>
                <p>Ofrecemos transformación digital, proyectos de impacto social, y auditoría de calidad para optimizar operaciones y promover el desarrollo sostenible.</p>
            </div>
            <div className={stylesSection.solutionsGrid}>
                <div className={stylesSection.solutionItem}>
                    <img
                     src={transformacionDigital.src} alt="Transformación Digital"/>
                    <h3>Transformación Digital</h3>
                    <p>Implementamos sistemas de información y monitoreo que optimizan la gestión operativa y social, utilizando tecnologías de punta para mejorar la eficiencia y la transparencia.</p>
                </div>
                <div className={stylesSection.solutionItem}>
                <img
                     src={transformacionDigital.src} alt="Transformación Digital"/>
                    <h3>Transformación Digital</h3>
                    <p>Diseñamos e implementamos iniciativas que benefician a las comunidades en zonas de influencia, promoviendo el desarrollo sostenible y fortaleciendo las relaciones con los grupos de interés.</p>
                </div>
    
                
                <div className={stylesSection.solutionItem}>
                <img
                     src={transformacionDigital.src} alt="Quality Due Diligence"/>
                    <h3>Quality Due Diligence</h3>
                    <p>Ofrecemos servicios de auditoría y aseguramiento de la calidad para empresas globales, garantizando altos estándares y cumplimiento normativo.</p>
                </div>
            </div>
        </section>
    </>
    
      );
};

export default SectionNosotros;






