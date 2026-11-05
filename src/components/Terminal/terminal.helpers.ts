import type { ParsedCommand, ErrorCode, TerminalError, ParseResult, CmdName } from "./terminal.types";
import { commandList, errorMessages } from "./terminal.data";



export function createError(code: ErrorCode): TerminalError {
    return {
        code,
        message: errorMessages[code],
    };
} // func createError

export function parseCommands(input: string): ParseResult {

    //Firstly Check for empty input
    if (input.trim() === "") {
        return {
            success: false,
            error: {
                code: "MISSING_ARGS",
                message: "Please enter a command."
            }
        };
    }

    // Split input into command and arguments : /\s+/ handles tabs or multiple spaces
    const parts = input.trim().split(/\s+/);

    const command = parts[0].toLowerCase();

    // Check whether the command exists in commandList or not
    if (!Object.hasOwn(commandList, command)) {
        return {
            success: false,
            error: {
                code: "COMMAND_NOT_FOUND",
                message: "Command not found."
            }
        };
    }

    // Return the successfully parsed command
    return {
        success: true,
        command: {
            cmd: command as CmdName,
            args: parts.slice(1)
        }
    };
}