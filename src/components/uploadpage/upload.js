import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
import Header from '../header/header';
import './upload.css';
const Upload = () => {

    return (
        <>
            <Header />
            <div className='uploadmain'>
                <form>

                    <input className='locationURI' type="text" />
                    <button>Browse</button>
                    <input className='author' type="text" placeholder="Author" />
                    <input className='location' type="text" placeholder="Location" />
                    <input className='description' type="text" placeholder="Description" /><br></br>
                    <button className='post'>Post</button>
                </form>
            </div>
        </>
    );
}
export default Upload;