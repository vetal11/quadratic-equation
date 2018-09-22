module.exports = function solveEquation(equation) {
  
  equation = equation.replace(/\s/g,'')
 
  let a = equation.split('*')[0];
  let b = equation.split('*')[1].split('x^2')[1];
  let c = equation.split('*')[2].split('x')[1];
  
  let D = b * b - 4 * a * c;
  let x1 = (-b + Math.sqrt(D)) / (2 * a);
  let x2 = (-b - Math.sqrt(D)) / (2 * a);
  
  if (a > 0) {
    let temp = x1
    x1 = x2
    x2 = temp
  }  

  return [Math.round(x1), Math.round(x2)];    
}