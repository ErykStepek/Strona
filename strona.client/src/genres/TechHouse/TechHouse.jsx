import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Tech House",
    genrepic: "https://i.ytimg.com/vi/ZZMlOL8D4iA/maxresdefault.jpg"
}

export const TechHouse = () => {

    return (
        <GenresLayout data={genredata} />
    );
}