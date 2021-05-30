import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import projectInfo from "../utils/MetaDatainfo";
import ProjectContent from "./ProjectContent"
import "./ProjectView.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 5,
    padding: 20,
  },
  paper: {
    height: 400,
    width: 400,
    borderRadius: 12,
    border: "3px solid #259178a8",
    backgroundColor: "#070d17",
  },
  control: {
    padding: theme.spacing(7),
  },
}));

const ProjectView = () => {
  const classes = useStyles();
  return (
    <div>
      <h3 className="project-header">Projects which I implemented for learning</h3>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={5}>
            {projectInfo.map((value) => (
              <Grid key={value} item>
                {/* <Paper className={classes.paper}> */}
                    <ProjectContent projectContent={value}/>
                  {/* <h3>{value["name"]}</h3>
                  <h3>{value["description"]}</h3>
                  <h3>{value["url"]}</h3> */}
                {/* </Paper> */}
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ProjectView;
