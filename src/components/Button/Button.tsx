import styles from './Button.module.scss';

interface ButtonProps {
    children: React.ReactNode;
    border?: boolean;
    background?: boolean;
    onClick?: () => Promise<void>;
}


const Button = ( { children, border = false, background = false, onClick }: ButtonProps) => {
    return (
        <button 
            className={`${styles.button} ${border ? styles.border : ''} ${background ? styles['background-color'] : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;