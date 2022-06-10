import React, { CSSProperties, useState } from 'react';
import { Container, SiteTitle, Content, Footer, SiteWrapper, Header, Overlay, Sidebar, SidebarHeader } from './styles';

import { MenuUnfold, MenuFold } from '@styled-icons/remix-line';

export interface DefaultLayoutProps {
    children?: React.ReactNode;
    sidebarOpen?: boolean;
}

import { useLockedBody } from 'usehooks-ts';

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);

    const [locked, setLocked] = useState(false);

    const toggleLocked = () => {
        setLocked((prev) => !prev);
        setSidebar((prev) => !prev);
    };

    useLockedBody(locked);

    return (
        <Container>
            <Sidebar sidebarOpen={sidebar}>
                <SidebarHeader>
                    <MenuFold size={32} cursor="pointer" color="white" onClick={toggleLocked} />
                    <SiteTitle>abstract</SiteTitle>
                </SidebarHeader>
            </Sidebar>
            {locked && <Overlay sidebarOpen={sidebar} onClick={toggleLocked} />}
            <SiteWrapper sidebarOpen={sidebar}>
                <Header>
                    <MenuUnfold size={32} cursor="pointer" onClick={toggleLocked} color="white" />
                    <SiteTitle>abstract</SiteTitle>
                </Header>

                <Content>{children}</Content>
                {/* <Footer>Footer</Footer> */}
            </SiteWrapper>
        </Container>
    );
};

export default DefaultLayout;
