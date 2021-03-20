import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { getUserAccessCodes } from "../utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

export default function AccessCodeForm() {
  const classes = useStyles();

  const handleClick = (code: string) => {
    const userCodes = getUserAccessCodes();
    userCodes.push(code);
    localStorage.setItem("userAccessCodes", JSON.stringify(userCodes));
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Kod dostępu" variant="outlined" />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleClick("asd")}
      >
        Sprawdź kod
      </Button>
      {getUserAccessCodes()}
    </form>
  );
}
