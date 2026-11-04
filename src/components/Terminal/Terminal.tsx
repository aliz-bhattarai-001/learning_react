import { useState, type HTMLElementType, type SubmitEvent } from "react";
import styles from "./terminal.module.css"
import type { TerminalEntry } from "./terminal.types.tsx";
import { parseCommand } from "./terminal.helpers.ts";
import { handleCommand } from "./terminal.router.tsx";

function Terminal() {
    const user = "user";
    const hostname = "test";

    const terminalName = user+'@'+hostname;
    const terminalSymbol = "$";
    const [terminalPath, setTerminalPath] = useState("~");

    // usestate remembers data between renders
    const [input, setInput] = useState("")


    // for history command
    const [history, setHistory] = useState<TerminalEntry[]>([]);
    // useState of a terminalEntry Array
    // meaning histroy is a TerminalEntry Arr and initialized to ([]) empty arr.
    // setHistory can set the history. 

    const handleFormSubmit = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();


        const { cmd, args } = parseCommand(input);

        // if clear cmd entered clear all history and return
        if (cmd === "clear") {
            setHistory([]);
            setInput("");
            return;
        }

        const output = handleCommand(cmd, args)

        const entry: TerminalEntry = { command: cmd, output }
        setHistory([...history, entry])

        setInput("")
    }


    return (
        <>
            <h1>Terminal Section</h1>
            {/* <label>user@test:~<br />$ </label> */}

            {/* All previous history intact. */}
            <div className={styles.terminalContainer}>
                 <div className={styles.terminalHistory}>
                   {history.map((entry, index) => (
                        <div key={index}>
                            <div className={styles.terminalPrompt}>
                                <span className={styles.terminalUser}>{terminalName}:</span>
                                <span className={styles.terminalPath}>{terminalPath}</span>
                                <br />
                                <span className={styles.terminalSymbol}>{terminalSymbol} </span>
                                {entry.command}
                            </div>

                            <div className={styles.terminalOutput}>
                                {entry.output}
                            </div>
                        </div>
                    ))}
                </div>
                    
                {/* Current input */}
                <form onSubmit={handleFormSubmit}>

                     <label className={styles.terminalPrompt}>
                                <span className={styles.terminalUser}>{terminalName}:</span>
                                <span className={styles.terminalPath}>{terminalPath}</span>
                                <br />
                                <span className={styles.terminalSymbol}>{terminalSymbol} </span>
                    </label>


                    <input
                        className={styles.terminalInput}
                        type="text"
                        value={input}
                        onChange={(ev) => setInput(ev.target.value)}
                        placeholder="Type something..."
                    >
                    </ input>
                </form>
            </div >
            <hr></hr>
        </>

    ) // return Terminal()



} // function Terminal()


export default Terminal

