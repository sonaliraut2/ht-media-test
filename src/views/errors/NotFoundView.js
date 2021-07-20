import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";

import { Page } from "../../components";
import { SCREEN_PATHS } from "../../navigation";

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(-4),
  },
  icon: {
    fontSize: 120,
  },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Page
      title="404"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Container className={classes.container} maxWidth="md">
        <NotListedLocationIcon className={classes.icon} color="primary" />
        <Box mt={2} mb={3}>
          <Typography align="center" variant="h4" gutterBottom>
            404: Page not found
          </Typography>
          <Typography align="center" gutterBottom>
            You either came here by mistake or there was some kind of error.{" "}
            <br /> Please try using the navigation to get to the correct page.
          </Typography>
        </Box>
        <Button
          href={SCREEN_PATHS.APP_ROOT}
          variant="contained"
          color="primary"
          style={{ textTransform: "capitalize" }}
        >
          Go To Home
        </Button>
      </Container>
    </Page>
  );
};

export default NotFoundView;
