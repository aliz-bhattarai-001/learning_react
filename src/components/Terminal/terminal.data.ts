import type { CommandListProps, FastFetchProps } from "./terminal.types";


// update the list of commands here: 
export const commandList: CommandListProps = {
    label: "Help Section",
    List: [
        { command: "help", info: "Shows all available commands" },
        { command: "clear", info: "Clears the terminal screen" },
        { command: "fastfetch", info: "Get profile details in fastfetch-like manner" }
    ]
}; // dataHolder commandList


export const fastfetchData: FastFetchProps = {
    label: "Fastfetch Details",
    data: [
        { key: "UserName", value: "Aliz Bhattarai" },
        { key: "Age", value: "20" },
        { key: "Gender", value: "Male" },
        { key: "Hobbies", value: "Somethings" },
        { key: "Education", value: "Undergrad Student of BCT @Pulchowk Campus, IOE, TU" },
        { key: "Projects", value: "go-shell, anime-recommender-api" },
        { key: "Contact", value: "contact@example.com.np" }
    ]
}; // dataHolder fastfetchData