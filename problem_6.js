var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var largeFriend = friends[0]
const findLargeFriend = () => {
    for(let i = 0; i < friends.length; i++){
        if(friends[i].length > largeFriend.length){
            largeFriend = friends[i]
        }
    }
}
findLargeFriend()
console.log(largeFriend)
