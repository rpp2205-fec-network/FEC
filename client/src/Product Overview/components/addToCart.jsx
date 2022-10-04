import React from "react";

export default class AddToCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSize: 'Medium',
            quantity: 1,

        }
    }

    render() {
        return (
            <div>
                <h3>AddToCart Placeholder</h3>
                <select value={this.state.currentSize}>
                    <option>Extra Small</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
                <select value={this.state.quantity}>
                    <option>1</option>
                    <option>2</option>
                </select>
                <input type="button" value="Add To Bag          +"></input>
            </div>
        )
    }
}