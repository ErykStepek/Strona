import { GenresLayout } from '../GenresLayout.jsx';


const genredata = {
    genrename: "Funky House",
    genrepic: "https://i1.sndcdn.com/artworks-JFk0SX5J7GegXruS-POYWQA-t500x500.jpg"
}

export const FunkyHouse = () => {

    return (
        <GenresLayout data={genredata} />
    );
}