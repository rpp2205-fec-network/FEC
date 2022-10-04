import React from "react";

export default class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        //default empty info, first style when data DOES load.
        this.state = {
            styleInfo: [],
            currentStyle: 0,
            currentPhoto: 0
        }
    }

    //load style data and photo data
    componentDidMount() {
        return this.props.onLoad(this.props.productId)
        .then((data) => {
            this.setState({
                styleInfo: data,
            })
        })
    }

    render() {
        var styleInfo = this.state.styleInfo;
        var currentStyle = this.state.currentStyle;
        var currentPhoto = this.state.currentPhoto;
        //if there are no photos, load this
        if ((styleInfo.length === 0) || (styleInfo[currentStyle].photos.length === 0)) {
            return (
                <div>NO IMAGES FOUND</div>
            )
        //else load photos based on current selections
        } else {
            console.log('STYLEPHOTOS IN SECOND RETURN', this.state.stylePhotos)
            return (
                <div>
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