import { useContext } from "react";

import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img 
                src="https://scontent.fcgh22-1.fna.fbcdn.net/v/t1.0-1/p200x200/152861619_279711153546996_2336529225987648556_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=7CGAhrT2opUAX_rEnoB&_nc_ht=scontent.fcgh22-1.fna&tp=6&oh=99d9c9a4ddf97d3958c85650df13740b&oe=6066EFC3" 
                alt="Douglas Lopes" 
            />
            <div>
                <strong>Douglas Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
