import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import gwarancja from "../media/gwarancja.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 170,
    margin: "auto",
  },
  media: {
    height: 140,
  },
});

export default function Image() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={gwarancja}
        title="100% gwarancji satysfakcji"
      />
    </Card>
  );
}
