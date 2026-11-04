// To test copy as code from figma
import styles from "./terminal.test.module.css";

function Terminal() {
    return (
        <div className={styles.terminal}>
            <div className={styles.frame1}>
                {/* Terminal header */}
                <div className={styles.terminalHeader}>
                    <div className={styles.terminalControls}>
                        <div className={styles.ellipse1}></div>
                        <div className={styles.ellipse2}></div>
                        <div className={styles.ellipse3}></div>
                    </div>

                    <div className={styles.terminalShell}>
                        AL's Shell
                    </div>
                </div>

                <div className={styles.terminalLine}></div>

                {/* Terminal body */}
                <div className={styles.terminalBody}>
                    <div className={styles.terminalPrompt}>
                        <div>user@test:~</div>

                        <div className={styles.commandLine}>
                            <span>$</span>
                            <input
                                className={styles.terminalInput}
                                type="text"
                                placeholder="Type something..."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terminal;