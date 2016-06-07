const PI = Math.PI;
const TAU = Math.PI * 2;

/**
 * Clear canvas
 */
export function clear (context, { width, height }) {
  context.clearRect(0, 0, width, height);
};

export function circle (context, { x, y, radius, color, stroke, fill, percentage }) {
  const radians = percentage ? percentage * TAU : TAU;
  console.log(context);

  context.beginPath();
  context.lineWidth = stroke || 1;
  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.7)';
  // context.fillStyle = fill;
  context.arc(x, y, radius, 0, radians, false);
  context.stroke();
}

export function dot (context, { x, y, radius, color }) {
  circle(context, { pos, radius, fill: color });
}

export function ellipse (context, { x, y, radiusX, radiusY, color, angle, stroke }) {
  const diff = radiusX - radiusY;

  x = x + (diff / 2);
  angle = angle || 0;

  context.beginPath();
  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
  context.lineWidth = stroke;
  context.ellipse(x, y, radiusX, radiusY, angle, 0, 2 * Math.PI); //
  context.stroke();
}

export function crosshair (context, { x, y, size, color }) {
  const l = size ? size / 2 : 20;

  context.beginPath();
  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
  context.moveTo(x - l, y);
  context.lineTo(x + l, y);
  context.moveTo(x, y - l);
  context.lineTo(x, y + l);
  context.stroke();
}

export function line (context, { x, y, x1, y1, color, stroke }) {
  context.beginPath();
  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
  context.moveTo(x, y);
  context.lineTo(x1, y1);
  context.stroke();
}

export function quadraticCurve (context, { x, y, x1, y1, xc, yc, color }) {
  context.beginPath();
  context.strokeStyle = color || 'hsla(0, 100%, 100%, 0.3)';
  context.moveTo(x, y);
  context.quadraticCurveTo(xc, yc, x1, y1);
  context.stroke();
}
