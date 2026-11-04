import { useState } from "react";
import styles from "./Styles/terminal.module.css"

function Terminal() {

    // usestate remembers data between renders
    const [input, setInput] = useState("")

    return (
        <>
            <h1>Terminal Section</h1>
            {/* <label>user@test:~<br />$ </label> */}

            <div className={styles.terminalContainer}>

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
            </div>
            <hr></hr>
        </>

    ) // return Terminal()



} // function Terminal()


export default Terminal