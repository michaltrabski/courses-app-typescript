import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { Lesson, Course } from "../data/coursesData";
import { getCodes, isAccess } from "../utils/utils";
import { green, yellow } from "@material-ui/core/colors";
import AccessCodeForm from "./AccessCodeForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    successInfo: {
      color: green[500],
    },
    positionRelative: {
      position: "relative",
    },
    positionAbsolute: {
      position: "absolute",
      minWidth: "180px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    orangeBorder: {
      border: "3px dashed orange",
      borderRadius: "5px",
      padding: "20px",
    },
    bgYellow: {
      backgroundColor: yellow[500],
      borderRadius: "5px",
      padding: "3px",
    },
    video: {
      width: "100%",
      border: "1px solid black",
    },
    flex: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

interface Props {
  course: Course;
  lesson: Lesson;
  access: boolean;
  number: number;
}
const Video = (props: Props) => {
  const classes = useStyles();

  const { price, currency, dotpay } = props.course;
  const { title, description, videoUrl } = props.lesson;
  const { access, number } = props;

  const opacity = access ? {} : { opacity: "0.5" };

  return (
    <Box mb={5}>
      <Typography variant="h5" component="h2" gutterBottom>
        Lekcja {number}
      </Typography>

      {title && (
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
      )}

      {description && (
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
      )}

      <div className={classes.positionRelative}>
        <video
          className={classes.video}
          style={opacity}
          src={videoUrl}
          controls={access}
        ></video>

        {access || (
          <Box mb={1} className={classes.flex}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Podaj kod dostępu
            </Button>

            <Button
              href={dotpay}
              target="_blank"
              variant="contained"
              color="secondary"
            >
              Kup Teraz {price} {currency}
            </Button>
          </Box>
        )}

        {access || (
          <div className={classes.positionAbsolute}>
            <Box mb={1}>
              <Typography
                className={classes.bgYellow}
                variant="body2"
                gutterBottom
                align="center"
              >
                Wykup bezterminowy dostęp do wszystkich filmów wideo z tego
                szkolenia!
              </Typography>
            </Box>
            {/* <Box mb={1}>
              <Button
                href={dotpay}
                target="_blank"
                variant="contained"
                color="secondary"
                fullWidth
                size="large"
              >
                Kup Teraz {price} {currency}
              </Button>
            </Box>
            <Button variant="contained" color="primary" fullWidth size="small">
              Podaj kod dostępu
            </Button> */}
          </div>
        )}
      </div>
    </Box>
  );
};

export default Video;
