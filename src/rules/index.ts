import noDynamicImport from './no-dynamic-import'
import noRequire from './no-require';
import noCommonjsExports from './no-commonjs-exports'

export const rules = {
    // An example rule
    'no-dynamic-import': noDynamicImport,
    'no-require': noRequire,
    'no-commonjs-exports': noCommonjsExports
}
