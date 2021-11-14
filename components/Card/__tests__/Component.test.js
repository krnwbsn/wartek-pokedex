import Enzyme, { shallow } from 'enzyme';
import Card from '@components/Card';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Card />', () => {
  let TEST;
  beforeEach(() => {
    TEST = {
      color: '#fff',
      name: 'burbasaur',
      pokemonId: '#001',
      id: 1,
      types: [{ type: 'fire', color: '#000' }],
    };
  });

  test('render correctly', () => {
    const wrapper = shallow(<Card {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
