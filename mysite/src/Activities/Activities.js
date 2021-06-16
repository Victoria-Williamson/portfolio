import React from 'react';
import "./Activities.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Carousel} from "react-bootstrap";
import borderImage from "./borderImage.png";
function Activities()
{
    const useStyles = makeStyles({
        root: {
          maxWidth: 345,
        },
      });

      const classes = useStyles();
    return (
        <div class="mt-4">
           
              <div class="h-auto  grid grid-rows-2 items-center justify-center grid-flow-col gap-4 text-center">
  <div class="text-gradient font-extrabold text-white text-4xl font-bold"> Extra Curriculars  <div>
      </div> <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mt-1 h-2  w-96">  </div> </div>
      </div>
              <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={5}>
      <Grid item xs={5}>
          
      </Grid>
  </Grid>
  <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={4}>
      <Grid item xs={10}>
      <Carousel>
  <Carousel.Item >
    <img id = "block" src={borderImage}/>
    <Carousel.Caption>
    <h3 className="text-3xl font-bold text-white">Lead Hackathon Organizer</h3>
      <p className="text-1xl font-bold text-white">KnightHacks</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img id = "block" src={borderImage}/>

    <Carousel.Caption>
    <h3 className="text-3xl font-bold text-white">Mentor </h3>
      <p className="text-1xl font-bold text-white">ACM-W</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </Grid>
          </Grid>
           
        </div>
    )
}

export default Activities;