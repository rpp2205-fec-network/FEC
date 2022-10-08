import React from "react";

export default class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 'Medium',
            quantity: 1,
        }
        //binds the functions to this component for the 'this' value
        this.onchangeData = this.changeData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onStar = this.onStar.bind(this)
    }

    //Dynamically changes selected option
    changeData(e) {
        var name = e.target.name
        //console.log('Name: \n', name, 'Property: \n', this.state[name], 'Value\n', e.target.value)
    }

    //Handles onClick for addToCart button
    onSubmit(e) {
        //console.log('ADD TO CART CLICKED')
    }

    onStar(e) {
        //console.log('Starred')
    }
    render() {
        return (
            <div>
                <h3>AddToCart Placeholder</h3>
                <select name="size" value={this.state.size} onChange={this.changeData}>
                    <option>Extra Small</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
                <select name="quantity" value={this.state.quantity} onChange={this.changeData}>
                    <option>1</option>
                    <option>2</option>
                </select>
                <input type="button" value="Add To Bag          +" onClick={this.onSubmit}></input>
                <input type="button" value="Pretend an image of a star is here" onClick={this.onStar}></input>
            </div>
        )
    }
}