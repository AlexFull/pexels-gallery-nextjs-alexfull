import React from 'react';

import { ToolTipsWrapper, ToolTipsContent } from './styles';

export interface ToolTipsProps {
    content?: string;
    offset?: number;
    className?: string;
    textAlign?: string;
    wrapperW?: number;
    wrapperH?: number;
    width?: number;
    opacity?: number;
    zIndex?: number;
    children?: React.ReactNode;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const ToolTips: React.FC<ToolTipsProps> = ({
    content,
    offset,
    opacity,
    className,
    wrapperW,
    textAlign,
    wrapperH,
    width,
    position,
    zIndex,
    children,
}) => {
    return (
        <div>
            <ToolTipsWrapper wrapperW={wrapperW} wrapperH={wrapperH} position={position} zIndex={zIndex}>
                {children}
                <ToolTipsContent
                    offset={offset}
                    opacity={opacity}
                    className={className}
                    wrapperW={wrapperW}
                    wrapperH={wrapperH}
                    position={position}
                    width={width}
                    textAlign={textAlign}
                >
                    {content}
                </ToolTipsContent>
            </ToolTipsWrapper>
        </div>
    );
};

export default ToolTips;
