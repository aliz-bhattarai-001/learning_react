import { type ReactNode } from "react";


export type TerminalEntry = {
    command: string;
    output: ReactNode;
}

export type CommandList = {
    command: string,
    info: string
}

export type CommandListProps = {
    label: string,
    List: CommandList[]
}

export type ParsedCommand = {
    cmd: string,
    args: string[]
}

export type FastFetchData = {
    key: string,
    value: string
}

export type FastFetchProps = {
    label: string,
    data: FastFetchData[]
}