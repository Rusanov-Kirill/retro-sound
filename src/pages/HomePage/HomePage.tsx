import Header from "../../components/Header/Header";
import MusicCard from "../../components/MusicCard/MusicCard";
import MusicCardControls from "../../components/MusicPlayerControls/MusicPlayerControls";

import styles from './HomePage.module.scss';

const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                <MusicCard />
                <MusicCardControls />
            </main>
        </div>
    )
}

export default HomePage;