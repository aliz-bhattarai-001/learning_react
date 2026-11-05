import styles from "./terminal.module.css"
import type { TerminalProps } from "./terminal.types"


export function Terminal({ label, date }: TerminalProps) {
    return (
        <>
            <label>{label} : {date}</label>
        </>
    ) // return Terminal()
} // func Terminal() : React Node