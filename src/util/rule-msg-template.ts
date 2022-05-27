export function ruleMessageTemplate({ why, linterMessage }: { why: string; linterMessage: string }): string {
    return `${linterMessage} \nThe Why: ${why}`;
}