import { useState,type SubmitEventHandler } from "react";
import styles from "./terminal.module.css"
import type { TerminalEntry } from "./terminal.types.tsx";



function Terminal() {

    // usestate remembers data between renders
    const [input, setInput] = useState("")
    function handleFormSubmit(inp: string, setState: (val: string) => void) {
        console.log(`Submitted something ${inp}`);
        return true;
    }
    // for history command
    const [history, setHistory] = useState<TerminalEntry[]>([]);
    // useState of a terminalEntry Array
    // meaning histroy is a TerminalEntry Arr and initialized to ([]) empty arr.
    // setHistory can set the history. 

    return (
        <>
            <h1>Terminal Section</h1>
            {/* <label>user@test:~<br />$ </label> */}

            <div className={styles.terminalContainer}>
                {/* <form onSubmit={SubmitEventHandler<HTMLFormElement>(handleFormSubmit("random", setInput))}> */}
                <label className={styles.terminalPrompt}>
                    <span className={styles.terminalUser}>user@test</span>
                    <span className={styles.terminalPath}>:~<br /></span>
                    <span className={styles.terminalSymbol}>$ </span>
                </label>

                <input
                    className={styles.terminalInput}
                    type="text"
                    value={input}
                    onChange={(ev) => setInput(ev.target.value)}
                    placeholder="Type something..."
                >
                </ input>
            {/* </form> */}
        </div >
            <hr></hr>
        </>

    ) // return Terminal()



} // function Terminal()


export default Terminal