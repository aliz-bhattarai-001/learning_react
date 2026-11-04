import { useState, type SubmitEvent } from "react"
import styles from "./components.module.css"

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Event handler function
    const handleSubmitEvent = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevents default behavior of browsers
        console.log(`Email : ${email}`);
        console.log(`Password: ${password}`);


        // clear everything out once more
        setEmail("");
        setPassword("");
    } // func handleSubmitEvent


    return (
        <>
            <h1>Login form section</h1>
            <form className={styles.loginSection} onSubmit={handleSubmitEvent}>
                <label>E-mail: </label><input className={styles.loginInputBox}
                    type="text"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                ></input>
                <br />

                <label>Password: </label>

                <input className={styles.loginInputBox}
                    type="text"
                    placeholder="********"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                ></input>
                <button type="submit" className={styles.loginButton}>Login</button>

            </form>
            <p>Email While typing: {email}<br /> Password While typing: {password}</p>
            <hr></hr>
        </>
    ) // return LoginForm()

} // func LoginForm()

export default LoginForm

