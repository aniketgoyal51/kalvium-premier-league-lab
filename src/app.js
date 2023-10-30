//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName,managerAge,currentTeam,trophiesWon){
  return [managerName,managerAge,currentTeam,trophiesWon];

}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(formation){
  if(formation.length===0){
    return null;
  } 
  let formationarray={
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2]
  }

  return formationarray;
}
createFormation(formation)

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
console.log(players)
function filterByDebut(year){
  if(year===undefined){
    return [];
  }
  const filteredPlayers = players
  .filter((player) => player.debut === year)
  .map((player) => player);

  return filteredPlayers;
}
var filteredPlayers = filterByDebut(2005); // Returns an empty array when no parameter is passed
console.log(filteredPlayers);

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position){
  const run=players.filter((player)=>player.position === position).map((player)=>player)
  return run
}
filterByPosition()

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardname){
  list=[];
  for (i=0; players.length>i;i++){
    for(j=0; players[i].awards.length>j;j++){
      if(players[i].awards[j].name===awardname){
        list.push(players[i]) 
      }
    }
  }
  return list
}



//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let arr = [];
  let total = 0;
  for (let i = 0; i < players.length; i++){
      for (let j = 0; j < players[i].awards.length; j++) {
        if (players[i].awards[j].name == awardName){
          total++;       
        }
      }
    if (total == noOfTimes){
      arr.push(players[i]);
    }
    total = 0;
  }
  return arr;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var data = awardsData.filter(player => player.country == country);
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  var dataofplayer = players.filter(player => (player.age < age && player.team == team && player.awards.length >= noOfAwards));
  return dataofplayer;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge(player){
  const plage=player.age
  const sortage=plage.sort()
  return sortage.reverse()
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function  FilterByTeamxSortByNoOfAwards(player){
  for (let i=0;i<player.length;i++){
    const award=player[i].awards.length
    const desc=award.sort()
    return desc.reverse()
  }
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
