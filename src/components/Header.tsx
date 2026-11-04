// Helpers
import type { NavData } from "./Types"
import buildNavBarList from "./Utils"


function Header() {
    const HeaderNavBar: NavData = {
        "Home": "#",
        "About": "#",
        Somewhere: "#"
    };


    return (
        <>
            <h1>Header Section</h1>
            <p>Navigation Section:</p>
            <nav>
                <ul>
                    {/* <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">More</a></li> */}
                    {buildNavBarList(HeaderNavBar)}
                    {/* Works as intended */}
                </ul>
            </nav>
            <hr></hr>
        </>
    ) // return Header()
} // func Header()

export default Header