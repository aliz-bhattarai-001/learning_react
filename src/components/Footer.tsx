import type { NavData } from "./Types"
import buildNavBarList from "./Utils"

function Footer() {
    const FooterNavData: NavData = {
        Instagram: "#",
        Linkedin: "#",
        Facebook: "#",
        Whatsapp: "#"
    };

    return (
        <>
            <h1>
                Footer Section
            </h1>
            <p>Contact Section: </p>
            <ul>
                {/* <li>Instagram: <a href="#">@al_fred</a></li>
                <li>Linkedin: <a href="#">@al_fred_again</a></li>
                <li>Whatsapp: <a href="#">@al_fred_here_too</a></li>
                <li>Facebook: <a href="#">@al_fred_writes</a></li>
                <li>E-Mail: <a href="#">contact@alfred.com.np</a> (random)</li> */}
                {buildNavBarList(FooterNavData)}
            </ul>
            <hr></hr>
            {/* Dynamic year and copyright section :) */}
            <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </>
    ) // return Footer()
} // func Footer()

export default Footer