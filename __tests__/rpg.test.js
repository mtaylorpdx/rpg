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

  

});