import {delay} from '../../../src/utils/timer';

jest.useFakeTimers();

describe('delay', () => {
  test('does something after 200ms', () => {
    const doSomething = jest.fn();

    delay(200, doSomething);

    jest.advanceTimersByTime(200);

    expect(doSomething).toHaveBeenCalled();
  });
});
