import axios from "axios";
import { FC, useState } from "react"
import { ITranslate } from "../../types/types";
import TranslateInput from "../TranslateInput/TranslateInput";
import TranslateOutput from "../TranslateOutput/TranslateOutput";

const Translate: FC = () => {
    const [output, setOutput] = useState<string>("");
    const [input, setInput] = useState<string>("");

    function clickHandler() {
        getTranslate("en|ru", input, setOutput)
    }

    async function getTranslate(langpair: string, text: string, setText: (val: string) => void) {
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
    }

    return (
        <div className="app">
            <TranslateInput
                text={input}
                setText={setInput}
            />
            <TranslateOutput
                text={output}
            />
            <button onClick={clickHandler}>run</button>
        </div>
    )
}

export default Translate