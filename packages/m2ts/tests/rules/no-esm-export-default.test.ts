import rule from "../../src/rules/no-esm-export-default";
import { RuleTester } from "../rule-tester";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
});

ruleTester.run("no-esm-export-default", rule, {
  valid: [
    // ESM named export
    { code: "export const x = 1" },
    { code: "export const x = () => {}" },
    { code: "export { name }" },
    { code: "export function x() {}" },
    { code: "export enum x { X = 1 }" },
    { code: "export type x = { X: number }" },
    { code: "export interface x { X: number }" },
    // TypeScript ESM syntax for CommonJS export
    { code: "export = { X: 1 }" },
    // commonjs
    { code: "module.exports = { X: 1 }" },
    { code: "module.exports.a = { X: 1 }" },
    { code: "exports = { X: 1 }" },
    { code: "exports.a = { X: 1 }" },
    // ignore when script
    {
      code: "export default {}",
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  invalid: [
    // esm export default
    {
      code: "export default {}",
      errors: [{ messageId: "noExportDefault" }],
    },
    {
      code: "export default someVar;",
      errors: [{ messageId: "noExportDefault" }],
    },
    {
      code: 'export default "primitive"',
      errors: [{ messageId: "noExportDefault" }],
    },
    {
      code: "export default () => {}",
      errors: [{ messageId: "noExportDefault" }],
    },
  ],
});
