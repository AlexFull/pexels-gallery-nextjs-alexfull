import styled from 'styled-components';

import { DefaultLayoutProps } from './index';

export const Container = styled.div<DefaultLayoutProps>`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const SiteTitle = styled.h1<DefaultLayoutProps>`
    color: white;
    margin-left: 12px;
`;

export const SiteWrapper = styled.div<DefaultLayoutProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    height: 100%;
    min-height: 100vh;

    transition: margin-left 0.3s ease;
    margin-left: ${(props) => (props.sidebarOpen ? '300px' : '0')};
    width: 100%;
    /* overflow: ${(props) => (props.sidebarOpen ? 'hidden' : 'inherit')}; */
`;

export const Header = styled.div`
    padding: var(--globalPadding);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    height: 70px;
    /* background: #000; */
`;

export const Sidebar = styled.div<DefaultLayoutProps>`
    background: #000;
    padding: var(--globalPadding);
    width: 300px;
    height: 1000vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transition: margin-left 0.3s ease;
    margin-left: ${(props) => (props.sidebarOpen ? '0' : '-300px')};
`;

export const SidebarHeader = styled.div<DefaultLayoutProps>`
    position: fixed;
    display: flex;
    align-items: center;
`;

export const Content = styled.div<DefaultLayoutProps>`
    position: relative;
    height: 100%;
    min-height: 100vh;
    background: #fafafa;
    width: ${(props) => (props.sidebarOpen ? '100%' : '100vw')};
`;

export const Overlay = styled.div<DefaultLayoutProps>`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: -70px;
    width: 100vw;
    height: 1000vh;
    transition: background 0.3s ease;
    background: ${(props) => (props.sidebarOpen ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)')};
    pointer-events: ${(props) => (props.sidebarOpen ? 'inherit' : 'none')};
    backdrop-filter: grayscale(100%);
    z-index: 1;
`;

export const Footer = styled.div``;
