export const crosshair = (context, { x, y, size, color }) => {
    const l = size ? size / 2 : 20;

    context.beginPath();
    context.strokeStyle = color || 'hsla(0, 100%, 100%)';
    context.moveTo(x - l, y);
    context.lineTo(x + l, y);
    context.moveTo(x, y - l);
    context.lineTo(x, y + l);
    context.stroke();
};
