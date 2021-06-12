/*
  Write a Point2D client that takes an integer value N
  from the command line, generates N random points in the
  unit square, and computes the distance separating the
  closest pair of points.
*/

type Points = [number, number][];

function distance(a: [number, number], b: [number, number]) {
    return Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
}

function drawPoints(canvasEl: HTMLCanvasElement, points: [number, number][]) {
    if (canvasEl.getContext) {
        const ctx = canvasEl.getContext('2d');
        ctx!.scale(10, 10);
        points.forEach(([x, y]) => {
            // let [x, y] = point;
            ctx!.fillRect(x, y, 1, 1);
        });
    }
}

export function sortByX(points: Points) {
    return [...points].sort((a, b) => a[0] - b[0]);
}
export function sortByY(points: [number, number][]) {
    return [...points].sort((a, b) => a[1] - b[1]);
}

function bruteForce(points: [number, number][]) {
    let min = 1200;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const dist = distance(points[i], points[j]);
            if (dist < min) {
                min = dist;
            }
        }
    }
    return min;
}

function closestInStrip(points: Points, d: number) {
    let minval = d;
    const pointsSortedByY = sortByY(points);
    /*
    for (let i = 0; i < pointsSortedByY.length; i++) {
        for (let j = i + 1; j < pointsSortedByY.length; j++) {
            if (pointsSortedByY[j][1] - pointsSortedByY[i][1] < minval) {
                minval = distance(pointsSortedByY[i], pointsSortedByY[j]);
            }
        }
    }
    minval = d;
    */
    for (let i = 0; i < pointsSortedByY.length; i++) {
        let j = i + 1;
        while (
            j < pointsSortedByY.length &&
            pointsSortedByY[j][1] - pointsSortedByY[i][1] < minval
        ) {
            minval = distance(pointsSortedByY[i], pointsSortedByY[j]);
            j++;
        }
    }

    return minval;
}

function notBruteForce(pointsSortedX: Points) {
    const n = pointsSortedX.length;
    if (n <= 3) {
        return bruteForce(pointsSortedX);
    }
    const mid = Math.floor(n / 2);
    const midPoint = pointsSortedX[mid];
    const left = pointsSortedX.slice(0, mid);
    const right = pointsSortedX.slice(mid);
    const dl = notBruteForce(left);
    const dr = notBruteForce(right);
    const d = Math.min(dl, dr);
    const strip = [];

    for (let i = 0; i < pointsSortedX.length; i++) {
        if (Math.abs(pointsSortedX[i][0] - midPoint[0]) < d) {
            strip.push(pointsSortedX[i]);
        }
    }
    return Math.min(d, closestInStrip(strip, d));
}

export function pointDistance(
    canvasEl: HTMLCanvasElement,
    points: [number, number][],
) {
    if (!points || points.length === 0) {
        return 0;
    }
    const pointsSortedX = sortByX(points);
    drawPoints(canvasEl, pointsSortedX);
    return notBruteForce(pointsSortedX);
}
