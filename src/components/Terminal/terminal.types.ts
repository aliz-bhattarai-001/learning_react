import type { ReactNode } from "react";
// a react functon accepts an object (Propsobject) < props just a naming conv here 
// propsObj = properties object I guess :)

// any additional parameters as required by the terminal to be added as type here
export type TerminalProps = {
    label: string,
    date: string
} // type TerminalProps{}


// for errorcodes
export type ErrorCode =
    | "MISSING_ARGS"
    | "COMMAND_NOT_FOUND"
    | "INVALID_SYNTAX"
    | "MISCELLANEOUS_ERROR"
    | "PAGE_NOT_FOUND"
    | "SECTION_NOT_FOUND"
    | "NO_FILE_SPECIFIED"
    | "NO_PATH_SPECIFIED"


export type TerminalError = {
    code: ErrorCode;
    message: string;
}; // Type TerminalError {}




export type CommandResult =
    | {
        success: true;
        output: ReactNode;
    }
    | {
        success: false;
        error: TerminalError;
    };
// type CommandResult (Union / OR)


export type CommandHistory = {
    id: number;
    command: string;
    result: CommandResult;
}; // type CommandHistory{}


// for info regarding commands
export type CmdDefinition = {
    description: string,
    usage: string,
    options?: string[],
    examples?: string[]
} // type CmdDefinition


// for Cmd name type specification < Union of any means it can only have these values.
type PrintingTypeCmdName = "help" | "fastfetch" | "echo" | "whoami" | "hostname" | "about";

type NavTypeCmdName = "pwd" | "cd" | "tree" | "ls"

type CustomizationTypeCmdName = "dock" | "theme" | "font" | "reset" | "date"

// export type BasicWebPageTypeCmdName = "about" | "skills" | "education" | "projects"

export type CmdName = PrintingTypeCmdName | NavTypeCmdName | CustomizationTypeCmdName;



// for parsed command
export type ParsedCommand = {
    cmd: CmdName,
    args: string[] | null | string
} // type ParsedCommand{}



// for success or failure of parsing.
export type ParseResult =
    | {
        success: true;
        command: ParsedCommand;
    }
    | {
        success: false;
        error: TerminalError;
    };


// record enforces that every CmdName must have a definition :)
export type CmdList = Record<CmdName, CmdDefinition>
