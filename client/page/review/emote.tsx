import React, { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";

const ReviewPage = () => {
  // const [value, valueSet] = useState<string>("1");
  const [formats, setFormats] = useState<string | null>("1");

  // const handleFormat = (
  //   event: React.MouseEvent<HTMLElement>,
  //   newFormats: string | null
  // ) => {
  //   console.log(newFormats);
  //   setFormats(newFormats);
  // };

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <Container className="">
      {/* <div className="feedback grid grid-cols-2 gap-4"> */}
      <ToggleButtonGroup
        value={formats}
        // onChange={handleFormat}
        aria-label="text formatting"
      >
        <ToggleButton
          value="1"
          aria-label="1"
          onClick={() => {
            setFormats("1");
          }}
        >
          <div className="feedback">
            <label
              className="angry"
              // onClick={() => {
              //   valueSet("1");
              // }}
            >
              <input
                type="radio"
                value="1"
                name="feedback"
                checked={formats === "1"}
              />
              <div>
                <svg className="eye left">
                  <use xlinkHref="#eye" />
                </svg>
                <svg className="eye right">
                  <use xlinkHref="#eye" />
                </svg>
                <svg className="mouth">
                  <use xlinkHref="#mouth" />
                </svg>
              </div>
            </label>
          </div>
        </ToggleButton>
        <ToggleButton
          value="2"
          aria-label="bold"
          onClick={() => {
            setFormats("2");
          }}
        >
          <div className="feedback">
            <label
              className="good"
              // onClick={() => {
              //   valueSet("4");
              // }}
            >
              <input
                type="radio"
                value="4"
                name="feedback"
                checked={formats === "2"}
              />
              <div>
                <svg className="eye left">
                  <use xlinkHref="#eye" />
                </svg>
                <svg className="eye right">
                  <use xlinkHref="#eye" />
                </svg>
                <svg className="mouth">
                  <use xlinkHref="#mouth" />
                </svg>
              </div>
            </label>
          </div>
        </ToggleButton>
      </ToggleButtonGroup>

      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
          <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 7"
          id="mouth"
        >
          <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
        </symbol>
      </svg>

      {/* twitter */}
      {/* <a
          className="twitter"
          target="_top"
          href="https://twitter.com/aaroniker_me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
          >
            <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
          </svg>
        </a> */}
    </Container>
  );
};

export default ReviewPage;
