import { GenresLayout } from '../GenresLayout.jsx';


const genredata = {
    genrename: "House",
    genrepic: "https://modernhouse-projekty.pl/wp-content/uploads/2023/05/Gotowy_projekt_domu_nowoczesna_stodola_NewHouse_791_1-scaled-882x440.jpg"
}

export const House = () => {

    return (
        <GenresLayout data={genredata} />
    );
}