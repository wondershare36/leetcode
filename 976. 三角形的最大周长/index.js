var largestPerimeter = function (A = []) {
  A.sort((a, b) => b - a)
  for (let i = 0; i < A.length-2; i++) {
    let a=A[i]
    let b=A[i+1]
    let c=A[i+2]
    console.log(a,b,c);
    if(a<b+c)return a+b+c
  }
  return 0
};
