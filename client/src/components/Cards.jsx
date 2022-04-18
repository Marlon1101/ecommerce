import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function Cards({ img, title,price }) {
  return (
    <Card sx={{ width: 250, padding: "0.8em", margin:"2em"}}>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon color="error" />
      </IconButton>
      <CardMedia component="img" height="200" image={img} alt="recycle" />
      <CardContent>
        <Typography
          sx={{ color: "#49A47A", fontSize: "1.5em", marginBottom: "0.5em" }}
        >
          {" "}
          <strong> {price} </strong>{" "}
        </Typography>
        <Typography variant="body1" sx={{fontFamily:"Merienda"}}>
          <strong>{title}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
