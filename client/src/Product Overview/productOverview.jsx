import React from 'react';
import ImageGallery from './components/imageGallery.jsx'
import StyleSelector from './components/styleSelector.jsx'
import AddToCart from './components/addToCart.jsx'
import axios from 'axios';
import ProductOverviewErrorBoundary from './productOverviewErrorBoundary.jsx';

export default class ProductOverview extends React.Component {
    constructor(props) {
        super(props)
        //default value of an id taken from the API, so that the rest of the code works.
        this.state = {
            currentProduct: {},
            styleInfo: [],
            currentStyle: 0
        }
        this.getAllProductInfo = this.getAllProductInfo.bind(this);
        this.getProductInfo = this.getProductInfo.bind(this);
        this.getProductStyles = this.getProductStyles.bind(this);
        this.changeStyle = this.changeStyle.bind(this);
    }
    //get data after component mounts
    componentDidMount() {
        return this.getProductInfo(this.props.product_id)
        .then((data) => {
            this.setState({
              currentProduct: data
            })
        })
        .then(() => {
            return this.getProductStyles(this.props.product_id)
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
            console.log('ERR', err)
        })
    }
    //top level function for when user selects different style
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
            <>
                <ProductOverviewErrorBoundary>
                    <div className='Product-Overview' onClick={(e) => this.props.clickTracking(e, 'ProductOverview')}>
                            <div className='product_overview_container'>
                                <div className='image_gallery_container'>
                                    <ImageGallery onLoad={this.getProductStyles} styleInfo={this.state.styleInfo} currentStyle={this.state.currentStyle}/>
                                </div>
                                <div className='right_of_image_gallery'>
                                    <div>{this.state.currentProduct.category}</div>
                                    <h2>{this.state.currentProduct.name}</h2>
                                    <div>{this.state.currentProduct.default_price}</div>
                                    <h3>Select Your Style</h3>
                                    <StyleSelector onLoad={this.getProductStyles} styleInfo={this.state.styleInfo} currentStyle={this.state.currentStyle}  onChangeStyle={this.changeStyle}/>
                                    <AddToCart currentStyleInfo={this.state.styleInfo[this.state.currentStyle]}/>
                                </div>
                            </div>
                            <div className='slogan-and-description'>
                                <h5>{this.state.currentProduct.slogan}</h5>
                                <div>{this.state.currentProduct.description}</div>
                            </div>
                    </div>
                </ProductOverviewErrorBoundary>
            </>
        )
    }

}