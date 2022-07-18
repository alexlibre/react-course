import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import { Card, Grade } from '../';
import { priceRu } from '../../helpers/helpers';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {
    return (
        <div className={styles['block']}>
            <Card className={styles['count']}>
                <span className={styles['title']}>Всего вакансий</span>
                <span className={styles['qty']}>{count}</span>
            </Card>
            <Card className={styles['list']}>
                <div className={styles['item']}>
                    <span className={styles['title']}>Начальный</span>
                    <span className={styles['salary']}>{priceRu(juniorSalary)}</span>
                    <span className={styles['grade']}>
                        <Grade value={1} />
                    </span>
                </div>
                <div className={styles['item']}>
                    <span className={styles['title']}>Средний</span>
                    <span className={styles['salary']}>{priceRu(middleSalary)}</span>
                    <span className={styles['grade']}>
                        <Grade value={2} />
                    </span>
                </div>
                <div className={styles['item']}>
                    <span className={styles['title']}>Профессионал</span>
                    <span className={styles['salary']}>{priceRu(seniorSalary)}</span>
                    <span className={styles['grade']}>
                        <Grade value={3} />
                    </span>
                </div>
            </Card>
        </div>
    );
};
