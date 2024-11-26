'use client';
import { Button } from 'primereact/button';
import { Sidebar, SidebarProps } from 'primereact/sidebar';
import { ReactNode, useEffect, useState } from 'react';
import { MobileMenu } from './MobileMenu';
import LoadMask from '../LoadMask';
import SVGBackground from '../backgrounds/svg/SVGBackground';
import { Toolbar } from 'primereact/toolbar';
import XYButton from '../Inputs/XYButton';
export const MenuModel = () => {
    //TODO create desktop menu
    //TODO after desktop menu add media switch from desktop to mobile
    const [visible, setVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const onClose = () => {
        setVisible(false);
        setIsLoading(true);
    };
    // const SideBarHeader = (props: SidebarProps): ReactNode => {
    //     //const {} = props;
    //     return (
    //         <Toolbar
    //             end={
    //                 <XYButton
    //                     icon='pi-times'
    //                     onClick={() => setVisible(false)}
    //                 />
    //             }
    //         />
    //     );
    // };

    return (
        <>
            <Button
                icon={'fa-solid fa-bars'}
                onClick={() => setVisible(true)}
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    padding: '5px',
                }}
                pt={{
                    root: {
                        style: {
                            backgroundColor: 'white',
                        },
                    },
                }}
            />
            <Sidebar
                //header={SideBarHeader}
                visible={visible}
                onHide={() => setVisible(false)}
                position='right'
                className='flex justify-content-center align-content-center sideMenu bg-black-alpha-90'
                closeIcon={
                    <i
                        className='fa-solid fa-xmark fa-lg cursor-pointer hover:shadow-4'
                        style={{ color: 'white', zIndex: 999 }}
                    />
                }
            >
                <SVGBackground />
                <MobileMenu onClose={onClose} />
                <LoadMask loading={isLoading} />
            </Sidebar>
        </>
    );
};
