const profile = {
    username: "Jacob",
  playTime: 300,


changeUsername(newName) {
  this.username = newName;
  return `${this.username} has ${this.playTime} active hours!`;
},

updatePlayTime(playTime) {
  this.playTime += playTime; 
},

  getInfo() {
  return `${this.username} has ${this.playTime} active hours!`
},

};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"