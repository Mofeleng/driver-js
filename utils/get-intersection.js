function getIntersection(A, B, C, D) {
    const xTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x);
    const yTop = (C.y - A.y) * (A.x - B.x) - (C.x - A.x) * (A.y - B.y);
    const bottom = (D.y - C.y) * (B.x - A.x) - (D.x - C.x) * (B.y - A.y);

    if (bottom != 0) {
        const x = xTop/bottom;
        const y = yTop/bottom;

        if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
            return {
                x: lerp(A.x, B.x, x),
                y: lerp(A.y, B.y, x),
                offset: x
            }
        }
    }

    return null;
}