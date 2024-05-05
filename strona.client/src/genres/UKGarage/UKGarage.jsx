import { GenresLayout } from '../GenresLayout.jsx';

const genredata = {
    genrename: "UK Garage",
    genrepic: "https://blog.native-instruments.com/wp-content/uploads/dynamic/2023/08/everything-you-need-to-know-about-uk-garage-featured-1200x0-c-default.jpg"
}

export const UKGarage = () => {

    return (
        <GenresLayout data={genredata} />
    );
}