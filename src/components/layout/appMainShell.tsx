'use client'
import React, { ReactNode } from 'react'
import { AppShell, rem, } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import { Container } from '@mantine/core';
import Navbar from './navbar';
const AppMainShell = ({ children }: { children: ReactNode }) => {
    const pinned = useHeadroom({ fixedAt: 120 });
    return (
        <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} >
            <AppShell.Header>
                <Navbar />
            </AppShell.Header>

            <AppShell.Main pt={rem(60)} >
                <Container size='xl'>
                    {children}
                </Container>
            </AppShell.Main>
        </AppShell>
    )
}

export default AppMainShell