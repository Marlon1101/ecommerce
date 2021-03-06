import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function Cards({ img, title }) {
  return (
    <Card sx={{ maxWidth: 260, padding: "0.8em" }}>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon color="error" />
      </IconButton>
      <CardMedia component="img" height="200" image={img} alt="recycle" />
      <CardContent>
        <Typography
          sx={{ color: "#49A47A", fontSize: "1.5em", marginBottom: "0.5em" }}
        >
          {" "}
          <strong> $400</strong>{" "}
        </Typography>
        <Typography variant="body1">
          <strong>{title}</strong>
        </Typography>
      </CardContent>
    </Card>
  );
}
