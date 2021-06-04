function maxPossible(num1, num2) {
  let ind;
  let strNum1 = num1.toString().split("");
  let strNum2 = num2.toString().split("");

  strNum2.sort();
  console.log(strNum2);
  for (let i = 0; i < strNum1.length; i++) {
    if (strNum1[i] < strNum2[strNum2.length - 1]) {
      strNum1[i] = strNum2[strNum2.length - 1];
      strNum2.pop();
    }
  }
  return strNum1.join("");
}
console.log(maxPossible(523, 176));
