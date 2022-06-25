import { FooterProps } from './Footer.props';
import { P } from '../../components';
import cn from 'classnames';
import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<P>OwlTop © 2020 - {currentYear} Все права защищены</P>
			<a className={styles.link} href='#'>
				Пользовательское соглашение
			</a>
			<a className={styles.link} href='#'>
				Политика конфиденциальности
			</a>
		</footer>
	);
};
