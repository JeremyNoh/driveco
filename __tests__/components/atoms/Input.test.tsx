import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {
  cleanup,
  fireEvent,
  render,
  screen,
} from '@testing-library/react-native';
import {Input} from '../../../src/components/atoms';

afterEach(cleanup);

describe('Input Atom', () => {
  it('renders correctly', () => {
    render(<Input name="test" onChange={() => {}} />).toJSON();
  });
  it('Match with snapshot', () => {
    const input = render(<Input name="test" onChange={() => {}} />).toJSON();
    expect(input).toMatchSnapshot();
  });
  it('should show good label', () => {
    const title = 'Test input';

    const {getByText} = render(<Input onChange={() => {}} name={title} />);

    const foundTitle = getByText(title);

    expect(foundTitle.props.children).toEqual(title);
  });
  it('should have the good placeholder', () => {
    const name = 'Test button';
    const onChangeMock = jest.fn();

    const placeholder = 'test placeholder';
    render(
      <Input placeholder={placeholder} onChange={onChangeMock} name={name} />,
    );

    fireEvent(screen.getByPlaceholderText(placeholder), 'onChangeText', 'ab');

    expect(onChangeMock).toHaveBeenCalledWith('ab');
  });
  it('should onChangeText Work', () => {
    const name = 'Test button';
    const placeholder = 'test placeholder';
    const onChangeTextMock = jest.fn();
    const CHANGE_TEXT = 'content';

    render(
      <Input
        placeholder={placeholder}
        onChange={onChangeTextMock}
        name={name}
      />,
    );

    fireEvent.changeText(screen.getByTestId('textInputId'), CHANGE_TEXT);
  });
});
