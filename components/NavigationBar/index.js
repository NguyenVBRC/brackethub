"use client"

import {
    Button,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  }                                 from '@chakra-ui/react'
import { HamburgerIcon }            from '@chakra-ui/icons';
import styles                       from './NavigationBar.module.css';

const navOptions = ['Leagues', 'Tournaments']

const NavOption = ({options}) => {
    return (
        <div className={styles.navDrawerBody}>
            {options.map(option => {
                return (
                    <Button key={option} style={{ marginBottom: "10px" }}>{option}</Button>
                )
            })}
        </div>
    )
}
 
export default function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className={styles.navContainer}>
        Bracket Hub
        <div>
            <HamburgerIcon onClick={onOpen} h={8} w={8}/>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Navigate to...</DrawerHeader>

                    <DrawerBody>
                        <NavOption options={navOptions} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    </div>
  )
}