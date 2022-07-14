import { Card, Grade, Htag, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <>
            <header className={styles.header}>
                <Htag tag="h1">{page.title}</Htag>
                {products && <Tag color="gray" size="m">{products.length}</Tag>}
                <span>Sort</span>
            </header>
            <div>
                {products && products.map(p => {
                    return (
                        <div key={p._id}>{p.title}</div>
                    );
                })}
            </div>
            <div className={styles['headhunter']}>
                <div className={styles['headhunter__header']}>
                    <Htag tag="h2">Вакансии — {page.category}</Htag>
                    <Tag color="red" size="m">hh.ru</Tag>
                </div>
                <div className={styles['headhunter__block']}>
                    <Card className={styles['headhunter__count']}>
                        <span className={styles['headhunter__title']}>Всего вакансий</span>
                        <span className={styles['headhunter__qty']}>1210</span>
                    </Card>
                    <Card className={styles['headhunter__list']}>
                        <div className={styles['headhunter__item']}>
                            <span className={styles['headhunter__title']}>Начальный</span>
                            <span className={styles['headhunter__salary']}>110 000 ₽</span>
                            <span className={styles['headhunter__grade']}>
                                <Grade value={1} />
                            </span>
                        </div>
                        <div className={styles['headhunter__item']}>
                            <span className={styles['headhunter__title']}>Средний</span>
                            <span className={styles['headhunter__salary']}>190 000 ₽</span>
                            <span className={styles['headhunter__grade']}>
                                <Grade value={2} />
                            </span>
                        </div>
                        <div className={styles['headhunter__item']}>
                            <span className={styles['headhunter__title']}>Профессионал</span>
                            <span className={styles['headhunter__salary']}>260 000 ₽</span>
                            <span className={styles['headhunter__grade']}>
                                <Grade value={3} />
                            </span>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    );
};
