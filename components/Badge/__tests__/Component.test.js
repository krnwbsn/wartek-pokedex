import Enzyme, { shallow } from 'enzyme';
import Badge from '@components/Badge';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Badge />', () => {
  let TEST;
  beforeEach(() => {
    TEST = { types: [{ type: 'fire', color: '#fff' }] };
  });

  test('render correctly', () => {
    const wrapper = shallow(<Badge {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
