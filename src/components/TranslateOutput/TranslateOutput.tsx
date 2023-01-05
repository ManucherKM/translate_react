import { FC } from "react";
import { ITranslateOutput } from "../../types/types";
import s from "./TranslateOutput.module.scss"

const TranslateOutput: FC<ITranslateOutput> = ({ text }) => {
    return (
        <div>
            <p className={s.text}>
                {text}
            </p>
        </div>
    )
}

export default TranslateOutput