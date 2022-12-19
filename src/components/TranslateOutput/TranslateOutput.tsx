import { FC, useState } from "react";

interface ITranslateOutput {
    text: string
}

const TranslateOutput: FC<ITranslateOutput> = ({ text }) => {

    return (
        <div>
            {text}
        </div>
    )
}

export default TranslateOutput