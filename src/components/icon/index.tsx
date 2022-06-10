import React from 'react';
import { ReactSVG } from 'react-svg';

import { IconWrapper } from './styles';

// image

export interface IconProps {
    onClick?: () => void;
    file?: string;
    fill?: string;
    stroke?: string;
    color?: string;
    background?: string;
    backgroundHover?: string;
    fileHover?: string;
    cursor?: string;
    borderRadius?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
    width?: number;
    widthPercent?: string;
    height?: number;
    size?: number;
    children?: React.ReactNode;
}

const filePath = '/assets/icons/';

const Icon: React.FC<IconProps> = ({
    onClick,
    file,
    fill,
    stroke,
    color,
    background,
    backgroundHover,
    fileHover,
    cursor,
    borderRadius,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    width,
    widthPercent,
    height,
    size,
    children,
}) => {
    return (
        <IconWrapper
            onClick={onClick}
            aria-label={file}
            cursor={cursor}
            width={width}
            widthPercent={widthPercent}
            height={height}
            size={size}
            fill={fill}
            stroke={stroke}
            color={color}
            background={background}
            backgroundHover={backgroundHover}
            fileHover={fileHover}
            borderRadius={borderRadius}
            marginTop={marginTop}
            marginRight={marginRight}
            marginBottom={marginBottom}
            marginLeft={marginLeft}
        >
            <ReactSVG wrapper="span" src={filePath + file + '.svg'} />
            {children}
        </IconWrapper>
    );
};

export default Icon;
