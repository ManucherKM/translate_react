import axios from "axios";
import { FC, useState } from "react"
import { ITranslate } from "../../types/types";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import TranslateInput from "../TranslateInput/TranslateInput";
import TranslateOutput from "../TranslateOutput/TranslateOutput";
import s from "./Translate.module.scss";

const Translate: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // allowed 80 language from ISO-631
    const [languageMode, setLanguageMode] = useState<string>("en|ru");

    const [output, setOutput] = useState<string>("");
    const [input, setInput] = useState<string>("");

    async function clickHandler() {
        setIsLoading(true)
        await getTranslate(languageMode, input, setOutput);
        setIsLoading(false)
    }

    async function getTranslate(langpair: string, text: string, setText: (val: string) => void) {
        setIsLoading(true)
        if (!langpair || !text || !setText) {
            setIsLoading(false)
            return
        }
        const options = {
            method: 'GET',
            url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/get',
            params: { langpair: langpair, q: text },
            headers: {
                'X-RapidAPI-Key': '76d7e06148msh263d850659d08bdp1c483cjsnf26e619a4a8c',
                'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
            }
        };

        const { data } = await axios.request<ITranslate>(options);

        setText(data.responseData.translatedText)
        setIsLoading(false)
    }

    function switchLanguage() {
        if (languageMode === "en|ru") {
            setLanguageMode("ru|en")
        } else {
            setLanguageMode("en|ru")

        }
    }

    return (
        <>
            <nav className={s.navbar}>
                <div className="container">
                    <div className={s.navbar__wrapper}>
                        <div className={s.navbar__logo}>
                            <div className={s.logo__wrapper}>
                                <span className={s.logo__text}>
                                    TS
                                </span>
                            </div>
                        </div>
                        <div className={s.navbar__navigate}>
                            <a
                                className={s.github}
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/ManucherKM/translate_react"
                            >
                                Github
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={s.translate}>
                <div className="container">
                    <div className={s.translate__wrapper}>
                        <div className={s.translate__input}>
                            <div onClick={switchLanguage} className={s.translate__lang}>
                                <span>
                                    {languageMode === "ru|en"
                                        ? "Russian"
                                        : "English"
                                    }
                                </span>
                            </div>
                            <TranslateInput
                                onEnter={() => getTranslate(languageMode, input, setOutput)}
                                text={input}
                                setText={setInput}
                            />
                        </div>
                        <div className={s.translate__output}>
                            <div onClick={switchLanguage} className={s.translate__lang}>
                                <span>
                                    {languageMode === "en|ru"
                                        ? "Russian"
                                        : "English"
                                    }
                                </span>
                            </div>
                            {isLoading && <Loader />}
                            {!isLoading &&
                                <TranslateOutput
                                    text={output}
                                />
                            }
                        </div>
                    </div>
                    <div className={s.translate__button}>
                        <Button
                            text="Превести"
                            onClick={clickHandler}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Translate