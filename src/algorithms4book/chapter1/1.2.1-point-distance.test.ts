/**
 * @jest-environment jsdom
 */
import { pointDistance, sortByX } from './1.2.1-point-distance';

let canvasEl: HTMLCanvasElement | null;
const fillRectMock = jest.fn();

// @ts-ignore
HTMLCanvasElement.prototype.getContext = () => ({
    scale: () => {},
    fillRect: fillRectMock,
});

beforeEach(() => {
    canvasEl = document.createElement('canvas');
    document.body.appendChild(canvasEl);
});

afterEach(() => {
    canvasEl!.parentNode!.removeChild(canvasEl!);
    canvasEl = null;
    fillRectMock.mockReset();
});

test('it draws points', () => {
    const points: [number, number][] = [
        [1, 10],
        [10, 1],
        [2, 9],
        [3, 8],
        [4, 7],
    ];

    const penciledOut = Math.sqrt((3 - 4) ** 2 + (8 - 7) ** 2);

    const result = pointDistance(canvasEl!, points);
    expect(fillRectMock).toHaveBeenCalledTimes(5);
    expect(result).toBe(penciledOut);
});

test('empty set', () => {
    const result = pointDistance(canvasEl!, []);
    expect(result).toBe(0);
});

test('no canvas', () => {
    // @ts-ignore
    canvasEl!.getContext = false;
    const points: [number, number][] = [
        [1, 10],
        [10, 1],
        [2, 9],
        [3, 8],
        [4, 7],
    ];
    pointDistance(canvasEl!, points);
    expect(fillRectMock).toHaveBeenCalledTimes(0);
});

test('it more', () => {
    const points: [number, number][] = [
        [12, 30],
        [12, 10],
    ];
    const result = pointDistance(canvasEl!, points);
    expect(result).toBe(20);
});

test('it sorts the points', () => {
    const points: [number, number][] = [
        [4, 7],
        [1, 10],
        [10, 1],
        [3, 8],
    ];

    const answer = [
        [1, 10],
        [3, 8],
        [4, 7],
        [10, 1],
    ];

    expect(sortByX(points)).toEqual(answer);
});

test('more points', () => {
    const points: [number, number][] = [
        [1, 10],
        [10, 1],
        [3, 8],
        [2, 3],
        [12, 30],
        [40, 50],
        [5, 1],
        [12, 10],
    ];

    const penciledOut = Math.sqrt((1 - 3) ** 2 + (10 - 8) ** 2);
    const result = pointDistance(canvasEl!, points);
    expect(result).toBe(penciledOut);
});

test('python points', () => {
    const points: [number, number][] = [
        [1, 1],
        [12, 30],
        [40, 50],
        [40, 70],
        [5, 1],
        [11, 30],
    ];

    const penciledOut = Math.sqrt((11 - 12) ** 2 + (30 - 30) ** 2);
    const result = pointDistance(canvasEl!, points);
    expect(result).toBe(penciledOut);
});
