import React from "react";
import Nav from "../../components/Nav"
import Cards from '../../components/Cards';
import Box  from '@mui/material/Box';
// import styles from "./nav.module.css";

export default function Home() {
  return(
    <>
    <Nav/>
    <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "3em",
        }}
      >
        <Cards
          img={"https://i.imgur.com/M2nFPBM.jpg"}
          title={"Cepillo dental de bambú"}
        />
        <Cards
          img={"https://i.imgur.com/HBdtjcU.jpg"}
          title={"Vasos ecológicos"}
        />
            <Cards
          img={"https://i.imgur.com/M2nFPBM.jpg"}
          title={"Cepillo dental de bambú"}
        />

      </Box>
      </>
  )
}
