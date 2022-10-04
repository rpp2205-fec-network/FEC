import React from 'react';
import ImageGallery from './components/imageGallery.jsx'
import ProductInformation from './components/productInformation.jsx'
import StyleSelector from './components/styleSelector.jsx'
import AddToCart from './components/addToCart.jsx'

export default class ProductOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <h2>Product Overview</h2>
                <ImageGallery />
                <ProductInformation />
                <StyleSelector />
                <AddToCart />
                <h2>End of Product Overview</h2>
            </div>
        )
    }

}