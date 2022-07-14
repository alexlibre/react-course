import { CardProps } from './Card.props';
import styles from './Card.module.css';
import cn from 'classnames';

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => {
    return (
        <div
            className={cn(styles.card, className, {
                [styles['card_white']]: color === 'white',
                [styles['card_blue']]: color === 'blue',
            })}
            {...props}
        >
            {children}
        </div>
    );
};
