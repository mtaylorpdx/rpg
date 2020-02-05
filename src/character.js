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
    console.log(this);
  }  
}