import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Big Room",
    genrepic: "https://i.ytimg.com/vi/4IHDZ4_8oN0/maxresdefault.jpg"
}

export const Bigroom = () => {

    return (
        <GenresLayout data={genredata} />
    );
}