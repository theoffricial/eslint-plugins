export function ruleMessageTemplate({ why, linterMessage }: { why: string, linterMessage: string }) {
    return `${linterMessage} \nThe Why: ${why}`
}