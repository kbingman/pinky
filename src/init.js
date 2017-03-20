/**
 * Basic fullscreen canvas
 */
export default function init (canvas, { width, height, ratio }) {
  const context = canvas.getContext('2d');
  ratio = ratio || 1;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  context.scale(ratio, ratio);

  return context;
}
