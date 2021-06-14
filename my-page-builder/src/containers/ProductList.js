import { useSelector, useDispatch } from "react-redux";
import { ProductComponent } from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { setProducts } from "../redux/actions/productAction";

export const ProductList = () => {
    const products = useSelector((state) => state);
    console.log(products);
    const dispatch = useDispatch()

    const fetchProduct = async () => {
        const response = await axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                dispatch(setProducts(res.data));
                console.log(res.data)
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};
