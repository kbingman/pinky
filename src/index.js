/**
 * Basic fullscreen canvas
 */
export function initCanvas (canvas, { width, height, ratio }) {
  const context = canvas.getContext('2d');

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  context.scale(ratio, ratio);
  
  return context;
}

/**
 * Clear canvas
 */
export function clearCanvas (context, { width, height }) {
  context.clearRect(0, 0, width, height);
};
