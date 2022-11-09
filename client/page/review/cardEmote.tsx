import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// MUI
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

// Layout
import ContainerLayout from "../../components/layout/containerLayout";
import HeaderApp from "../../components/layout/header";
import ModalContainer from "../../components/dialog/ModalContainer";

// Config state
import { DialogState, initDialogState } from "../../helper/initState/dialog";

// Import Service
import { reviewService } from "../../services/review";
import { dialogConfig } from "../../redux/dialog/dialogActions";

interface Props {
  dialogConfig: (data: DialogState) => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dialogConfig: (data: DialogState) => dispatch(dialogConfig(data)),
  };
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth,
  };
};

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

const CardEmote: React.FC<Props> = ({ dialogConfig }) => {
  const [formats, setFormats] = useState<string | null>("0");
  const [count, setCount] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpan] = useState<boolean>(false);
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCount((v: any) => v + 1);
    // }, 1000);
    // return () => clearInterval(interval);
    // dialogConfig({
    //   isDialogShown: true,
    //   title: "Information",
    //   description: "Test Popup",
    //   actionYes: () => {
    //     // if (change_type === 1) {
    //     //   addAuth({ default_password: false });
    //     //   document?.location?.replace("/");
    //     // } else {
    //     //   document?.location?.reload();
    //     // }
    //     console.log("tes aa");
    //   },
    //   defaultActionNo: true,
    // });
    resetState();
  }, []);

  const resetState = () => {
    setFormats("0");
  };

  const handleInput = async ({ rate }: { rate: string }) => {
    setFormats(rate);
    let number = Number(rate);
    await reviewService
      .postReview({ rate: number })
      .then((res: any) => {
        console.log(res);
        setIsModalOpan(true);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <React.Fragment>
      <HeaderApp />
      <ContainerLayout>
        <Box
          sx={{ width: "100%", maxWidth: 500, margin: "auto" }}
          className={"mt-10"}
        >
          <Typography variant="h3" gutterBottom align="center">
            Survei Kepuasan Pasien
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
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea>
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
                <CardContent>
                  <Typography variant="h4" gutterBottom align="center">
                    Kurang Puas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            {/* <Box sx={{ width: "100%", maxWidth: 400, margin: "auto" }}>
              <Typography variant="h4" gutterBottom align="center">
                Kurang
              </Typography>
            </Box> */}
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
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardActionArea>
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
                <CardContent>
                  <Typography variant="h4" gutterBottom align="center">
                    Sangat Puas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
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
      <ModalContainer
        title="Filter"
        isDialogShown={isModalOpen}
        actionNo={() => setIsModalOpan(false)}
      >
        <Box sx={{ display: "flex" }}>
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
          <FormControl
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={jason}
                    onChange={handleChange}
                    name="jason"
                  />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={antoine}
                    onChange={handleChange}
                    name="antoine"
                  />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        </Box>
      </ModalContainer>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardEmote);
