import Button from '../Button/Button';

import styles from './MusicPlayerControls.module.scss';

const MusicCardControls = () => {
    return (
        <div className={styles['player-controls-wrapper']}>
            <div className={styles['music-progress-bar']}>
                <div className={styles['passed-time-line']}></div>
                <div className={styles['now-music-position-circle']}></div>
            </div>
            <div className={styles['song-time-wrapper']}>
                <div className={styles['passed-song-time']}>0:24</div>
                <div className={styles['song-duration']}>3:13</div>
            </div>
            <div className={styles['player-control-buttons-wrapper']}>
                <Button>
                    <img src="src/assets/svgs/next-song.svg" alt="Next song button"></img>
                </Button>
                <Button>
                    <img src="src/assets/svgs/pause-button.svg" alt="Next song button"></img>
                </Button>
                <Button>
                    <img src="src/assets/svgs/next-song.svg" alt="Next song button"></img>
                </Button>
            </div>
        </div>
    )
}

export default MusicCardControls;