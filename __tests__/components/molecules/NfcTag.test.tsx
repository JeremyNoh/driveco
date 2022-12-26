import 'react-native';

import React from 'react';

// // Note: test renderer must be required after react-native.
import {cleanup, render, waitFor} from '@testing-library/react-native';
import {NfcTag} from '../../../src/components/molecules';

describe('NFC-Tag Molecule', () => {
  afterEach(() => cleanup());

  beforeEach(() => {
    jest.mock('react-native-nfc-manager', () => ({
      __esModule: true,
      default: {
        isSupported: jest.fn().mockReturnValue(false),
        isEnabled: jest.fn().mockReturnValue(true),
        start: jest.fn().mockResolvedValue(true),
      },
    }));
  });

  it('renders correctly', () => {
    render(<NfcTag />).toJSON();
  });
  it('Match with snapshot', () => {
    const input = render(<NfcTag />).toJSON();
    expect(input).toMatchSnapshot();
  });
  it('should show  Loading', () => {
    const {getByTestId} = render(<NfcTag />);
    expect(getByTestId('loadingNfcId').props.children).toBeDefined();
  });
  it('should show not working', async () => {
    const {getByTestId} = render(<NfcTag />);
    const wrapperForNotAvailableNFC = await waitFor(() =>
      getByTestId('notAvailableNfcId'),
    );
    expect(wrapperForNotAvailableNFC.props.children).toBeDefined();
  });
});
