export const lsq = (X: number[], Y: number[]): (x: number) => number => {
    if (X.length === 1) {
        return (x: number) => Y[0]
    }
    
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumXSq = 0;
    const n = X.length;

    for (let i = 0; i < n; i++) {
        sumX += X[i];
        sumY += Y[i];
        sumXY += X[i] * Y[i];
        sumXSq += X[i] * X[i];
    }

    const m = (sumXY - sumX * sumY / n) / (sumXSq - sumX * sumX / n);
    const b = (sumY - m * sumX) / n;

    return (x: number) => (m * x + b)
}