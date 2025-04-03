import { Alert } from '@mantine/core';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Alert color="red">{message}</Alert>
);