import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Button border={true} background={true}>+</Button>
            <Logo />
            <Button border={true} background={true}>&times;</Button>
        </div>
    )
}

export default Header;