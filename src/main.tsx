import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/app/providers/theme-provider';
import { App } from '@/app/App';

import '@/app/styles/index.css';
import { BuildComponentsTree } from '@/shared/components/BuildComponentsTree';

const ComponentsTree = [StrictMode, ThemeProvider, App];

createRoot(document.getElementById('root')!).render(BuildComponentsTree(ComponentsTree));
