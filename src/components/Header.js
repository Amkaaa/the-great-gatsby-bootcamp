import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import * as styles from './Header.module.scss'

const Header = () => {
    const { site: { siteMetadata: { title } } } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    return (
        <header className={styles.header}>
            <h1>
                <Link className={styles.title} to="/">{title}</Link>
            </h1>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link activeClassName={styles.activeNavItem} className={styles.navItem} to="/">Home</Link>
                    </li>
                    <li>                        
                        <Link activeClassName={styles.activeNavItem} className={styles.navItem} to="/about">About</Link>
                    </li>
                    <li>
                        <Link activeClassName={styles.activeNavItem} className={styles.navItem} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link activeClassName={styles.activeNavItem} className={styles.navItem} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
