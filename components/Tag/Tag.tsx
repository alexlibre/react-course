import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', children, color = 'ghost', className, ...props }: TagProps): JSX.Element => {
    return (
        <div
            className={cn(styles.tag, className, {
                [styles.small]: size == 's',
                [styles.medium]: size == 'm',
                [styles.ghost]: color == 'ghost',
                [styles.red]: color == 'red',
                [styles.gray]: color == 'gray',
                [styles.primary]: color == 'primary',
            })}
            {...props}
        >
            {children}
        </div>
    );
};
