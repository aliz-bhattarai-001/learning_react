import Terminal from "./Terminal"
import { Help, Fastfetch } from "./terminal.commands"
import { commandList, fastfetchData } from "./terminal.data"

export function handleCommand(cmd: string, args: string[]) {
    switch (cmd) {
        case "help":
            return <Help  {...commandList} />
        case "fastfetch":
            return <Fastfetch {...fastfetchData} />

        case "clear":
            return <Terminal />
        default:
            return <Help  {...commandList} />

    }
}