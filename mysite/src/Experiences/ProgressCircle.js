import React, { useEffect, useMemo, useCallback } from 'react';
import { Circle } from 'progressbar.js';
import "./Experiences.css";
function ProgressCircle()
{
    var ProgressBar = require('progressbar.js');
    console.log(document.getElementById("home"));
    var anchor = document.querySelector("#container");
    console.log("here?",anchor);
    var bar = new ProgressBar.Line("#container", {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'},
        from: {color: '#FFEA82'},
        to: {color: '#ED6A5A'},
        step: (state, bar) => {
          bar.path.setAttribute('stroke', state.color);
        }});
    
    return(<div id="container" className="line"> text
        </div>)
}
export default ProgressCircle;