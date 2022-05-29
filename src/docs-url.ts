const repoUrl = 'https://github.com/import-js/eslint-plugin-import';

export default function docsUrl(ruleName: string): string {
    return `${repoUrl}/blob/main/docs/rules/${ruleName}.md`;
}
