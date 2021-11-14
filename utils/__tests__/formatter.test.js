import {
  getFormattedId,
  getPokemonTypeColor,
  formattedName,
} from '@utils/formatter';

describe('getFormattedId()', () => {
  it(`Returns string id`, () => {
    const TEST = 1;
    const RESULT = '#001';

    expect(getFormattedId(TEST)).toBe(RESULT);
  });
});

describe('getPokemonTypeColor()', () => {
  it(`Returns types`, () => {
    const TEST = ['fire'];
    const RESULT = [{ type: 'fire', color: '#EE8130' }];

    expect(getPokemonTypeColor(TEST)).toStrictEqual(RESULT);
  });
});

describe('formattedName()', () => {
  it(`Returns array of type and color`, () => {
    const TEST = 'burbasaur';
    const RESULT = 'Burbasaur';

    expect(formattedName(TEST)).toBe(RESULT);
  });
});
