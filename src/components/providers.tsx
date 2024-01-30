'use client';

import { ReactNode } from "react";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            <ModalsProvider>
                {children}
            </ModalsProvider>
        </MantineProvider>
    );
}