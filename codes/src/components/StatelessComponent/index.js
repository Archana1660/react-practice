import React from 'react';
import {StatefulComponent} from '../StatefulComponent';

const StatelessComponent = () => {
    return(
        <div>
            <StatefulComponent items={["Apple", "Mango", "Lichi", "Banana"]}/>
        </div>
    )
}
export default StatelessComponent;