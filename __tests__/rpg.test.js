import { Character } from './../src/character.js';

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
    expect(character.dex).toEqual(4);
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
    console.log(character);
    expect(character.strength).toEqual(8);
  });

});