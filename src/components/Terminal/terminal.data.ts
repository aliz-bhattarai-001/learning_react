import type { CmdList, ErrorCode } from "./terminal.types";

export const commandList: CmdList = {

    cd: {
        description: "does something",
        usage: "cd <path/section>",
    },
    help: {
        description: "Does something as well",
        usage: "help or help <command-name> for more details.",
        examples: ["help cd", "help echo", "help help"],
        options: ["'help' itself", "any other command"]
    }


} // dataHolder scommandList

export const errorMessages: Record<ErrorCode, string> = {
    MISSING_ARGS: "Required arguments are missing.",
    COMMAND_NOT_FOUND: "Command not found.",
    INVALID_SYNTAX: "Invalid command syntax.",
    MISCELLANEOUS_ERROR: "An unexpected error occurred.",
    PAGE_NOT_FOUND: "Page not found.",
    SECTION_NOT_FOUND: "Section not found.",
    NO_FILE_SPECIFIED: "No file was specified.",
    NO_PATH_SPECIFIED: "No path was specified.",
};