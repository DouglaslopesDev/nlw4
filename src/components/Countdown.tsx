import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";

import styles from "../styles/components/Countdown.module.css";

export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown,
    } = useContext(CountdownContext);

    // Formatando o tempo para mostrar de uma maneira diferente.
    // Retornando apenas o "primeiro" e o "segundo" número do minuto.
    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, "0")
        .split("");
    // Retornando apenas o "primeiro" e o "segundo" número do segundo.
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, "0")
        .split("");

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                    <img 
                        src="icons/check_circle.svg" 
                        alt="check"
                        className={styles.img}
                    />
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo
                            <img 
                                src="icons/vector.svg" 
                                alt="stop"
                                className={styles.filterWhite} 
                            />
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButton}
                            onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img 
                                src="icons/play_arrow.svg" 
                                alt="start"
                                className={styles.img}
                            />
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
