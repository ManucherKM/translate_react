export interface ITranslate {
    responseData: ITranslateText
}

interface ITranslateText {
    translatedText: string
}

export interface IButton {
    text: string,
    onClick: () => void,
    isDisabled?: boolean
}

export interface ITextarea {
    text: string,
    setText: (val: string) => void,
    cols: number,
    rows: number,
    onEnter?: () => {},
    id?: string,
    name?: string,
    onFocus?: () => void
}

export interface ITranslateInput {
    text: string,
    setText: (val: string) => void,
    onEnter: () => {},
}

export interface ITranslateOutput {
    text: string
}
