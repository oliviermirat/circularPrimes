/* Find all the "circular" numbers of a number and return them in an array */
/* For example: 135 will return [135,513,351] */
function findCircular(num){
  var str=String(num);
  var res=[];
  var n=str.length;
  for (var i=0;i<n;i++){
    res.push(parseInt(str));
    var last=str[n-1];
    str=str.substring(0,n-1);
    str=last+str;
  }
  return res;
}

/* Returns 1 if the input is a prime number and 0 otherwise */
function isPrime(num){
  for (var i=2; i<num;i++){
    if (num%i===0){
      return 0;
    }
  }
  return 1;
}

/* Prints all circular primes below or equal to input */
function nbCircularPrime(num){
  var circularPrimes=[];
  for (var i=2; i<=num; i++){
    var circular=findCircular(i);
    var isCirPri=1;
    for (var j=0; j<circular.length; j++){
      if (!isPrime(circular[j])){
        isCirPri=0;
      }
    }
    if (isCirPri){
      circularPrimes.push(i);
    }
  }
  console.log(circularPrimes);
}

/* Circular Prime Print Examples */

nbCircularPrime(10) //Should print: [2, 3, 5, 7]

nbCircularPrime(100) //Should print: [2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97]
