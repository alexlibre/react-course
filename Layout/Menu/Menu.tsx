import { useContext } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../helpers/helpers';

export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext);
	const router = useRouter();

	const openSecondLevel = (secondCategory: string) => {
		setMenu && setMenu(menu.map(m => {
			if (m._id.secondCategory == secondCategory) {
				m.isOpened = !m.isOpened;
			}
			return m;
		}));
	};

	const buildFirstLevel = () => {
		return (
			<ul className={styles['menu-primary']}>
				{firstLevelMenu.map(m => (
					<li key={m.id} className={styles['menu-primary__item']}>
						<div className={cn(styles['menu-primary__head'], {
							[styles['menu-primary__head_active']]: m.id == firstCategory
						})}>
							<Link href={`/${m.route}`}>
								<a className={styles['menu-primary__link']}>
									{m.icon}
									<span>{m.name}</span>
								</a>
							</Link>
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
				{
					menu && menu.map(m => {
						if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
							m.isOpened = true;
						}
						return (
							<li key={m._id.secondCategory} className={styles['menu-secondary__item']}>
								<span className={styles['menu-secondary__head']} onClick={() => openSecondLevel(m._id.secondCategory)}>{m._id.secondCategory}</span>
								<div className={cn(styles['menu-secondary__block'], {
									[styles['menu-secondary__block_opened']]: m.isOpened
								})}>
									{buildThirdLevel(m.pages, menuItem.route)}
								</div>
							</li>
						);
					})}
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
					const routePath = `/${route}/${page.alias}`;

					return (
						<li className={styles['menu-tertiary__item']} key={page._id}>
							<Link href={routePath}>
								<a className={cn(styles['menu-tertiary__link'], {
									[styles['menu-tertiary__link_active']]: routePath == router.asPath
								})}>
									{page.category}
								</a>
							</Link>
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
