const PI = Math.PI;
const TAU = Math.PI * 2;

function setup (context, { color, stroke }) {
  if (stroke !== null) {
    context.strokeStyle = color || 'white';
    context.lineWidth = stroke || 1;
  }

  return context;
}

function draw (context, { fill }) {
  context.stroke();
  if (fill) {
    context.fillStyle = fill;
    context.fill();
  }

  return context;
}

/**
 * Clear canvas
 */
export function clear (context, { width, height }) {
  context.clearRect(0, 0, width, height);
};

export function circle (context, { x, y, r, percentage, color, stroke, fill, rotate }) {
  const radians = percentage ? percentage * TAU : TAU;
  context = setup(context, { color, stroke });

  context.beginPath();
  context.arc(x, y, r, 0, radians, false);

  draw(context, { fill: fill });
}

export function dot (context, { x, y, r, color }) {
  circle(context, { x, y, r, fill: color, stroke: null });
}

export function ellipse (context, { x, y, rx, ry, color, angle, stroke, fill }) {
  const diff = rx - ry;

  x = x + (diff / 2);
  angle = angle || 0;

  context = setup(context, { color, stroke });
  context.beginPath();
  context.ellipse(x, y, rx, ry, angle, 0, 2 * Math.PI); //

  draw(context, { fill });
}

export function rectangle (context, { x, y, w, h, color, stroke, fill }) {
  context = setup(context, { color, stroke });
  context.beginPath();
  context.rect(x, y, w, h);

  draw(context, { fill });
}

export function text (context, { x, y, text, font, fill }) {
  context.fillStyle = fill || 'white';
  context.font = `${font}`;
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

export function quadraticCurve (context, { x, y, x1, y1, xc, yc, color, stroke }) {
  context = setup(context, { color, stroke });

  context.beginPath();
  context.moveTo(x, y);
  context.quadraticCurveTo(xc, yc, x1, y1);

  draw(context);
}
