import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Psy Trance",
    genrepic: "https://t4.ftcdn.net/jpg/05/65/63/11/360_F_565631133_36v4vz6ofJZ53V1i2vYUiDclb8RXWgaW.jpg"
}

export const PsyTrance = () => {

    return (
        <GenresLayout data={genredata} />
    );
}