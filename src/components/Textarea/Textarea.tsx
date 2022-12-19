import { ChangeEvent, FC, useState } from "react"
import s from "./Textarea.module.scss";

interface ITextarea {
    text: string,
    setText: (val: string) => void,
    cols: number,
    rows: number,
    id?: string,
    name?: string,
}

const Textarea: FC<ITextarea> = ({ text, setText, cols, rows, id = "", name = "" }) => {
    
    const [styles, setStyles] = useState<string>(s.textarea__default);

    function changeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        setText(e.target.value);
    }

    return (
        <>
            <textarea
                value={text}
                onChange={changeHandler}
                name={name}
                id={id}
                cols={cols}
                rows={rows}
                className={styles}
            ></textarea>
        </>
    )
}

export default Textarea