

// key value pair for name and link
export type NavData = Record<string, string>

export type DropDownData = {
    id: string,
    value: string
}

export type DropDownProps = {
    label: string,
    options: DropDownData[]
}

export type NavBarListProps = {
    data: NavData;
};