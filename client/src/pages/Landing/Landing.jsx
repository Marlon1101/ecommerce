import React from "react";
import styles from "./landing.module.css";
import Fondo from "../../components/Designs/Fondo/Fondo";

export default function Landing() {
  return (
    <div className={styles.bg}>
      <Fondo width="1360px" heigth="663px">
      </Fondo>
    </div>
  );
}
