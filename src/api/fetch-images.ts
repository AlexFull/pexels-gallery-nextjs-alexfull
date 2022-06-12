const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

import { CardImageProps } from 'components/CardImage';
import { useEffect, useState } from 'react';

export const getImages = (query: string, page: number) => {
    const [images, setImages] = useState<CardImageProps[]>([]);

    const fetchImages = () => {
        fetch(`https://api.pexels.com/v1/search?page=${page}&orientation=landscape&query=${query}&per_page=9`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((data) => data.json())
            .then((data) => setImages(data.photos));
    };

    useEffect(() => {
        fetchImages();
    }, []);

    return images;
};
