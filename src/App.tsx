import React from "react";
import CourseCard from "./components/CourseCard";
import SimpleContainer from "./components/container";
import { allCourses } from "./data/courses";

function App() {
  return (
    <SimpleContainer>
      <>
        {allCourses.map((course) => (
          <CourseCard course={course} />
        ))}
      </>
    </SimpleContainer>
  );
}

export default App;
