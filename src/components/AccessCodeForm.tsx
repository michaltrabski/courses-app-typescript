import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import { getCodes, getUserAccessCodes, setCodes } from "../utils/utils";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        textAlign: "center",
      },
    },
  })
);

interface Props {
  updateCodes: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function AccessCodeForm(props: Props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCodes(value);
    props.updateCodes(getCodes());
    setValue("");
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Podaj kod dostępu"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Sprawdź kod
      </Button>
    </form>
  );
}
