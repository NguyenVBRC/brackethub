import Link from 'next/link';
import { Button } from '@chakra-ui/react';

import styles from '../NavigationBar.module.css';

export default function NavOptions({ onClose }) {
    const navOptions = ['Home', 'Leagues', 'Tournaments']

    const options = () => {
        return navOptions.map(option => {
            const optionLowerCase = option == 'Home' ? '/' : option.toLowerCase();

            return (
                <Button key={optionLowerCase} style={{ marginBottom: "10px" }} onClick={onClose}>
                    <Link href={`/${optionLowerCase}`}>{option}</Link>
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
