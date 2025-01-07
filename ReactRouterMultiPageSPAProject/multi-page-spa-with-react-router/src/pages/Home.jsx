import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <>
            <h1>This is the Home Page!</h1>
            <p>Go to <Link to="/products">the list of products</Link>.</p>
        </>
    );
}

export default HomePage;