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
