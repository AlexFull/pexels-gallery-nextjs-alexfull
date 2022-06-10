import DefaultLayout from 'layouts/default';
import { NextPage } from 'next';
import { Fragment, useState } from 'react';
import { Container, GalleryContainer, ImagesWrapper } from 'styles/globals';
import { useFetch } from 'usehooks-ts';
import Image from 'next/image';
import Link from 'next/link';

import { getCuratedPhotos, getPopularVideos } from '../../api/pexels';
import CardImage, { CardImageProps } from 'components/CardImage';

interface VideosProps {
    user?: {
        name?: string;
    };
}

const News: React.FC = ({ dataPhotos, dataVideos }: any) => {
    const [pageNumber, setPageNumber] = useState<number>();
    console.log(dataPhotos);
    // console.log(dataVideos);
    const [photos, setPhotos] = useState<CardImageProps[]>(dataPhotos);
    const [videos, setVideos] = useState<VideosProps[]>(dataVideos);

    return (
        <DefaultLayout>
            <GalleryContainer>
                <Container>
                    <ImagesWrapper>
                        {photos?.map((item, index) => (
                            <CardImage
                                key={index}
                                src={item.src}
                                width={item.width}
                                height={item.height}
                                photographer={item.photographer}
                                photographer_url={item.photographer_url}
                                url={item.url}
                                alt={item.alt}
                                avg_color={item.avg_color}
                            />
                        ))}
                    </ImagesWrapper>
                </Container>
            </GalleryContainer>
        </DefaultLayout>
    );
};

export default News;

export async function getServerSideProps() {
    const dataPhotos = await getCuratedPhotos(0, 2);
    const dataVideos = await getPopularVideos();
    return {
        props: {
            dataPhotos,
            dataVideos,
        },
    };
}
