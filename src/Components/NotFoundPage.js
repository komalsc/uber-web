import React from 'react';
import { Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
    <Link to="/">
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxwxMKLn5Cteb-c431nkwMHEHdnmGPwpbsg&usqp=CAU'/>
    </Link>
    <h1>click on above button to go on Login page</h1>
    </div>
);

export default NotFoundPage;