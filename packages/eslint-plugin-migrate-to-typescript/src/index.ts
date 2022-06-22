import { CRules } from './rules';
import nodeJsWithTsConfig from './configs/node-js-with-ts';
import nodeTsOnlyConfig from './configs/node-ts-only';

export = {
    rules: CRules,
    configs: {
        'node-js-with-ts': nodeJsWithTsConfig,
        'node-ts-only': nodeTsOnlyConfig,
    },
};
