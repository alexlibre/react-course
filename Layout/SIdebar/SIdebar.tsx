import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import Logo from '../Logo.svg';
import { Menu } from '../Menu/Menu';
import cn from 'classnames';
import Link from 'next/link';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(className, styles.sidebar)}>
			<Link href="/">
				<a className={styles['sidebar__logo']} ><Logo /></a>
			</Link>

			<div className={styles['sidebar__search']}>Поиск</div>
			<Menu />
		</div>
	);
};
