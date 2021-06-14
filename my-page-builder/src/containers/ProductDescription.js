import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectedProducts, removeProduct } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

export const ProductDescription = () => {
    const product = useSelector(state => state.selectedProductReducer);
    console.log(product)
    const { image, title, price, category, description } = product;
    const dispatch = useDispatch();

    const productId = useParams();
    // console.log(productId.productId);

    const fetchSingleProduct = async () => {

        const response = await axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
            .then(res => {
                dispatch(selectedProducts(res.data));
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        if (product && productId !== "")
            fetchSingleProduct();
        return (() => {

            dispatch(removeProduct())
        })
    }, [productId])

    return (

        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div>Loading</div>
            ) : (
                <div className="ui placeholder segmant">
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={title} />
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                                <div className="meta">{description}</div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>
    )
}
