import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {cleanup, fireEvent, render} from '@testing-library/react-native';
import {Button} from '../../../src/components/atoms';

afterEach(cleanup);

describe('Button Atom', () => {
  it('renders correctly', () => {
    render(<Button onPress={() => {}} title="test" />).toJSON();
  });
  it('Match with snapshot', () => {
    const button = render(<Button onPress={() => {}} title="test" />).toJSON();
    expect(button).toMatchSnapshot();
  });
  it('should show good Title', () => {
    const title = 'Test button';

    const {getByText} = render(<Button onPress={() => {}} title={title} />);

    const foundTitle = getByText(title);

    expect(foundTitle.props.children).toEqual(title);
  });
  it('should call function', () => {
    const title = 'Test button';
    const onPressMock = jest.fn();
    const eventData = {
      nativeEvent: {
        pageX: 20,
        pageY: 30,
      },
    };

    const {getByTestId} = render(
      <Button onPress={onPressMock} title={title} />,
    );

    fireEvent.press(getByTestId('buttonId'), eventData);

    expect(onPressMock).toHaveBeenCalledWith(eventData);
  });
});
