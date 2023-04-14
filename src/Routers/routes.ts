import React from 'react';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Recados from '../Pages/Notes';

export type TMapRoutes = {
  label: string;
  path: string;
  // eslint-disable-next-line no-undef
  component: React.FC;
};

export const routes: TMapRoutes[] = [
  {
    label: 'Login',
    path: '/',
    component: Login,
  },
  {
    label: 'Cadastro',
    path: '/Cadastro',
    component: Cadastro,
  },
  {
    label: 'Recados',
    path: '/Recados',
    component: Recados,
  },
];
