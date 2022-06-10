import Icon from 'components/icon';
import DefaultLayout from 'layouts/default';
import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

import { Container, VideoWrapper, VideoWrapperContent, Cta } from 'styles/globals';

const Home: NextPage = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (typeof window != undefined) {
            if (videoRef) {
                videoRef.current.pause();
                setTimeout(() => {
                    videoRef.current.play();
                }, 5000);
            }
        }
    }, [typeof window]);

    return (
        <DefaultLayout>
            <VideoWrapper>
                <video id="video" ref={videoRef} autoPlay={false} loop muted>
                    <source src="/assets/videos/bg-home-sd.mp4" type="video/mp4" />
                </video>
                <VideoWrapperContent>
                    <Icon file="abstract" width={1200} marginBottom={25} />
                    <Container>
                        <p>A simple NextJs abstract photo gallery whith Pexels Api.</p>
                        <Link href="/gallery" passHref>
                            <Cta>View gallery</Cta>
                        </Link>
                    </Container>
                </VideoWrapperContent>
            </VideoWrapper>
        </DefaultLayout>
    );
};

export default Home;
