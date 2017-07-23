import Pinky from '../../';

const { innerWidth: width, innerHeight: height, devicePixelRatio: ratio } = window;
const canvas = document.getElementById('canvas');
const pinky = Pinky(canvas, { width, height, ratio });

pinky.circle({ x: width / 2, y: height / 2, r: 4 }, { fillStyle: 'lime' });
