import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './SIdebar/SIdebar';
import { Footer } from './Footer/Footer';
import styles from './Layout.module.css';
import cn from 'classnames';
import { Component, FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body}>{children}</main>
			<Footer className={styles.footer} />
		</div>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};
