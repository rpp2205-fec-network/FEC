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
            // productList: [
            //     {id: 71701}
            // ],
            currentProduct: {},
            styleInfo: [],
            currentProductId: 71701,
            currentStyle: 0
        }
        this.getAllProductInfo = this.getAllProductInfo.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.getProductStyles = this.getProductStyles.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }

    componentDidMount() {
        // return this.getAllProductInfo()
        // .then((data) => {
        //     this.setState({
        //         productList: data
        //     })
        // })
        return this.getProductInfo(71701)
        .then((data) => {
            this.setState({
              currentProduct: data
            })
        })
        .then(() => {
            return this.getProductStyles(71701)
        })
        .then((data) => {
            this.setState({
                styleInfo: data
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
            throw err
        })
    }

    getProductStyles(id) {
        return axios.get('/productOverview/styles/' + id)
        .then((response) => {
            return response.data.results;
        })
        .catch((err) => {
            // throw err
            console.log('ERR')
        })
    }

    changeStyle(styleID) {
        for (var i = 0; i < this.state.styleInfo.length; i++) {
            if (styleID === this.state.styleInfo[i].style_id) {
                if (this.state.currentStyle !== i) {
                    this.setState({
                        currentStyle: i
                    })
                }
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <h2>Product Overview</h2>
                <ImageGallery onLoad={this.getProductStyles} styleInfo={this.state.styleInfo} currentStyle={this.state.currentStyle}/>
                <ProductInformation onLoad={this.getProductInfo} productInfo={this.state.currentProduct}/>
                <StyleSelector onLoad={this.getProductStyles} styleInfo={this.state.styleInfo} currentStyle={this.state.currentStyle}  onChangeStyle={this.changeStyle}/>
                <AddToCart />
                <h2>End of Product Overview</h2>
            </div>
        )
    }

}