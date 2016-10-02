const PI = Math.PI;
const TAU = Math.PI * 2;

const setup = function (context, { color, stroke }) {
    if (stroke !== null) {
        context.strokeStyle = color || 'white';
        context.lineWidth = stroke || 1;
    }

    return context;
}

const draw = function (context, options) {
    const fill = options && options.fill;
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
const clear = function    (context, { width, height }) {
    context.clearRect(0, 0, width, height);
};

/**
 * Draw circle
 */
const circle = function (context, { x, y, r, percentage, color, stroke, fill, rotate }) {
    const radians = percentage ? percentage * TAU : TAU;
    context = setup(context, { color, stroke });

    context.beginPath();
    context.arc(x, y, r, 0, radians, false);

    draw(context, { fill: fill });
}

/**
 * Draw dot
 */
const dot = function (context, { x, y, r, color }) {
    circle(context, { x, y, r, fill: color, stroke: null });
}

/**
 * Draw ellipse
 */
const ellipse = function (context, { x, y, rx, ry, color, angle, stroke, fill }) {
    const diff = rx - ry;

    x = x + (diff / 2);
    angle = angle || 0;

    context = setup(context, { color, stroke });
    context.beginPath();
    context.ellipse(x, y, rx, ry, angle, 0, 2 * Math.PI); //

    draw(context, { fill });
}

/**
 * Draw rectangle
 */
const rectangle = function (context, { x, y, w, h, color, stroke, fill }) {
    context = setup(context, { color, stroke });
    context.beginPath();
    context.rect(x, y, w, h);

    draw(context, { fill });
}

/**
 * Render text
 */
const text = function (context, { x, y, text, font, fill, size, weight }) {
    font = font || 'Helvetica';
    size = size || 16;
    weight = weight || 400;

    const settings = `${weight} ${size}px ${font}`;

    context.fillStyle = fill || 'white';
    context.font = settings;
    context.fillText(text, x, y);
}

/**
 * Draw line
 */
const line = function (context, { x, y, x1, y1, color, stroke }) {
    context = setup(context, { color, stroke });

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x1, y1);

    draw(context);
};

/**
 * Draw curve
 */
const quadraticCurve = function (context, { x, y, x1, y1, xc, yc, color, stroke }) {
    context = setup(context, { color, stroke });

    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(xc, yc, x1, y1);

    draw(context);
};

export { clear, circle, ellipse, dot, rectangle, text, line, quadraticCurve };
