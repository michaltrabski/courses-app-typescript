import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { getCodes, setCodes } from "../utils/utils";
import { Course } from "../data/coursesData";
import Link from "@material-ui/core/Link";
import Image from "./Image";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      // color: theme.palette.text.secondary,
    },
    success: {
      color: green[500],
    },
  })
);

interface Props {
  updateCodes: React.Dispatch<React.SetStateAction<string[]>>;
  course: Course;
  access: boolean;
}

export default function Cart(props: Props) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const { price, currency, dotpay } = props.course;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCodes(value);
    props.updateCodes(getCodes());
    setValue("");
  };
  return (
    <Box mb={5}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            {props.access && (
              <Typography
                variant="body2"
                gutterBottom
                align="center"
                className={classes.success}
              >
                TAK. Posiadasz już aktywowany dostęp do tego szkolenia!
              </Typography>
            )}

            <Typography variant="body2" gutterBottom align="center">
              Masz już wykupiony dostęp do szkolenia? Podaj kod dostępu, który
              otrzymałeś na email użyty przy zakupie dostępu.
            </Typography>
            <form
              className={classes.root}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Box mb={1}>
                <TextField
                  id="outlined-basic"
                  label="Podaj kod dostępu"
                  variant="outlined"
                  value={value}
                  fullWidth
                  onChange={(e) => setValue(e.target.value)}
                />
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Sprawdź kod
                </Button>
              </Box>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <Image />
            <Typography variant="h6" component="h3" gutterBottom align="center">
              100% gwarancja satysfakcji!
            </Typography>
            <Typography variant="body2" gutterBottom align="center">
              Kup dostęp do szkolenia bez ryzyka. Możesz się rozmyślić w ciągu
              30 dni. Wystarczy, że napiszesz do nas na adres:
              prawojazdy.pomoc@gmail.com a my zwrócimy Ci wszystkie pieniądze.
            </Typography>

            <Typography variant="h6" component="h3" gutterBottom align="center">
              Wykup bezterminowy dostęp do szkolenia:
            </Typography>

            <Button
              href={dotpay}
              target="_blank"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Kup Teraz {price} {currency}
            </Button>

            <Box mb={2}>
              <Link href={dotpay} variant="body2" target="_blank">
                Przejdź do formularza zamówienia TUTAJ.
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
