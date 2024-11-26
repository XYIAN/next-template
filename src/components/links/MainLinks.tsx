import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, ReactNode } from 'react';
import {
    faGithub,
    faInstagram,
    faLinkedin,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

export const MainLinks = () => {
    return (
        <div className='flex flex-column p-4 justify-content-center text-center align-items-center footer'>
            <div className='z-50'>
                <ul className='links justify-content-center'>
                    <li className='links-list'>
                        <a
                            className='linkedIn'
                            href='https://www.linkedin.com/company/xyian/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon
                                className='iconLogoSizes'
                                icon={faLinkedin}
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            className='twitter'
                            href='https://x.com/XYIANSoftware'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon
                                className='iconLogoSizes'
                                icon={faXTwitter}
                            />
                        </a>
                    </li>
                    {/* <li>
                        <a
                            className='github'
                            href='https://github.com/XYIAN'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon
                                className='iconLogoSizes'
                                icon={faGithub}
                            />
                        </a>
                    </li> */}
                    <li>
                        <a
                            className='instagram'
                            href='https://www.instagram.com/xyiansoftware/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon
                                className='iconLogoSizes'
                                icon={faInstagram}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
