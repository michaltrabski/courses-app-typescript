import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Course } from "../data/courses";

interface Props {
  course: Course;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 30,
  },
});

export default function CourseCard(props: Props) {
  const classes = useStyles();

  const { title, description, thumbnail, price, currency } = props.course;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={thumbnail}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Oglądaj szkolenie
        </Button>
        <Button size="small" color="secondary">
          Kup teraz {price} {currency}
        </Button>
      </CardActions>
    </Card>
  );
}
