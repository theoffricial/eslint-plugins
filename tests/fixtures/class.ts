/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/naming-convention */
// used by no-throw-literal test case to validate custom error
export class Error {}

// used by unbound-method test case to test imports
export const console = { log(): void {} };

// used by prefer-reduce-type-parameter to test native vs userland check
export class Reducable {
    public reduce(): void {}
}

// used by no-implied-eval test function imports
export class Function {}
