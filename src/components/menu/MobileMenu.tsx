import { useRouter } from 'next/navigation';
import { Ripple } from 'primereact/ripple';
import XYButton from '../Inputs/XYButton';

const BUTTON_SYLE = 'p-2 font-bold w-11';
interface MenuItem {
    label: string;
    route: string;
}
interface MobileMenuProps {
    onClose: () => void;
}
export const MobileMenu = ({ onClose }: MobileMenuProps) => {
    const router = useRouter();
    const handleNavigateClick = (to: string) => {
        router.push(`/${to}`);
        onClose();
    };
    const MENU: MenuItem[] = [
        { label: 'Home', route: '' },
        {
            label: 'Project Gallery',
            route: 'projectGallery',
        },
        {
            label: 'Our Team',
            route: 'team',
        },
        {
            label: 'Privacy & Terms',
            route: 'privacy',
        },
    ];
    return (
        <div className='flex flex-column p-1 mobileMenu gap-4 justify-content-center align-content-center'>
            {MENU.map((page) => {
                return (
                    <div
                        key={page.route}
                        className='flex justify-content-center align-items-center'
                    >
                        <XYButton
                            key={page.route + '-x'}
                            className={BUTTON_SYLE}
                            label={page.label}
                            onClick={() => handleNavigateClick(page.route)}
                            xyType='transparentWhite'
                        >
                            <Ripple
                                pt={{
                                    root: {
                                        style: {
                                            background: 'rgba(0, 14, 0, .4)',
                                        },
                                    },
                                }}
                            />
                        </XYButton>
                    </div>
                );
            })}
        </div>
    );
};
