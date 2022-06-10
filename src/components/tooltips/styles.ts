import styled, { css } from 'styled-components';

import { ToolTipsProps } from './index';

export const ToolTipsContent = styled.div<ToolTipsProps>`
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px;
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    width: ${(props) => (props.width ? props.width + 'px' : 'fit-content')};
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
    opacity: ${(props) => (props.opacity ? props.opacity : 0)};
    transition: 0.3s ease-in-out;
    pointer-events: none;
    z-index: 4;

    ${(props) =>
        props.position === 'top' &&
        css`
            & {
                top: 0;
                transform: translate(-50%, -100%);
                margin-top: ${-props.offset + 'px'};
                &:after {
                    top: 100%;
                    left: 50%;
                    margin-top: -10px;
                    margin-left: -6px;
                    transform: translateY(-50%);
                }
            }
        `}

    ${(props) =>
        props.position === 'bottom' &&
        css`
            & {
                top: 100%;
                transform: translate(-50%, 0);
                margin-top: ${props.offset + 'px'};
                &:after {
                    top: 0;
                    left: 50%;
                    margin-top: -6px;
                    margin-left: -6px;
                    transform: translateY(-50%);
                }
            }
        `}

    ${(props) =>
        props.position === 'left' &&
        css`
            & {
                left: 0;
                transform: translate(-100%, -50%);
                margin-left: ${-props.offset + 'px'};
                &:after {
                    top: 50%;
                    right: 0;
                    margin-right: -5px;
                    margin-top: -7px;
                    transform: translateY(-50%);
                }
            }
        `}

    ${(props) =>
        props.position === 'right' &&
        css`
            & {
                left: 100%;
                right: 0;
                transform: translate(0, -50%);
                margin-left: ${props.offset + 'px'};
                &:after {
                    top: 50%;
                    left: 0;
                    margin-left: -5px;
                    margin-top: -7px;
                    transform: translateY(-50%);
                }
            }
        `}

        &:after {
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        background: black;
        border-radius: 4px;
        transform-origin: center;
        z-index: -1;
        transform: rotate(-45deg);
    }
`;

export const ToolTipsWrapper = styled.div<ToolTipsProps>`
    position: relative;
    width: fit-content;
    height: fit-content;

    &:hover {
        ${ToolTipsContent} {
            opacity: 1;
        }
    }
`;
