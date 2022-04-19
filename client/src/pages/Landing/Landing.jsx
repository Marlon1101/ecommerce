import React from "react";
import styles from "./styles/landing.module.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className={styles.bg}>
      <Box sx={{marginRight:"50%"}}>
        <Typography variant="h2" fontFamily="Merienda" color="#85CEA8">
          <strong> Recicla </strong>
        </Typography>
        <Typography variant="h2" fontFamily="Merienda" color="#52B788">
          <strong> Reduce</strong>
        </Typography>{" "}
        <Typography variant="h2" fontFamily="Merienda" marginBottom="0.5em" color="#40916C">
          <strong> Reutiliza </strong>
        </Typography>
        <IconButton onClick={() => navigate("/home")}>
        <PlayArrowRoundedIcon className={styles.flecha} sx={{color:"#52B788", fontSize:"3em", border:"2px solid #fff", borderRadius:"4em"}} />
      </IconButton>
      </Box>
    </div>
  );
}
