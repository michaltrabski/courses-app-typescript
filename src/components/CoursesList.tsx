import React from "react";
import CourseCard from "./CourseCard";
import { allCourses } from "../data/courses";
import { Typography } from "@material-ui/core";

function CoursesList() {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Szkolenia wideo z nauki jazdy!
      </Typography>
      <Typography variant="body2" gutterBottom align="center">
        Zapraszam do nauki!
      </Typography>

      {allCourses.map((course) => (
        <CourseCard course={course} />
      ))}
    </>
  );
}

export default CoursesList;
