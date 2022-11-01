import React from "react";

interface Props {
  // customText?: string
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
      {/* <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"> */}
      {children}
      {/* </div> */}
    </div>
  );
};

export default Container;
