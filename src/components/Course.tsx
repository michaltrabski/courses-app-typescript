import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { allCourses } from "../data/courses";
import { getUserAccessCodes } from "../utils/utils";
import { green } from "@material-ui/core/colors";
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
  })
);

const Course = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const codes = getUserAccessCodes();

  const course = allCourses.find((course) => course.slug === pathname);

  if (!course) return <></>;

  const {
    accessCode,
    title,
    contentDescription,
    lessons,
    price,
    currency,
  } = course;

  const hasAccess = codes.includes(accessCode);
  return (
    <>
      {/* <h3>{JSON.stringify(course)}</h3> */}

      <Typography gutterBottom align="center">
        Witaj na szkoleniu
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        {title}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {contentDescription}
      </Typography>

      {hasAccess ? (
        <Typography
          variant="body2"
          gutterBottom
          className={classes.successInfo}
        >
          Masz już wykupiony dostęp do tego szkolenia!
        </Typography>
      ) : (
        <div className={classes.orangeBorder}>
          <Typography variant="body2" gutterBottom>
            Kup bezterminowy dostęp do szkolenia za
            {""} {price} {currency}
          </Typography>

          <div>
            Masz już wykupiony dostęp? Podaj kod dostępu:
            <AccessCodeForm />
          </div>
        </div>
      )}

      {lessons.map((lesson) => {
        const { title, description, videoUrl } = lesson;
        return (
          <>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <div className={classes.positionRelative}>
              <video
                style={{ maxWidth: "100%" }}
                src={videoUrl}
                controls
              ></video>
              {hasAccess || (
                <div className={classes.positionAbsolute}>
                  <Button variant="contained" color="secondary">
                    Wykup bezterminowy dostęp do całego szkolenia za
                    {""} {price} {currency}
                  </Button>
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Course;
