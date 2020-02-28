import React from 'react';
import Layout from '../Layout';

const Brand = (props) => {
    console.log(props)
    let brand = props.match.params.brand;
    return(
        <Layout>
            <h1>{brand}</h1>
        </Layout>    
    )
}
export default Brand;