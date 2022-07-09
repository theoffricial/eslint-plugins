import type { ESLint } from 'eslint';
import { CRules } from './rules';
import nodeJsWithTs from './configs/node-js-with-ts';
import nodeTsOnly from './configs/node-ts-only';

type TValidConfigs = 'node-js-with-ts' | 'node-ts-only';

type TM2tsConfigs = {
    [key in TValidConfigs]: ESLint.ConfigData;
};

type TM2tsPlugin = Omit<ESLint.Plugin, 'configs'> & { configs: TM2tsConfigs };

const config: Required<Pick<TM2tsPlugin, 'configs' | 'rules'>> = {
    rules: CRules as never,
    configs: {
        'node-js-with-ts': nodeJsWithTs,
        'node-ts-only': nodeTsOnly,
    },
};

export = config;
