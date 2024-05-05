import { Outlet, Link } from 'react-router-dom';
import { Layout } from '../layout/Layout.jsx';
import Image from 'react-bootstrap/Image'; 

export function GenresLayout({data}) {
    return (
        <div className="GenresLayout">
            <div className="GenresLayoutName">
                <span>{data.genrename}</span>
            </div>
            <div className="GenresLayoutPic">
                <Image src={data.genrepic} />
            </div>
        </div>
    );
}