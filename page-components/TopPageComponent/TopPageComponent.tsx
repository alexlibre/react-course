import { Advantages, HhData, Htag, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from "../../interfaces/page.interface";

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

            {firstCategory == TopLevelCategory.Courses && page.hh &&
                <div className={styles['hh']}>
                    <div className={styles['hh__header']}>
                        <Htag tag="h2">Вакансии — {page.category}</Htag>
                        <Tag color="red" size="m">hh.ru</Tag>
                    </div>
                    <HhData {...page.hh} />
                </div>
            }

            {page.advantages && page.advantages.length > 0 &&
                <div className={styles['advantages']} >
                    <div className={styles['advantages__header']}>
                        <Htag tag="h2">Преимущества</Htag>
                    </div>
                    <Advantages advantages={page.advantages} />
                </div>
            }
        </>
    );
};
