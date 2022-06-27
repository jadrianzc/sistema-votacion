import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export const CandidateScreen = () => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ marginTop: 0, alignContent: "center", flexDirection: "column" }}
    >
      {["A", "B", "C"].map((lista) => (
        <Grid
          item
          key={lista}
          sx={{
            width: "80%",
          }}
        >
          <Card sx={{ border: "1px solid #575755", borderRadius: "25px" }}>
            <CardActionArea sx={{ p: 2, display: "flex" }}>
              <CardMedia
                component="img"
                height="125"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="Foto pito"
                sx={{ width: 125, background: "#c4c4c4" }}
              />
              <CardContent sx={{ flex: "auto" }}>
                <Typography gutterBottom variant="h5" component="div">
                  {`Lista ${lista}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </Typography>
              </CardContent>
              {[1, 2, 3, 4, 5].map((foto) => (
                <CardMedia
                  key={foto}
                  component="img"
                  height="70"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt={`foto ${foto}`}
                  sx={{ width: 70, background: "#c4c4c4", m: 2 }}
                />
              ))}
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>

    // <Card sx={{ display: "flex", Width: "50%" }}>
    //   <CardActionArea sx={{ display: "flex" }}>
    //     <CardMedia
    //       component="img"
    //       height="140"
    //       image="/static/images/cards/contemplative-reptile.jpg"
    //       alt="green iguana"
    //       sx={{ width: 151 }}
    //     />
    //     <CardContent sx={{ flex: "auto" }}>
    //       <Typography gutterBottom variant="h5" component="div">
    //         Lizard
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         Lizards are a widespread group of squamate reptiles, with over 6,000
    //         species, ranging across all continents except Antarctica
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
};
