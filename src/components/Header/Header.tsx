import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
    const handleClose = async () => await window.electronApp.window.close();

    return (
        <div className={styles.wrapper}>
            <div className={styles['drag-area']}></div>
            <Button border={true} background={true}>+</Button>
            <Logo />
            <Button border={true} background={true} onClick={handleClose}>&times;</Button>
        </div>
    )
}

export default Header;