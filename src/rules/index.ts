import noDynamicImport from './no-dynamic-import';
import noRequire from './no-require';
import noCommonjsExports from './no-commonjs-exports';
import noCommonJsModuleExports from './no-commonjs-module-exports';

export const rules = {
    // An example rule
    'no-dynamic-import': noDynamicImport,
    'no-require': noRequire,
    'no-commonjs-exports': noCommonjsExports,
    'no-commonjs-module-exports': noCommonJsModuleExports,
};


const x = {
    y: {
    z:1    
    }
}