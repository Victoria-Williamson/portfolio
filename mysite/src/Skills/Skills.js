import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { ProgressBar } from "react-bootstrap";
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import "./Skills.css";

function Skills()
{
    const useStyles = makeStyles((theme) => ({
        rating:
        {
            color: "#FFFFFF",
        }
    })
    );
    const classes = useStyles();

    const skills = 
    [
        {
            skill : "Java",
            level : 5,
        },
        {
            skill : "JavaScript",
            level : 4,
        },
        {
            skill : "Python",
            level : 2,
        },
        {
            skill : "Swift",
            level : 2,
        },
        {
            skill : "Sklearn",
            level : 4,
        },
        {
            skill : "CSS",
            level : 3,
        },
        {
            skill : "Swift",
            level : 2,
        },
        {
            skill : "Figma",
            level : 3,
        },
        {
            skill : "Tensorflow",
            level : 3,
        },

    ]
    return(<div id="skills">
      <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  wrap="wrap"
  spacing={5}>
      {skills.map((item) =>
             <Grid item >
             {item.skill}
             <br/>
         <Rating className={classes.rating} name={item.skill} value={item.level} readOnly />
         </Grid>
      )}

      </Grid>   
    </div>);
}

export default Skills;