import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "Trance",
    genrepic: "https://blog.native-instruments.com/wp-content/uploads/2023/03/how-to-make-a-trance-track-featured.jpg"
}
export const Trance = () => {

    return (
        <GenresLayout data={genredata} />
    );
}