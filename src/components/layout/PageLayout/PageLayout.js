import React from "react";
import { makeStyles } from "@material-ui/core";

import { AppRouter } from "../../../navigation";
import { TOP_BAR_HEIGHT } from "../../../styles";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
    paddingTop: TOP_BAR_HEIGHT,
  },
  contentContainer: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  content: {
    flex: "1 1 auto",
    height: "100%",
    overflow: "auto",
  },
}));

const MainLayout = ({ routes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <AppRouter routes={routes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
