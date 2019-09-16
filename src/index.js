import React, { Component } from "react";

class RedRoses extends Component {

  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext("2d");
    this.draw(canvas, context);
  }

  draw(canvas, context) {
    const DPR = window.devicePixelRatio || 1;
    const MAX_WIDTH = window.innerWidth * .4;
    const MAX_HEIGHT = window.innerHeight * .4;
    const SIZE = MAX_WIDTH;
    const NUM_STEPS = 16 * 4;
    const MARGIN = SIZE / 20;
    const STEP = SIZE / NUM_STEPS;
    const COL_WIDTH = SIZE / NUM_STEPS;
    const VERT_SPACING = 2;
    const COL_SPACING = 0;
    const VERT_LENGTH = SIZE / 24;

    canvas.width = SIZE * DPR;
    canvas.height = SIZE * DPR;
    context.scale(DPR, DPR);
    context.lineWidth = 1;

    context.save();
    context.beginPath();
    var gradient = context.createRadialGradient(SIZE*.75,SIZE*.25,0,SIZE*.75,SIZE*.25,SIZE*.5);
    gradient.addColorStop(1, '#4B9A94');
    gradient.addColorStop(0, '#214B4A');
    context.fillStyle = gradient;
    context.fillRect(0, 0, SIZE, SIZE);
    context.stroke();

    context.globalCompositeOperation = 'lighten';
    var gradient = context.createRadialGradient(SIZE*.25,SIZE*.75,0,SIZE*.25,SIZE*.75,SIZE*.6);
    gradient.addColorStop(1, '#4B9A94');
    gradient.addColorStop(0, '#214B4A');
    context.fillStyle = gradient;
    context.fillRect(0, 0, SIZE, SIZE);
    context.stroke();
    context.restore();

    var x = 0;
    var x_increase = 0
    context.fillStyle = "#822625";
    while(x < SIZE){
      context.translate(x_increase, 0);
      x_increase = COL_WIDTH  * (Math.random() * .3 + .7);
      x += x_increase;
      var next_y = Math.random() * -10; 
      while(next_y < SIZE){
        context.save();
        context.beginPath();
        context.translate(0, next_y);
        const y_increase = VERT_LENGTH  * (Math.random() * .4 + .6)
        context.rect(0, 0, x_increase, y_increase - VERT_SPACING);
        context.fill();
        context.restore();
        next_y += y_increase;
      }
      context.restore();
    }
  }

  getContainerStyles() {
    return {
      alignItems: "center",
      justifyContent: "center",
      display: "flex"
    };
  }

  render() {
    return (
      <div style={this.getContainerStyles()}>
        <canvas ref={this.canvasRef} id="canvas"></canvas>
      </div>
    );
  }
}


export default RedRoses;




