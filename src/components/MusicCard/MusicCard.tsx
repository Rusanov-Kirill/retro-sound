import { useState } from 'react';

import type { IMusicInfo } from '../../interfaces/IMusicInfo';

import styles from './MusicCard.module.scss';

const MusicCard = () => {
    const [musicInfo, setMusicInfo] = useState<IMusicInfo>();

    //mock temp - should be deleted
    const defaultSong: IMusicInfo = {
        title: "I could die for you",
        artist: "Red Hot Chili Peppers",
        duration: 193000,
        imgSrc: ''
    };

    const music = musicInfo ? musicInfo : defaultSong;

    return (
        <div className={styles.wrapper}>
            <div className={styles['music-image-wrapper']}>
                {music.imgSrc ? (
                    <img className={styles['music-image']} src={music.imgSrc} alt="Album image"></img>
                ) : (
                    <img className={styles['music-image']} src="src/assets/svgs/music-key-colored.svg" alt="Default song image" />
                )}
            </div>
            <div className={styles['music-title']}>{music.title}</div>
            <div className={styles['music-artist']}>{music.artist}</div>
        </div>
    )
}

export default MusicCard;