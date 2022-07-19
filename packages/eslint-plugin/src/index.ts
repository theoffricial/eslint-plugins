/* eslint-disable @typescript-eslint/no-unused-vars */

import type { ESLint, Linter } from 'eslint';
// import jestPlugin from 'eslint-plugin-jest';
// import unicornPlugin from 'eslint-plugin-unicorn';
// import importPlugin from 'eslint-plugin-import';
// import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import { configs } from 'eslint-plugin-migrate-to-typescript';
// import { C_ESLINT_CONFIG } from './configs/eslint';
// configs
import { C_ESLINT_CONFIG } from './configs/eslint';
// import {} from './configs/esm';
import { C_ESM_CONFIG } from './configs/esm-javascript';
import { C_ESM_JS_WITH_TS_CONFIG } from './configs/esm-js-with-ts';
import { C_ESM_OPINIONATED_NO_INTERNAL_MODULES_CONFIG } from './configs/esm-opinionated-no-internal-modules';
import { C_ESM_TS_CONFIG } from './configs/esm-typescript';
import { C_JEST_CONFIG } from './configs/jest';
import { C_JEST_TS_CONFIG } from './configs/jest-for-typescript';
import { C_JEST_FORMATTING_CONFIG } from './configs/jest-formatting';
import { C_JEST_OPINIONATED_CONSISTENT_IT_CONFIG } from './configs/jest-opinionated-consistent-it';
import { C_JEST_OPINIONATED_CONSISTENT_TEST_CONFIG } from './configs/jest-opinionated-consistent-test';
import { C_NODE_JS_COMMONJS_CONFIG } from './configs/node-js';
import { C_NODE_JS_WITH_TS_CONFIG } from './configs/node-js-with-ts';
import { C_NODE_PLUS_JEST_JS_CONFIG } from './configs/node-plus-jest-js';
import { C_NODE_PLUS_JEST_JS_WITH_TS_CONFIG } from './configs/node-plus-jest-js-with-ts';
import { C_NODE_PLUS_JEST_TS_CONFIG } from './configs/node-plus-jest-ts';
import { C_NODE_TS_CONFIG } from './configs/node-ts';
import { C_PROMISE_CONFIG } from './configs/promise';
import { C_TS_ESLINT_CONFIG } from './configs/ts-eslint';
import { C_TS_ESLINT_WITH_TYPE_CHECKING_CONFIG } from './configs/ts-eslint-with-type-checking';
import { C_TS_ESLINT_OPINIONATED_NAMING_CONVENTION_CONFIG } from './configs/ts-eslint-opinionated-naming-convention';
// react
import { C_REACT_JS } from './configs/react-js';
import { C_REACT_JS_OPINIONATED } from './configs/react-js-opinionated';
import { C_REACT_JS_WITH_TS } from './configs/react-js-with-ts';
import { C_REACT_JS_WITH_TS_OPINIONATED } from './configs/react-js-with-ts-opinionated';
import { C_REACT_PLUS_JEST_JS } from './configs/react-plus-jest-js';
import { C_REACT_PLUS_JEST_JS_WITH_TS } from './configs/react-plus-jest-js-with-ts';
import { C_REACT_PLUS_JEST_TS } from './configs/react-plus-jest-ts';
import { C_REACT_TS } from './configs/react-ts';
import { C_REACT_TS_OPINIONATED } from './configs/react-ts-opinionated';

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment

// const x = configs['node-ts-only'];
const plugin: ESLint.Plugin = {
    configs: {
        // eslint / ts-eslint configs
        eslint: C_ESLINT_CONFIG,
        'typescript-eslint': C_TS_ESLINT_CONFIG,
        'typescript-eslint-with-type-checking':
            C_TS_ESLINT_WITH_TYPE_CHECKING_CONFIG,
        'typescript-eslint-opinionated-naming-convention':
            C_TS_ESLINT_OPINIONATED_NAMING_CONVENTION_CONFIG,

        // modules configs
        'esm-javascript': C_ESM_CONFIG,
        'esm-js-with-ts': C_ESM_JS_WITH_TS_CONFIG,
        'esm-opinionated-no-internal-modules':
            C_ESM_OPINIONATED_NO_INTERNAL_MODULES_CONFIG,
        'esm-ts': C_ESM_TS_CONFIG,
        // jest configs
        jest: C_JEST_CONFIG,
        'jest-ts': C_JEST_TS_CONFIG,
        'jest-formatting': C_JEST_FORMATTING_CONFIG,
        'jest-opinionated-consistent-it':
            C_JEST_OPINIONATED_CONSISTENT_IT_CONFIG,
        'jest-opinionated-consistent-test':
            C_JEST_OPINIONATED_CONSISTENT_TEST_CONFIG,
        // node env configs
        node: C_NODE_JS_COMMONJS_CONFIG,
        'node-js-with-ts': C_NODE_JS_WITH_TS_CONFIG,
        'node-ts': C_NODE_TS_CONFIG,
        'node-plus-jest': C_NODE_PLUS_JEST_JS_CONFIG,
        'node-plus-jest-js-with-ts': C_NODE_PLUS_JEST_JS_WITH_TS_CONFIG,
        'node-plus-jest-ts': C_NODE_PLUS_JEST_TS_CONFIG,
        // promise configs
        promise: C_PROMISE_CONFIG,
        // react
        react: C_REACT_JS,
        'react-opinionated': C_REACT_JS_OPINIONATED,
        'react-js-with-ts': C_REACT_JS_WITH_TS,
        'react-js-with-ts-opinionated': C_REACT_JS_WITH_TS_OPINIONATED,
        'react-plus-jest': C_REACT_PLUS_JEST_JS,
        'react-plus-jest-js-with-ts': C_REACT_PLUS_JEST_JS_WITH_TS,
        'react-plus-jest-ts': C_REACT_PLUS_JEST_TS,
        'react-ts': C_REACT_TS,
        'react-ts-opinionated': C_REACT_TS_OPINIONATED,
    },
    rules: {},
};
