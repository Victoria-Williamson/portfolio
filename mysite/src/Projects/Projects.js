import "./Projects.css"
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Container from '@material-ui/core/Container';
import Card from 'react-bootstrap/Card';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import WebIcon from '@material-ui/icons/Web';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor:"#272727",
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: "#FFFFFF",
  },
  titleBar: {
    background:"#272727",
    color: "#FFFFFF",
  },
  media: {
    height: 140,
  },
  paper:
  {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor:"#272727",
    color: "#FFFFFF",
  },
  chip:
  {
    backgroundColor:"#FFFFFF",
    margin: theme.spacing(0.5),
  }
}));

const chipData =
[
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
]
function Projects()
{
    const languages = [
        {x: "Java"},
        {x: "Java"},
        {x: "Java"},
    ]
    const classes = useStyles();
    const titleData = 
    [
         {
            img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
            title: "Project Title",
            languages: ["Java", "JavaScript", "Swift"],
            purpose: "Work",
            link: "https://github.com/Victoria-Williamson",
            author: "Me",
            description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
            title: "Project Title",
            languages: ["Java", "JavaScript", "Swift"],
            purpose: "Work",
            link: "https://github.com/Victoria-Williamson",
            author: "Me",
            description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
            title: "Project Title",
            languages: ["Java", "JavaScript", "Swift"],
            purpose: "Work",
            link: "https://github.com/Victoria-Williamson",
            author: "Me",
            description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
            title: "Project Title",
            languages: ["Java", "JavaScript", "Swift"],
            purpose: "Work",
            link: "https://github.com/Victoria-Williamson",
            author: "Me",
            description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
        },
        {
            img: "https://lh3.googleusercontent.com/pw/ACtC-3ej1Hq6IOxshfBV8Fr4Pk2ybc7vpgnjbWvLDFpLaVp_P-VDMBVwSxqKgqeFBvTXRVGxQbzkETRqaCwf5buWHEh87B-bOMpqMNrq_VYEJnq9jxi2MF9o9d0Rd0Z4n4A75GKkLErD33qAqm2x76j-NkAnvw=w1269-h912-no?authuser=0",
            title: "Project Title",
            languages: ["Java", "JavaScript", "Swift"],
            purpose: "Work",
            link: "https://github.com/Victoria-Williamson",
            author: "Me",
            description: "Maecenas non enim mattis, consectetur nunc et, dapibus sem. Phasellus cursus porta augue, ac consectetur ipsum porttitor sit amet. In vel pulvinar arcu. Pellentesque nibh metus, efficitur a molestie sit amet, vehicula a nisi. Aenean interdum pretium lorem nec molestie. In hac habitasse platea dictumst. In sed sodales neque, mattis vulputate mauris. Nunc a lorem auctor, pulvinar massa ut, efficitur odio. Etiam blandit arcu vitae erat rhoncus porta. In eget gravida ligula. Sed id congue orci.",
        },
    ];
    return(
    <div>   
  <Grid container
  direction="column"
  justify="center"
  alignItems="center"
  wrap="nowrap"
  spacing={5}>
      <Grid item xs={0}>
          <div id="Project-Title">
          <svg preserveAspectRatio="none" viewBox="0 0 559 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M197.163 24.4756V37H189.839V1.45312H203.706C206.375 1.45312 208.719 1.94141 210.737 2.91797C212.772 3.89453 214.334 5.28613 215.425 7.09277C216.515 8.88314 217.061 10.9258 217.061 13.2207C217.061 16.7038 215.864 19.4544 213.472 21.4727C211.095 23.4746 207.799 24.4756 203.584 24.4756H197.163ZM197.163 18.543H203.706C205.643 18.543 207.116 18.0872 208.125 17.1758C209.15 16.2643 209.663 14.9622 209.663 13.2695C209.663 11.528 209.15 10.1201 208.125 9.0459C207.1 7.97168 205.684 7.41829 203.877 7.38574H197.163V18.543ZM236.494 17.2002C235.534 17.07 234.688 17.0049 233.955 17.0049C231.286 17.0049 229.536 17.9082 228.706 19.7148V37H221.65V10.584H228.315L228.511 13.7334C229.927 11.3083 231.888 10.0957 234.395 10.0957C235.176 10.0957 235.908 10.2015 236.592 10.4131L236.494 17.2002ZM237.935 23.5479C237.935 20.9274 238.439 18.5918 239.448 16.541C240.457 14.4902 241.906 12.9033 243.794 11.7803C245.698 10.6572 247.904 10.0957 250.41 10.0957C253.975 10.0957 256.88 11.1862 259.126 13.3672C261.388 15.5482 262.65 18.5104 262.91 22.2539L262.959 24.0605C262.959 28.1133 261.828 31.3685 259.565 33.8262C257.303 36.2676 254.268 37.4883 250.459 37.4883C246.65 37.4883 243.607 36.2676 241.328 33.8262C239.066 31.3848 237.935 28.0645 237.935 23.8652V23.5479ZM244.99 24.0605C244.99 26.5671 245.462 28.4876 246.406 29.8223C247.35 31.1406 248.701 31.7998 250.459 31.7998C252.168 31.7998 253.503 31.1488 254.463 29.8467C255.423 28.5283 255.903 26.4287 255.903 23.5479C255.903 21.0902 255.423 19.1859 254.463 17.835C253.503 16.484 252.152 15.8086 250.41 15.8086C248.685 15.8086 247.35 16.484 246.406 17.835C245.462 19.1696 244.99 21.2448 244.99 24.0605ZM274.775 10.584V38.4404C274.775 41.3538 274.002 43.6162 272.456 45.2275C270.91 46.8551 268.68 47.6689 265.767 47.6689C264.546 47.6689 263.382 47.5306 262.275 47.2539V41.6631C263.122 41.8096 263.862 41.8828 264.497 41.8828C266.629 41.8828 267.695 40.7516 267.695 38.4893V10.584H274.775ZM267.134 3.74805C267.134 2.6901 267.484 1.81934 268.184 1.13574C268.9 0.452148 269.868 0.110352 271.089 0.110352C272.31 0.110352 273.27 0.452148 273.97 1.13574C274.686 1.81934 275.044 2.6901 275.044 3.74805C275.044 4.82227 274.678 5.70117 273.945 6.38477C273.229 7.06836 272.277 7.41016 271.089 7.41016C269.901 7.41016 268.94 7.06836 268.208 6.38477C267.492 5.70117 267.134 4.82227 267.134 3.74805ZM292.451 37.4883C288.577 37.4883 285.42 36.3001 282.979 33.9238C280.553 31.5475 279.341 28.3818 279.341 24.4268V23.7432C279.341 21.0902 279.854 18.722 280.879 16.6387C281.904 14.5391 283.353 12.9277 285.225 11.8047C287.113 10.6654 289.261 10.0957 291.67 10.0957C295.283 10.0957 298.123 11.235 300.19 13.5137C302.274 15.7923 303.315 19.0231 303.315 23.2061V26.0869H286.494C286.722 27.8122 287.406 29.1956 288.545 30.2373C289.701 31.279 291.157 31.7998 292.915 31.7998C295.633 31.7998 297.757 30.8151 299.287 28.8457L302.754 32.7275C301.696 34.2249 300.264 35.3968 298.457 36.2432C296.65 37.0732 294.648 37.4883 292.451 37.4883ZM291.646 15.8086C290.246 15.8086 289.106 16.2806 288.228 17.2246C287.365 18.1686 286.812 19.5195 286.567 21.2773H296.382V20.7158C296.349 19.1533 295.926 17.9489 295.112 17.1025C294.299 16.2399 293.143 15.8086 291.646 15.8086ZM318.33 31.7998C319.632 31.7998 320.69 31.4417 321.504 30.7256C322.318 30.0094 322.741 29.0573 322.773 27.8691H329.39C329.373 29.6595 328.885 31.3034 327.925 32.8008C326.965 34.2819 325.646 35.4375 323.97 36.2676C322.31 37.0814 320.47 37.4883 318.452 37.4883C314.676 37.4883 311.698 36.292 309.517 33.8994C307.336 31.4906 306.245 28.1702 306.245 23.9385V23.4746C306.245 19.4056 307.327 16.1585 309.492 13.7334C311.657 11.3083 314.627 10.0957 318.403 10.0957C321.707 10.0957 324.352 11.0397 326.338 12.9277C328.34 14.7995 329.357 17.2979 329.39 20.4229H322.773C322.741 19.0557 322.318 17.9489 321.504 17.1025C320.69 16.2399 319.616 15.8086 318.281 15.8086C316.637 15.8086 315.392 16.4108 314.546 17.6152C313.716 18.8034 313.301 20.7402 313.301 23.4258V24.1582C313.301 26.8763 313.716 28.8294 314.546 30.0176C315.376 31.2057 316.637 31.7998 318.33 31.7998ZM341.865 4.08984V10.584H346.382V15.7598H341.865V28.9434C341.865 29.9199 342.052 30.6198 342.427 31.043C342.801 31.4661 343.517 31.6777 344.575 31.6777C345.356 31.6777 346.048 31.6208 346.65 31.5068V36.8535C345.267 37.2767 343.843 37.4883 342.378 37.4883C337.43 37.4883 334.907 34.9899 334.81 29.9932V15.7598H330.952V10.584H334.81V4.08984H341.865ZM364.619 29.7002C364.619 28.8376 364.188 28.1621 363.325 27.6738C362.479 27.1693 361.112 26.7217 359.224 26.3311C352.941 25.0127 349.8 22.3434 349.8 18.3232C349.8 15.9795 350.768 14.0264 352.705 12.4639C354.658 10.8851 357.205 10.0957 360.347 10.0957C363.7 10.0957 366.377 10.8851 368.379 12.4639C370.397 14.0426 371.406 16.0934 371.406 18.6162H364.351C364.351 17.6071 364.025 16.777 363.374 16.126C362.723 15.4587 361.706 15.125 360.322 15.125C359.134 15.125 358.215 15.3936 357.563 15.9307C356.912 16.4678 356.587 17.1514 356.587 17.9814C356.587 18.7627 356.953 19.3975 357.686 19.8857C358.434 20.3577 359.688 20.7728 361.445 21.1309C363.203 21.4727 364.684 21.8633 365.889 22.3027C369.616 23.6699 371.479 26.0381 371.479 29.4072C371.479 31.8161 370.446 33.7692 368.379 35.2666C366.312 36.7477 363.643 37.4883 360.371 37.4883C358.158 37.4883 356.188 37.0977 354.463 36.3164C352.754 35.5189 351.411 34.4365 350.435 33.0693C349.458 31.6859 348.97 30.1966 348.97 28.6016H355.659C355.724 29.8548 356.188 30.8151 357.051 31.4824C357.913 32.1497 359.069 32.4834 360.518 32.4834C361.868 32.4834 362.886 32.2311 363.569 31.7266C364.269 31.2057 364.619 30.5303 364.619 29.7002Z" fill="#FFFCFC"/>
<rect y="57" width="559" height="10" fill="url(#paint0_linear)"/>
<defs>
<linearGradient id="paint0_linear" x1="279.5" y1="57" x2="151.49" y2="-88.7832" gradientUnits="userSpaceOnUse">
<stop offset="0.078125" stop-color="#1DA1F2"/>
<stop offset="0.40625" stop-color="#A749BC"/>
<stop offset="0.614583" stop-color="#D12784"/>
<stop offset="0.880208" stop-color="#D62C49"/>
</linearGradient>
</defs>
</svg>

          </div>
      </Grid>
  </Grid>
  <Grid item xs={5}>
      text
  </Grid>
  <Grid container
  direction="row"
  justify="center"
  alignItems="center"
  wrap="wrap"
  spacing={2}>
      {titleData.map((data) =>
      <Grid item xs={0}>
            <Card
    bg={"light"}
    text={'black'}
    style={{ width: '18rem' }}
    className="mb-2"
  >
    <Card.Img id="card-img" variant="top" src={data.img}/>
    <Card.Header> <div> <a><WebIcon  style={{ fontSize: 40, padding:"5px" }}/></a> <a><GitHubIcon  style={{ fontSize: 40, padding:"5px" }}/></a> </div> </Card.Header>
    <Card.Body>
      <Card.Title> Portfolio Webste Project 
         
      </Card.Title>
      <Card.Text>
      <text id="time"> May 2020 - Current</text>
      <br/>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
            <Chip size="small" label={"JS"}/>
            <Chip  size="small" label={"Swift"}/>
            <Chip  size="small" label={"React-Native"}/>
            <Chip  size="small" label={"Tensorflow"}/>
            <Chip  size="small" label={"React"}/>
            <Chip  size="small" label={"Python"}/>
    </Card.Footer>
  </Card>

  </Grid>
      )}
      </Grid>
  </div>);
}
export default Projects;