import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./ProjectContent.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    height: 280,
    width: 500,
    fontFamily: "monospace",
    border: "3px solid #259178a8",
    backgroundColor: "#070d17",
    borderRadius:'75px',
    color: "white",
  },
  image: {
    maxWidth: 300,
    maxHeight: 200,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ProjectContent = (props) => {
  const classes = useStyles();

  const openProjectUrl = (url) => {
    window.open(url);
  };

  return (
    <div className="project-list-wrapper">
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <h1 className="title-text">{props.projectContent["name"]}</h1>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <h3 className="title-text">
                    {props.projectContent["description"]}
                  </h3>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  <button
                    className="url-btn"
                    onClick={() => openProjectUrl(props.projectContent["url"])}
                  >
                    {" "}
                    <h3>View Website</h3>
                  </button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default ProjectContent;
