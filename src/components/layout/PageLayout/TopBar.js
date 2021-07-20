import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";

import { TOP_BAR_HEIGHT } from "../../../styles";
import { IMAGES } from "../../../assets";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    height: TOP_BAR_HEIGHT,
  },
  logoLink: {
    color: "inherit",
    fontSize: 24,
  },
  logo: {
    height: 42,
    paddingRight: 12,
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar elevation={1} color="primary">
      <Toolbar className={classes.toolbar}>
        <Box m="auto">
          <RouterLink className={classes.logoLink} to="/">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="row"
              height={TOP_BAR_HEIGHT}
            >
              <img className={classes.logo} src={IMAGES.APP_LOGO} alt="HT" />
              <Typography variant="h5">HT</Typography>
            </Box>
          </RouterLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
