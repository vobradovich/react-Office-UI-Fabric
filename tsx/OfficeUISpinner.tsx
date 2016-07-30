/// <reference path="../typings/tsd.d.ts" />

const OfficeUISpinner = (props) => {
    var parentSize = 20;
    var offsetSize = 0.2;
    var numCircles = 8;
    var offset = parentSize * offsetSize;
    var angle = 0;
    var step = (2 * Math.PI) / numCircles;
    var radius = (parentSize - offset) * 0.5;

    var i = numCircles;
    
    var circles = [];
        
    while (i--) {
        var circleStyles = {
            width: parentSize * offsetSize + "px",
            height: parentSize * offsetSize + "px",
            left: Math.round(parentSize * 0.5 + radius * Math.cos(angle) - parentSize * offsetSize * 0.5) - offset * 0.5,
            top: Math.round(parentSize * 0.5 + radius * Math.sin(angle) - parentSize * offsetSize * 0.5) - offset * 0.5,
        };        
        angle += step;
        circles.push(circleStyles);
    }

    return (
        <div {...props} className="ms-Spinner">
            {circles.map((c, i) => <div key={i} className="ms-Spinner-circle" style={c} />)}
        </div>    
    );    
};