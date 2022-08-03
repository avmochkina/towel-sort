
// You should implement your task here.

module.exports = function towelSort (matrix) { 
    let array = [];

    if(Array.isArray(matrix) && matrix.length) {

        for(i=0; i < matrix.length; i++) {
            if(i % 2 !== 0) {
                matrix[i] = matrix[i].reverse();
            }
            let reverse = matrix[i];
            for(j = 0; j < reverse.length; j ++) {
                array.push(reverse[j]);
            }      
        }
    }           
    return array;    
}
