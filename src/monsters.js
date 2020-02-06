export class Monsters {
  constructor() {
    this.health = 0;
    this.strength = 0;
    this.defense = 0;
    this.level = 0;
    this.name = "";
    this.random = 0;
    this.xp = 0;
  }
  
  // Set stat values for randomly generated monster. Number represents monster ID. //
  generateMonster() {
    this.random = Math.floor((Math.random() * 2) + 1);
    console.log(this.random)
  }

  masterMonsterList() {
    if (this.random === 1) {
      this.name = "draugr";
      this.health = 4;
      this.strength = 3;
      this.defense = 3;
      this.level = 1;  
      this.xp = 150;
    } else if (this.random === 2) {
      this.name = "Ghoul";
      this.health = 6;
      this.strength = 5;
      this.defense = 5;
      this.level = 1;
      this.xp = 200;      
    }
  }
}