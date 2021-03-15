
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let sort = [];
    if (matrix === undefined) {
        return sort;
    }
    console.log(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        if ((i === 0) || (i % 2 === 0)) {
            for (let j = 0; j < matrix[i].length; j++) {
                sort.push(matrix[i][j]);
            }
        }

        else {
            for (let j = (matrix[i].length - 1); j >= 0; j--) {
                sort.push(matrix[i][j]);
            }
        }
    }

    return sort;
}
