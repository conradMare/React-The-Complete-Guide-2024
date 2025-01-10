import { Link, useParams } from 'react-router-dom';

import classes from './ProductDetail.module.css';

function ProductDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <p>
                <Link className={classes.link} to=".." relative="path">Back</Link>
            </p>
        </>
    );
}

export default ProductDetailPage;