"use client"

import Link                         from 'next/link';

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
import NavOptions                   from './NavOptions';
import styles                       from './NavigationBar.module.css';
 
export default function NavigationBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div className={styles.navContainer}>
        <Link href="/" variant={'ghost'} style={{ paddingLeft: 0}}>Bracket Hub</Link>
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
                        <NavOptions onClose={onClose}/>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    </div>
  )
}