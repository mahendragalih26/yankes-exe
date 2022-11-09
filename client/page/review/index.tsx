import React, { useState, useEffect } from "react";

// MUI
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Layout
import ContainerLayout from "../../components/layout/containerLayout";
import HeaderApp from "../../components/layout/header";

// Import Service
import { reviewService } from "../../services/review";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
  const [formats, setFormats] = useState<string | null>("1");
  const [count, setCount] = useState<number | null>(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((v: any) => v + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const handleInput = async ({ rate }: { rate: string }) => {
    setFormats(rate);
    let number = Number(rate);
    await reviewService
      .postReview({ rate: number })
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <HeaderApp />
      <ContainerLayout>
        <Box
          sx={{ width: "100%", maxWidth: 500, margin: "auto" }}
          className={"mt-10"}
        >
          <Typography variant="h3" gutterBottom align="center">
            Bagaimana dengan Pelayanan Kami ?
          </Typography>
        </Box>
        <Divider flexItem />
        <Grid container>
          <Grid
            item
            xs
            onClick={() => {
              handleInput({ rate: "1" });
            }}
            className="py-7em"
          >
            <Box sx={{ width: "100%", maxWidth: 400, margin: "auto" }}>
              <Typography variant="h4" gutterBottom align="center">
                Kurang
              </Typography>
            </Box>
            <div className="feedback">
              <label className="angry">
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
          </Grid>
          <Divider orientation="vertical" flexItem className="py-7em">
            Pilih salah Satu
          </Divider>
          <Grid
            item
            xs
            onClick={() => {
              handleInput({ rate: "5" });
            }}
            className="py-7em"
          >
            <Box sx={{ width: "100%", maxWidth: 400, margin: "auto" }}>
              <Typography variant="h4" gutterBottom align="center">
                Sangat Puas
              </Typography>
            </Box>
            <div className="feedback">
              <label className="good">
                <input
                  type="radio"
                  value="5"
                  name="feedback"
                  checked={formats === "5"}
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
          </Grid>
        </Grid>

        {/* Eye and mouth function */}
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
      </ContainerLayout>
    </React.Fragment>
  );
}
