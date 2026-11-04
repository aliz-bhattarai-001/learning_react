import type { ParsedCommand } from "./terminal.types"


export function parseCommand(input: string): ParsedCommand {
    const trimmed = input.trim().toLowerCase();

    // if empty
    if (trimmed === "") {
        return { cmd: "", args: [] };
    }

    const parts = trimmed.split(" ");

    // Separate the main command from its arguments
    const command = parts[0];
    const args = parts.slice(1);

    return { cmd: command, args: args };
}


