import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Dubstep",
    genrepic: "https://i.etsystatic.com/34438308/r/il/38ffc1/5254313629/il_300x300.5254313629_aaw4.jpg"
}

export const Dubstep = () => {

    return (
        <GenresLayout data={genredata} />
    );
}