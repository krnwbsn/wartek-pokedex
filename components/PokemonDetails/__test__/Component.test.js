import Enzyme, { shallow } from 'enzyme';
import PokemonDetails from '@components/PokemonDetails';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<PokemonDetails />', () => {
  let TEST;
  beforeEach(() => {
    TEST = {
      id: 1,
      pokemonId: '#001',
      pokemonName: 'burbasaur',
      description: 'test',
      eggGroups: 'test',
      eggCycle: 1,
      height: 1,
      weight: 1,
      types: [{ type: 'fire', color: 'black' }],
      stats: [{ key: 'test', value: 10 }],
      abilities: 'test',
    };
  });

  test('render correctly', () => {
    const wrapper = shallow(<PokemonDetails {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
