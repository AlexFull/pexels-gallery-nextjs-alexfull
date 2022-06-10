const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async (page: number, per_page: number) => {
    const res = await fetch(
        `https://api.pexels.com/v1/search?page=1&orientation=landscape&query=abstract&per_page=12`,
        {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: API_KEY,
            },
        },
    );
    const response = await res.json();
    return response.photos;
};

export const getPopularVideos = async () => {
    const res = await fetch(`https://api.pexels.com/videos/popular`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: API_KEY,
        },
    });
    const response = await res.json();
    return response.videos;
};
