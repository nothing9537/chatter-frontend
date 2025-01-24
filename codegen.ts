import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  documents: 'src/**/*.ts',
  generates: {
    'src/shared/generated/graphql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
