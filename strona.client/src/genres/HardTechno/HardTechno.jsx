import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Hard Techno",
    genrepic: "https://i.ytimg.com/vi/1GOrynyXJQ4/maxresdefault.jpg"
}

export const HardTechno = () => {

    return (
        <GenresLayout data={genredata} />
    );
}