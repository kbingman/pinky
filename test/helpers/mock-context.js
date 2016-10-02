import { spy } from 'sinon';

const context = {
    arc: spy(),
    beginPath: spy(),
    clearRect: spy(),
    ellipse: spy(),
    fill: spy(),
    fillText: spy(),
    font: null,
    lineTo: spy(),
    moveTo: spy(),
    rect: spy(),
    scale: spy(),
    stroke: spy(),
    strokeStyle: null,
    quadraticCurveTo: spy()
};

const createMockCanvas = function (context) {
    const canvas = document.createElement('CANVAS');
    canvas.getContext = () => {
       return context;
    }
    return canvas;
}

const canvas = createMockCanvas(context);


export { context, canvas };
