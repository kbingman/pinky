import { spy } from 'sinon';

const context = {
  arc: spy(),
  beginPath: spy(),
  clearRect: spy(),
  ellipse: spy(),
  fill: spy(),
  scale: spy(),
  stroke: spy(),
}

const createMockCanvas = function (context) {
    const canvas = document.createElement('CANVAS');
    canvas.getContext = () => {
       return context;
    }
    return canvas;
};

const restoreMockCanvas = function (context) {
    context.stroke.restore();
};

const canvas = createMockCanvas(context);


export { context, canvas };
