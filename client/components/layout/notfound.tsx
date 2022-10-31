import React from "react";
import Container from "./container";
import Image404 from "../../assets/image/404.jpg";

interface Props {
  // customText?: string
}

const Loading: React.FC<Props> = () => {
  return (
    <Container>
      <img
        src={Image404}
        alt=""
        className="md:w-[60vh] lg:w-[60vh] xl:w-[70vh] w-auto mx-auto my-auto"
      />
    </Container>
  );
};

export default Loading;
