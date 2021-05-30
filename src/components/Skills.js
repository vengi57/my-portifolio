import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import HtmlLogo from "../images/html.png";
import JsLogo from "../images/js.svg";
import ReactLogo from "../images/react.svg";
import CssLogo from "../images/css.png";
import JavaLogo from "../images/java.png";
import PythonLogo from "../images/python.svg";
import FastApiLogo from "../images/fastapi.png";
import CLogo from "../images/c.png";
import GitLogo from "../images/git-icon.svg";
import DockerLogo from "../images/docker.svg";
import MysqlLogo from "../images/mysql.svg";
import PostgresLogo from "../images/postgres.svg";
import "./Skills.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "rgb(7 13 23)",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    margin: "20%",
    background: "rgb(7 13 23)",
    border: "3px solid  rgb(26 99 87)",
    borderRadius: "10px",
  },
}));

const Skills = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className="skills-txt">❰ ▶ Skills ◀ ❱</h1>
      <br/>
      <h3 className="skills-txt-sub">Scripting languages & Frameworks</h3>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">HTML</h3>
            <img src={HtmlLogo} className="skills-logo" alt="html-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Java Script</h3>
            <img src={JsLogo} className="skills-logo" alt="js-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">CSS</h3>
            <img src={CssLogo} className="skills-logo" alt="css-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">React JS</h3>
            <img src={ReactLogo} className="skills-logo" alt="react-logo" />
          </Paper>
        </Grid>
      </Grid>
      <h3 className="skills-txt-sub">Programming languages & Frameworks</h3>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Java</h3>
            <img src={JavaLogo} className="skills-logo" alt="java-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Python</h3>
            <img src={PythonLogo} className="skills-logo" alt="python-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Fast API</h3>
            <img src={FastApiLogo} className="skills-logo" alt="fastapi-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">C Programming</h3>
            <img src={CLogo} className="skills-logo" alt="c-logo" />
          </Paper>
        </Grid>
      </Grid>
      <h3 className="skills-txt-sub">Version controls & Databases</h3>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Git</h3>
            <img src={GitLogo} className="skills-logo" alt="git-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">MySql</h3>
            <img src={MysqlLogo} className="skills-logo" alt="mysql-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Postgres Sql</h3>
            <img src={PostgresLogo} className="skills-logo" alt="postgres-logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h3 className="skills-text">Docker</h3>
            <img src={DockerLogo} className="skills-logo" alt="docker-logo" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Skills;
