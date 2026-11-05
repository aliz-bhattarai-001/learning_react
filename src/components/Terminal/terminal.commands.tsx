import type { CommandListProps, FastFetchProps } from "./terminal.types";


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
    ) // return Help()
} // func Help()


export function Fastfetch({ data, label }: FastFetchProps) {
    return (
        <>
            <label>{label}</label>
            <ol>
                {data.map((item) => (
                    <li key={item.key}>
                        <b>
                            {item.key}
                        </b>: {item.value}
                    </li>
                ))}
            </ol>
        </>
    ) // return Fastfetch()
} // function Fastfetch()

export function WhoAmI(cmd:string){
    return (
        <>
        <label>Who Am I section </label>
        <ul>
                  
        </ul>
        </>
    )
}

export function ChangeDir(targetDir: string){
    const parsedTargetDir = targetDir.replace("~/", "");

    return 
}
