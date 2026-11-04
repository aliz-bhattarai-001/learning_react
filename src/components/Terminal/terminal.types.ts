
export type TerminalEntry = {
    command: string,
    output: string,
}

export type CommandList = {
    command: string,
    info: string
}

export type CommandListProps = {
    label: string,
    List: CommandList[]
}