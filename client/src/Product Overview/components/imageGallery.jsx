import React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        //default empty info, first style when data DOES load.
        this.state = {
            currentPhoto: 0
        }
    }

    //load style data and photo data

    render() {
        //console.log('PROPS', this.props)
        var styleInfo = this.props.styleInfo;
        var currentStyle = this.props.currentStyle;
        var currentPhoto = this.state.currentPhoto;
        //if there are no photos, load this
        if ((styleInfo.length === 0) || (styleInfo[currentStyle].photos.length === 0)) {
            return (
                <div>NO IMAGES FOUND</div>
            )
        //else load photos based on current selections
        } else {
            //console.log('STYLEPHOTOS IN SECOND RETURN', this.props.stylePhotos)
            return (
                <div>
                    <h3>Image Gallery</h3>
                    <div>
                        <img className="selectedImage" src={styleInfo[currentStyle].photos[currentPhoto].url}></img>
                        {styleInfo[currentStyle].photos.map((image) => {
                            return (
                                <img className="unselectedImage" key={styleInfo[currentStyle].photos.indexOf(image)} src={image.thumbnail_url}></img>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
}