import NextLink from 'next/link';
import { Link as ChackraLink } from '@chakra-ui/react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export const Link = ({ children, href, ...props }: LinkProps) => {
  return (
    <NextLink href={href} passHref>
      <ChackraLink {...props}>{children}</ChackraLink>
    </NextLink>
  );
};
