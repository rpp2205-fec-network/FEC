import { isThisSecond } from "date-fns/esm";
import React from "react";

export default class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: '-1',
            quantity: -1,
            totalQuantity: -1,
            quantityArr: [],
            data: [{sku: 'no data', quantity: 'no data', size: 'no data'}],
            flag: false,
            currentSku: '-1'
        }
        //binds the functions to this component for the 'this' value
        this.changeData = this.changeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onStar = this.onStar.bind(this)
        this.onOptionClick = this.onOptionClick.bind(this);
    }

    componentDidUpdate() {
        if (this.props.currentStyleInfo !== undefined) {
            if (this.state.size === '-1' || undefined) {
                var data = [];  
                var skusArray = this.props.currentStyleInfo.skus
                var quantityArray = [];
                for (var key in skusArray) {
                    data.push({sku: key, quantity: skusArray[key].quantity, size: skusArray[key].size})
                }
                console.log('IMPORTANT DATA', this.props.currentStyleInfo.skus, data[0])
                for (var i = 1; i <= this.props.currentStyleInfo.skus[data[0].sku].quantity; i++) {
                    quantityArray.push(i)
                }
                if (quantityArray.length > 15) {
                    quantityArray.length = 15;
                }
                this.setState({
                    size: this.props.currentStyleInfo.skus[data[0].sku].size,
                    quantity: 1,
                    totalQuantity: this.props.currentStyleInfo.skus[data[0].sku].quantity,
                    quantityArr: quantityArray,
                    data: data,
                    currentSku: data[0].sku
                })
            } else if (this.state.flag === true) {
                //this should be the case for when state changes
                console.log('second part of componentDidUpdate')
                var newQuantityTotal = 0
                var newQuantityArray = []
                this.setState({
                    flag: false
                })

            }
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
                flag: true
            })
        } else {
            this.setState({
                [name]: size,
                flag: true,
                currentSku: sku
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

    onOptionClick(sku, size) {
        console.log('e.target in Option Click', sku, size)
    }

    render() {
        //loading information for data, so that component can render without data if need be. 

        return (
            <div className="addToCart">
                Size: <select name="size" onChange={this.changeData} >
                    {this.state.data.map((item) => {
                        console.log(item)
                        return (
                            <option value={`${item.size}, ${item.sku}`} key={item.sku}>{item.size}</option>
                        )
                    })}
                </select>
                Quantity: <select name="quantity" onChange={this.changeData}>
                    {this.state.quantityArr.map((number) => {
                        return (
                            <option value={number} key={number}>{number}</option>
                        )
                    })}
                </select>
                <input type="button" value="Add To Bag          +" onClick={this.onSubmit}></input>
                <input type="button" value="Pretend an image of a star is here" onClick={this.onStar}></input>
            </div>
        )
    }
}