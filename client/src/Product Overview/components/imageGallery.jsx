import React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        //default empty info, first style when data DOES load.
        this.state = {
            currentPhoto: 0,
            currentFirstOption: 0,
            view: 'default'
        }
        this.onCycleThumbnail = this.onCycleThumbnail.bind(this);
        this.onSelectThumbnail = this.onSelectThumbnail.bind(this);
        this.onCycleMainImage = this.onCycleMainImage.bind(this);
    }

    //should move to next main image, and set the top thumbnail image to the same one.
    onCycleMainImage(e) {
        var max = this.props.styleInfo[this.props.currentStyle].photos.length
        if (e.target.name === 'rightButton') {
            if (this.state.currentPhoto < max - 1) {
                this.setState({
                    currentFirstOption: this.state.currentPhoto + 1,
                    currentPhoto: this.state.currentPhoto + 1,
                })
            } else {
                console.log('Already at right most image')
            }
        } else if (e.target.name === 'leftButton') {
            if (this.state.currentPhoto > 0) {
                this.setState({
                    currentFirstOption: this.state.currentPhoto - 1,
                    currentPhoto: this.state.currentPhoto - 1,
                })
            } else {
                console.log('Already at left most image')
            }
        }
    }
    //should move the thumbnail carousel up and down
    onCycleThumbnail(e) {
        var max = this.props.styleInfo[this.props.currentStyle].photos.length
        console.log('MAX', max)
        if (e.target.name === 'upButton') {
            if (this.state.currentFirstOption > 0) {
                this.setState({
                    currentFirstOption: this.state.currentFirstOption - 1
                })
            } else {
                console.log('Already at highest value')
            }
        } else if (e.target.name === 'downButton') {
            if (this.state.currentFirstOption < max - 1) {
                this.setState({
                    currentFirstOption: this.state.currentFirstOption + 1
                })
            } else {
                console.log('Already at lowest value')
            }
        }
    }
    //should move the thumbnail carousel so that the selected one is at the top, and make the main image the same
    onSelectThumbnail(e) {
        var newImageId = parseInt(e.target.id)
        console.log('NEW IMAGE ID', e.target.id);
        this.setState({
            currentPhoto: newImageId,
            currentFirstOption: newImageId
        })
    }

    //changes view style between default and expanded mode

    render() {
        var styleInfo = this.props.styleInfo;
        var currentStyle = this.props.currentStyle;
        var currentPhoto = this.state.currentPhoto;
        var selectionWheelPhotos = [];
        //if there are no photos, load this
        if ((styleInfo.length === 0) || (styleInfo[currentStyle].photos.length === 0)) {
            return (
                <div className="imageGallery">NO IMAGES FOUND</div>
            )
        //else load photos based on current selections
        } else {
            var max = this.props.styleInfo[this.props.currentStyle].photos.length;
            if ((max - this.state.currentFirstOption) > 7) {
                var iterator = 7
            } else {
                var iterator = max - this.state.currentFirstOption;
            }
            for (var i = this.state.currentFirstOption; i < this.state.currentFirstOption + iterator; i++) {
                selectionWheelPhotos.push({
                    id: i,
                    thumbnail_url: styleInfo[currentStyle].photos[i].thumbnail_url
                })
            }
            return (
                <div className="image_gallery">
                    <div className="thumbnails_list">
                        <input name="upButton" className="thumnail_button" type="button" value="^" onClick={this.onCycleThumbnail}></input>

                        {selectionWheelPhotos.map((image) => {
                            return (
                                <a key={image.id}>
                                    <img className="thumbnail_img" id={image.id} src={image.thumbnail_url} onClick={this.onSelectThumbnail} ></img>
                                </a>
                            )
                        })
                        }

                        <input name="downButton" className="thumnail_button" type="button" value="v" onClick={this.onCycleThumbnail}></input>

                    </div>
                    <div className="selected_image_container">
                        <input name="leftButton" className="left_button" type="button" value="<" onClick={this.onCycleMainImage}></input>
                        <img className="selected_image" src={styleInfo[currentStyle].photos[currentPhoto].url}></img>
                        <input name="rightButton" className="right_button" type="button" value=">" onClick={this.onCycleMainImage}></input>
                    </div>
                </div>
            )
        }
    }
}