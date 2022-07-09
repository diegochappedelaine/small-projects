import { useToast } from '@chakra-ui/react';
import type { UseToastOptions } from '@chakra-ui/react';
import type {
  UseNotification,
  SuccesNotificationPayload,
  ErrorNotificationPayload,
} from './use-notification.types';

export const toastSetup: UseToastOptions = {
  duration: 5000,
  isClosable: false,
  position: 'top-right',
};

export const useNotification = (): UseNotification => {
  const toast = useToast();

  const displaySuccessNotification = ({
    title,
    description,
  }: SuccesNotificationPayload) =>
    toast({
      title,
      description: description ?? '',
      status: 'success',
      ...toastSetup,
    });

  const displayErrorNotification = ({
    title,
    description,
  }: ErrorNotificationPayload) =>
    toast({
      title: title ?? 'Error',
      description: description ?? 'Something went wrong.',
      status: 'error',
      ...toastSetup,
    });

  return { displaySuccessNotification, displayErrorNotification };
};
