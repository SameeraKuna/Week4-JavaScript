// Number Analyzer
// Check using formulas/logical checks:
// Even/Odd → n % 2
// Positive/Negative/Zero
// Prime → loop check up to sqrt(n)
// Perfect square → Math.sqrt(n) % 1 === 0
// Palindrome → reverse number and compare

let num = Number(prompt("Enter a number"));

// 1.To check whether number is even or odd?
if(num%2 == 0){
    console.log("Number is Even");
}
else {
    console.log("Number is Odd");
}

//2. To check whether number is positive/negative/zero?
if(num == 0){
    console.log("Number is Zero");
}
else if (num > 0){
    console.log("Number is Positive");
}
else{
    console.log("Number is Negative");
}

//3. To check whether number is Prime Number?
// A prime is an integer greater than 1 that has no positive divisors other than 1 and itself (e.g., 2, 3, 5, 7, 11…).
// Numbers 0, 1, and all negatives are not prime.
// Logic --->Test divisors up to √n (no need to check beyond that).Why √n?-->
// If n = a × b and both a and b were > √n, their product would exceed n.So if n has a factor, at least one factor is ≤ √n.
function isPrime(num) {
  if (!Number.isInteger(num) || num <= 1) return false;
  if (num <= 3) return true;          // 2, 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check 5,7,11,13,... up to sqrt(n)
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 5; i <= limit; i += 2) // step by 2 (odd only)
    { 
    if (num % i === 0) return false;
  }
  return true;
}
if(isPrime(num) == true){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}

//4. To check whether number is Perfect Square?
// An integer n is a perfect square if there exists an integer k such that k × k = n (e.g., 0, 1, 4, 9, 16, 25, …).
// "n" must be a finite, non-negative integer
function isPerfectSquare(num) {
  if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) return false;
  const r = Math.sqrt(num);
  return Number.isInteger(r); 
}
if(isPerfectSquare(num) == true ){
    console.log("Number is a Perfect Square");
}
else{
    console.log("Number is not a Perfect Square");
}

//5. To check whether number is Palindrome?
// Palindrome------> Number and its reverse should result the same.
// Logic---->1.check whether number is floating point then convert to integer.
// 2.check whether number is negative or not if negative return false as for negative numbers always minus is at left.
// 3.Convert number to string.
function isPalindromeNumber_str(num) {
    if (!Number.isInteger(num)) return false;
    if (num < 0) return false;
    const checkpal = String(num);
    //   const rs = s.split('').reverse().join('');
    const rs = [...checkpal].reverse().join("");
    return checkpal === rs;
}
if(isPalindromeNumber_str(num) == true){
    console.log("Number is a Palindrome");
}
else{
    console.log("Number is not a Palindrome");
}
