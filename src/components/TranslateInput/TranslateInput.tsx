import { FC } from "react"
import Textarea from "../Textarea/Textarea"

interface TranslateInput {
    text: string,
    setText: (val: string) => void
}

const TranslateInput: FC<TranslateInput> = ({ text, setText }) => {
    return (
        <div>
            <Textarea
                text={text}
                setText={setText}
                cols={30}
                rows={20}
            />
        </div>
    )
}

export default TranslateInput