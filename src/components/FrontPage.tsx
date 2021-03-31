import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { allCourses } from "../data/coursesData";
import { Box, Typography } from "@material-ui/core";

function FrontPage() {
  const [courses, setCouses] = useState(allCourses);
  return (
    <>
      <Box m={5}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Szkolenia wideo z nauki jazdy!
        </Typography>
        <Typography variant="body1" gutterBottom align="center">
          Zapraszam do nauki!
        </Typography>
      </Box>

      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </>
  );
}

export default FrontPage;
