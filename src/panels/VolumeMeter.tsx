import styles from "./VolumeMeter.module.scss";
import {useEffect} from "react";

export default function VolumeMeter() {
    useEffect(() => {
        const overlay = document.getElementById("overlay");
        setInterval(() => {
            if(!overlay) return;

            overlay.style.height = (Math.random() * 100).toString() + "px";
        }, 500);
    }, []);

    return <div className={styles.volumeMeter}>
        <div className={styles.meter}></div>
        <div className={styles.overlay} id="overlay"></div>
        <div className={styles.grid}></div>
    </div>
}
