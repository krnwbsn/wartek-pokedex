import Enzyme, { shallow } from 'enzyme';
import Layout from '@components/Layout';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<Layout />', () => {
  let TEST;
  beforeEach(() => {
    TEST = { children: null, loading: true };
  });

  test('render correctly', () => {
    const wrapper = shallow(<Layout {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
