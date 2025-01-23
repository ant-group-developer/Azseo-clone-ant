/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Navigation } from '@toolpad/core/AppProvider';
import { Home, LayoutTemplate, LogOut } from 'lucide-react';

export const NAVIGATION: Navigation = [
    {
        kind: 'header',
        title: 'Main items',
    },
    // {
    //     segment: 'services',
    //     // @ts-ignore
    //     title: <span className="text-sm">Services</span>,
    //     icon: <List size={16} />,
    // },
    // {
    //     segment: 'my-order',
    //     title: <span className="text-sm">My order</span>,
    //     icon: <ShoppingCartIcon ize={16} />,
    // },
    {
        segment: 'dashboard',
        // @ts-ignore
        title: <span className="text-sm">Statistic</span>,
        icon: <Home size={18} />,
    },
    // {
    //     segment: 'refund',
    //     title: 'Refund',
    //     icon: <CircleDollarSign />,
    // },
    // {
    //     segment: 'cash-flow',
    //     title: 'Cash flow',
    //     icon: <Banknote />,
    // },
    // {
    //     segment: 'my-profile',
    //     title: 'My profile',
    //     icon: <User />,
    // },
    // {
    //     segment: 'api',
    //     title: 'API',
    //     icon: <FileCheck />,
    // },
    {
        segment: 'platform',
        //@ts-ignore
        title: <span className="text-sm">Platform</span>,
        icon: <LayoutTemplate size={18} />,
    },
    {
        kind: 'divider',
    },

    {
        kind: 'header',
        title: 'More',
    },
    {
        segment: 'login',
        //@ts-ignore
        title: <span className="text-sm">Logout</span>,
        icon: <LogOut size={18} />,
    },
];
