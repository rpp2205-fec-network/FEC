import { isThisSecond } from "date-fns/esm";
import React from "react";

export default class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: '',
            quantity: -1,
            totalQuantity: -1,
            quantityArr: [],
            data: [{sku: 'no data', quantity: 'no data', size: 'no data'}],
            currentSku: '-1',
            sizeSelected: false
        }
        //binds the functions to this component for the 'this' value
        this.changeData = this.changeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onStar = this.onStar.bind(this)
        this.selectSizeOption = this.selectSizeOption.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        //if new props are received
        if (prevProps.currentStyleInfo !== this.props.currentStyleInfo) {
            var data = [];
            var skusArray = this.props.currentStyleInfo.skus
            var quantityArray = [];
            for (var key in skusArray) {
                data.push({sku: key, quantity: skusArray[key].quantity, size: skusArray[key].size})
            }
            for (var i = 1; i <= this.props.currentStyleInfo.skus[data[0].sku].quantity; i++) {
                quantityArray.push(i)
            }
            if (quantityArray.length > 15) {
                quantityArray.length = 15;
            }
            this.setState({
                quantity: 1,
                totalQuantity: this.props.currentStyleInfo.skus[data[0].sku].quantity,
                quantityArr: quantityArray,
                data: data,
                currentSku: data[0].sku
            })
            //if state is changed by sizeSelector
        } else if (this.state.currentSku !== prevState.currentSku) {
            var newQuantityTotal = this.props.currentStyleInfo.skus[this.state.currentSku].quantity
            var newQuantityArray = []
            for (var i = 1; i <= newQuantityTotal; i++) {
                newQuantityArray.push(i)
            }
            if (newQuantityArray.length > 15) {
                newQuantityArray.length = 15
            }
            this.setState({
                totalQuantity: newQuantityTotal,
                quantityArr: newQuantityArray,
                quantity: 1
            })
        }
    }
    //Dynamically changes selected option
    changeData(e) {
        var name = e.target.name
        var splitVal = e.target.value.split(', ')
        var size = splitVal[0];
        var sku = splitVal[1];
        console.log('e.target', e.target.value)
        if (e.target.name === 'quantity') {
            this.setState({
                [name]: e.target.value,
            })
        } else {
            this.setState({
                [name]: size,
                currentSku: sku,
            })
        }
        console.log('Name: \n', name, 'Property: \n', this.state[name], 'Value\n', e.target.value)
    }

    //Handles onClick for addToCart button
    onSubmit(e) {
        //console.log('ADD TO CART CLICKED')
    }

    onStar(e) {
        //console.log('Starred')
    }

    selectSizeOption() {
        if (this.state.size.length > 0) {
            return <option value='select size' disabled={this.state.size.length > 0}></option>
        }
    }
    render() {
        //determining whether item is completely out of stock
        var inStock = this.state.data.map((item) => {
            if (item.quantity > 0) {
                return item
            }
        });
        //if items in stock
        if (inStock.length > 0) {
            return (
                <div className="addToCart">
                    <select name="size" onChange={this.changeData} >
                        <option value='select size' disabled={this.state.size.length > 0}>select size</option>
                        {this.state.data.map((item) => {
<<<<<<< HEAD
                            //console.log('ITEM', item)
=======
>>>>>>> 0cc74eb5ccf15abfec5c3e3b481a41086eb37dcd
                            if (item.quantity <= 0) {
                                console.log('Item size of ' + item.size + ' is out of stock')
                            } else {
                                return (
                                    <option value={`${item.size}, ${item.sku}`} key={item.sku}>{item.size}</option>
                                )
                            }
                        })}
                    </select>
                    <select name="quantity" disabled={!this.state.size} onChange={this.changeData}>
                        {this.state.quantityArr.map((number) => {
                            return (
                                <option value={number} key={number}>{number}</option>
                            )
                        })}
                    </select>
                    <input type="button" value="Add To Cart +" onClick={this.onSubmit}></input>
                    <input type="button" value="Add to Outfit +" onClick={this.onStar}></input>
                </div>
            )
        } else {
            return (
                <div className="addToCart">
                    \<select name="size" onChange={this.changeData} disabled={true}>
                    OUT OF STOCK
                    </select>
                    <select name="quantity" onChange={this.changeData} disabled={true}>
                    -
                    </select>
                    <input type="button" value="Add To Bag          +" onClick={this.onSubmit}></input>
                    <input type="button" value="Add to Outfit +" onClick={this.onStar}></input>
                </div>
            )
        }
    }
}