import { spy } from 'sinon';

const createMockCanvas = function (context) {
    const canvas = document.createElement('CANVAS');
    canvas.getContext = () => {
       return context;
    }
    return canvas;
}

export const context = {
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

export const canvas = createMockCanvas(context);
