import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className='Nav'>

                <div className='Links'>
                    <Link to='/'>Home</Link>
                    <Link to='/mac'>Mac</Link>
                    <Link to='/ipad'>iPad</Link>
                    <Link to='/iphone'>iPhone</Link>
                    <Link to='/watch'>Watch</Link>
                    <Link to='/tv'>TV</Link>
                    <Link to='/music'>Music</Link>
                    <Link to='/support'>Support</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Navigation;