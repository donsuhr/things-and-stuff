// eslint-disable-next-line import/no-unresolved
import { pointDistance } from './1.2.1-point-distance.js';

const canvasEl = document.getElementById('MyCanvas');
/*
const points = [
    [1, 10],
    [2, 9],
    [3, 8],
    [4, 7],
];
*/
const points = [
    [1, 10],
    [10, 1],
    [3, 8],
    [2, 3],
    [12, 30],
    [40, 50],
    [5, 1],
    [12, 10],
];

pointDistance(canvasEl, points);
