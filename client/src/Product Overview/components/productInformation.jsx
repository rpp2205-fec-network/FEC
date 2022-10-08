import React from "react";

export default class ProductInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //load product information

    render() {
        var productInfo = this.props.productInfo
        //console.log('PRODUCT INFO IN SMALL COMPONENT', productInfo)
        return (
            <div>
                <h3>Product Information</h3>
                <div>Reviews Info</div>
                <div>{productInfo.category}</div>
                <h2>{productInfo.name}</h2>
                <div>{productInfo.default_price}</div>
                <h5>{productInfo.slogan}</h5>
                <div>{productInfo.description}</div>
            </div>
        );
    }
}