import type { NavData, DropDownData, DropDownProps, NavBarListProps } from "./Types";

export function BuildNavBarList({ data }: NavBarListProps) {
    return (
        <>
            {
                Object.entries(data).map(([navText, hrefText]) => (
                    <li key={navText}>
                        <a
                            href={hrefText}>
                            {navText}
                        </a>
                    </li>

                ))}
        </>
    )// return buildNavBar

} // function buildNavBar

export function BuildDropDownMenu(data: DropDownProps) {

    return (
        <>
            <label>{data.label}</label>
            <select>
                {data.options.map((each) => (
                    <option key={each.id} >
                        {each.value}
                    </option>
                ))}
            </select >
        </>

    )
}