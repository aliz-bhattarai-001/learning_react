import type { NavData } from "./Types";

export default function buildNavBarList(data: NavData) {
    return Object.entries(data).map(([navText, hrefText]) => (
        <li key={navText}>
            <a
                href={hrefText}>
                {navText}
            </a>
        </li>
    )) // return buildNavBar

} // function buildNavBar


/*
// The above is equivalent to : 

const rawData = Object.entries(data);

// converts the object data into an array of arrays
// eg: [
// ["first", "second"], 
// ["Third", "fourth"]
]

// map returns the updated data 
const response = rawData.map(([navText, hrefText]) => {
    return (
        <li key={navText}>
            <a href={hrefText}>{navText}</a>
        </li>
    );
});

return response;
*/