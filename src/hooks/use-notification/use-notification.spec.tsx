import { renderHook } from '@testing-library/react';
import { useNotification, toastSetup } from './use-notification';

const toast = jest.fn();
const notificationTitle = 'title';

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn(() => toast),
}));

describe('useNotification', () => {
  it('should display success notification', () => {
    const successPayload = {
      title: notificationTitle,
      description: '',
      status: 'success',
      ...toastSetup,
    };

    const {
      result: {
        current: { displaySuccessNotification },
      },
    } = renderHook(() => useNotification());

    displaySuccessNotification({ title: notificationTitle });

    expect(toast).toHaveBeenCalledWith(successPayload);
  });
  it('should display error notification', () => {
    const errorPayload = {
      title: notificationTitle,
      description: 'Something went wrong.',
      status: 'error',
      ...toastSetup,
    };

    const {
      result: {
        current: { displayErrorNotification },
      },
    } = renderHook(() => useNotification());

    displayErrorNotification({ title: notificationTitle });

    expect(toast).toHaveBeenCalledWith(errorPayload);
  });
});
