import React, { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  Button,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Grid,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { format, parseISO } from "date-fns";

import { Page } from "../../components";
import { API } from "../../services";
import { SCREEN_PATHS } from "../../navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "red[500]",
  },
  listItemTemp: (props) => ({
    "&:before": {
      content: "*",
      position: "absolute",
      left: 0,
      color: "#000",
      fontSize: 14,
      top: 15,
    },
  }),
}));

const ShowsView = () => {
  const classes = useStyles();
  const param = useParams();

  const [shows, setShows] = useState();

  let pos = SCREEN_PATHS.DETAILS.lastIndexOf(":id");
  useEffect(() => {
    if ("" !== param.search && "undefined" !== param.search) {
      API.fetchTvShows(param.search).then((res) => {
        setShows(res);
      });
    }
  }, []);

  return (
    <Page title="TV-Shows">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {shows &&
            shows.map((showItem) => {
              let datePremiered = "";
              if (
                showItem.show.premiered !== null &&
                showItem.show.premiered !== "undefined"
              ) {
                datePremiered = format(
                  parseISO(showItem.show.premiered + "T00:00:00"),
                  "do MMM yyyy"
                );
              }

              return (
                <Grid Item xs={6} sm={4}>
                  <Card className={classes.root}>
                    <CardHeader
                      title={
                        <Button
                          color="primary"
                          style={{
                            marginLeft: "-8px",
                          }}
                          component={RouterLink}
                          to={
                            SCREEN_PATHS.DETAILS.substring(0, pos) +
                            showItem.show.id
                          }
                        >
                          {showItem.show && showItem.show.name}
                        </Button>
                      }
                      subheader={
                        showItem.show &&
                        showItem.show.language + "," + datePremiered
                      }
                    />
                    <CardMedia
                      className={classes.media}
                      image={
                        showItem.show &&
                        showItem.show.image &&
                        showItem.show.image.medium
                      }
                      title={showItem.show && showItem.show.name}
                    />
                    <CardContent style={{ display: "flex" }}>
                      <ListItem key={showItem.show.language}>
                        <ListItemText
                          primary={showItem.show && showItem.show.language}
                        />
                      </ListItem>
                      {showItem.show &&
                      showItem.show.genres &&
                      showItem.show.genres.length > 0 ? (
                        <ListItem key={showItem.show.genres.length}>
                          <ListItemText
                            primary={
                              showItem.show &&
                              showItem.show.genres &&
                              showItem.show.genres["0"]
                            }
                            className={classes.listItemTemp}
                          />
                        </ListItem>
                      ) : null}
                      {showItem.show && showItem.show.runtime ? (
                        <ListItem key={showItem.show.runtime}>
                          <ListItemText
                            primary={showItem.show && showItem.show.runtime}
                            className={classes.listItemTemp}
                          />
                        </ListItem>
                      ) : null}
                      {showItem.show && showItem.show.dvdCountry ? (
                        <ListItem key={showItem.show.dvdCountry}>
                          <ListItemText
                            primary={showItem.show && showItem.show.dvdCountry}
                            className={classes.listItemTemp}
                          />
                        </ListItem>
                      ) : null}
                      {showItem.show && showItem.show.rating ? (
                        <ListItem key={showItem.show.rating}>
                          <ListItemText
                            className={classes.listStyle}
                            primary={
                              showItem.show &&
                              showItem.show.rating &&
                              showItem.show.rating.average
                            }
                          />
                        </ListItem>
                      ) : null}
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </div>
    </Page>
  );
};

export default ShowsView;
