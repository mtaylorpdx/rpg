export class Character {
  constructor() {
    this.health = 0;
    this.strength = 0;
    this.skill = 0;
    this.magic = 0;
    this.characterName = "";
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
      this.skill = 4;
      this.magic = 3;
      console.log(this);
    }
    if (this.characterName = "mage") {
      this.health = 9;
      this.strength = 4;
      this.skill = 6;
      this.magic = 10;
      console.log(this);
    }
    if (this.characterName = "rogue") {
      this.health = 10;
      this.strength = 7;
      this.skill = 5;
      this.magic = 4;
      console.log(this);
    }
    if (this.characterName = "cursed") {
      this.health = 5;
      this.strength = 15;
      this.skill = 8;
      this.magic = 8;
      console.log(this);
    }
    if (this.characterName = "deprived") {
      this.health = 4;
      this.strength = 5;
      this.skill = 2;
      this.magic = 5;
      console.log(this);
    }
  }
}

class Warrior extends Character {

}