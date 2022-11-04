import React from "react";
import Container from "@mui/material/Container";

interface Props {
  // customText?: string
  children?: React.ReactNode;
}

const ContainerLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container maxWidth="md">
      {/* <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"> */}
      {children}
      {/* </div> */}
    </Container>
  );
};

export default ContainerLayout;
