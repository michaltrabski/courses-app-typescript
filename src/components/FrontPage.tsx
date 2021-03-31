import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CourseCard from "./CourseCard";
import { allCourses } from "../data/coursesData";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      // display: "grid",
      // gridTemplateColumns: "auto auto auto",
      // gridGap: "20px",
    },
  })
);

function FrontPage() {
  const classes = useStyles();
  const [courses, setCouses] = useState(allCourses);

  return (
    <>
      <Box mt={5} mb={5}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Szkolenia wideo z nauki jazdy!
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Zapraszam do nauki!
        </Typography>
      </Box>

      <Box className={classes.grid}>
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </Box>
    </>
  );
}

export default FrontPage;
