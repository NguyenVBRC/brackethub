import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import styles from '../NavigationBar.module.css';

export default function NavOptions({ onClose }) {
    const navOptions = ['Leagues', 'Tournaments']

    const options = () => {
        return navOptions.map(option => {
            return (
                <Button key={option} style={{ marginBottom: "10px" }} onClick={onClose}>
                    <Link href="/tournaments">{option}</Link>
                </Button>
            )
        })
    }

    return (
        <div className={styles.navDrawerBody}>
            {options()}
        </div>
    )
}
