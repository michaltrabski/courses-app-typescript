import React from "react";
import Container from "@material-ui/core/Container";

interface Props {
  children: JSX.Element | string | number;
}

export default function ContainerMy(props: Props) {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <>{props.children}</>
      </Container>
    </React.Fragment>
  );
}
