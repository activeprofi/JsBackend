export const makePoint = (x, y) => m => m(x, y);
export const getX = point => point((x, y) => x);
export const getY = point => point((x, y) => y);
export const toString = point => `(${getX(point)}, ${getY(point)})`;
export const distance = (p1, p2) => Math.sqrt((getX(p2) - getX(p1)) ** 2 + (getY(p2) - getY(p1)) ** 2);

export const quadrant = point => {
    const x = getX(point);
    const y = getY(point);

    if (x > 0 && y > 0) {
        return 1;
    }

    if (x < 0 && y > 0) {
        return 2;
    }

    if (x < 0 && y < 0) {
        return 3;
    }

    if (x > 0 && y < 0) {
        return 4;
    }

    return -1;
};

export const symmetricalPoint = point => makePoint(-getX(point), -getY(point));