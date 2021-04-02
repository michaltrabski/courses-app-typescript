import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { allCourses } from "../data/coursesData";
import { getCodes, isAccess } from "../utils/utils";
import { green, yellow } from "@material-ui/core/colors";
import Cart from "./Cart";
import Video from "./Video";

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

  const access = isAccess(codes, course.accessCodes);

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
      </Box>

      {course.lessons.map((lesson, index) => (
        <>
          <Video
            course={course}
            lesson={lesson}
            number={index + 1}
            access={index <= 1 ? true : access}
          />
          {index === 0 && (
            <Cart updateCodes={updateCodes} course={course} access={access} />
          )}
        </>
      ))}

      <Typography variant="body1" gutterBottom align="center">
        Dziękuję za udział w szkoleniu!
      </Typography>
    </>
  );
};

export default SingleCourse;
