function isPrime(number) {
    if (number == 0 || number == 1) return false;
    let root = Math.floor(Math.sqrt(number));
    for (let i = 2; i <= root; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}


for(let i = 0; i < 100; i++) {
  if (isPrime(i) === true) {
    for(let j = 0; j < i; j++) {
      console.log("Hello World", i);
    }
  }
}

//console.log(isPrime(11)); //true
//console.log(isPrime(36)); //false
