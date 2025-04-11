const issueTypes = Object.freeze([
    "Technical Issue",
    "Content Error",
    "Audio/Video Issue",
    "Payment",
    "Others"
] as const)

const responseLengths = Object.freeze([
    "Short",
    "Medium",
    "Long"
] as const)

export {
    issueTypes,
    responseLengths
}