export class Monsters {
  constructor() {
    this.health = 0;
    this.strength = 0;
    this.dex = 0;
    this.magic = 0;
    this.level = 0;
    this.name = "";
    this.random = 0;
  }

  generateMonster() {
    this.random = Math.floor((Math.random() * 1) + 1);
    console.log(this.random)
  }
}