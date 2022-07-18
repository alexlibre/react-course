import { AdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import TickIcon from './Tick.svg';
import { Htag, P } from '../';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
        <ul className={styles['list']}>
            {advantages.map(a => {
                return (
                    <li key={a._id} className={styles['item']}>
                        <div className={styles['story']}>
                            <TickIcon />
                        </div>
                        <div className={styles['content']}>
                            <div className={styles['title']}>
                                <Htag tag="h3">{a.title}</Htag>
                            </div>
                            <P size="l">{a.description}</P>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
