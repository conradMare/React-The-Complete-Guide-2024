import { Link, useNavigate } from 'react-router-dom';

import classes from './Home.module.css';

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
        <>
            <h1>This is the Home Page!</h1>
            <p className={classes.paragraph}>
                Go to <Link to="/products">the list of products</Link>.
            </p>
            <button onClick={navigateHandler}>Navigate</button>
        </>
    );
}

export default HomePage;