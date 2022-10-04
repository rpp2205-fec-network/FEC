import React from "react";

export default class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.onSelectStyle.bind(this);
    }

    onSelectStyle(e) {
        console.log('Clicked')
    }

    render() {
        var styleInfo = this.props.styleInfo
        if ((styleInfo.length === 0)) {
            return (
                <div>NO STYLE INFO FOUND</div>
            )
        //else load photos based on current selections
        } else {
            console.log('STYLEINFO IN STYLESELECTOR \n', styleInfo)
            return (
                <div>
                    <h3>StyleSelector</h3>
                    <div>
                        {styleInfo.map((style) => {
                            return (
                                <button onClick={this.onSelectStyle} key={style.style_id}>{style.name}</button>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}