import { FC, useState } from "react"
import { ITranslateInput } from "../../types/types";
import Textarea from "../Textarea/Textarea"
import s from "./TranslateInput.module.scss"

const TranslateInput: FC<ITranslateInput> = ({ text, setText, onEnter }) => {
    const [lengthText, setLengthText] = useState<number>(0);

    function updateText(val: string) {
        if (val.length <= 500) {
            setText(val)
            setLengthText(val.length)
        } else if (val.length > 500) {
            const newVal = val.slice(0, 500);
            setText(newVal)
            setLengthText(newVal.length)
        }
    }

    return (
        <div>
            <Textarea
                text={text}
                setText={updateText}
                cols={60}
                rows={15}
                onEnter={onEnter}
            />
            <p className={s.count}>{lengthText}/500</p>
        </div>
    )
}

export default TranslateInput