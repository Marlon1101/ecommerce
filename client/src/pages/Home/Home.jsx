import React from "react";
import Nav from "../../components/Nav";
import Cards from "../../components/Cards";
import Box from "@mui/material/Box";
// import styles from "./nav.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3em",
        }}
      >
        <Cards
          img={"https://i.imgur.com/M2nFPBM.jpg"}
          title={"Cepillo dental de bambú"}
          price={"$200"}
        />

        <Cards
          img={"https://i.imgur.com/sXHiuqb.jpg"}
          title={"Vasos ecológicos x10"}
          price={"$600"}
        />
        <Cards
          img={"https://i.imgur.com/zD5VfSt.png"}
          title={"Envases eco-friendly x2"}
          price={"$400"}
        />
        <Cards
          img={"https://i.imgur.com/EAT1YUh.jpg"}
          title={"Pad desmaquillante reutilizable x3"}
          price={"$450"}
        />
        <Cards
          img={"https://i.imgur.com/E6uhCpJ.png"}
          title={"Toallitas reutilizables x3"}
          price={"$600"}
        />
        <Cards
          img={"https://i.imgur.com/b8gLi2V.png"}
          title={"Sorbetes ecologicos x5"}
          price={"$500"}
        />

        <Cards
          img={"https://i.imgur.com/E6uhCpJ.png"}
          title={"Toallitas reutilizables x3"}
          price={"$600"}
        />
        <Cards
          img={"https://i.imgur.com/b8gLi2V.png"}
          title={"Sorbetes ecologicos x5"}
          price={"$500"}
        />
        <Cards
          img={"https://i.imgur.com/M2nFPBM.jpg"}
          title={"Cepillo dental de bambú"}
          price={"$200"}
        />

        <Cards
          img={"https://i.imgur.com/sXHiuqb.jpg"}
          title={"Vasos ecológicos x10"}
          price={"$600"}
        />
        <Cards
          img={"https://i.imgur.com/zD5VfSt.png"}
          title={"Envases eco-friendly x2"}
          price={"$400"}
        />
        <Cards
          img={"https://i.imgur.com/EAT1YUh.jpg"}
          title={"Pad desmaquillante reutilizable x3"}
          price={"$450"}
        />
      </Box>
    </>
  );
}
