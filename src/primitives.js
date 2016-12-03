const PI = Math.PI;
const TAU = Math.PI * 2;

function setup (context, { strokeStyle, lineWidth }) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;

  return context;
}

function draw (context, { fillStyle }) {
  context.stroke();
  if (fillStyle) {
    context.fillStyle = fillStyle;
    context.fill();
  }

  return context;
}

/**
 * Clear canvas
 */
export function clear (context, { width, height }) {
  context.clearRect(0, 0, width, height);
}

export function circle (context, { x, y, r, percentage, lineWidth, strokeStyle, fillStyle }) {
  const radians = percentage ? percentage * TAU : TAU;
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;

  context.beginPath();
  context.arc(x, y, r, 0, radians, false);

  draw(context, { fillStyle });
}

export function ellipse (context, { x, y, rx, ry, color, angle, strokeStyle, fillStyle }) {
  const diff = rx - ry;

  x = x + (diff / 2);
  angle = angle || 0;

  context = setup(context, { color, strokeStyle });
  context.beginPath();
  context.ellipse(x, y, rx, ry, angle, 0, 2 * Math.PI); //

  draw(context, { fillStyle });
}

export function rectangle (context, { x, y, w, h, strokeStyle, fillStyle, lineWidth }) {
  context = setup(context, { lineWidth, strokeStyle });
  context.beginPath();
  context.rect(x, y, w, h);

  draw(context, { fillStyle });
}

export function text (context, { x, y, text, font, fillStyle, strokeStyle }) {
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

export function line (context, { x, y, x1, y1, color, stroke }) {
  context = setup(context, { color, stroke });

  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x1, y1);

  draw(context);
}

export function quadraticCurve (context, { x, y, x1, y1, xc, yc, strokeStyle, lineWidth }) {
  context = setup(context, { strokeStyle, lineWidth });

  context.beginPath();
  context.moveTo(x, y);
  context.quadraticCurveTo(xc, yc, x1, y1);

  draw(context);
}
