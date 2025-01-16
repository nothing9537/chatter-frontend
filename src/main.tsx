import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/app/providers/theme-provider';

import { BuildComponentsTree } from '@/shared/components/build-components-tree';
import { App } from '@/app/App';

import '@/app/styles/index.css';

const AppTree = [StrictMode, BrowserRouter, ThemeProvider, App];

createRoot(
  document.getElementById('root')!,
).render(
  BuildComponentsTree(AppTree, [{}, {}, {}, {}]),
);
