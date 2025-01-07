import { Link } from 'react-router-dom';

import classes from './Home.module.css';

function HomePage() {
    return (
        <>
            <h1>This is the Home Page!</h1>
            <p className={classes.paragraph}>Go to <Link to="/products">the list of products</Link>.</p>
        </>
    );
}

export default HomePage;