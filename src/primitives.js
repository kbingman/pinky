const { PI } = Math;
const TAU = Math.PI * 2;

/* function applyStyles (context, { strokeStyle, lineWidth }) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;

  return context;
} */

function draw (context, { fillStyle, strokeStyle, lineWidth }) {
    context.strokeStyle = strokeStyle;
    context.lineWidth = lineWidth;
    context.fillStyle = fillStyle;
    context.stroke();
    context.fill();

    return context;
}

/**
 * Clear canvas
 */
export function clear (context, { width, height }) {
    context.clearRect(0, 0, width, height);
}

export function circle (context, { x, y, r, percentage }, styles = {}) {
    const radians = percentage ? percentage * TAU : TAU;

    context.beginPath();
    context.arc(x, y, r, 0, radians, false);

    draw(context, styles);
}

export function ellipse (context, { x, y, rx, ry, angle }, styles = {}) {
    const diff = rx - ry;

    x = x + (diff / 2);
    angle = angle || 0;

    context.beginPath();
    context.ellipse(x, y, rx, ry, angle, 0, TAU); //

    draw(context, styles);
}

export function rectangle (context, { x, y, w, h }, styles = {}) {
    context.beginPath();
    context.rect(x, y, w, h);

    draw(context, style);
}

export function text (context, { x, y, text }, { font, fillStyle, strokeStyle }) {
    context.fillStyle = fillStyle;
    context.font = font;
    context.fillText(text, x, y);
}

// export function crosshair (context, { x, y, size, color }) {
//   const l = size ? size / 2 : 20;
//
//   context.beginPath();
//   context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
//   context.moveTo(x - l, y);
//   context.lineTo(x + l, y);
//   context.moveTo(x, y - l);
//   context.lineTo(x, y + l);
//   context.stroke();
// }

export function line (context, { x, y, x1, y1 }, styles = {}) {

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);

    draw(context, styles);
}

export function quadraticCurve (context, { x, y, x1, y1, xc, yc }, styles) {

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context, styles);
}
