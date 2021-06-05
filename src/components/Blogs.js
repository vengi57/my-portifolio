import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import BlogsDatInfo from "../utils/BlogsDatInfo";
import "./Blogs.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    border: "3px solid #259178a8",
    backgroundColor: "#070d17",
    maxWidth: 500,
    color: "#fff",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    height: "100px",
    width: "130px",
  },
}));

const Blogs = () => {
  const classes = useStyles();
  const openMediumBlog = (url) => {
    window.open(url);
  };

  return (
    <div id="blogs">
      {" "}
      <h2 className="blog-header">❰ ▶ My Blogs ◀ ❱</h2>
      <div className="blog-list-wrapper">
        {BlogsDatInfo.map((data) => (
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={data["image"]}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1">
                      <p className="blog-text">{data["name"]}</p>
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                    <p className="blog-text"> {data["description"]}</p>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: "pointer" }}>
                      <button
                        onClick={() => openMediumBlog(data["url"])}
                        className="blog-url-btn"
                      >
                        View Blog
                      </button>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
      </div>
    </div>
  );
};
export default Blogs;
