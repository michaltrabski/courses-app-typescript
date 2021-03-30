import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { allCourses } from "../data/courses";
import { getCodes } from "../utils/utils";
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
    },
    video: {
      maxWidth: "100%",
      border: "1px solid black",
    },
  })
);

const Course = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [codes, updateCodes] = useState<string[]>([]);

  const course = allCourses.find((course) => course.slug === pathname);

  useEffect(() => {
    updateCodes(getCodes());
  }, []);

  if (!course) return <></>;

  const {
    title,
    contentDescription,
    lessons,
    price,
    currency,
    accessCode,
  } = course;

  const access = codes.includes(accessCode);
  return (
    <>
      <Typography gutterBottom align="center">
        Witaj na szkoleniu
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {contentDescription}
      </Typography>

      {access ? (
        <Typography variant="body2" gutterBottom>
          Tak - posiadasz już dostęp do tego szkolenia!
        </Typography>
      ) : (
        <AccessCodeForm updateCodes={updateCodes} />
      )}

      {lessons.map((lesson, index) => {
        const { title, description, videoUrl } = lesson;
        return (
          <Box key={index} mb={5}>
            <h2>Lekcja {index + 1}</h2>
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            <div className={classes.positionRelative}>
              <video
                className={classes.video}
                src={videoUrl}
                controls={access}
              ></video>

              {access || (
                <div className={classes.positionAbsolute}>
                  <Typography
                    className={classes.bgYellow}
                    variant="h4"
                    component="h1"
                    gutterBottom
                    align="center"
                  >
                    Wykup bezterminowy dostęp do wszystkich filmów wideo z tego
                    szkolenia!
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth>
                    Kup Teraz {price} {currency}
                  </Button>
                </div>
              )}
            </div>
          </Box>
        );
      })}
    </>
  );
};

export default Course;
