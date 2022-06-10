import styled from 'styled-components';

import { CardImageProps } from '../CardImage';

const breakpoint = '768px';

export const CardImageWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;

    width: 320px;

    @media screen and (max-width: ${breakpoint}) {
        width: 100vw;
    }

    img {
        width: 300px;
        height: auto;
    }
`;

export const ImagePreview = styled.div`
    position: relative;
    width: 100%;

    cursor: pointer;
    filter: grayscale(1);

    &:hover {
        filter: grayscale(0);
    }
`;

export const ModalOverlay = styled.div<CardImageProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1000vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    background: rgba(0, 0, 0, 0.85);
    background: ${(props) => props.avg_color};

    padding: 24px;
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: white;
    width: 100%;
    max-width: 1200px;
    max-height: 80%;
    background: none;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    @media screen and (max-width: ${breakpoint}) {
        width: 100%;
        max-width: 100%;
    }
`;

export const BtnCloseModal = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 20;
    margin-top: -50px;

    cursor: pointer;
`;

export const BtnDownload = styled.a<CardImageProps>`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageModal = styled.div<CardImageProps>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    display: flex;

    align-items: center;
    justify-content: center;
    background: none;

    img {
        position: relative;
        z-index: 2;
    }
`;

export const ModalDetails = styled.div<CardImageProps>`
    padding: 24px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    background: white;

    * {
        margin: 0;
    }

    a {
        text-decoration: none;
        display: block;
        color: black;
        margin-top: 8px;
        span {
            font-weight: 200;
            margin-right: 4px;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Loading = styled.div<CardImageProps>`
    display: block;
    width: 100vw;
    height: 100vh;
    margin: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
