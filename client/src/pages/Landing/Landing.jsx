import React from "react";
import styles from "./styles/landing.module.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Btn = styled(Button)(({ theme }) => ({
  backgroundColor: "#52B788",
  "&:hover": {
    backgroundColor: "#52B788",
  },
}));

export default function Landing() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.bg}>
        <Btn onClick={() => navigate("/home")} variant="contained">
          {" "}
          Start{" "}
        </Btn>
      </div>
    </>
  );
}
