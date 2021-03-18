import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

interface Props {
  children: JSX.Element | string | number;
}

export default function SimpleContainer(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="md">
        <>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            Szkolenia wideo z nauki jazdy!
          </Typography>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          {props.children}
        </>
      </Container>
    </React.Fragment>
  );
}
