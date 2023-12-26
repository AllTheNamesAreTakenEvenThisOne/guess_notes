function findSubsetSum (s, k, subset = []) {

    //basecase #1
    if (k === 0) {
        return [subset];
    }

    //basecase #2
    if (s.length === 0 || s.reduce((acc, curr) => acc + curr) < k) {
        return [];
    }

    const incl = findSubsetSum(s.slice(1), k - s[0], [...subset, s[0]]);

    // if (incl !== null) {
    //     return [s[0], ...incl];
    // }

    const excl = findSubsetSum(s.slice(1), k, subset);

    // if (excl !== null) {
    //     return excl;
    // }

    // return null;
    return [...incl, ...excl];

}

const s = [12, 1, 1, 5, 9, 2, 12, 10];
const k = 3;


const result = findSubsetSum(s, k);

console.log(result);


