import React from "react";

export default class StyleSelector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.onSelectStyle = this.onSelectStyle.bind(this);
    }

    onSelectStyle(e) {
        //console.log('Clicked')
        var id = parseInt(e.target.id);
        this.props.onChangeStyle(id);
    }

    render() {
        var styleInfo = this.props.styleInfo
        if ((styleInfo.length === 0)) {
            return (
                <div>NO STYLE INFO FOUND</div>
            )
        //else load photos based on current selections
        } else {
            return (
                <div className="styleSelector">
                    <h3>StyleSelector</h3>
                    <div>
                        {styleInfo.map((style) => {
                            if (style === this.props.styleInfo[this.props.currentStyle]) {
                                return (
                                    <button className='selected_style'onClick={this.onSelectStyle} id={style.style_id} key={style.style_id}>{style.name}</button>
                                )
                            } else {
                                return (
                                    <button className='unselected_style'onClick={this.onSelectStyle} id={style.style_id} key={style.style_id}>{style.name}</button>
                                )
                            }
                        })}
                    </div>
                </div>
            )
        }
    }
}