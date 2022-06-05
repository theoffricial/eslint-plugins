import noCommonJsDynamicRequire from './no-commonjs-dynamic-require';
import noEsmDynamicImport from './no-esm-dynamic-import';
import noRequire from './no-require';
import noCommonjsExports from './no-commonjs-exports';
import noCommonJsModuleExports from './no-commonjs-module-exports';

export const CRules = {
    // commonjs modules
    'no-require': noRequire,
    'no-commonjs-dynamic-require': noCommonJsDynamicRequire,
    'no-commonjs-exports': noCommonjsExports,
    'no-commonjs-module-exports': noCommonJsModuleExports,
    // esm
    'no-esm-dynamic-import': noEsmDynamicImport,
};
