import React from "react";
import { PiGearSixDuotone, PiCaretUpBold, PiCaretDownBold, PiYoutubeLogoDuotone, PiCpuDuotone, PiPackageDuotone, PiMessengerLogoDuotone } from "react-icons/pi";
/* import { FcCommandLine, FcShipped, FcClapperboard, FcComments } from "react-icons/fc"; */

export const SidebarData = [
    {
        title: 'Checkers',
        icon: <PiCpuDuotone/>,
        iconClosed: <PiCaretDownBold/>,
        iconOpened: <PiCaretUpBold/>,
        subNav: [
            {
                title: 'Configs Openbullet',
                path: '/openbullet',
                icon: <PiGearSixDuotone/>,
            },
            {
                title: 'Checkers',
                path: 'checkers',
                icon: <PiGearSixDuotone/>,
            },
        ]
    },
    {
        title: 'Encomendas',
        path: '/encomendas',
        icon: <PiPackageDuotone/>,
        
    },
    {
        title: 'Aulas e Tutoriais',
        path: '/aulas',
        icon: <PiYoutubeLogoDuotone/>,
        
    },
    {
        title: 'Contato',
        path: 'https://t.me/Tititiorato',
        icon: <PiMessengerLogoDuotone/>,
        
    },
]