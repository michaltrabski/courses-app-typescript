import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { allCourses } from "../data/coursesData";
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
      maxWidth: "100%",
      border: "1px solid black",
    },
  })
);

const SingleCourse = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [codes, updateCodes] = useState<string[]>([]);

  const course = allCourses.find((course) => course.slug === pathname);

  useEffect(() => {
    updateCodes(getCodes());
  }, []);

  if (!course) return <></>;

  const access = codes.includes(course.accessCode);

  return (
    <>
      <Box mt={5} mb={5}>
        <Typography variant="body1" gutterBottom align="center">
          Witaj na szkoleniu
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          {course.cardTitle}
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          {course.cardDescription}
        </Typography>
        {access ? (
          <Typography variant="body1" gutterBottom align="center">
            Tak - posiadasz już dostęp do tego szkolenia!
          </Typography>
        ) : (
          <AccessCodeForm updateCodes={updateCodes} />
        )}
      </Box>

      {course.lessons.map((lesson, index) => {
        const { title, description, videoUrl } = lesson;
        return (
          <Box key={index} mb={5}>
            <Typography variant="h5" component="h2" gutterBottom>
              Lekcja {index + 1}
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
                src={videoUrl}
                controls={access}
              ></video>

              {access || (
                <div className={classes.positionAbsolute}>
                  <Box mb={1}>
                    <Typography
                      className={classes.bgYellow}
                      variant="body2"
                      gutterBottom
                      align="center"
                    >
                      Wykup bezterminowy dostęp do wszystkich filmów wideo z
                      tego szkolenia!
                    </Typography>
                  </Box>
                  <Box mb={1}>
                    <Button
                      href={course.dotpay}
                      target="_blank"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      size="large"
                    >
                      Kup Teraz {course.price} {course.currency}
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="small"
                  >
                    Podaj kod dostępu
                  </Button>
                </div>
              )}
            </div>
          </Box>
        );
      })}

      <Typography variant="body1" gutterBottom align="center">
        Dziękuję za udział w szkoleniu!
      </Typography>
    </>
  );
};

export default SingleCourse;
