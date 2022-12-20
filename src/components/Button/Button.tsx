import { FC } from "react"
import { IButton } from "../../types/types"
import s from "./Button.module.scss"

const Button: FC<IButton> = ({ text, onClick, isDisabled = false }) => {

    function clickHandler() {
        onClick()
    }

    return (
        <>
            <button
                onClick={clickHandler}
                className={s.btn}
                disabled={isDisabled}
            >
                {text}
            </button>
        </>
    )
}

export default Button