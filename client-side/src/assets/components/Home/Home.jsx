// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
          <h1 className="fw-bold">
          Assalamu ALaikum *,*
          </h1>
            <Link to={'/register'}>
           <small>SignUp</small>
            </Link>
        </div>
    );
};

export default Home;