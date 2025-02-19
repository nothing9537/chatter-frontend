import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/theme-provider';
import { ModalsProvider } from '@/app/providers/modals-provider';
import { ToasterProvider } from '@/app/providers/toaster-provider';

import { BuildComponentsTree } from '@/shared/components/build-components-tree';
import { apolloClient } from '@/shared/api/apollo-client';

import '@/app/styles/index.css';

const AppTree = [ApolloProvider, BrowserRouter, StrictMode, ThemeProvider, ToasterProvider, ModalsProvider, App];

createRoot(
  document.getElementById('root')!,
).render(
  BuildComponentsTree(AppTree, [{ client: apolloClient }, {}, {}, {}, {}]),
);
