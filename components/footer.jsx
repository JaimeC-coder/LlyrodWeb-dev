import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

//icons
import {CiMail} from "react-icons/ci";

const Footer = () => {
  return (
    <>
     <span className={styles.wpp}>
    <i class="bi bi-whatsapp"></i>
    </span>
      <footer className={styles.footer}>
        <span className={styles.contacto}>Contáctanos</span>
        <span className={styles.info}>¿Te interesó este contenido? Contáctanos para más información.</span>
       <div className={styles.contentMedia}>
       <Link href="https://www.linkedin.com/company/grupo-llyrod/" className={styles.media}>
       <i class="bi bi-linkedin"></i>
       </Link>
       <Link href="#" className={styles.media}>
       <i class="bi bi-facebook"></i>
       </Link>
       <Link href="#" className={styles.media}>
       <i class="bi bi-youtube"></i>
       </Link>
       <Link href="#" className={styles.media}>
       <i class="bi bi-twitter-x"></i>
       </Link>
       <Link href="#" className={styles.media}>
       <i class="bi bi-instagram"></i>
       </Link>
       </div>
      </footer>
    </>
  );
};

export default Footer;
