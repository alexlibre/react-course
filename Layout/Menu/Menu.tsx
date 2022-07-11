import { useContext } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/graduation.svg';
import ServicesIcon from './icons/cloud.svg';
import ProductsIcon from './icons/product.svg';
import BooksIcon from './icons/book.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Товары', icon: <ProductsIcon />, id: TopLevelCategory.Products }
];

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);

	const buildFirstLevel = () => {
		return (
			<ul className={styles['menu-primary']}>
				{firstLevelMenu.map(m => (
					<li key={m.route} className={styles['menu-primary__item']}>
						<div className={cn(styles['menu-primary__head'], {
							[styles['menu-primary__head_active']]: m.id == firstCategory
						})}>
							<a href={`/${m.route}`} className={styles['menu-primary__link']}>
								{m.icon}
								<span>{m.name}</span>
							</a>
						</div>
						{m.id == firstCategory && buildSecondLevel(m)}
					</li>
				))}
			</ul>
		);
	};

	const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<ul className={styles['menu-secondary']}>
				{menu.map(m => (
					<li key={m._id.secondCategory} className={styles['menu-secondary__item']}>
						<span className={styles['menu-secondary__head']}>{m._id.secondCategory}</span>
						<div className={cn(styles['menu-secondary__block'], {
							[styles['menu-secondary__block_opened']]: m.isOpened
						})}>
							{buildThirdLevel(m.pages, menuItem.route)}
						</div>
					</li>
				))}
			</ul>
		);
	};
	const buildThirdLevel = (pages: PageItem[], route: string) => {
		const sortedPages = pages.sort((a, b) => {
			return a.title.localeCompare(b.title);
		});

		return (
			<ul className={styles['menu-tertiary']}>
				{sortedPages.map((page) => {
					return (
						<li className={styles['menu-tertiary__item']} key={page._id}>
							<a className={cn(styles['menu-tertiary__link'], {
								[styles['menu-tertiary__link_active']]: false
							})} href={`/${route}/${page.alias}`}>{page.category}</a>
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<nav className={styles.menu}>
			{buildFirstLevel()}
		</nav>
	);
};
