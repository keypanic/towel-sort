
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if(!matrix) return [];
  a = [];
  matrix.forEach((array, i) => {
    if(i%2)a.push(array.reverse()); 
    else  a.push(array);
  });
  return [].concat(...a);
}
