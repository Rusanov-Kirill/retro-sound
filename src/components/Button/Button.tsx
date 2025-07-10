import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    border?: boolean;
    background?: boolean;
}


const Button = ( { children, border = false, background = false }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${border ? styles.border : ''} ${background ? styles['background-color'] : ''}`}>{children}</button>
    )
}

export default Button;