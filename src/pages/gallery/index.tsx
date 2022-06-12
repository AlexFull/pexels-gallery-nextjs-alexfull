import { useEffect, useState } from 'react';
import DefaultLayout from 'layouts/default';
import { Container, GalleryContainer, ImagesWrapper } from 'styles/globals';

import CardImage from 'components/CardImage';

import { getImages } from '../../api/fetch-images';

const News: React.FC = () => {
    const [page, setPage] = useState<number>(0);
    const [query, setQuery] = useState<string>('sun');
    const photos = getImages(query, page);

    return (
        <DefaultLayout>
            <GalleryContainer>
                <Container>
                    <ImagesWrapper>
                        {photos.map((photo) => (
                            <CardImage
                                key={photo.id}
                                src={photo.src}
                                width={photo.width}
                                height={photo.height}
                                photographer={photo.photographer}
                                photographer_url={photo.photographer_url}
                                url={photo.url}
                                alt={photo.alt}
                                avg_color={photo.avg_color}
                            />
                        ))}
                    </ImagesWrapper>
                </Container>
            </GalleryContainer>
        </DefaultLayout>
    );
};

export default News;
