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
    if (this.skill < skill) {
      console.log("Not enough skill points")
    } else if (stat = "strength") {
      this.skill = (this.skill - skill);
      this.strength = (this.strength + skill);
    } else if (stat = "dex") {
      this.skill = (this.skill - skill);
      this.dex = (this.dex + skill);
    } else {
      this.skill = (this.skill - skill);
      this.magic = (this.magic + skill);
    }
  }
  
  incrementLevel(xp) {
    this.xp = (this.xp + xp);
    if (this.xp >= 1000) {
      this.level += 1;
      this.skill += (this.level * 2);
      this.xp = 0;
    }
  }

  selectName(name) {
    this.characterName = name;
    this.setClass();
  }  

  setClass() {
    // Class stat total max is 30 //

    // Warrior is big health and strength dependent //
    if (this.characterName = "warrior") {
      this.health = 12;
      this.strength = 8;
      this.dex = 6;
      this.magic = 4;
    // Mage is magic and dex dependent //
    } else if (this.characterName = "mage") {
        this.health = 9;
        this.strength = 4;
        this.dex = 6;
        this.magic = 11;
    // Rogue is dex dependent //
    } else if (this.characterName = "rogue") {
        this.health = 10;
        this.strength = 6;
        this.dex = 10;
        this.magic = 4;
      // Cursed is dependent on buffs for dex and survivability //
    } else if (this.characterName = "cursed") {
        this.health = 5;
        this.strength = 10;
        this.dex = 7;
        this.magic = 8;
      //  You're screwed... //
    } else if (this.characterName = "deprived") {
        this.health = 4;
        this.strength = 5;
        this.dex = 2;
        this.magic = 5;
    }
  }
}

class Warrior extends Character {

}