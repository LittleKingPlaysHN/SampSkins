import { Button } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

export type HeaderLinkProps = {
  href: string;
  children?: ReactNode;
};

export default function HeaderLink({ href, children }: HeaderLinkProps) {
  const router = useRouter();
  return (
    <NextLink href={href} passHref>
      <Button
  component="a"
  sx={{
    color: (theme) =>
      router.pathname === href ? theme.palette.primary.main : '#d50dfdff',
  }}
>
  {children}
</Button>
    </NextLink>
  );
}
