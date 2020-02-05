export class Character {
  constructor() {
    this.health = 0;
    this.strength = 0;
    this.dex = 0;
    this.magic = 0;
    this.characterName = "";
    this.level = 1;
    this.xp = 0;
    this.skill = 0;
  }

  spendSkill(skill, stat) {
    let
    if (this.skill < skill) {
      console.log("Not enough skill points")
    } else {
      this.skill = (this.skill - skill);
      this.stat
    }
  }
  
  incrementLevel(xp) {
    this.xp = (this.xp + xp);
    if (this.xp >= 1000) {
      this.level += 1;
      this.skill += (this.level * 2);
      this.xp = 0;
      console.log(this);
    }
  }

  selectName(name) {
    this.characterName = name;
    this.setClass();
    console.log(this);
  }  

  setClass() {
    if (this.characterName = "warrior") {
      this.health = 12;
      this.strength = 6;
      this.dex = 4;
      this.magic = 3;
      console.log(this);
    } else if (this.characterName = "mage") {
        this.health = 9;
        this.strength = 4;
        this.dex = 6;
        this.magic = 10;
        console.log(this);
    } else if (this.characterName = "rogue") {
        this.health = 10;
        this.strength = 7;
        this.dex = 5;
        this.magic = 4;
        console.log(this);
    } else if (this.characterName = "cursed") {
        this.health = 5;
        this.strength = 15;
        this.dex = 8;
        this.magic = 8;
        console.log(this);
    } else if (this.characterName = "deprived") {
        this.health = 4;
        this.strength = 5;
        this.dex = 2;
        this.magic = 5;
        console.log(this);
    }
  }
}

class Warrior extends Character {

}