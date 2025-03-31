const answerTypes = {
    TEXT: 'Text',
    NUMBER: 'Number',
    SELECTION: 'Selection',
    GENDER_SELECT: 'GenderSelect',
} as const

type AnswerType = (typeof answerTypes)[keyof typeof answerTypes];

type Option = {
    value: string;
    description?: string;
}

type Question = {
    title: string;
    description?: string;
    answerType: AnswerType;
    options?: Option[];
    label?: string;
    nextButton?: string;
}

type Data = Question[];

const data: Data = [
    {
        title: 'What’s your first name?',
        description: 'Enter your first name for username.',
        answerType: answerTypes.TEXT,
        label: 'First Name',
        nextButton: 'Continue',
    },
    {
        title: 'How old are you?',
        description: 'Enter your age',
        answerType: answerTypes.NUMBER,
        nextButton: 'Continue',
    },
    {
        title: 'What is your gender?',
        description: 'Select your gender',
        answerType: answerTypes.GENDER_SELECT
    },
    {
        title: 'How connected do you feel to the Qur’an right now?',
        answerType: answerTypes.SELECTION,
        options: [
            { value: 'Deeply connected', description: 'but I want to go further.' },
            { value: 'Sometimes', description: 'I love it, but I need more consistency.' },
            { value: 'Not as much as I’d like', description: 'but I’m ready to change that!' },
        ]
    },
    {
        title: 'Do you struggle with focus in Salah?',
        answerType: answerTypes.SELECTION,
        options: [
            { value: 'Frequently', description: 'My mind is always distracted.' },
            { value: 'Sometimes', description: 'I can focus, but I get distracted easily.' },
            { value: 'Rarely or Never', description: 'I feel deeply connected in Salah.' }
        ]
    },
    {
        title: 'Do you feel emotionally or spiritually disconnected from the Qur’an?"',
        answerType: answerTypes.SELECTION,
        options: [
            { value: 'Frequently', description: 'I struggle to feel connected.' },
            { value: 'Sometimes', description: 'I have moments of connection, but it’s not consistent.' },
            { value: 'Rarely or Never', description: 'I feel deeply connected to the Qur’an.' }
        ]
    },
    {
        title: 'When you feel stressed or lost, do you turn to the Qur’an for guidance?',
        answerType: answerTypes.SELECTION,
        options: [
            { value: 'Always', description: 'It’s my first source of comfort.' },
            { value: 'Sometimes', description: 'I try, but I also rely on other things (e.g., music, social media).' },
            { value: 'Rarely or Never', description: 'I don’t think of the Qur’an in those moments.' }
        ]
    },
    {
        title: 'What’s your dream goal with the Qur’an?',
        answerType: answerTypes.SELECTION,
        options: [
            { value: 'Understand it deeply & apply it daily.' },
            { value: 'Improve focus in Salah & feel spiritual clarity.' },
            { value: 'Memorize & recite with confidence.' }
        ]
    },
    {
        title: 'If you had a proven roadmap, how committed would you be?',
        answerType: answerTypes.SELECTION,
        options: [
            { value: '100%', description: 'I just need the right guidance.' },
            { value: 'Very committed', description: 'I want to start now!' },
            { value: 'I’m excited', description: 'I just need a little push.' }
        ]
    }
]

export { data, answerTypes, AnswerType, Option, Question, Data }