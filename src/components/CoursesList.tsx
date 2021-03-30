import React, { useState } from "react";
import CourseCard from "./CourseCard";
import { allCourses } from "../data/courses";
import { Typography } from "@material-ui/core";

function CoursesList() {
  const [courses, setCouses] = useState(allCourses);
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Szkolenia wideo z nauki jazdy!
      </Typography>
      <Typography variant="body2" gutterBottom align="center">
        Zapraszam do nauki!
      </Typography>

      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </>
  );
}

export default CoursesList;
