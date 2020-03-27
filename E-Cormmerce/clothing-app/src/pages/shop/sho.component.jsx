import React from 'react';
import Shop_data from './shop.data';

class shopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: Shop_data
        }
    }

    render() {
        return <div>Shop Page123</div>;
    }
}

export default shopPage;