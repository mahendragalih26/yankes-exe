import React from "react";
import Container from "./containerLayout";
import Image404 from "../../assets/image/404.jpg";

interface Props {
  // customText?: string
}

const Loading: React.FC<Props> = () => {
  return (
    <Container>
      <div className="img-notfound">
        <img src={Image404} alt="" className=" img-notfound__md" />
      </div>
    </Container>
  );
};

export default Loading;
