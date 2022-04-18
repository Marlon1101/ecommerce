import React from "react";
import styles from "./landing.module.css";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";

const Btn = styled(Button)(({ theme }) => ({
  backgroundColor: "#52B788",
  "&:hover": {
    backgroundColor: "#52B788",
  }
}));

export default function Landing() {
  return (
    <>
      <div className={styles.bg}>
        <Btn variant="contained"> Start </Btn>
      </div>
    </>
  );
}
