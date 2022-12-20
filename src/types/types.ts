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