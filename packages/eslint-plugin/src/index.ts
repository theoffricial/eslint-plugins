/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ESLint, Linter } from 'eslint';
// import jestPlugin from 'eslint-plugin-jest';
// import unicornPlugin from 'eslint-plugin-unicorn';
// import importPlugin from 'eslint-plugin-import';
// import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import { configs } from 'eslint-plugin-migrate-to-typescript';

// configs
import jestWithTsConfig from './configs/jest-for-typescript';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

// const x = configs['node-ts-only'];
const plugin: ESLint.Plugin = {
    configs: {
        // cross platforms
        'naming-convention': '' as never,
        'naming-convention-types-and-consts-only': '' as never,
        'esm-modules-super-strict': '' as never,
        'esm-modules-light-strict': '' as never,
        // backend
        'jest-with-ts-only': jestWithTsConfig,
        'jest-node-js-with-ts': '' as never,
        // 'node-ts-only': configs['node-ts-only'], //'' as never,
        'node-js-with-ts': '' as never,
        // front
        'jest-with-tsx-react': '' as never,
        'jest-with-jsx-react': '' as never,
        'jest-with-jsx-and-tsx-react': '' as never,
        'react-tsx': '' as never,
        'react-ts-only': '' as never,
        'react-js-with-ts': '' as never,
    },
    rules: {},
};
