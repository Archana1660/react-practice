import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Layout from '../Layout';

const TShirts = () => {
    let tshirts = [
        {
            id: 1,
            name: 'US-POLO',
            ESP: 'USP-1'
        },
        {
            id: 2,
            name: 'Arrow',
            ESP: 'ARR-2'
        },
        {
            id: 3,
            name: 'LEVIS',
            ESP: 'LEV-3'
        },
        {
            id: 4,
            name: 'PEPE',
            ESP: 'PEP-4'
        }
    ]
    return (
        <Layout>
            <h1>T-Shirts</h1>
            <ul>
                {tshirts.map((x) => <li key={x.id}><Link to={`/tshirts/${x.name}`}>{x.name}</Link></li>)}
            </ul>
        </Layout>
    )
}

export default TShirts;
