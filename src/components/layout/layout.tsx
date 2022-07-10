import type { ReactNode } from 'react';
import { Container, VStack, Heading } from '@chakra-ui/react';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <Container>
      <VStack gap={8}>
        <Heading mt={8}>{title}</Heading>
        {children}
      </VStack>
    </Container>
  );
};
