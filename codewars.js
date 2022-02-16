// function points(games) {
//   return games.map(game=>{
//     if (Number(game.slice(0, 1)) > Number(game.slice(2, 3))) {
//       console.log(Number(game.slice(2, 3)))
//       console.log(Number(game.slice(0, 1)))
//     return game = 3;
//    }
//      if(Number(game.slice(0,1))<Number(game.slice(2,3))){
//     return game = 0;
//    }
//      if(Number(game.slice(0,1))==Number(game.slice(2,3))){
//     return game = 1;
//    }
//   }).reduce((previousValue, number) => {return previousValue + number},0 )
// }
// console.log(points(['1:1','2:2','3:3','4:4','2:2','3:3','4:4','3:3','4:4','4:4']))

// function getMiddle(s)
// {
//   console.log(s.length%2==0 )
//   return (s.length)%2 == 0 ?
//     s.slice((s.length-1)/2, (s.length-1)/2 + 2)
//   : s.slice(s.length/2, s.length/2 + 1 )
// }
// console.log(getMiddle('123456'))

// function reverseWords(str) {
//   return str.split(' ').map(a => a.split('').reverse().join('')).join(' ');

// }
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));


// function findUniq(arr) {
//   return arr.filter((el, i, ar) => ar.indexOf(el) === ar.lastIndexOf(el));
//   // or
//   // return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
// }
// console.log(findUniq([0, 0, 1 ]))


//   wrap(17,32,11) => 162
//   wrap(13,13,13) => 124
// wrap(1, 3, 1) => 32
  
// function wrap(height, width, length){
//   const a = width * height;
//   const b = width * length;
//   const c = length * height;

  

//   if (a >= b && a >=c) {
//     return width * 2 + height * 2 + length * 4 + 20;
//   }
//   if (c >= b && c >= a) {
//     return width * 4 + height * 2 + length * 2 + 20;
//   }
//   if (b >= c && b >= a) {
//     return width * 2 + height * 4 + length * 2 + 20;
//   }
// }
// console.log(wrap(1, 3, 1))


// function remove(string) {
//   if (string.endsWith('!')) {
//     return string.slice(0, string.length - 1);
//   }
//   return string
// }
// // remove("Hi!") === "Hi"
// // remove("Hi!!!") === "Hi!!"
// // remove("!Hi") === "!Hi"
// // remove("!Hi!") === "!Hi"
// // remove("Hi! Hi!") === "Hi! Hi"
// // remove("Hi") === "Hi";

// console.log(remove('hi!!!'));

// function isPalindrome(x) {
//  const newX =  x.toLowerCase();
//  return newX.split('').reverse().join('')===newX
// }
// console.log(isPalindrome('Aba'));