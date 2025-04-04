import { Alert } from "@chakra-ui/react";


interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <Alert color="red">{message}</Alert>
);