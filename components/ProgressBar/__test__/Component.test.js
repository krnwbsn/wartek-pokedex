import Enzyme, { shallow } from 'enzyme';
import ProgressBar from '@components/ProgressBar';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('<ProgressBar />', () => {
  let TEST;
  beforeEach(() => {
    TEST = {
      completed: 50,
    };
  });

  test('render correctly', () => {
    const wrapper = shallow(<ProgressBar {...TEST} />);
    expect(wrapper.exists()).toBe(true);
  });
});
