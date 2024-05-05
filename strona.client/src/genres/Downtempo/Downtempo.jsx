import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Downtempo",
    genrepic: "https://i1.sndcdn.com/artworks-000533836470-tt0h0c-t500x500.jpg"
}

export const Downtempo = () => {

    return (
        <GenresLayout data={genredata} />
    );
}