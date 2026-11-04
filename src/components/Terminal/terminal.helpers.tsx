import type { CommandListProps } from "./terminal.types";


export function Help({ label, List }: CommandListProps) {
    return (
        <>
            <label><b>{label}</b></label>
            <ul>
                {List.map((item) => (
                    <li key={item.command}>
                        <b>{item.command}</b>: {item.info}
                    </li>
                ))}
            </ul>
        </>
    )
}


// update the list of commands here: 
export const commandList: CommandListProps = {
    label: "Help Section",
    List: [
        { command: "help", info: "Shows all available commands" },
        { command: "clear", info: "Clears the terminal screen" },
        { command: "fastfetch", info: "Get profile details in fastfetch-like manner" }
    ]
}
