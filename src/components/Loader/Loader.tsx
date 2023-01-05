import s from "./Loader.module.scss"

const Loader = () => {
    return (
        <div className={s.loader}>
            <span>
                Перевод ...
            </span>
        </div>
    )
}

export default Loader