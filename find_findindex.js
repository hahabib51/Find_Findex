function find(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return array[i]
      }
    }
  }

  function findIndex(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return i;
      }
    }
    return -1;
  }



const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];
function findUserByUsername(usersArray, username){
    return users.Array.find(function(user){
        return user.username === username;
    })
}

findUserByUsername(users, 'mlewis') 
findUserByUsername(users, 'pmanning') //undefined




const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') 
removeUser(users, 'pmanning') 


function removeUser(usersArray, username) {
    let foundIndex = users.Array.findIndex(function(user){
        return user.username === username;
    })
    if(foundIndex === -1) return
    return usersArray.splice(foundIndex, 1)[0];
}