module.exports = function solveEquation(equation) {
    let arr = equation.split(' ');
    let a = arr[0]; 
    let b = arr[4];
    let c = arr[8];
    let newArr = [];
    let x1;
    let x2;

    if (arr[3] == '-') {
        b = -b;
    }
    if (arr[7] == '-') {
        c = -c;
    }

    let d = Math.sqrt(b * b - 4 * a * c);

    if (d > 0) {
        x1 = Math.round((-b - d) / (2 * a));
        x2 = Math.round((- b + d) / (2 * a));
        newArr.push(x1);
        newArr.push(x2);
    } else if (d == 0) {
        x1 = Math.round(-(b / (2 * a)));
        newArr.push(x1);
    } else {
        newArr = [];
    }

    function filter(a,b){
      return a - b;
    }

    return newArr.sort(filter);
  }