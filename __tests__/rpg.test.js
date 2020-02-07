import { Character } from './../src/character.js';
import { Items } from './../src/items.js';
import { Monsters } from  './../src/monsters.js';
import { Battle } from './../src/battle.js';


describe('Character', () => {
  let character;

  beforeEach( ()=> {
    character = new Character();
  });
  
  test('should return values stored in Character object', () => {
    let health = 12;
    character.health = health;
    expect(character.health).toEqual(12);
  });

  test('should set character name based on user input', () => {
    let characterSelect = "warrior"
    character.selectName(characterSelect)
    expect(character.characterName).toEqual("warrior");
  });

  test('should check character stats based on user selection', () => {
    let characterSelect = "warrior";
    character.selectName(characterSelect)
    expect(character.dex).toEqual(6);
  });

  test('should increment level based on aquired/factored xp gain.', () => {
    let xp = 1001;
    character.incrementLevel(xp);
    expect(character.level).toEqual(2);
  });

  test('should exchange skill for stats', () => {
    character.skill = 10;
    character.selectName("warrior");
    character.spendSkill(2, "strength");
    expect(character.strength).toEqual(10);
  });

});

// Describe Items //

describe('Items', () => {
  let items;

  beforeEach( () => {
    items = new Items();
  });
  
  test('should test for elements in the array', () => {
    expect(items.starterSword[0]).toEqual(1);
  });
});

// Random Enemy Generator //

describe('generateMonster', () => {
  let monsters;

  beforeEach( () => {
    monsters = new Monsters();
  });

  test('should return a random number', () => {
    monsters.generateMonster();
    expect(monsters.random).toBeGreaterThanOrEqual(1);
  });

  test('should return a random number', () => {
    monsters.generateMonster();
    expect(monsters.random).toBeLessThanOrEqual(2);
  });

  test('should test for a name pass', () => {
    monsters.generateMonster();
    monsters.masterMonsterList();
    expect(monsters.name).toMatch("");
  });
});

describe('Battle', () => {
  let battle;

  beforeEach( () => {
    battle = new Battle();
  });

  test('should', () => {
    battle.battleStart();
    expect(monsterHealth).toEqual(0);
  });
});