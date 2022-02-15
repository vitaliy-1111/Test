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