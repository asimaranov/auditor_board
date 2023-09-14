import { MainLayout } from './styled';
import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};
