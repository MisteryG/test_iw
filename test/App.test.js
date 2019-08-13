import App from '../src/App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App/>);
});

describe('<App/> rendering', () => { 
    it("renders correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
})