import { ChangeEvent, FC, KeyboardEvent } from "react"
import { ITextarea } from "../../types/types";
import s from "./Textarea.module.scss";

const Textarea: FC<ITextarea> = ({ text, setText, cols, rows, id = "", name = "", onEnter = () => { } }) => {

    function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
    }

    function downEnter(e: KeyboardEvent) {
        if (e.key === "Enter") {
            onEnter()
        }
    }

    return (
        <>
            <textarea
                value={text}
                onChange={changeHandler}
                onKeyDown={downEnter}
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                className={s.textarea__default}
            ></textarea>
        </>
    )
}

export default Textarea