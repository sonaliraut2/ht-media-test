import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import { SCREEN_PATHS } from "../../navigation";
import { API } from "../../services";
import { Page } from "../../components";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    border: "1px solid",
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

const DetailView = () => {
  const param = useParams();
  const history = useHistory();
  const classes = useStyles();

  const [show, setShow] = useState({});

  useEffect(() => {
    if (Number(param.id) && "" !== param.id && typeof param.id !== undefined) {
      API.fetchTvShow(param.id).then((res) => {
        setShow(res);
      });
    } else {
      history.push({ pathname: SCREEN_PATHS.NOT_FOUND });
    }
  }, []);

  return (
    <Page title="TV-Detail-Show">
      {show && (
        <Card className={classes.root}>
          <CardHeader title={show?.name} subheader={show?.language} />
          <CardMedia
            className={classes.media}
            image={show?.image?.medium}
            title={show?.name}
          />
          <CardContent style={{ display: "flex" }}>
            <ListItem key={show?.language}>
              <ListItemText primary={show?.language} />
            </ListItem>
            {show?.genres && show?.genres.length > 0 ? (
              <ListItem key={show?.genres.length}>
                <ListItemText
                  primary={show?.genres && show?.genres["0"]}
                  className={classes.listItemTemp}
                />
              </ListItem>
            ) : null}
            {show.runtime ? (
              <ListItem key={show?.runtime}>
                <ListItemText
                  primary={show?.runtime}
                  className={classes.listItemTemp}
                />
              </ListItem>
            ) : null}
            {show.dvdCountry ? (
              <ListItem key={show?.dvdCountry}>
                <ListItemText
                  primary={show?.dvdCountry}
                  className={classes.listItemTemp}
                />
              </ListItem>
            ) : null}
            {show.rating ? (
              <ListItem key={show?.rating}>
                <ListItemText
                  className={classes.listStyle}
                  primary={show?.rating && show?.rating.average}
                />
              </ListItem>
            ) : null}
          </CardContent>
        </Card>
      )}
    </Page>
  );
};

export default DetailView;
