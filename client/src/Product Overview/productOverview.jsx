import React from 'react';
import ImageGallery from './components/imageGallery.jsx'
import ProductInformation from './components/productInformation.jsx'
import StyleSelector from './components/styleSelector.jsx'
import AddToCart from './components/addToCart.jsx'
import axios from 'axios';

export default class ProductOverview extends React.Component {
    constructor(props) {
        super(props)
        //default value of an id taken from the API, so that the rest of the code works.
        this.state = {
            productList: [
                {id: 71701}
            ]
        }
        this.getAllProductInfo = this.getAllProductInfo.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.getProductStyles = this.getProductStyles.bind(this);
    }

    componentDidMount() {
        return this.getAllProductInfo()
        .then((data) => {
            this.setState({
                productList: data
            })
        })
    }

    //all client-side routing done in the main component
    getAllProductInfo() {
        return axios.get('/productOverview')
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('ERR IN COMPONENTDIDMOUNT \n', err)
        })
    }

    getProductInfo(id) {
        return axios.get('/productOverview/' + id)
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log('ERR ================== \n', err)
        })
    }

    getProductStyles(id) {
        return axios.get('/productOverview/styles/' + id)
        .then((response) => {
            return response.data.results;
        })
        .catch((err) => {
            console.log('ERR ================== \n', err)

        })
    }

    render() {
        return (
            <div>
                <h2>Product Overview</h2>
                <ImageGallery onLoad={this.getProductStyles} productId={this.state.productList[0].id}/>
                <ProductInformation onLoad={this.getProductInfo} productId={this.state.productList[0].id}/>
                <StyleSelector onLoad={this.getProductStyles} productId={this.state.productList[0].id}/>
                <AddToCart />
                <h2>End of Product Overview</h2>
            </div>
        )
    }

}