import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Progressive House",
    genrepic: "https://media.timeout.com/images/106037029/750/422/image.jpg"
}

export const ProgressiveHouse = () => {

    return (
        <GenresLayout data={genredata} />
    );
}