import type { ToastId } from '@chakra-ui/react';

export interface SuccesNotificationPayload {
  title: string;
  description?: string;
}

export interface ErrorNotificationPayload {
  title?: string;
  description?: string;
}

type DisplaySuccessNotification = ({
  title,
  description,
}: SuccesNotificationPayload) => ToastId;

type DisplayErrorNotification = ({
  title,
  description,
}: ErrorNotificationPayload) => ToastId;

export interface UseNotification {
  displaySuccessNotification: DisplaySuccessNotification;
  displayErrorNotification: DisplayErrorNotification;
}
