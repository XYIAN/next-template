import { Button, ButtonProps } from 'primereact/button';
import React, { useState } from 'react';
import '../styles/buttonHover.scss';

export type XYButtonColor =
    | undefined
    | 'transparentWhite'
    | 'white'
    | 'black'
    | 'cyan';
export interface XYButtonProps extends ButtonProps {
    xyType?: XYButtonColor;
    // xyAnimate?: boolean;
}

// const DEFAULT_STYLE = ''
const XYButton = ({ xyType, ...other }: XYButtonProps) => {
    const [classType, setClassType] = useState<XYButtonColor>();

    const determineStyle = (): React.CSSProperties | undefined => {
        switch (xyType) {
            case 'transparentWhite':
                if (classType !== 'transparentWhite')
                    setClassType('transparentWhite');
                return other?.style;
            case 'white':
                if (classType !== 'white') setClassType('white');
                return other?.style;
            default:
                return other?.style;
        }
    };

    return (
        <Button
            {...other}
            style={determineStyle()}
            className={`${classType} ${other.className} p-1 gap-1`}
        />
    );
};

export default XYButton;
