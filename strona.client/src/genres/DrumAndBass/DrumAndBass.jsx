import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Drum & Bass",
    genrepic: "https://www.horizonsmusic.co.uk/cdn/shop/articles/horizon4_1200x1200.jpg?v=1591090812"
}

export const DrumAndBass = () => {

    return (
        <GenresLayout data={genredata} />
    );
}