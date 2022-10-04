import React from 'react';
import ImageGallery from './components/imageGallery.jsx'
import ProductInformation from './components/productInformation.jsx'
import StyleSelector from './components/styleSelector.jsx'
import AddToCart from './components/addToCart.jsx'
import axios from 'axios';

export default class ProductOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: []
        }
        this.getAllProductInfo = this.getAllProductInfo.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.getProductStyles = this.getProductStyles.bind(this);
    }

    componentDidMount() {
        axios.get('/productOverview')
        .then((data) => {
            console.log('DATA IN ProductOverview COMPONENT \n', data)
            this.setState({
                productList: data
            })         
        })
        .catch((err) => {
            console.log('ERR IN COMPONENTDIDMOUNT \n', err)
        })
    }

    getAllProductInfo() {

    }

    getProductInfo(id) {
        axios.get('/productOverview/:' + id)
        .then((response) => {

        })
        .catch((err) => {
            console.log('ERR ================== \n', err)
        })
    }

    getProductStyles(id) {
        axios.get('/productOverview/styles/:' + id)
        .then((response) => {

        })
        .catch((err) => {
            console.log('ERR ================== \n', err)

        })
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